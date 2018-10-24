import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducers from './reducers';

export default function configureStore(initialState) {
  const store = createStore(rootReducers, {}, applyMiddleware(ReduxThunk));

  if (module.hot) {
    // console.log("in module.hot");
    console.log(rootReducers);
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer)
    });
  }
    return store;
}
