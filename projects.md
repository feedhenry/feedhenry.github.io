---
layout: projects
title: Projects
permalink: /projects/
---

Here's an overview of the components that make up FeedHenry.

<div class="project-title" markdown="1">

## Client SDKs

Native and hybrid SDKs for mobile app development.

</div>

<div class="project-text" markdown="1">

FeedHenry supports a wide range of mobile development technologies. We provide
support for native iOS, Android, Windows, Xamarin, Cordova, and
other HTML5 app frameworks.

{% include repos.html repos="fh-ios-sdk,fh-ios-swift-sdk,fh-android-sdk,fh-dotnet-sdk,fh-js-sdk" %}

</div>



<div class="project-title" markdown="1">

##  App Templates

Starting points for building your applications with FeedHenry.

</div>

<div class="project-text" markdown="1">

We've developed app templates for iOS, Android, Xamarin, Cordova;
OAuth2 and SAML examples, push notification and data synchronization examples,
and many more. We've highlighted a few of the popular ones below.

{% include repos.html repos="helloworld-app,appforms-project-client,sync-cloud,blank-cordova-app,welcome-cloud" %}

Find a complete list of templates [here](https://github.com/feedhenry/).
</div>



<div class="project-title" markdown="1">

## Push Notifications

Integration with [AeroGear] for sending push notifications to any device,
regardless of platform or network.

</div>

<div class="project-text" markdown="1">

<img src="{{ "/assets/images/aerogear.svg" | relative_url }}" alt="AeroGear Logo" class="project-logo" />

In 2012, Red Hat launched its first mobile related research project, titled
[AeroGear]. AeroGear's goal is to provide flexible, extensible libraries and
server side components that simplify mobile development and infrastructure setup
across platforms.

In December 2015, the [UnifiedPush Server] from the AeroGear project was
integrated into FeedHenry. This provides FeedHenry users the ability to
send push notifications to any device, regardless of platform or network.

[AeroGear]: https://www.aerogear.org/
[UnifiedPush Server]: https://aerogear.org/push

{% include repos.html repos="aerogear-unifiedpush-server,aerogear-ios-push,aerogear-android-push,aerogear-cordova-push,aerogear-windows-push,aerogear-js-push" %}

</div>



<div class="project-title" markdown="1">

## RainCatcher

A set of Node.js modules that can be used with FeedHenry to develop workforce
management (WFM) applications.

</div>

<div class="project-text" markdown="1">

<img src="{{ "/assets/images/raincatcher.svg" | relative_url }}" alt="RainCatcher Logo" class="project-logo" />

#### Overview

RainCatcher modules are packaged and distributed via [npm]. They are designed to
be included in your application using [Browserify]. RainCatcher modules export
one or more of:

* [Angular.js 1] directives or services providing client-side functionality for
both the mobile and portal clients.
* [Express.js] routes providing a REST API to be consumed by the client-side
portions of the module.
* FeedHenry sync configurations for enabling data synchronization of a module's
data. Each module's README file includes more detail on its purpose and how to
use it.

[npm]: https://www.npmjs.com/
[browserify]: http://browserify.org/
[Angular.js 1]: https://angularjs.org/
[Express.js]: http://expressjs.com/

#### Getting Started

See the [Getting Started Guide](https://github.com/feedhenry-raincatcher/raincatcher-documentation/blob/master/getting-started.adoc).

#### Community

* [feedhenry-raincatcher mailing list](http://www.redhat.com/mailman/listinfo/feedhenry-raincatcher)
* [IRC: #feedhenry-raincatcher on Freenode](irc://irc.freenode.net/feedhenry-raincatcher)

#### FAQ

###### What's the release cycle for RainCatcher?

We have not yet developed a schedule for releases. RainCatcher is still in rapid
development, and we're going to be working with the larger community to develop
a cadence.

###### What's the relationship between RainCatcher and RHMAP WFM?

RainCatcher is the upstream project for WFM, where we do work before pulling
it into our supported product. Features in RainCatcher may or may not ultimately
land in WFM.

###### I'd like to contribute, do I need to sign a CLA?

No, we do not have a CLA for RainCatcher, but contributors do acknowledge that
work contributed to RainCatcher is their own work and they have the right to
make a copyright.

If you have more questions, you are welcome to ask them on the [feedhenry-raincatcher mailing list].

[feedhenry-raincatcher mailing list]: http://www.redhat.com/mailman/listinfo/feedhenry-raincatcher

#### Modules

###### Visual components

{% include repos.html repos="raincatcher-signature,raincatcher-map" %}

###### Angular services and directives

{% include repos.html repos="raincatcher-workflow,raincatcher-workorder,raincatcher-user,raincatcher-risk-assessment,raincatcher-vehicle-inspection,raincatcher-schedule" %}

###### Low-level modules

{% include repos.html repos="raincatcher-sync,raincatcher-appform,raincatcher-mediator" %}

Find the complete list of modules [here](https://github.com/feedhenry-raincatcher).

</div>


<div class="project-title" markdown="1">

## MBaaS

The FeedHenry Mobile Backend as a Service is a set of services to support applications that serve as a backend for Mobile Apps.

</div>

<div class="project-text" markdown="1">

#### Components

{% include repos.html repos="fh-openshift-templates,fh-mbaas,fh-messaging,fh-stats" %}


</div>

<div class="project-title" markdown="1">

## Data Synchronization

A set of Mobile SDKs & Node.js module for client/server data synchronization with offline support.

</div>

<div class="project-text" markdown="1">

#### Overview

The FeedHenry Data Synchronization framework includes the following features:

* Allows mobile apps to use and update data offline (local cache)
* Provides a mechanism to manage bi-directional data synchronization from multiple Client Apps using the Cloud App and into back-end data stores
* Allows data updates (that is, deltas) to be distributed from the Cloud App to connected clients
* Enables data collision management from multiple updates in the cloud
* Allows Apps to seamlessly continue working when the network connection is lost, and allows them to recover when the network connection is restored.

#### Community

* [feedhenry-dev mailing list](http://www.redhat.com/mailman/listinfo/feedhenry-dev)
* [IRC: #feedhenry on Freenode](irc://irc.freenode.net/feedhenry)


#### Node.js Module

{% include repos.html repos="fh-sync" %}

#### Client SDK's

##### Browser (javascript)

{% include repos.html repos="fh-sync-js" %}

##### Android

#### Coming Soon
{: .tag .tag-info}

##### iOS

#### Coming Soon
{: .tag .tag-info}

##### .NET

#### Coming Soon
{: .tag .tag-info}


</div>

<div class="project-title" markdown="1">

## Build Farm

Automates the app build process.

</div>

<div class="project-text" markdown="1">

#### Coming soon
{: .tag .tag-info}

</div>
