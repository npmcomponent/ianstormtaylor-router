
var history = require('ianstormtaylor-history');
var querystring = require('component-querystring');


/**
 * Expose `Context`.
 */

module.exports = Context;


/**
 * Initialize a new `Context`.
 *
 * @param {String} path
 */

function Context (path) {
  this.path = path || '';
  this.params = [];
  this.state = history.state() || {};
  this.query = this.path.indexOf('?')
    ? querystring.parse(this.path.split('?')[1])
    : {};
}