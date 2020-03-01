import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import {watchAsync} from '../redux/weatherInput/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAsync);