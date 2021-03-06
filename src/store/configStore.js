import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import initialState from "./reducers/initialState";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // add support for Redux dev tools;
export default () => createStore(rootReducer,initialState, composeEnhancers(applyMiddleware(thunk)));
