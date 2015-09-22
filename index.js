'use strict'

var MAX_SAFE_INTEGER = require('max-safe-integer')

if (!process.addAsyncListener) require('async-listener')

var noop = function () {}

global._tickId = 1

process.addAsyncListener({
  create: noop,
  before: function (context, data) {
    global._tickId = global._tickId < MAX_SAFE_INTEGER ? global._tickId + 1 : 1
  },
  error: noop,
  after: noop
})

module.exports = function () {
  return global._tickId
}
