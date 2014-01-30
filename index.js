/**
 * Module dependencies.
 */

var has = Object.prototype.hasOwnProperty;

try {
  var type = require('type-component');
} catch (err) {
  var type = require('type');
}

/**
 * Expose merge
 */

module.exports = merge;

/**
 * Merge `b` into `a`.
 *
 * @param {Object} a
 * @param {Object} b
 * @param {Boolean} inheritance
 * @return {Object} a
 * @api public
 */

function merge (a, b, inheritance){
  for (var key in b) {
    var copy = !!inheritance
     ? b[key] != null
     : (has.call(b, key)) && b[key] != null

    if (copy) {
      if (!a) a = {};
      if ('object' === type(b[key])) {
        a[key] = merge(a[key], b[key], inheritance);
      } else {
        a[key] = b[key];
      }
    }
  }
  return a;
};