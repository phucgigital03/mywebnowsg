import { get } from '~/utils/httpRequest';

export const getProduct = async () => {
    const res = await get('allproduct');
    return res.data;
};

export const filterProduct = async (id) => {
    const res = await get('allproduct', {
        id,
    });
    return res.data;
};
