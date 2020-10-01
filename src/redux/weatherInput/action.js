import {weatherInputType} from './type';

export const inputWeather = city => ({
  type: weatherInputType.INPUT_CITY,
  payload: city
})

export const weatherAsyncStart = () => ({
  type: weatherInputType.WEATHER_FETCH_START
})

export const weatherAsyncSuccess = weatherDetail => ({
  type: weatherInputType.WEATHER_ASYNC_SUCCESS,
  payload: weatherDetail
})

export const weatherAsyncFail = error => ({
  type: weatherInputType.WEATHER_ASYNC_FAIL,
  payload: error
})

export const weatherAsyncHandler = () => ({
  type: weatherInputType.WEATHER_FETCH_REQUEST
})

// export const weatherAsyncHandler = city => {
//   return dispatch => {
//     dispatch(weatherAsyncStart());

//     axios.get(`${utils.URL}${city}&appid=${utils.APPID}`)
//          .then(data => {
//            dispatch(weatherAsyncSuccess(data))
//          })
//          .catch(error => dispatch(weatherAsyncFail(error.message)))
//   }
// }

