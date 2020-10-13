import Axios from 'axios';

const instance = Axios.create({ timeout: 60000 })

instance.interceptors.request.use(config => {
    const { api_prefix, ...result } = config;
    result.url = `${api_prefixs[api_prefix || 0]}${config.url}`;
    return config;
});

instance.interceptors.response.use(response => {
    return response.data || response || {};
}, err => {
    return Promise.reject(err && err.response);
});

export default instance;