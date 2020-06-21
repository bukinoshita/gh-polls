import { createPoll } from './api'
import { generate } from './generate'

export const ghPolls = async (options: string[]) => {
  const id = await createPoll(options)
  const data = generate(options, id)

  return data
}
