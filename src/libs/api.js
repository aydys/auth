import axios from 'axios';

const Axios = axios.create({
    baseURL: "http://apiv1.tuvsu.ru/",
    timeout: 60000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
  });

export const Get = function (url, params) {
	return Axios.get(url, {
		params: params || {}
	}).catch((err) => {
		throw err.response;
	});
};

export const Post = function (data) {
    let params = data.params || {};
    
	return Axios.post(data.url, params);
};