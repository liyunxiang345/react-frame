import axios from 'axios';
import { showLoading, hideLoading } from '@/utils/loading.js';
import { message } from 'antd';

const token = localStorage.getItem('access-token');

const config = {
    timeout: 60000,
    headers: {}
}

let loadCount = 0;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (_config) {
        _config.baseURL = process.env.REACT_APP_API;
        const token = localStorage.getItem('access-token')
        if (token) {
            _config.headers['x-access-token'] = token;
        }
        if (loadCount++ === 0) {
            showLoading();
        }
        return _config;
    },
    function (error) {
        --loadCount <= 0 && hideLoading();
        return Promise.reject(error);
    }
);

_axios.interceptors.response.use(
    function (response) {
        --loadCount <= 0 && hideLoading();
        return response.data;
    },
    function (error) {
        --loadCount <= 0 && hideLoading();
        const { response } = error;
        message.error(response.data.message);
        return Promise.reject(error.response.data);
    }
);

export default _axios;

