import axios from 'axios';

export const youtubeAPI = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/'
});
