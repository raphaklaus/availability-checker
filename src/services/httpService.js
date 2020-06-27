import fetch from 'node-fetch'

export const list = async () => {
  // throw Error('qqqqqq')
  return (await fetch(process.env.REQUEST_URL, {
    method: 'GET',
    headers: {
      Authorization: process.env.AUTH_KEY
    }
  })).json()
}
