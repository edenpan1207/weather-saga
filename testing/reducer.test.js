import * as actions from '../src/redux/weatherInput/action';
import reducer from '../src/redux/weatherInput/reducer';
import {initialState} from '../setupTest';

it('check reducer', () => {
  const action = actions.inputWeather('taipei');
  const newState = {
    city: 'taipei',
    results: [],
    errorMessage: undefined,
  }

  expect(reducer(initialState, action)).toEqual(newState)
})