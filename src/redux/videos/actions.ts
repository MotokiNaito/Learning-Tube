import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Video {
  id: number;
  title: string;
}

export interface FetchVideosAction {
  type: ActionTypes.fetchVideos;
  payload: Video[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchVideos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Video[]>(url);

    dispatch<FetchVideosAction>({
      type: ActionTypes.fetchVideos,
      payload: response.data
    });
  };
};
