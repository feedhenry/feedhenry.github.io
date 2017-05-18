---
layout: page
title: Unified Push Server (UPS) on OpenShift
permalink: /hero-ups/
---

# Unified Push Server (UPS) on OpenShift

## Prerequisites ## 

You should have a locally installed version of OpenShift, or access to an OpenShift cluster. If you don't have either, you can set up your own OpenShift local cluster by reading this [document](<insert-openshift-hero-link>).

## Bringing up your cluster ## 

Bring up your cluster with:  
`oc cluster up --public-hostname=127.0.0.1 --host-data-dir=$HOME/os/data-dir --host-config-dir=$HOME/os/config-dir`  

![oc-cluster-up][oc-cluster-up]

## Log into your cluster ##

Log into your cluster via `oc login`

![oc-login][oc-login]

## Deploy MySQL containers ##

We will be using the UPS docker image from Docker Hub. This image requires that we have 2 MySQL instances named 'unifiedpush'  and 'keycloak'. Create these by:  

* `oc new-app mysql MYSQL_USER=unifiedpush MYSQL_PASSWORD=unifiedpush MYSQL_DATABASE=keycloak --name=keycloak`  

![deploy-mysql-keycloak][deploy-mysql-keycloak]  

* `oc new-app mysql MYSQL_USER=unifiedpush MYSQL_PASSWORD=unifiedpush MYSQL_DATABASE=unifiedpush --name=unifiedpush`  

![deploy-mysql-unified-push][deploy-mysql-unified-push]  

Confirm that both MySQL instances have come online by checking the OpenShift console, or via the terminal with `oc status`.  

![pod-keycloak][pod-keycloak]  
![pod-unifiedpush][pod-unifiedpush]  

## Deploy AeroGear UPS ##

With both required MySQL instances installed and running, UPS can now be deployed by running the following in your terminal:

* `oc new-app aerogear/unifiedpush-wildfly UNIFIEDPUSH_PORT_3306_TCP_ADDR=unifiedpush UNIFIEDPUSH_PORT_3306_TCP_PORT=3306 UNIFIEDPUSH_ENV_MYSQL_DATABASE=unifiedpush  KEYCLOAK_PORT_3306_TCP_ADDR=keycloak KEYCLOAK_PORT_3306_TCP_PORT=3306 KEYCLOAK_ENV_MYSQL_DATABASE=keycloak UNIFIEDPUSH_ENV_MYSQL_USER=unifiedpush  UNIFIEDPUSH_ENV_MYSQL_PASSWORD=unifiedpush KEYCLOAK_ENV_MYSQL_USER=unifiedpush KEYCLOAK_ENV_MYSQL_PASSWORD=unifiedpush --name=unifiedpush-wildfly`   

![deploy-unifiedpush-wildfly][deploy-unifiedpush-wildfly]  
![pod-unifiedpush-wildfly][pod-unifiedpush-wildfly]  

This will deploy UPS and pass in the necessary environmental variables for UPS to pick up the MySQL instances. You can see these environmental variables in the OpenShift console:  

![deploy-unifiedpush-wildfly-env-vars][deploy-unifiedpush-wildfly-env-vars]  

## Exposing routes to UPS deployment ##

With UPS deployed, the final step is to expose route(s) so we can access our UPS instance through a web browser. The following creates 2 routes; one to access UPS through localhost on our web browser, and one through which the android emulator can access UPS:

* `oc expose service unifiedpush-wildfly --hostname=ups.127.0.0.1.nip.io --port=8080-tcp --name=ups-local-unsecured`
* `oc expose service unifiedpush-wildfly --hostname=ups.10.0.2.2.nip.io --port=8080-tcp --name=ups-android-unsecured`

You should see confirmation that the routes have been created: 

![terminal-route-1][terminal-route-1]  
![terminal-route-2][terminal-route-2]  

The OpenShift console will confirm that this also:  

![pod-unifiedpush-wildfly-routes-2][pod-unifiedpush-wildfly-routes-2]  
![pod-unifiedpush-wildfly-routes-1][pod-unifiedpush-wildfly-routes-1]  

** if you require any other routes to be exposed to UPS for your apps, you can simply add them in the above manner. 

## Configuring UPS ##

UPS can now be configured via the browser and the route you have created:  

![browser-ups][browser-ups]  

This tutorial does not cover how to configure UPS to send push notifications to your mobile app. For guidance on how to do so, the AeroGear HelloPush tutorial may be found [here](https://github.com/aerogear/aerogear-android-cookbook/tree/master/HelloPush) which covers cover how to configure push notifications to an app with UPS.


[oc-cluster-up]: /assets/images/hero-ups/oc-cluster-up.png  
[oc-login]: /assets/images/hero-ups/oc-login.png  
[deploy-mysql-keycloak]: /assets/images/hero-ups/deploy-mysql-keycloak.png  
[deploy-mysql-unified-push]: /assets/images/hero-ups/deploy-mysql-unified-push.png  
[deploy-unifiedpush-wildfly]: /assets/images/hero-ups/deploy-unifiedpush-wildfly.png  
[deploy-unifiedpush-wildfly-env-vars]: /assets/images/hero-ups/deploy-unifiedpush-wildfly-env-vars.png  
[pod-keycloak]: /assets/images/hero-ups/pod-keycloak.png  
[pod-unifiedpush]: /assets/images/hero-ups/pod-unifiedpush.png  
[pod-unifiedpush-wildfly]: /assets/images/hero-ups/pod-unifiedpush-wildfly.png  
[terminal-route-1]: /assets/images/hero-ups/terminal-route-1.png  
[terminal-route-2]: /assets/images/hero-ups/terminal-route-2.png 
[pod-unifiedpush-wildfly-routes-1]: /assets/images/hero-ups/pod-unifiedpush-wildfly-routes-1.png  
[pod-unifiedpush-wildfly-routes-2]: /assets/images/hero-ups/pod-unifiedpush-wildfly-routes-2.png  
[browser-ups]: /assets/images/hero-ups/browser-ups.png  