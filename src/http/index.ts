/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';
import { AuthResponse } from '../models/response/authResponse';

export const API_URL = 'http://localhost:4000/';

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config: AxiosRequestConfig) => {
  if (config.headers === undefined) {
    return (config.headers = {});
  }
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async err => {
    const originRequest = err.config;
    if (err.response.status === 401 && err.config && !err.config.__isRetry) {
      originRequest.__isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(
          `http://localhost:4000/auth/refresh`,
          { withCredentials: true },
        );
        localStorage.setItem('token', response.data.acessToken);
        return $api.request(originRequest);
      } catch (e) {
        console.log('Авторизация не прошла');
      }
    }
    throw err;
  },
);

export default $api;
