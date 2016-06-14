# Run the accompanied "dockers.sh" to build the website
# if you want to run the Node stuff inside Docker.
#
# Kudos to Josh Berkus for the Project Atomic website dockerfile
# that served as a starting point.

FROM centos:centos7
MAINTAINER Tuomas Kuosmanen <tigert@redhat.com>

RUN yum -y update; yum clean all
RUN yum -y install epel-release; yum clean all
RUN yum -y install nodejs npm

# install the devel server
RUN npm install --global gulp
RUN npm install --save-dev gulp
RUN npm install --save-dev gulp-less
RUN npm install --save-dev gulp-uglify
RUN npm install --save-dev gulp-plumber
RUN npm install browser-sync gulp --save-dev

# test server port
EXPOSE 3000

# serve the content!
WORKDIR /tmp/feedhenry.github.com
CMD /usr/bin/gulp




