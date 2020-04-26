import React from 'react';
import {rootReducer} from './redux/rootReducer';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default ({initialState={}, children}) => {
  let store = createStore(rootReducer, initialState, applyMiddleware(thunk))
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}