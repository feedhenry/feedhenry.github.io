# Unified Push Server (UPS) on OpenShift #

## Prerequisites ## 

You shoould have a locally installed version of OpenShift, or access to an OpsnShift cluster. If you don't have either, you can set up your own OpenShift local cluster by reading this [document](<insert-openshift-hero-link>)

## Bringing up your cluster ## 

Bring up your cluster with:  
`oc cluster up --public-hostname=127.0.0.1 --host-data-dir=$HOME/os/data-dir --host-config-dir=$HOME/os/config-dir`

## Deploy MySQL containers ##

We will be using the UPS docker image from Docker Hub. This image requires that we have 2 MySQL instances name 'unifiedpush'  and 'keycloak'. Create these by:  

* `oc new-app mysql MYSQL_USER=unifiedpush MYSQL_PASSWORD=unifiedpush MYSQL_DATABASE=keycloak --name=keycloak`

* `oc new-app mysql MYSQL_USER=unifiedpush MYSQL_PASSWORD=unifiedpush MYSQL_DATABASE=unifiedpush --name=unifiedpush`

Confirm that both MySQL instances have come online by checking the OpenShift console, or via the terminal with `oc status`.

## Deploy AeroGear UPS ##

With both required MySQL instances installed and running, UPS can now be deployed by running the following in your terminal:

* `oc new-app aerogear/unifiedpush-wildfly UNIFIEDPUSH_PORT_3306_TCP_ADDR=unifiedpush UNIFIEDPUSH_PORT_3306_TCP_PORT=3306 UNIFIEDPUSH_ENV_MYSQL_DATABASE=unifiedpush  KEYCLOAK_PORT_3306_TCP_ADDR=keycloak KEYCLOAK_PORT_3306_TCP_PORT=3306 KEYCLOAK_ENV_MYSQL_DATABASE=keycloak UNIFIEDPUSH_ENV_MYSQL_USER=unifiedpush  UNIFIEDPUSH_ENV_MYSQL_PASSWORD=unifiedpush KEYCLOAK_ENV_MYSQL_USER=unifiedpush KEYCLOAK_ENV_MYSQL_PASSWORD=unifiedpush --name=unifiedpush-wildfly` 

This will deploy UPS and pass in the necessary environmental variables for UPS to pick up the MySQL instances.

## Exposing routes to UPS deployment ##

With UPS deployed, the final step is to expose route(s) so we can access our UPS instance through a web browser. The following creates 2 routes; one to access UPS through localhost on our web browser, and one through which the android emulator can access UPS:

* `oc expose service unifiedpush-wildfly --hostname=ups.127.0.0.1.nip.io --port=8080-tcp --name=ups-local-unsecured`
* `oc expose service unifiedpush-wildfly --hostname=ups.10.0.2.2.nip.io --port=8080-tcp --name=ups-android-unsecured`

** if you require any other routes to be exposed to UPS for your apps, you can simply add them in the above mannner. 

## Configuring UPS ##

UPS can now be configured to send push notifications to your mobile apps. This tutorial does not cover how to configure UPS to work with your app, but the AeroGear HelloPush tutorial may be found [here](https://github.com/aerogear/aerogear-android-cookbook/tree/master/HelloPush) and will cover how to configure an aplication with UPS so it can receive push notifications.