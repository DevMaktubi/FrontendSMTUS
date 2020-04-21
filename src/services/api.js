import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-3-84-60-3.compute-1.amazonaws.com:3333',
});

export default api;
