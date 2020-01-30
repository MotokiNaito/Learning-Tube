import { Dispatch } from 'redux';
import { Video, VideoActionTypesObject, VideoActionTypes } from './types';
// import { youtubeAPI } from '../../apis/youtube';
// const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// const Categories = ['React.js', 'Javascript', 'Node.js'];

export const fetchVideosStart = (): VideoActionTypes => ({
  type: VideoActionTypesObject.FETCH_VIDEOS_START
});

export const fetchVideosSuccess = (videosMap: Video[]): VideoActionTypes => ({
  type: VideoActionTypesObject.FETCH_VIDEOS_SUCCESS,
  payload: videosMap
});

export const fetchVidesosFailure = (errorMessage: string): VideoActionTypes => ({
  type: VideoActionTypesObject.FETCH_VIDEOS_FAILURE,
  payload: errorMessage
});

const fetchedVideos = [
  {
    id: 1,
    items: [
      {
        id: 1,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 2,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 3,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 4,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 5,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 6,
        url: 'https://via.placeholder.com/400x300'
      }
    ],
    title: 'React'
  },
  {
    id: 2,
    items: [
      {
        id: 1,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 2,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 3,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 4,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 5,
        url: 'https://via.placeholder.com/400x300'
      }
    ],
    title: 'Javascript'
  },
  {
    id: 2,
    items: [
      {
        id: 1,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 2,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 3,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 4,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 5,
        url: 'https://via.placeholder.com/400x300'
      }
    ],
    title: 'Flutter'
  },
  {
    id: 2,
    items: [
      {
        id: 1,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 2,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 3,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 4,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 5,
        url: 'https://via.placeholder.com/400x300'
      }
    ],
    title: 'Python'
  },
  {
    id: 2,
    items: [
      {
        id: 1,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 2,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 3,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 4,
        url: 'https://via.placeholder.com/400x300'
      },
      {
        id: 5,
        url: 'https://via.placeholder.com/400x300'
      }
    ],
    title: 'Typescript'
  }
];

export const fetchVideosStartAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchVideosStart());
    try {
      // const responseReact = await youtubeAPI.get('/search', {
      //   params: {
      //     q: 'React.js',
      //     part: 'snippet',
      //     maxResults: 5,
      //     key: KEY
      //   }
      // });
      dispatch(fetchVideosSuccess(fetchedVideos));
    } catch (err) {
      dispatch(fetchVidesosFailure(err.message));
    }
  };
};
