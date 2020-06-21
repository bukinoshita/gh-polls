import axios from 'axios'

import { BASE_URL } from './utils'

axios.defaults.baseURL = BASE_URL

export const createPoll = async (options: string[]) => {
  const res = await axios.post('/poll', { options })

  return res.data.id
}
