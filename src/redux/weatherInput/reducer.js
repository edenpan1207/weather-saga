import {weatherInputType} from './type';

const INITIAL_STATE = {
  isLoading: false,
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
    case weatherInputType.WEATHER_FETCH_START:
      return {
        ...state, 
        isLoading: true
      }
    case weatherInputType.WEATHER_ASYNC_SUCCESS:
      const prevArr = [action.payload, ...state.results];
      const newArr = prevArr.filter((arr, index) => prevArr.indexOf(arr) === index)
      return {
        ...state,
        isLoading: false,
        city: '',
        results: newArr,
        errorMessage: undefined
      }
    case weatherInputType.WEATHER_ASYNC_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default reducer;