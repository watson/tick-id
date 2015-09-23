'use strict'

var MAX_SAFE_INTEGER = require('max-safe-integer')

if (!process.addAsyncListener) require('async-listener')

var noop = function () {}

var tickId = 1

process.addAsyncListener({
  create: noop,
  before: function (context, data) {
    tickId = tickId < MAX_SAFE_INTEGER ? tickId + 1 : 1
  },
  error: noop,
  after: noop
})

module.exports = function () {
  return tickId
}
