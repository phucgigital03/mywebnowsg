import { ADDPRODUCT, DELEPRODUCT, PATCHPRODUCT } from './action';
import { postItem, deleItem, patchItem } from '~/services/cartHeader';

const middleWare = async (action) => {
    let product;
    switch (action.type) {
        case ADDPRODUCT:
            const productItem = action.payload;
            product = await postItem(productItem);
            return product;
        case PATCHPRODUCT:
            const [indexUpdate, id, dataPatch] = action.payload;
            product = await patchItem(id, dataPatch);
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
