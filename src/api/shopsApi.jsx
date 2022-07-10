import axios from 'axios';

const BASE_URL = 'http://localhost:3004';

const shopsApi = () => {
  return axios.get(`${BASE_URL}/shops`).then(response => response.data);
};

export default shopsApi;
