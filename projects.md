---
layout: page
title: Projects
permalink: /projects/
---

## Core

<div class="project" markdown="1">

#### Coming soon
{: .tag .tag-info}

The core components that make up FeedHenry, including drag & drop forms builder,
application lifecycle management, reporting, analytics, user management,
and more.

</div>


## MBaaS

<div class="project" markdown="1">

#### Coming soon
{: .tag .tag-info}

Provides the Node.js runtime environment for high-performance server-side apps
(cloud apps) and enables secure integrations with internal systems behind
the firewall.

</div>


## Build Farm

<div class="project" markdown="1">

#### Coming soon
{: .tag .tag-info}

Automates the app build process, maintains a history of previous builds, and
provides the ability to create builds for platforms without requiring the
associated infrastructure and tools (e.g. building iOS binaries from a
Linux OS).

</div>


## Push Notifications

<div class="project" markdown="1">

#### Overview

In 2012, Red Hat launched its first mobile related research project, titled
[AeroGear]. AeroGear's goal is to provide flexible, extensible libraries and
server side components that simplify mobile development and infrastructure setup
across platforms.

In December 2015, the [UnifiedPush Server] from the AeroGear project was
integrated into FeedHenry. This provides FeedHenry users the ability to
send push notifications to any device, regardless of platform or network.

[AeroGear]: https://www.aerogear.org/
[UnifiedPush Server]: https://aerogear.org/push

#### Modules

{% include repos.html repos="raincatcher-signature,raincatcher-map" %}


</div>


## Client SDKs

<div class="project" markdown="1">

#### Overview

Native and hybrid SDKs for client app development on iOS, Android, Windows,
Xamarin, Appcelerator, Cordova, and in web apps.

#### Modules

{% include repos.html repos="raincatcher-signature,raincatcher-map" %}

</div>


##  App Templates

<div class="project" markdown="1">

#### Overview

Starting points for building your applications with FeedHenry, including
templates for iOS, Android, Xamarin, Appcelerator, Cordova; OAuth2 and SAML
examples, push notification and data synchronization examples, and many more.

#### Modules

{% include repos.html repos="raincatcher-signature,raincatcher-map" %}

</div>


## RainCatcher

<div class="project" markdown="1">

#### Overview

RainCatcher is a set of Node.js modules that can be used with FeedHenry to
develop workforce management (WFM) applications.

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

See the [Getting Started Guide](https://github.com/feedhenry-raincatcher/raincatcher-documentation/blob/master/Getting-Started.md).

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
