'use strict'

const { createPoll } = require('./lib/api')
const generate = require('./lib/generate')

module.exports = async options => {
  const isArray = Array.isArray(options)

  if (isArray) {
    const id = await createPoll(options)
    const data = generate(options, id)
    return data
  }

  throw new TypeError('`Options` must be an `Array`.')
}
