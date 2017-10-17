function pwrap(promise) {
  // Bring your own promise
  var myPromise = promise ? promise : Promise;
  return function(fn) {
    // Makes sure parameter is a function
    if (typeof fn !== "function") {
      throw new Error("Argument given to promise-wrap but be a function!");
    }

    // Returns a function that returns a promise
    return function() {
      // Not using Array.prototype.slice.call() as per:
      // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      // Returns a promise that calls fn
      // with resolve and reject appended to its original arguments.
      return new myPromise(function(resolve, reject) {
        fn.apply(null, args.concat(resolve, reject));
      });
    }
  }
}

module.exports = pwrap;
