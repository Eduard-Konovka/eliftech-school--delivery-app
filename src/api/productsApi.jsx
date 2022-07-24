import axios from 'axios';

const productsApi = () => {
  return axios.get('/products').then(response => response.data);
};

export default productsApi;
