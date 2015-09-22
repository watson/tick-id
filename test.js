'use strict'

var test = require('tape')
var tickId = require('./')

var seen = [tickId()]

test('initial value', function (t) {
  t.equal(seen[0], 1)
  t.end()
})

test('serial ticks', function (t) {
  testNext(t)
  process.nextTick(function () {
    testNext(t)
    process.nextTick(function () {
      testNext(t)
      process.nextTick(function () {
        testNext(t)
        t.end()
      })
    })
  })
})

test('paralel ticks', function (t) {
  t.plan(6)
  testNext(t)
  process.nextTick(function () {
    testNext(t)
  })
  process.nextTick(function () {
    testNext(t)
  })
})

function testNext (t) {
  var id = tickId()
  t.ok(id > seen[seen.length - 1])
  t.ok(!~seen.indexOf(id))
  seen.push(id)
}