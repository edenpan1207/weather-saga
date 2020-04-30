import React from 'react';
import '../setupTests';
import { shallow } from 'enzyme';
import App from '../src/App';
import WeatherInput from '../src/components/WeatherInput';
import WeatherOutput from '../src/components/WeatherOutput';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('check weather input', () => {
  expect(wrapped.find(WeatherInput).length).toEqual(1)
})

it('check weather output', () => {
  expect(wrapped.find(WeatherOutput))
})

// testing 流程
// 1. input exist
// 2. button exist
// 3. input Change value  
// 4. click button input equal 0
// 5. test result LI list
// 6. test action
// 7. test reducer
// 8. test input error
