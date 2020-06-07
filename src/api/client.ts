import axios, { AxiosRequestConfig } from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

client.interceptors.response.use((successConfig: AxiosRequestConfig) => {
  return Promise.resolve(successConfig.data);
}, (error) => {
  return Promise.reject(error);
});

export default client;
