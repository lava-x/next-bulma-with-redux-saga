/* global fetch */
import { select, takeLatest } from 'redux-saga/effects';

import { INCREMENT, DECREMENT } from './actions';

export function* watchGetCount() {
  yield takeLatest(INCREMENT, checkLatestCount);
}

export function* watchGetDecrementCount() {
  yield takeLatest(DECREMENT, checkLatestCount);
}

export function* checkLatestCount() {
  const state = yield select();
  const countState = state.get('Count');
  console.log('latest count check', countState.get('count'));
}
