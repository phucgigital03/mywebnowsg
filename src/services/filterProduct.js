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
        console.log(error);
    }
};

// export const filterProductPath = async (path, path_like) => {
//     const res = await get(path, {
//         path_like,
//     });
//     return res.data;
// };
