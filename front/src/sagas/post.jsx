import axios from 'axios';

import {
  all,
  call,
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
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_REQUEST,
  ADD_GALLERY_SUCCESS,
  ADD_GALLERY_FAILURE,
  ADD_GALLERY_REQUEST,
  REMOVE_POST_REQUEST,
  REMOVE_POST_FAILURE,
  REMOVE_POST_SUCCESS,
  REMOVE_REVIEW_REQUEST,
  REMOVE_REVIEW_FAILURE,
  REMOVE_REVIEW_SUCCESS,
  REMOVE_GALLERY_REQUEST,
  REMOVE_GALLERY_FAILURE,
  REMOVE_GALLERY_SUCCESS,
  UPDATE_POST_REQUEST,
  UPDATE_POST_FAILURE,
  UPDATE_POST_SUCCESS,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_FAILURE,
  UPDATE_REVIEW_SUCCESS,
  LOAD_ALL_POSTS_REQUEST,
  LOAD_ALL_POSTS_SUCCESS,
  LOAD_ALL_POSTS_FAILURE,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_FAILURE,
  LOAD_REVIEW_POSTS_REQUEST,
  LOAD_REVIEW_POSTS_SUCCESS,
  LOAD_REVIEW_POSTS_FAILURE,
  LOAD_GALLERY_POSTS_REQUEST,
  LOAD_GALLERY_POSTS_SUCCESS,
  LOAD_GALLERY_POSTS_FAILURE,
  LOAD_SEARCH_POSTS_REQUEST,
  LOAD_SEARCH_POSTS_SUCCESS,
  LOAD_SEARCH_POSTS_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  LOAD_POST_FAILURE,
  UPLOAD_IMAGES_REQUEST,
  UPLOAD_IMAGES_SUCCESS,
  UPLOAD_IMAGES_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  INCREMENT_VIEWS_REQUEST,
  INCREMENT_VIEWS_SUCCESS,
  INCREMENT_VIEWS_FAILURE,
  generateDummyPost,
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post('/post/announce/add', data);
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data); //call은 동기 fork는 비동기
    // yield delay(1000);

    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function addReviewAPI(data) {
  return axios.post('/post/review/add', data);
}

function* addReview(action) {
  try {
    const result = yield call(addReviewAPI, action.data);
    // yield delay(1000);

    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: ADD_REVIEW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_REVIEW_FAILURE,
      data: err.response.data,
    });
  }
}
function addGalleryAPI(data) {
  return axios.post('/post/gallery/add', data);
}

function* addGallery(action) {
  try {
    const result = yield call(addGalleryAPI, action.data);
    // yield delay(1000);

    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: ADD_GALLERY_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_GALLERY_FAILURE,
      data: err.response.data,
    });
  }
}
function incrementViewsAPI(data) {
  return axios.patch(`/post/announce/${data}/views`);
}

function* incrementViews(action) {
  try {
    const result = yield call(incrementViewsAPI, action.data);
    // yield delay(1000);

    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: INCREMENT_VIEWS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: INCREMENT_VIEWS_FAILURE,
      data: err.response.data,
    });
  }
}

function removeReviewAPI(data) {
  return axios.delete(`/post/review/${data}`);
}

