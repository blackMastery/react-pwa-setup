import { createStore, applyMiddleware,compose } from "redux";
import  { DetailsReducer }  from "./Reducers/details";
import { initialState } from './initialState'
import thunk from "redux-thunk";
let console = window.console;

const logger = store => next => action => {
  let result;
  console.groupCollapsed("dispatching", action.type);
  console.log("prev state", store.getState());
  console.log("action", action);
  result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const saver = store => next => action => {
  let result = next(action);
  localStorage["redux-store1"] = JSON.stringify(store.getState());
  return result;
};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

    
    
    
const enhancer = composeEnhancers(applyMiddleware(thunk, logger, saver));
const storeFactory = () =>{
  var  store;

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    store = createStore(DetailsReducer,localStorage["hot_reload_store"]
    ? JSON.parse(localStorage["hot_reload_store"])
    : initialState,
    enhancer);
    module.hot.accept('./Reducers', () => {
      const nextRootReducer = require('./Reducers/index');
      store.replaceReducer(nextRootReducer);
    });
    return store
  }
  return store = createStore(
    DetailsReducer,
    localStorage["redux-store1"]
      ? JSON.parse(localStorage["redux-store1"])
      : initialState,
      enhancer

  );

}
export default storeFactory;
