import { get } from '~/utils/httpRequest';

export const getPants = async () => {
    const res = await get('pants');
    return res.data;
};
