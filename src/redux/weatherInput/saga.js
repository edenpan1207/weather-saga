import {put, call ,takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import utils from '../../utils';
import {weatherInputType} from './type';
import {weatherAsyncSuccess, weatherAsyncFail} from './action';

export function getApi(city) {
  return axios.get(`${utils.URL}${city}&appid=${utils.APPID}`);
}

export function* asyncHandler(action) {
  try {
    const data = yield call(getApi, action.payload);
    yield put(weatherAsyncSuccess(data));
  } catch(error) {
    yield put(weatherAsyncFail(error));
  }
}

export function* watchAsync() {
  yield takeLatest(weatherInputType.WEATHER_FETCH_REQUEST, asyncHandler)
}