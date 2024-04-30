import axios from 'axios';


const { REACT_APP_BASEURL: baseURL, REACT_APP_KEY: apikey } = process.env;

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use(config => {
  config.params = { ...config.params, apikey }; 
  return config;
});



export { axiosService };
