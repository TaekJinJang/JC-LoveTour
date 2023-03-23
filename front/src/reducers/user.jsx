export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  user: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};
export const logOutAction = () => {
  return {
    type: 'LOG_OUT',
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
