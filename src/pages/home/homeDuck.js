import {createAction} from 'redux-api-middleware';

const DUCK_NAME = '@@home';

export const USER_REQUEST = `${DUCK_NAME}/USER_REQUEST`
export const USER_SUCCESS = `${DUCK_NAME}/USER_SUCCESS`
export const USER_FAILURE = `${DUCK_NAME}/USER_FAILURE`

const initialState = {
  sensors: [],
  isLoading: false,
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {...state, sensors: [], error: undefined, isLoading: true}
    case USER_SUCCESS:
      return {...state, sensors: [...state.sensors, ...action.payload], isLoading: false}
    case USER_FAILURE:
      return {...state, error: action.payload, isLoading: false}
    default:
      return state
  }
}

export const fetchSensors = (city) => createAction({
  endpoint: `https://${city}.pulse.eco/rest/sensor`,
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  types: [
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAILURE
  ]
})
