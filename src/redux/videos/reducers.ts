import { FETCH_VIDEOS, VideosState, VideoActionTypes } from './types';

const initialState: VideosState = {
  videos: [],
  isLoading: false
};

export const videoListReducer = (state = initialState, action: VideoActionTypes): VideosState => {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        videos: action.payload,
        isLoading: state.isLoading
      };
    default:
      return state;
  }
};
