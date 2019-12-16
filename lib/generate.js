const { BASE_URL } = require('./utils')

module.exports = (options, id) => {
  const data = []

  options.map(option => {
    const name = encodeURIComponent(option)
    const url = `${BASE_URL}/poll/${id}/${name}`

    return data.push({
      text: name,
      vote: `${url}/vote`,
      image: url
    })
  })

  return data
}
