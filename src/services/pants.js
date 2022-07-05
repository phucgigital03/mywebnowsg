import { get } from '~/utils/httpRequest';

export const getPants = async () => {
    const res = await get('pants');
    return res.data;
};

// export const filterProductPath = async (path, path_like) => {
//     const res = await get(path, {
//         path_like,
//     });
//     return res.data;
// };
