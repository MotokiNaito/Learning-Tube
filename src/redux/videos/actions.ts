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

// const url = 'https://jsonplaceholder.typicode.com/todos';

// export const fetchTodos = () => {
//   return async (dispatch: Dispatch) => {
//     const response = await axios.get<Todo[]>(url);

//     dispatch<FetchTodoAction>({
//       type: ActionTypes.fetchTodos,
//       payload: response.data
//     });
//   };
// };
