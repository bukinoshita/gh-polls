const axios = require('axios')
const { BASE_URL } = require('./utils')

axios.defaults.baseURL = BASE_URL

async function createPoll(options) {
  const res = await axios.post('/poll', { options })

  return res.data.id
}

module.exports = {
  createPoll
}
