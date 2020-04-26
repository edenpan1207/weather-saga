import React from 'react';
import {mockStore, initialState} from '../setupTest';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import WeatherOutput from '../src/components/WeatherOutput';
import App from '../src/App';
import Root from '../src/root';
import moxios from 'moxios';


// let wrapped;

// beforeEach(() => {
//   wrapped = mount(<WeatherOutput store={store} />)
// })

// afterEach(() => {
//   wrapped.unmount();
// })

// it('get weather output list', () => {
//   expect(1).toEqual(1)
//   expect(wrapped.find('li').length).toEqual(2)
// })


let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'comment1'}, {name: 'comment2'}]
  })
})

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
})

it('can fetch a list of comments and display it', (done) => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  )

  wrapped.find('.click-btn').simulate('click');

  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done();
  })
})