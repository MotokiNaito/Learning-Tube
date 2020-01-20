import { Dispatch } from 'redux';
import { FETCH_VIDEOS, FetchVideosAction } from './types';
import { youtubeAPI } from '../../apis/youtube';
const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// const Categories = ['React.js', 'Javascript', 'Node.js'];

export const fetchVideos = () => {
  return async (dispatch: Dispatch) => {
    const responseReact = await youtubeAPI.get('/search', {
      params: {
        q: 'React.js',
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
    });

    const responseJavascript = await youtubeAPI.get('/search', {
      params: {
        q: 'Javascript',
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
    });

    const fetchedVideos = [
      {
        id: 1,
        items: responseReact.data.items,
        title: 'React'
      },
      {
        id: 2,
        items: responseJavascript.data.items,
        title: 'Javascript'
      }
    ];

    dispatch<FetchVideosAction>({
      type: FETCH_VIDEOS,
      payload: fetchedVideos
    });
  };
};
