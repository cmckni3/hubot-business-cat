# Hubot Business Cat

[![Greenkeeper badge](https://badges.greenkeeper.io/cmckni3/hubot-business-cat.svg)](https://greenkeeper.io/)

Business cat for Hubot

[![Build Status](https://travis-ci.org/cmckni3/hubot-business-cat.png)](https://travis-ci.org/cmckni3/hubot-business-cat)

## Directory Structure

Using the common directory structure for hubot script packages it will be easy
to manage and allow others to easily contribute to your package.

### script

This directory is home to a couple of development scripts; `bootstrap` and `test`
they're used to bootstrap the development environment and run tests
respectively.

### src

This directory is home to the actual hubot scripts in the package. Your
`index.coffee` entry point will load the scripts from this directory.

### test

This directory is home to any tests you write for your scripts. This example
package uses Mocha, Chai and Sinon to manage writing tests.

