import { VideosState, VideoActionTypes, VideoActionTypesObject } from './types';

const initialState: VideosState = {
  videos: [],
  isLoading: false,
  errorMessage: undefined
};

export const videoListReducer = (state = initialState, action: VideoActionTypes): VideosState => {
  switch (action.type) {
    case VideoActionTypesObject.FETCH_VIDEOS_START:
      return {
        ...state,
        isLoading: true
      };
    case VideoActionTypesObject.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        videos: action.payload
      };
    case VideoActionTypesObject.FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
