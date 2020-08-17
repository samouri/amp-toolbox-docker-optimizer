# AMP Optimizer Docker Container

The AMP Optimizer Container is a dockerized version of the [AMP Optimizer](https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer), a tool for improving the performance of AMP HTML.


## Usage

This container is published to DockerHub under the name *TODO*.
- The containers listens at port 3000 for `POST` requests. 
- It expects the request `body` to be HTML, which is directly fed to the optimizer.
- It will respond with optimized HTML.

## Setting options via environment variables.

You can pass customization options to the optimizer via environment variables. See all the options listed in the AMP Optimizer [docs](https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer#options).

All option names are transformed into SCREAMING_SNAKE_CASE.  For example, `autoAddMandatoryTags` --> `AUTO_ADD_MANDATORY_TAGS`.
