import { BASE_URL } from './utils'

export const generate = (options: string[], id: string) => {
  return options.map((option: string) => {
    const name = encodeURIComponent(option)
    const url = `${BASE_URL}/poll/${id}/${name}`

    return {
      text: name,
      vote: `${url}/vote`,
      image: url
    }
  })
}
