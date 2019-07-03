/* global fetch */
import { call, put, take, delay } from 'redux-saga/effects';

import { START_CLOCK, dispatchTickClock } from './actions';

export function* watchClock() {
  yield call(runClockSaga);
  return null;
}

export function* runClockSaga() {
  yield take(START_CLOCK);
  while (true) {
    yield put(dispatchTickClock(false));
    yield delay(1000);
  }
}
