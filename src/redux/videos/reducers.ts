import { Video } from './actions';
import { Action, ActionTypes } from './types';

export const videosReducer = (state: Video[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchVideos:
      return action.payload;
    default:
      return state;
  }
};
