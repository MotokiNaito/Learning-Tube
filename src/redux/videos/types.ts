export interface Video {
  id: number;
  items: any[];
  title: string;
}

export interface VideosState {
  videos: Video[];
}

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

export interface FetchVideosAction {
  type: typeof FETCH_VIDEOS;
  payload: Video[];
}

export type VideoActionTypes = FetchVideosAction;
