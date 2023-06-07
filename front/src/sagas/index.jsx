import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import adminSaga from './admin';
import axios from 'axios';
import { backUrl } from '../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(postSaga), fork(adminSaga)]);
}
