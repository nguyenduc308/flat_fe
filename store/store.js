import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage'

import reducer from './work/reducer';
import rootSaga from './rootSaga';
import workSaga from './work/saga'

// const reducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     return {
//       ...state,
//       ...action.payload, 
//     };
//   } else {
//     return rootReducer(state, action);
//   }
// }; 

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = () => {
  let store;

  const sagaMiddleware = createSagaMiddleware();

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistStore, persistReducer } = require("redux-persist");
    const persistedReducer = persistReducer({
      key: 'root',
      storage,
      whitelist: ['auth']
    }, reducer)

    store = createStore(persistedReducer, bindMiddleware([sagaMiddleware]));

    store.sagaTask = sagaMiddleware.run(rootSaga);
    store.sagaTask.toPromise().catch(error => {
      console.log('saga error', error);
      throw error;
    });
    store.__PERSISTOR = persistStore(store);

  } else {
    store = createStore(
      reducer,
      bindMiddleware([sagaMiddleware])
    );

    store.sagaTask = sagaMiddleware.run(rootSaga);

    // store.sagaTask.toPromise().catch(error => {
    //   console.log('saga error', error);

    //   throw error;
    // });

  }

  return store;
};

export default createWrapper(makeStore, {debug: false})