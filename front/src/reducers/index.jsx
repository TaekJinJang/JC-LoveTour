import { combineReducers } from 'redux';
import admin from './admin';
import post from './post';

// 리듀서를 쉽게 설명하면 (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  admin,
  post,
});

export default rootReducer;
