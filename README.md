# mkbool

Convert any value to boolean

## npm url
[https://www.npmjs.com/package/mkbool](https://www.npmjs.com/package/mkbool)


## Getting started

1. Install the package `npm i mkbool` or `npm i mkbool@beta`
1. Require to your script `var mkbool = require('mkbool');`
1. And use it `var isBool = mkbool('any value or variable')`

## mkbool is able to check types of

* Infinity number `5/0` `return false`
* NaN `return false`
* Integer number `return true`
* Floating number `return true`
* Empty Array `[]` `return false`
* Array with item `[1, 2, 0, ...]` `return true`
* Empty Object `{}` `return false`
* Object with item `{key: 'value'}` `return true`
* Empty string `''` `return false`
* String `'any string'` `return true`
* And more

## Test

test.js is initialized with several values which will go through each value and return mkbool type.
Run `npm test` to test. Change values on test.js to test your values.

Standard test will be added later.
