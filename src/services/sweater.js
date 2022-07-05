import { get } from '~/utils/httpRequest';

export const getSweater = async () => {
    const res = await get('sweater');
    return res.data;
};

// export const filterProductPath = async (path, path_like) => {
//     const res = await get(path, {
//         path_like,
//     });
//     return res.data;
// };
