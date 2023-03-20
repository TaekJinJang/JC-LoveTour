import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// 리덕스와 미들웨어 적용을 위해 필요한 모듈을 불러온다.
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import rootReducer, { rootSaga } from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// const sagaMiddleware = createSagaMiddleware();

// 루트 리듀서를 전달받아 스토어를 생성한다. composeWithDevTools 함수는 Redux DevTools의 기능을
// 사용할 수 있게 한다. applyMiddleware 함수를 통해 redux-saga 미들웨어를 적용한다.
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );

// 주의 //
// sagaMiddleware.run(rootSaga); // 리덕스 사가 미들웨어 실행

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
    {/* </Provider> */}
  </React.StrictMode>
);
