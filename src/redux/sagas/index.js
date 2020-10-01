import { fork } from 'redux-saga/effects';
import { triggerWeather } from './saga';

export function* watchAsync() {
  yield fork(triggerWeather)
}