/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './_screen_name'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '')
  const PATH0 = '/achievements'
  const GET = 'GET'
  const POST = 'POST'

  return {
    _screen_name: (val0: number | string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        get: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).send(),
        $get: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix0, GET, option).send().then(r => r.body),
        post: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix0, POST, option).send(),
        $post: (option?: { config?: T }) =>
          fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix0, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${prefix0}`
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
