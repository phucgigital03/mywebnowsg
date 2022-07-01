import {
    ADDPRODUCT,
    PLUSPRODUCT,
    MINUSPRODUCT,
    DELEPRODUCT,
    CLOSEMODELPRODUCTCART,
    CLOSEMODELPRODUCTCARTBTN,
} from './action.js';

const initState = {
    display: false,
    cartProduct: [],
};

function reducer(state, action) {
    switch (action.type) {
        case ADDPRODUCT:
            const { payload } = action;
            return {
                ...state,
                display: true,
                cartProduct: [...state.cartProduct, payload],
            };
        case CLOSEMODELPRODUCTCART:
            const checked = action.payload;
            return {
                ...state,
                display: checked,
                cartProduct: [...state.cartProduct],
            };
        case CLOSEMODELPRODUCTCARTBTN:
            return {
                ...state,
                display: !state.display,
                cartProduct: [...state.cartProduct],
            };
        case PLUSPRODUCT:
            const [indexPlus, valueManyPlus] = action.payload;
            state.cartProduct[indexPlus].manyProduct = valueManyPlus;
            return {
                ...state,
            };
        case MINUSPRODUCT:
            const [indexMinus, valueManyMinus] = action.payload;
            state.cartProduct[indexMinus].manyProduct = valueManyMinus;
            return {
                ...state,
            };
        case DELEPRODUCT:
            const index = action.payload;
            const cartProductdele = state.cartProduct;
            cartProductdele.splice(index, 1);
            return {
                ...state,
                cartProduct: cartProductdele,
            };
        default:
            return state;
    }
}

export { initState };
export default reducer;