function* removeReview(action) {
  try {
    const result = yield call(removeReviewAPI, action.data);
    // yield delay(1000);
    yield put({
      type: REMOVE_REVIEW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_REVIEW_FAILURE,
      data: err.response.data,
    });
  }
}
function removePostAPI(data) {
  return axios.delete(`/post/announce/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);

    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function removeGalleryAPI(data) {
  return axios.delete(`/post/gallery/${data}`);
}

function* removeGallery(action) {
  try {
    const result = yield call(removeGalleryAPI, action.data);

    yield put({
      type: REMOVE_GALLERY_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_GALLERY_FAILURE,
      data: err.response.data,
    });
  }
}
function updatePostAPI(data) {
  return axios.patch(`/post/announce/${data.PostId}/update`, data);
}
function* updatePost(action) {
  try {
    const result = yield call(updatePostAPI, action.data);
    // yield delay(1000);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      data: err.response.data,
    });
  }
}
function updateReviewAPI(data) {
  return axios.patch(`/post/review/${data.PostId}/update`, data);
}
function* updateReview(action) {
  try {
    const result = yield call(updateReviewAPI, action.data);
    // yield delay(1000);
    yield put({
      type: UPDATE_REVIEW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_REVIEW_FAILURE,
      data: err.response.data,
    });
  }
}
function loadPostsAPI(lastId) {
  return axios.get(`/post/announce/posts?lastId=${lastId || 0}`);
}
function* loadPosts(action) {
  try {
    const result = yield call(loadPostsAPI, action.lastId); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_POSTS_SUCCESS,
      data: result.data, // 게시글 10개 불러오기
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}
function loadReviewPostsAPI(lastId) {
  return axios.get(`/post/review/posts?lastId=${lastId || 0}`);
}
function* loadReviewPosts(action) {
  try {
    const result = yield call(loadReviewPostsAPI, action.lastId); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_REVIEW_POSTS_SUCCESS,
      data: result.data, // 모든 게시글
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_REVIEW_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}
function loadGalleryPostsAPI(lastId) {
  return axios.get(`/post/gallery/posts?lastId=${lastId || 0}`);
}
function* loadGalleryPosts(action) {
  try {
    const result = yield call(loadGalleryPostsAPI, action.lastId); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_GALLERY_POSTS_SUCCESS,
      data: result.data, // 모든 게시글
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_GALLERY_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}
function loadAllPostsAPI() {
  return axios.get(`/post/all/posts`);
}
function* loadAllPosts() {
  try {
    const result = yield call(loadAllPostsAPI); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_ALL_POSTS_SUCCESS,
      data: result.data, // 게시글 10개 불러오기
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_ALL_POSTS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadSearchPostsAPI(data, lastId) {
  return axios.get(
    // 그냥 ${data}로 하면 한글이 되기때문에 에러가 뜸 그래서 encodeURIComponent로 변형시켰다가 decodeURIComponent로 바꿔옴
    // 나중에 생각
    `/search/${encodeURIComponent(data)}?lastId=${lastId || 0}`
  );
}

function* loadSearchPosts(action) {
  try {
    // const result = yield call(loadSearchPostsAPI, action.lastId); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: LOAD_SEARCH_POSTS_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SEARCH_POSTS_FAILURE,
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
    const result = yield call(uploadImagesAPI, action.data); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error: err.response.data,
    });
  }
}
function uploadImageAPI(data) {
  return axios.post('/post/image', data);
}
function* uploadImage(action) {
  try {
    const result = yield call(uploadImageAPI, action.data); // call은 동기 fork는 비동기
    yield put({
      // put은 dispatch라고 생각하는게 편함
      type: UPLOAD_IMAGE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_IMAGE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAllLoadPosts() {
  yield takeLatest(LOAD_ALL_POSTS_REQUEST, loadAllPosts);
}
function* watchLoadPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchReviewLoadPosts() {
  yield takeLatest(LOAD_REVIEW_POSTS_REQUEST, loadReviewPosts);
}
function* watchGalleryLoadPosts() {
  yield takeLatest(LOAD_GALLERY_POSTS_REQUEST, loadGalleryPosts);
}
function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchAddReview() {
  yield takeLatest(ADD_REVIEW_REQUEST, addReview);
}
function* watchAddGallery() {
  yield takeLatest(ADD_GALLERY_REQUEST, addGallery);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchRemoveReview() {
  yield takeLatest(REMOVE_REVIEW_REQUEST, removeReview);
}
function* watchRemoveGallery() {
  yield takeLatest(REMOVE_GALLERY_REQUEST, removeGallery);
}
function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}
function* watchUpdateReview() {
  yield takeLatest(UPDATE_REVIEW_REQUEST, updateReview);
}
function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchLoadSearchPosts() {
  yield takeLatest(LOAD_SEARCH_POSTS_REQUEST, loadSearchPosts);
}
function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchUploadImage() {
  yield takeLatest(UPLOAD_IMAGE_REQUEST, uploadImage);
}
function* watchIncrementViews() {
  yield takeLatest(INCREMENT_VIEWS_REQUEST, incrementViews);
}

export default function* postSaga() {
  yield all([
    fork(watchIncrementViews),
    fork(watchAddPost),
    fork(watchAddReview),
    fork(watchAddGallery),
    fork(watchAllLoadPosts),
    fork(watchLoadPosts),
    fork(watchReviewLoadPosts),
    fork(watchGalleryLoadPosts),
    fork(watchLoadSearchPosts),
    fork(watchRemovePost),
    fork(watchRemoveReview),
    fork(watchRemoveGallery),
    fork(watchUpdatePost),
    fork(watchUpdateReview),
    fork(watchUploadImages),
    fork(watchUploadImage),
    fork(watchLoadPost),
  ]);
}
