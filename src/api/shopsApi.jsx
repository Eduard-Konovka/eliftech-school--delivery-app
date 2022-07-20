import axios from 'axios';

const shopsApi = () => {
  return axios.get(`/shops`).then(response => response.data);
};

export default shopsApi;
