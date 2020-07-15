import {
    SEARCH_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING,
    CLEAR_USERS
} from '../types'

const hendlers = {
    [SEARCH_USERS]: (state, {payload}) => ({...state, users: payload, loading: false}),
    [GET_REPOS]: (state, {payload}) => ({...state, repos: payload, loading: false}),
    [GET_USER]: (state, {payload}) => ({...state, user: payload, loading: false}),
    [SET_LOADING]: state => ({...state, loading: true}),
    [CLEAR_USERS]: state => ({...state, users: []}),
    DEFAULT: state => state
}

export const GithubReducer = (state, action) => {
  const hendler = hendlers[action.type] || hendlers.DEFAULT
  return hendler(state, action)
}