import { get } from '~/utils/httpRequest';

export const getAllItemHome = async () => {
    const res = await get('allitem');
    return res.data;
};

export const getAllItem = async () => {
    const res = await get('allitem');
    return res.data;
};

// export const filterProductPath = async (path, path_like) => {
//     const res = await get(path, {
//         path_like,
//     });
//     return res.data;
// };
