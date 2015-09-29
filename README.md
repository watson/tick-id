# tick-id

Give each tick on the Node.js event loop it's own ID.

A tick ID is nothing native to Node.js but an invention of this module.
It can be useful if you for instance want to keep track of which events
happen on the same tick.

[![Build status](https://travis-ci.org/watson/tick-id.svg?branch=master)](https://travis-ci.org/watson/tick-id)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install tick-id
```

## Usage

The tick-id module exposes a function which will return the id of the
current tick:

```js
var assert = require('assert')
var tickId = require('tick-id')

// execute the tickId function to get the ID of the current tick
var id = tickId()

// calling tickId multiple times on the same tick will always return the
// same tick ID
assert.equal(id, tickId())

process.nextTick(function () {
  // call tickId on a separate tick and you'll get a different ID
  assert.notEqual(id, tickId())
})
```

## License

MIT
