import { get } from '~/utils/httpRequest';

export const getAllItemHome = async () => {
    const res = await get('allitem');
    return res.data;
};

export const getAllItem = async () => {
    const res = await get('allitem');
    return res.data;
};
