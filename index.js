// Makes use of the bluebird promise library
var Promise = require('bluebird');

function promiseWrap(fn) {
  // Makes sure parameter is a function
  if (typeof fn !== "function") {
    throw new Error("argument passed to promise-wrap must be function!");
  }

  // Returns a function that when called will return a promise.
  return function() {
    // Not using Array.prototype.slice.call() as per:
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    // Returns a promise that contains the function parameter body.
    // Function is called with resolve and reject appended to its original arguments.
    return new Promise(function(resolve, reject) {
       fn.apply(null, args.concat(resolve, reject));
    });
  }
}

module.exports = promiseWrap;
