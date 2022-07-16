import { post, patch, dele } from '~/utils/httpRequest';

export const postItem = async (data) => {
    try {
        const res = await post('cartProduct', data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const patchItem = async (id, data) => {
    try {
        const res = await patch(`cartProduct/${id}`, data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const deleItem = async (id) => {
    try {
        const res = await dele(`cartProduct/${id}`);
        return res.data;
    } catch (err) {
        console.log(err);
    }
};
