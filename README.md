# pwrap

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
