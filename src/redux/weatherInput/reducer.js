import {weatherInputType} from './type';

const INITIAL_STATE = {
  city: '',
  results: [],
  errorMessage: undefined,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case weatherInputType.INPUT_CITY:
      return {
        ...state,
        city: action.payload
      }
    case weatherInputType.WEATHER_ASYNC_SUCCESS:
      return {
        ...state,
        city: '',
        results: [
          action.payload, ...state.results
        ],
        errorMessage: undefined
      }
    case weatherInputType.WEATHER_ASYNC_FAIL:
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default reducer;