bshim test
------

Cannot include
[knockout-projections](https://github.com/stevesanderson/knockout-projections)
([`knockout-projections.js`](https://github.com/SteveSanderson/knockout-projections/blob/master/dist/knockout-projections.js))
with browserify + browserify-shim.

### Setup

$ bower install
$ npm install

### Browserify-shim runtime error

Run e.g.

$ browserify . >> bundle.js

Console error is:

> Uncaught Error: Cannot find module 'knockout'


### Browserify-shim compile-time error

To get a compile-time error, remove `"koproj": { "depends": [ "knockout:ko" ] }`
from `package.json`.

Reported error is:

> Error: module "knockout" not found from "/Users/bmh/GitRepos/bshim-ko-testcase/bower_components/knockout-projections/dist/knockout-projections.js"
  at notFound (/usr/local/lib/node_modules/browserify/index.js:811:15)
