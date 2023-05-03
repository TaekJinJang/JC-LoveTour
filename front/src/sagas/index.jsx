import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import adminSaga from './admin';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3005';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(adminSaga)]);
}
