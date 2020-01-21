import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { videoListReducer } from './videos/reducers';
// import { loginReducer } from './login/reducers';

const rootReducers = combineReducers({
  videoList: videoListReducer
  // login: loginReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
