import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { youtubeAPI } from '../../apis/youtube';
const KEY = '';

export interface Video {
  etag: string;
  snippet: {
    title: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

export interface FetchVideosAction {
  type: ActionTypes.fetchVideos;
  payload: Video[];
}

export const fetchVideos = () => {
  return async (dispatch: Dispatch) => {
    const response = await youtubeAPI.get('/search', {
      params: {
        q: 'React.js',
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
    });

    console.log(response);

    dispatch<FetchVideosAction>({
      type: ActionTypes.fetchVideos,
      payload: response.data.items
    });
  };
};
