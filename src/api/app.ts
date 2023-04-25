import axios from 'axios';

export const app = axios.create({
  baseURL: 'https://waiterapi-production-5243.up.railway.app',
});
