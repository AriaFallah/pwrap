var pwrap = require('../index');
var expect = require('chai').use(require('chai-as-promised')).expect;

describe('promise wrap', function() {
  it('throws an error with no params', function() {
    expect(pwrap).to.throw(Error);
  });

  it('throws an error if fn passed in is not a function', function() {
    expect(pwrap.bind(this, 5)).to.throw(Error);
  });

  it('returns a promise', function() {
    var wrapped = pwrap(function() {});
    expect(wrapped().constructor.name).to.equal('Promise');
  });

  it('actually works', function() {
    var timeout =
      pwrap(function(str, ms, resolve) {
        setTimeout(function() {
          resolve(str);
        }, ms);
      });
    return expect(timeout('pls work', 100)).to.eventually.equal('pls work');
  });
});
