import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    const res = await httpRequest.get(path, option);
    return res;
};

export const post = async (path, option = {}) => {
    const res = await httpRequest.post(path, option);
    return res;
};

export const patch = async (path, option = {}) => {
    const res = await httpRequest.patch(path, option);
    return res;
};

export const dele = async (path, option = {}) => {
    const res = await httpRequest.delete(path, option);
    return res;
};

export default httpRequest;
