import LocalStorage from '~/features/LocalStorage';
import { KEY_CARTPRODUCT } from '~/features/LocalStorage';

const localStoragefn = LocalStorage();

const featureUpdateState = {
    calculatePriceOld(state, indexUpdate) {
        const priceProductOld = Math.round(
            state.cartProduct[indexUpdate].price / state.cartProduct[indexUpdate].manyProduct,
        );
        return priceProductOld;
    },

    // for fn ADDPRODUCT
    checkProductSame(state, payload) {
        let indexUpdate;
        const isbool = state.cartProduct.some((product, index) => {
            indexUpdate = index;
            return (
                product.nameProduct === payload.nameProduct &&
                product.colorProduct === payload.colorProduct &&
                product.sizeProduct === payload.sizeProduct
            );
        });
        return [indexUpdate, isbool];
    },

    updatePriceAndManyProduct(state, payload, indexUpdate) {
        const priceProductOld = this.calculatePriceOld(state, indexUpdate);
        const manyProductNew = payload.manyProduct + state.cartProduct[indexUpdate].manyProduct;
        const priceProductNew = manyProductNew * priceProductOld;
        state.cartProduct[indexUpdate].manyProduct = manyProductNew;
        state.cartProduct[indexUpdate].price = priceProductNew;
        return state.cartProduct;
    },

    // for fn PLUSPRODUCT and MINUSPRODUCT
    updatePriceAndMany(state, indexPlus, valueManyPlus) {
        const priceProductOldPlus = this.calculatePriceOld(state, indexPlus);
        const priceProductNewPlus = priceProductOldPlus * valueManyPlus;
        state.cartProduct[indexPlus].manyProduct = valueManyPlus;
        state.cartProduct[indexPlus].price = priceProductNewPlus;
        return state.cartProduct;
    },

    // obj work reduecer
    ADDPRODUCT(state, action) {
        let cartProductnew;
        const { payload } = action;
        const [indexUpdate, isbool] = this.checkProductSame(state, payload);
        if (isbool) {
            cartProductnew = this.updatePriceAndManyProduct(state, payload, indexUpdate);
            localStoragefn.setLocal(KEY_CARTPRODUCT, cartProductnew);
            return {
                ...state,
                display: true,
                cartProduct: cartProductnew,
            };
        } else {
            cartProductnew = [...state.cartProduct, payload];
            localStoragefn.setLocal(KEY_CARTPRODUCT, cartProductnew);
            return {
                ...state,
                display: true,
                cartProduct: cartProductnew,
            };
        }
    },
    CLOSEMODELPRODUCTCART(state, action) {
        const checked = action.payload;
        return {
            ...state,
            display: checked,
            cartProduct: [...state.cartProduct],
        };
    },
    CLOSEMODELPRODUCTCARTBTN(state) {
        return {
            ...state,
            display: !state.display,
            cartProduct: [...state.cartProduct],
        };
    },
    PLUSPRODUCT(state, action) {
        const [indexPlus, valueManyPlus] = action.payload;
        const cartProductnew = this.updatePriceAndMany(state, indexPlus, valueManyPlus);
        localStoragefn.setLocal(KEY_CARTPRODUCT, cartProductnew);
        return {
            ...state,
        };
    },
    MINUSPRODUCT(state, action) {
        const [indexMinus, valueManyMinus] = action.payload;
        const cartProductnew = this.updatePriceAndMany(state, indexMinus, valueManyMinus);
        localStoragefn.setLocal(KEY_CARTPRODUCT, cartProductnew);
        return {
            ...state,
        };
    },
    DELEPRODUCT(state, action) {
        const index = action.payload;
        const cartProductdele = state.cartProduct;
        cartProductdele.splice(index, 1);
        localStoragefn.setLocal(KEY_CARTPRODUCT, cartProductdele);
        return {
            ...state,
            cartProduct: cartProductdele,
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
