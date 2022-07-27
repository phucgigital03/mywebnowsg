import { get } from '~/utils/httpRequest';

export const getSweater = async () => {
    const res = await get('sweater');
    return res.data;
};
