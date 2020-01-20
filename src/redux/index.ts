import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { videosReducer } from './videos/reducers';

const rootReducers = combineReducers({
  videos: videosReducer
});

export const store = createStore(rootReducers, applyMiddleware(thunk));
