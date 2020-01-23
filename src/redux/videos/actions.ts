import { Dispatch } from 'redux';
import { FETCH_VIDEOS, FetchVideosAction } from './types';
// import { youtubeAPI } from '../../apis/youtube';
// const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

// const Categories = ['React.js', 'Javascript', 'Node.js'];

export const fetchVideos = () => {
  return async (dispatch: Dispatch) => {
    // const responseReact = await youtubeAPI.get('/search', {
    //   params: {
    //     q: 'React.js',
    //     part: 'snippet',
    //     maxResults: 5,
    //     key: KEY
    //   }
    // });

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

    dispatch<FetchVideosAction>({
      type: FETCH_VIDEOS,
      payload: fetchedVideos
    });
  };
};
