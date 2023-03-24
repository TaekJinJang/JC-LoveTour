import axios from 'axios';

import {
  all,
  delay,
  fork,
  put,
  takeLatest,
  throttle,
} from 'redux-saga/effects';
import {
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  REMOVE_POST_REQUEST,
  REMOVE_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    // yield delay(1000);

    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: ADD_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function removePostAPI(data) {
  return axios.delete('/api/post', data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    // yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function updatePostAPI(data) {
  return axios.delete('/api/post', data);
}
function* updatePost(action) {
  try {
    // const result = yield call(updatePostAPI, action.data);
    // yield delay(1000);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function loadPostsAPI(lastId) {
  return axios.get(`/posts?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.lastId); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_POSTS_SUCCESS,
      data: action.data, // 게시글 10개 불러오기
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}
function loadPostAPI(data) {
  return axios.get(`/post/${data}`);
}
function* loadPost(action) {
  try {
    // const result = yield call(loadPostAPI, action.data); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_POST_SUCCESS,
      data: action.data, // 게시글 1개 불러오기
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POST_FAILURE,
      error: err.response.data,
    });
  }
}
function uploadImagesAPI(data) {
  return axios.post('/post/images', data);
}
function* uploadImages(action) {
  try {
    // const result = yield call(uploadImagesAPI, action.data); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: UPLOAD_IMAGES_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(5000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    // fork(watchLoadPosts),
    fork(watchRemovePost),
    fork(watchUpdatePost),
    fork(watchUploadImages),
    fork(watchLoadPost),
  ]);
}
