import { ghPolls } from '../source'

test('gh polls', async () => {
  const options = ['a', 'b']
  const result = await ghPolls(options)

  expect(result.length > 1).toBe(true)
  expect(result[0].text).toBe(options[0])
  expect(result[0].vote).toBeTruthy()
  expect(result[0].image).toBeTruthy()
})
