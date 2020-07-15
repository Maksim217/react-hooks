import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types'

const hendlres = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: state => state
  }

export const AlertReducer = (state, action) => {
  const handler = hendlres[action.type] || hendlres.DEFAULT
  return handler(state, action)
}