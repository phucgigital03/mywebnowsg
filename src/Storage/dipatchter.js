import { ADDPRODUCT, DELEPRODUCT, PATCHPRODUCT } from '~/Storage/action';
import { addProduct, deleProduct, updateProduct } from '~/Storage/dispatchView';

function Dispatchter(resultData, action, dispatch) {
    if (resultData) {
        // required call api and update state
        switch (action.type) {
            case ADDPRODUCT:
                dispatch(addProduct(resultData));
                break;
            case PATCHPRODUCT:
                dispatch(updateProduct(...resultData));
                break;
            case DELEPRODUCT:
                dispatch(deleProduct(resultData));
                break;
            default:
        }
    } else {
        // just have update state
        dispatch(action);
    }
}

export default Dispatchter;
