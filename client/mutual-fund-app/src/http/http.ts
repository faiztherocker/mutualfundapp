import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const environmentConfig: AxiosRequestConfig = {
  baseURL: 'https://localhost:443/api',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const http: AxiosInstance = axios.create(environmentConfig);
