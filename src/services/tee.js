import { get } from '~/utils/httpRequest';

export const getTee = async () => {
    const res = await get('tee');
    return res.data;
};
