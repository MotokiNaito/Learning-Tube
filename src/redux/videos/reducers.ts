import { FETCH_VIDEOS, VideosState, VideoActionTypes } from './types';

const initialState: VideosState = {
  videos: []
};

export const videosReducer = (state = initialState, action: VideoActionTypes): VideosState => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        videos: action.payload
      };
    default:
      return state;
  }
};
