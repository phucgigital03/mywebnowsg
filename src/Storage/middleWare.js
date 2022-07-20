import { ADDPRODUCT, DELEPRODUCT, PATCHPRODUCT } from './action';
import { postItem, deleItem, patchItem } from '~/services/cartProducts';

const middleWare = async (action) => {
    let product;
    switch (action.type) {
        case ADDPRODUCT:
            const productItem = action.payload;
            product = await postItem(productItem);
            return product;
        case PATCHPRODUCT:
            const [indexUpdate, id, dataPatch] = action.payload;
            if (id) {
                let handler;
                product = await new Promise((resolve) => {
                    handler = setTimeout(async () => {
                        const product = await patchItem(id, dataPatch);
                        resolve(product);
                    }, 100);
                });
                clearTimeout(handler);
            }
            return [indexUpdate, product];
        case DELEPRODUCT:
            const iddele = action.payload;
            product = await deleItem(iddele);
            if (product) {
                return iddele;
            } else {
                return 'undefined';
            }
        default:
            console.log('ko co type action');
            return;
    }
};

export default middleWare;
