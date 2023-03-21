import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// 리듀서를 쉽게 설명하면 (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;
