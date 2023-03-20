const initialState = {
  user: {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
  },
  post: {
    mainPosts: [],
  },
};

const login = (data) => {
  return {
    type: 'LOG_IN',
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  }
};
