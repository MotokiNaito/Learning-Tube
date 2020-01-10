import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { videosReducer } from './videos/reducers';
import { Video } from './videos/actions';

export interface StoreState {
  videos: Video[];
}

export const reducers = combineReducers<StoreState>({
  videos: videosReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));
