import axios, { type AxiosInstance } from 'axios';

// const axiosInstance = axios.create({
//   baseURL: import.meta.env.VITE_API_URL,
//   withCredentials: true,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// console.log(axiosInstance);
// export default axiosInstance;

class Http {
  instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

const http = new Http().instance;
export default http;
