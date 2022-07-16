import LocalStorage from '~/features/LocalStorage';
import { KEY_CARTPRODUCT } from '~/features/LocalStorage';

const localStoragefn = LocalStorage();

const featureUpdateState = {
    ADDPRODUCT(state, action) {
        const product = action.payload;
        const cartProductnew = [...state.cartProduct, product];
        localStoragefn.setLocal(KEY_CARTPRODUCT, cartProductnew);
        return {
            ...state,
            display: true,
            cartProduct: cartProductnew,
        };
    },
    PATCHPRODUCT(state, action) {
        const [indexUpdate, product] = action.payload;
        if (indexUpdate || indexUpdate === 0) {
            state.cartProduct.splice(indexUpdate, 1, product);
            localStoragefn.setLocal(KEY_CARTPRODUCT, state.cartProduct);
        }
        return {
            ...state,
            display: true,
            cartProduct: state.cartProduct,
        };
    },
    DELEPRODUCT(state, action) {
        const id = Number(action.payload);
        state.cartProduct.forEach((product, index) => {
            if (product.id === id) {
                state.cartProduct.splice(index, 1);
            }
        });
        localStoragefn.setLocal(KEY_CARTPRODUCT, state.cartProduct);
        return {
            ...state,
            cartProduct: state.cartProduct,
        };
    },
    CLOSEMODELPRODUCTCART(state, action) {
        const checked = action.payload;
        return {
            ...state,
            display: checked,
            cartProduct: state.cartProduct,
        };
    },
    CLOSEMODELPRODUCTCARTBTN(state) {
        return {
            ...state,
            display: !state.display,
            cartProduct: [...state.cartProduct],
        };
    },
};

const initState = {
    display: false,
    cartProduct: localStoragefn.getLocal(KEY_CARTPRODUCT),
};

function reducer(state, action) {
    if (action.type) {
        return featureUpdateState[action.type](state, action);
    }
    return state;
}

export { initState };
export default reducer;
