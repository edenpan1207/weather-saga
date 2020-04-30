import React from 'react';
import {mockStore, initialState} from '../setupTests';
import { mount } from 'enzyme';
import WeatherInput from '../src/components/WeatherInput';

let wrapped;

beforeEach(() => {
  wrapped = mount(<WeatherInput store={mockStore(initialState)} />);
})

afterEach(() => {
  wrapped.unmount();
})

it('check input and button exist', () => {
  expect(wrapped.find('input').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
})

it('input has chabge', () => {
  wrapped.find('input').simulate('change', {
    target: {
      value: 'taipei'
    }
  });
  wrapped.update();
})


it('button is click', () => {
  wrapped.find('button').simulate('click');
  wrapped.update();
})