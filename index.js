/**
 * Module dependencies.
 */

var has = Object.prototype.hasOwnProperty;

try {
  var type = require('type-component');
  var isEmpty = require('is-empty');
} catch (err) {
  var type = require('type');
  var isEmpty = require('is-empty');
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
    : opts || { inheritance: false , shallow: false, discardEmpty: true }

  for (var key in b) {
    var copy = !!opts.inheritance
     ? b[key] != null
     : (has.call(b, key)) && b[key] != null

    if (copy) {
      if (!a) a = {};
      if (!opts.shallow && 'object' === type(b[key])) {
        if (!opts.discardEmpty && isEmpty(a[key]) && isEmpty(b[key])) {
          // Preserve { }, null, undefined, 0 as they were
          a[key] = b[key];
        } else {
          // merge recursively
          a[key] = merge(a[key], b[key], opts);
        }
      } else {
        a[key] = b[key];
      }
    }
  }
  return a;
};