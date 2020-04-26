import {weatherInputType} from '../src/redux/weatherInput/type';
import {inputWeather} from '../src/redux/weatherInput/action'

it('check weather input text content', () => {
  const action = inputWeather('taipei');
  expect(action.type).toEqual(weatherInputType.INPUT_CITY)
  expect(action.payload).toEqual('taipei')
})