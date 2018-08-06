# mkbool

Convert any value to boolean

## npm url
[https://www.npmjs.com/package/mkbool](https://www.npmjs.com/package/mkbool)


## Getting started

1. Install the package `npm i mkbool`
1. Require to your script `var mkbool = require('mkbool');`
1. And use it `var isBool = mkbool('any value or variable')`

## mkbool is able to check types of

* Infinity number `5/0`
* NaN
* Integer number
* Floating number
* Empty Array `[]`
* Array with item `[1, 2, 0, ...]`
* Empty Object `{}`
* Object with item `{key: 'value'}`
* Empty string `''`
* String `'any string'`
* And more

## Test

test.js is initialized with several values which will go through each value and return mkbool type.
Run `npm test` to test. Change values on test.js to test your values.

Standard test will be added later.
