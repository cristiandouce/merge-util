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
 * @return {Object} a
 * @api public
 */

function merge (a, b){
  for (var key in b) {
    if (has.call(b, key) && b[key] != null) {
      if (!a) a = {};
      if ('object' === type(b[key])) {
        a[key] = merge(a[key], b[key]);
      } else {
        a[key] = b[key];
      }
    }
  }
  return a;
};