import test from 'ava'
import m from '.'

test('create poll', async t => {
  const options = ['a', 'b']
  const result = await m(options)

  t.true(result.length > 1)
  t.is(result[0].text, options[0])
  t.truthy(result[0].vote)
  t.truthy(result[0].image)
})

test('error', async t => {
  const error = await t.throwsAsync(m())

  t.is(error.message, '`Options` must be an `Array`.')
})
