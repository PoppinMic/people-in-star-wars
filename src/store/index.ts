import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import sagas from './sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// !Cannot directly use redux-devtools extension with typescript
// const composeEnhancers =
//   (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

// then run the saga
sagaMiddleware.run(sagas);

export default store;
