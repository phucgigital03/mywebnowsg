import { get } from '~/utils/httpRequest';

export const filterProduct = async (path, id) => {
    try {
        const res = await get(path, {
            params: {
                id,
            },
        });
        return res.data;
    } catch (error) {
        const res = await new Promise((resolve) => {
            resolve([]);
        });
        return res;
    }
};
