export const initialState = {
  logInLoading: true, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  user: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const logInRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};
export const logOutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        logInLoading: true,
        user: action.data,
      };
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };

    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
