# pwrap

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Coverage][coveralls-image]][coveralls-url]
[![bitHound Overall Score][bitHound-image]][bitHound-url]
![Dependency status][david-image]

Add promise capability to any function.

## Installation
```bash
npm install --save pwrap
```

## Usage
When you pwrap a function, you gain the ability to add `resolve` and `reject` as parameters, and the function will return a promise.

Important Note: pwrap requires you to bring your own promise implementation or have them
natively.

```javascript
// Use default promise or whatever Promise is set to
var pwrap = require('pwrap')();

// Use bluebird
var pwrap = require('pwrap')(require('bluebird'));
```

Real example:

```javascript
var pwrap = require('pwrap')();

var timeoutPromise = pwrap(function(str, ms, resolve, reject) {
  setTimeout(function() {
    resolve(str);
  }, ms);
});

// Logs after 1s
timeoutPromise('One second has passed!', 1000).then(function(result) {
  console.log(result);
});
```

## Why?
Write

```javascript
var myFunc = pwrap(function(resolve, reject) {
  // do stuff
})
```

instead of writing

```javascript
var myFunc = function() {
  return new Promise(function(resolve, reject) {
    // do stuff
  })
}
```

## License
MIT

[npm-image]: https://img.shields.io/npm/v/pwrap.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/pwrap
[travis-image]: https://img.shields.io/travis/AriaFallah/pwrap.svg?style=flat-square
[travis-url]: https://travis-ci.org/AriaFallah/pwrap
[coveralls-image]: https://img.shields.io/coveralls/AriaFallah/pwrap.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/AriaFallah/pwrap
[bitHound-image]: https://www.bithound.io/github/AriaFallah/pwrap/badges/score.svg
[bitHound-url]: https://www.bithound.io/github/AriaFallah/pwrap

[david-image]: https://img.shields.io/david/AriaFallah/pwrap.svg?style=flat-square
