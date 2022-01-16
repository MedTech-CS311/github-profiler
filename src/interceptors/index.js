import axios from 'axios';

axios.interceptors.request.use(
   (req) => {
      req.headers = {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
      return req;
   },
   (err) => {
      return Promise.reject(err);
   }
);