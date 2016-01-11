# pwrap

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Coverage][coveralls-image]][coveralls-url]
[![bitHound Overall Score][bitHound-image]][bitHound-url]
![Dependency status][david-image]

Add promise capability to any asynchronous function.

## Installation
```bash
npm install --save pwrap
```

## Usage
pwrap is a simpler version of something like [bluebird.promisify](http://bluebirdjs.com/docs/api/promise.promisify.html) that works on any function and makes no assumptions.

When you pwrap a function, you gain the ability to add `resolve` and `reject` as parameters, and the function will return a promise.

```javascript
var pwrap = require('pwrap');

var timeoutPromise =
  pwrap(function(str, ms, resolve) {
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
It's a nice way to wrap a function in a promise in a less verbose way, and also will work on everything...even synchronous functions if you're feeling crazy.

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
