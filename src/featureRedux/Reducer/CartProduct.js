const cartProductReducer = {
    ADDPRODUCT(state, action) {
        const product = action.payload;
        console.log(product);
        const cartProductnew = [...state.cartProducts, product];
        return {
            ...state,
            display: true,
            cartProducts: cartProductnew,
        };
    },
    UPDATEPRODUCT(state, action) {
        const [indexUpdate, product] = action.payload;
        if (indexUpdate || indexUpdate === 0) {
            if (product) {
                state.cartProducts.splice(indexUpdate, 1, product);
            }
        }
        return {
            ...state,
            display: true,
            cartProducts: [...state.cartProducts],
        };
    },
    DELEPRODUCT(state, action) {
        const id = Number(action.payload);
        state.cartProducts.forEach((product, index) => {
            if (product.id === id) {
                state.cartProducts.splice(index, 1);
            }
        });
        const cartProductnew = [...state.cartProducts];
        console.log(cartProductnew);
        return {
            ...state,
            cartProducts: cartProductnew,
        };
    },
    CLOSEMODELPRODUCTCART(state, action) {
        const checked = action.payload;
        return {
            ...state,
            display: checked,
            cartProducts: state.cartProducts,
        };
    },
    CLOSEMODELPRODUCTCARTBTN(state) {
        return {
            ...state,
            display: !state.display,
            cartProducts: [...state.cartProducts],
        };
    },
};

const initState = {
    display: false,
    cartProducts: [],
};

const CartProduct = (state = initState, action) => {
    if (action.type && typeof cartProductReducer[action.type] === 'function') {
        return cartProductReducer[action.type](state, action);
    }
    return state;
};

export default CartProduct;
