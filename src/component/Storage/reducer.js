function calculatePriceOld(state, indexUpdate) {
    const priceProductOld = Math.round(
        state.cartProduct[indexUpdate].price / state.cartProduct[indexUpdate].manyProduct,
    );
    return priceProductOld;
}

// for fn ADDPRODUCT
function checkProductLike(state, payload) {
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
}

function updatePriceAndManyProduct(state, payload, indexUpdate) {
    const priceProductOld = calculatePriceOld(state, indexUpdate);
    const manyProductNew = payload.manyProduct + state.cartProduct[indexUpdate].manyProduct;
    const priceProductNew = manyProductNew * priceProductOld;
    state.cartProduct[indexUpdate].manyProduct = manyProductNew;
    state.cartProduct[indexUpdate].price = priceProductNew;
    return state.cartProduct;
}

// for fn PLUSPRODUCT and MINUSPRODUCT

function updatePriceAndMany(state, indexPlus, valueManyPlus) {
    const priceProductOldPlus = calculatePriceOld(state, indexPlus);
    const priceProductNewPlus = priceProductOldPlus * valueManyPlus;
    state.cartProduct[indexPlus].manyProduct = valueManyPlus;
    state.cartProduct[indexPlus].price = priceProductNewPlus;
}

const featureUpdateState = {
    ADDPRODUCT(state, action) {
        const { payload } = action;
        const [indexUpdate, isbool] = checkProductLike(state, payload);
        if (isbool) {
            const cartProductnew = updatePriceAndManyProduct(state, payload, indexUpdate);
            return {
                ...state,
                display: true,
                cartProduct: cartProductnew,
            };
        } else {
            return {
                ...state,
                display: true,
                cartProduct: [...state.cartProduct, payload],
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
        updatePriceAndMany(state, indexPlus, valueManyPlus);
        return {
            ...state,
        };
    },
    MINUSPRODUCT(state, action) {
        const [indexMinus, valueManyMinus] = action.payload;
        updatePriceAndMany(state, indexMinus, valueManyMinus);
        return {
            ...state,
        };
    },
    DELEPRODUCT(state, action) {
        const index = action.payload;
        const cartProductdele = state.cartProduct;
        cartProductdele.splice(index, 1);
        return {
            ...state,
            cartProduct: cartProductdele,
        };
    },
};

const initState = {
    display: false,
    cartProduct: [],
};

function reducer(state, action) {
    if (action.type) {
        return featureUpdateState[action.type](state, action);
    }
    return state;
}

export { initState };
export default reducer;
