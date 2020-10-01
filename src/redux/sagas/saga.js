// 1. composite api function
// 2. make ajax handler logic
// 3. trigger ajax handler
// 4. export to component

import { call, put, select, take } from 'redux-saga/effects';
import axios from 'axios';
import { weatherAsyncStart, weatherAsyncSuccess, weatherAsyncFail, weatherAsyncHandler } from '../weatherInput/action';
import utils from '../../utils';
import { cityState } from '../weatherInput/selector';

function getWeatherApi(city) {
  return axios.get(`${utils.URL}${city}&appid=${utils.APPID}`);
}

function* weatherApiHandler() {
  const cityName = yield select(cityState);

  yield put(weatherAsyncStart())
  try {
    const data = yield call(getWeatherApi, cityName);
    const newData = {
      id: data.data.id,
      name: data.data.name,
      temp: data.data.main.temp
    }
    
    yield put(weatherAsyncSuccess(newData))
  } catch(error) {
    yield put(weatherAsyncFail(error));
  }
}

export function* triggerWeather() {
  while(true) {
    yield take(weatherAsyncHandler().type);
    yield call(weatherApiHandler);
  }
}