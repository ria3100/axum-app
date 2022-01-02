/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    /** successful operation */
    resBody: Types.User
  }

  put: {
    status: 200
    /** successful operation */
    resBody: Types.User
  }

  delete: {
    status: 200

    /** successful operation */
    resBody: {
      uid: string
    }
  }
}
