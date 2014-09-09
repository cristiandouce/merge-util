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
 * @param {Object} opts
 * @return {Object} a
 * @api public
 */

function merge (a, b, opts){
  opts = (Boolean == typeof(opts))
    ? { inheritance: opts }
    : opts || { inheritance: false , shallow: false }


  for (var key in b) {
    var copy = !!opts.inheritance
     ? b[key] != null
     : (has.call(b, key)) && b[key] != null

    if (copy) {
      if (!a) a = {};
      if (!opts.shallow && 'object' === type(b[key])) {
        a[key] = merge(a[key], b[key], opts);
      } else {
        a[key] = b[key];
      }
    }
  }
  return a;
};