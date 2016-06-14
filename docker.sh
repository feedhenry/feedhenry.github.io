#!/bin/bash
# install everything in a docker container based on Fedora 22
# permit to have the same env on any system without any issue

# set SElinux context to allow docker to read the source directory
echo chcon -Rt svirt_sandbox_file_t $(pwd)

# requires docker and being in the right group
docker build -t feedhenry-builder .
docker run --rm -p 3000:3000 -v "$(pwd)":/tmp/feedhenry.github.com/:rw feedhenry-builder

