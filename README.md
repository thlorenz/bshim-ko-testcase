bshim test
------

One cannot include
[knockout-projections](https://github.com/stevesanderson/knockout-projections)
([`knockout-projections.js`](https://github.com/SteveSanderson/knockout-projections/blob/master/dist/knockout-projections.js))
with browserify + browserify-shim (3.5.0). This package illustrates the problem.

See [browserify-shim#67](https://github.com/thlorenz/browserify-shim/issues/67)

### Setup

$ bower install
$ npm install

### Browserify-shim runtime error

Make sure the `koproj` param is not in `package.json`. Browserify should work
without issue by running:

`$ browserify . >> bundle.js`

If you open `index.html` a console error will occur (at least in Chrome 36):

> Uncaught Error: Cannot find module 'knockout'


### Browserify-shim compile-time error

For an alternative error at compile-time, add
`"koproj": { "depends": [ "knockout:ko" ] }`
to the `browserify-shim` section of `package.json`.

The error will be:

> Error: module "knockout" not found from "/Users/bmh/GitRepos/bshim-ko-testcase/bower_components/knockout-projections/dist/knockout-projections.js"
  at notFound (/usr/local/lib/node_modules/browserify/index.js:811:15)
