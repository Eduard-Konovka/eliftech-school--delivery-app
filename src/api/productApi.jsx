import axios from 'axios';

const productApi = id => {
  return axios.get(`/products/${id}`).then(response => response.data);
};

export default productApi;
