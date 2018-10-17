import { put, takeLatest } from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import { REQUEST_POSTS, dispatchReceivePosts } from './actions';

export function* watchGetPosts() {
  yield takeLatest(REQUEST_POSTS, fetchPosts);
}

export function* fetchPosts(action) {
  // const state = yield select();
  const { subreddit } = action;
  try {
    const res = yield fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const data = yield res.json();
    yield put(dispatchReceivePosts(subreddit, data));
  } catch (err) {
    yield put(dispatchReceivePosts(subreddit, null));
  }
}
