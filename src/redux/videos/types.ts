export interface Video {
  id: number;
  items: any[];
  title: string;
}

export interface VideosState {
  videos: Video[];
  isLoading: boolean;
  errorMessage: string | undefined;
}

export const VideoActionTypesObject = {
  FETCH_VIDEOS_START: 'FETCH_VIDEOS_START',
  FETCH_VIDEOS_SUCCESS: 'FETCH_VIDEOS_SUCCESS',
  FETCH_VIDEOS_FAILURE: 'FETCH_VIDEOS_FAILURE'
};

interface FetchVideosStartAction {
  type: typeof VideoActionTypesObject.FETCH_VIDEOS_START;
  payload?: any;
}

interface FetchVideosSuccessAction {
  type: typeof VideoActionTypesObject.FETCH_VIDEOS_SUCCESS;
  payload: Video[];
}

interface FetchVideosFailureAction {
  type: typeof VideoActionTypesObject.FETCH_VIDEOS_FAILURE;
  payload: string;
}

export type VideoActionTypes = FetchVideosSuccessAction | FetchVideosStartAction | FetchVideosFailureAction;
