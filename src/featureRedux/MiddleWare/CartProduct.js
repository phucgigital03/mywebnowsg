import { postItem, deleItem, patchItem } from '~/services/ui/cartProducts';
import { addProduct, updateProduct, deleProduct } from '../Action/CartProduct';

export const addProductApi = (productItem) => {
    return (dispatch) => {
        return (async () => {
            const product = await postItem(productItem);
            dispatch(addProduct(product));
        })();
    };
};

export const patchProductApi = (dataPatchView) => {
    return (dispatch) => {
        return (async () => {
            const [indexUpdate, id, dataPatch] = dataPatchView;
            if (id) {
                let handler;
                const product = await new Promise((resolve) => {
                    handler = setTimeout(async () => {
                        const product = await patchItem(id, dataPatch);
                        resolve(product);
                    }, 100);
                });
                clearTimeout(handler);
                dispatch(updateProduct(indexUpdate, product));
            }
        })();
    };
};

export const deleProductApi = (IdDeleView) => {
    return (dispatch) => {
        return (async () => {
            const iddele = IdDeleView;
            const product = await deleItem(iddele);
            if (product) {
                dispatch(deleProduct(iddele));
            }
        })();
    };
};
