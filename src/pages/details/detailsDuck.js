import {createAction} from 'redux-api-middleware';

const DUCK_NAME = '@@details';

export const SENSOR_AVG_REQUEST = `${DUCK_NAME}/SENSOR_AVG_REQUEST`
export const SENSOR_AVG_SUCCESS = `${DUCK_NAME}/SENSOR_AVG_SUCCESS`
export const SENSOR_AVG_FAILURE = `${DUCK_NAME}/SENSOR_AVG_FAILURE`

const initialState = {
  pm10: [],
  pm25: [],
  noise: [],
  temperature: [],
  humidity: [],
  pressure: [],

  isLoading: false,
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SENSOR_AVG_REQUEST:
      return {...state, error: undefined, isLoading: true}
    case SENSOR_AVG_SUCCESS:
      return {...state, [action.meta.type]: action.payload, isLoading: false}
    case SENSOR_AVG_FAILURE:
      return {...state, error: action.payload, isLoading: false}
    default:
      return state
  }
}

export const fetchSensorAverage = ({cityName, sensorId, periodType = 'month', valueType = 'pm25', fromDateTime, toDateTime}) => createAction({
  endpoint: `https://${cityName}.pulse.eco/rest/avgData/${periodType}?sensorId=${sensorId}&type=${valueType}&from=${fromDateTime}&to=${toDateTime}`,
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  types: [
    SENSOR_AVG_REQUEST,
    {
      type: SENSOR_AVG_SUCCESS,
      meta: {type: valueType}
    },
    SENSOR_AVG_FAILURE
  ]
})



