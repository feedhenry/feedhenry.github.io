---
layout: page
title: Projects
permalink: /projects/
---

## RainCatcher

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

### Getting Started

See the [Getting Started Guide](https://github.com/feedhenry-raincatcher/raincatcher-documentation/blob/master/Getting-Started.md).

### Modules

##### Visual components

{% include repos.html repos="raincatcher-signature,raincatcher-map" %}

##### Angular services and directives

{% include repos.html repos="raincatcher-workflow,raincatcher-workorder,raincatcher-user,raincatcher-risk-assessment,raincatcher-vehicle-inspection,raincatcher-schedule" %}

##### Low-level modules

{% include repos.html repos="raincatcher-sync,raincatcher-appform,raincatcher-mediator" %}

Find the complete list of modules [here](https://github.com/feedhenry-raincatcher).

### Community

* [feedhenry-raincatcher Mailing List](http://www.redhat.com/mailman/listinfo/feedhenry-raincatcher)
* [IRC: #feedhenry-raincatcher on Freenode](irc://irc.freenode.net/feedhenry-raincatcher)
