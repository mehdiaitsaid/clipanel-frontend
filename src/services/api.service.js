import axios from 'axios';

const authHeader = () => {
  let token = localStorage.getItem('token');
  if (token) {
      return { Authorization: 'Bearer ' + token };
  } else {
      return {};
  }
}

let Api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers:authHeader()
});

//Api.defaults.withCredentials = true;

export default Api;