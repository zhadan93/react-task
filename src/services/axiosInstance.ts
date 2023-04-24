import axios from 'axios';
import ENDPOINTS from '@constants/endpoints';

const axiosInstance = axios.create({
  baseURL: ENDPOINTS.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ab8140c93b4c93d4e464166c2c5f01ef82eb5b99',
  },
});

export default axiosInstance;
