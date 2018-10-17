import { all } from 'redux-saga/effects';
import { watchClock } from './Clock/saga';
import { watchGetCount, watchGetDecrementCount } from './Count/saga';
import { watchGetPosts } from './Posts/saga';

export default function* rootSaga() {
  yield all([
    watchClock(),
    watchGetCount(),
    watchGetDecrementCount(),
    watchGetPosts(),
  ]);
}
