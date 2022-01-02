/* eslint-disable */
// prettier-ignore
import { AspidaClient, BasicHeaders } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './achievements/_screen_name'
// prettier-ignore
import { Methods as Methods1 } from './current_user'
// prettier-ignore
import { Methods as Methods2 } from './health'
// prettier-ignore
import { Methods as Methods3 } from './like_topics/_screen_name'
// prettier-ignore
import { Methods as Methods4 } from './topic'
// prettier-ignore
import { Methods as Methods5 } from './topic/_id'
// prettier-ignore
import { Methods as Methods6 } from './upload_image'
// prettier-ignore
import { Methods as Methods7 } from './user'
// prettier-ignore
import { Methods as Methods8 } from './user/_screen_name@string'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8080' : baseURL).replace(/\/$/, '')
  const PATH0 = '/achievements'
  const PATH1 = '/current_user'
  const PATH2 = '/health'
  const PATH3 = '/like_topics'
  const PATH4 = '/topic'
  const PATH5 = '/upload_image'
  const PATH6 = '/user'
  const GET = 'GET'
  const POST = 'POST'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    achievements: {
      _screen_name: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods0['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          post: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix1, POST, option).send(),
          $post: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods0['post']['status']>(prefix, prefix1, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    current_user: {
      /**
       * @returns successful operation
       */
      get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json(),
      /**
       * @returns successful operation
       */
      $get: (option?: { config?: T }) =>
        fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    },
    health: {
      get: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send(),
      $get: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods2['get']['status']>(prefix, PATH2, GET, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    like_topics: {
      _screen_name: (val1: number | string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).send(),
          $get: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods3['get']['status']>(prefix, prefix1, GET, option).send().then(r => r.body),
          post: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, prefix1, POST, option).send(),
          $post: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods3['post']['status']>(prefix, prefix1, POST, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      }
    },
    topic: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          put: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).send(),
          $put: (option?: { config?: T }) =>
            fetch<void, BasicHeaders, Methods5['put']['status']>(prefix, prefix1, PUT, option).send().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).send(),
      $get: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods4['get']['status']>(prefix, PATH4, GET, option).send().then(r => r.body),
      post: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).send(),
      $post: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods4['post']['status']>(prefix, PATH4, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH4}`
    },
    upload_image: {
      post: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).send(),
      $post: (option?: { config?: T }) =>
        fetch<void, BasicHeaders, Methods6['post']['status']>(prefix, PATH5, POST, option).send().then(r => r.body),
      $path: () => `${prefix}${PATH5}`
    },
    user: {
      _screen_name: (val1: string) => {
        const prefix1 = `${PATH6}/${val1}`

        return {
          /**
           * @returns successful operation
           */
          get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json(),
          /**
           * @returns successful operation
           */
          $get: (option?: { config?: T }) =>
            fetch<Methods8['get']['resBody'], BasicHeaders, Methods8['get']['status']>(prefix, prefix1, GET, option).json().then(r => r.body),
          /**
           * @returns successful operation
           */
          put: (option?: { config?: T }) =>
            fetch<Methods8['put']['resBody'], BasicHeaders, Methods8['put']['status']>(prefix, prefix1, PUT, option).json(),
          /**
           * @returns successful operation
           */
          $put: (option?: { config?: T }) =>
            fetch<Methods8['put']['resBody'], BasicHeaders, Methods8['put']['status']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          /**
           * @returns successful operation
           */
          delete: (option?: { config?: T }) =>
            fetch<Methods8['delete']['resBody'], BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).json(),
          /**
           * @returns successful operation
           */
          $delete: (option?: { config?: T }) =>
            fetch<Methods8['delete']['resBody'], BasicHeaders, Methods8['delete']['status']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      /**
       * @returns successful operation
       */
      post: (option?: { config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json(),
      /**
       * @returns successful operation
       */
      $post: (option?: { config?: T }) =>
        fetch<Methods7['post']['resBody'], BasicHeaders, Methods7['post']['status']>(prefix, PATH6, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH6}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
