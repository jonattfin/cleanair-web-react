import {createAction} from 'redux-api-middleware';

const DUCK_NAME = '@@home';

export const SENSORS_REQUEST = `${DUCK_NAME}/SENSORS_REQUEST`
export const SENSORS_SUCCESS = `${DUCK_NAME}/SENSORS_SUCCESS`
export const SENSORS_FAILURE = `${DUCK_NAME}/SENSORS_FAILURE`

export const SENSOR_AVG_REQUEST = `${DUCK_NAME}/SENSOR_AVG_REQUEST`
export const SENSOR_AVG_SUCCESS = `${DUCK_NAME}/SENSOR_AVG_SUCCESS`
export const SENSOR_AVG_FAILURE = `${DUCK_NAME}/SENSOR_AVG_FAILURE`

const initialState = {
  sensors: [],
  isLoading: false,
  error: undefined
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SENSORS_REQUEST:
      return {...state, sensors: [], error: undefined, isLoading: true}
    case SENSORS_SUCCESS:
      const newPayload = action.payload.map(sensor => ({...sensor, ...action.meta}));
      return {...state, sensors: [...state.sensors, ...newPayload], isLoading: false}
    case SENSORS_FAILURE:
      return {...state, error: action.payload, isLoading: false}
    default:
      return state
  }
}

export const fetchSensors = ({city}) => createAction({
  endpoint: `https://${city}.pulse.eco/rest/sensor`,
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  types: [
    SENSORS_REQUEST,
    {
      type: SENSORS_SUCCESS,
      meta: {city}
    },
    SENSORS_FAILURE
  ]
})

export const fetchSensorAverage = ({cityName, sensorId, periodType = 'month', valueType = 'pm25', fromDateTime, toDateTime}) => createAction({
  endpoint: `https://${cityName}.pulse.eco/rest/avgData/${periodType}?sensorId=${sensorId}&type=${valueType}&from=${fromDateTime}&to=${toDateTime}`,
  method: 'GET',
  headers: {'Content-Type': 'application/json'},
  types: [
    SENSOR_AVG_REQUEST,
    SENSOR_AVG_SUCCESS,
    SENSOR_AVG_FAILURE
  ]
})



