import {createAction} from 'redux-api-middleware';

export const USER_REQUEST = '@@user/USER_REQUEST'
export const USER_SUCCESS = '@@user/USER_SUCCESS'
export const USER_FAILURE = '@@user/USER_FAILURE'

export const getUser = () => createAction({
  endpoint: 'https://hostname/api/users/',
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  types: [
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE
  ]
})
