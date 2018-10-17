/* global fetch */
import { delay } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

import { START_CLOCK, dispatchTickClock } from './actions';

export function* watchClock() {
  yield call(runClockSaga);
}

export function* runClockSaga() {
  yield take(START_CLOCK);
  while (true) {
    yield put(dispatchTickClock(false));
    yield call(delay, 1000);
  }
}
