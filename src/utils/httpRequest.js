import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'http://localhost:3000/api/',
});

export const get = async (path, option = {}) => {
    try {
        const res = await httpRequest.get(path, {
            params: option,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default httpRequest;
