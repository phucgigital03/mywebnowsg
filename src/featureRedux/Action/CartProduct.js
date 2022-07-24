import {
    ADDPRODUCT,
    UPDATEPRODUCT,
    DELEPRODUCT,
    MINUSPRODUCT,
    PLUSPRODUCT,
    CLOSEMODELPRODUCTCART,
    CLOSEMODELPRODUCTCARTBTN,
} from '../Constant/CartProduct';

export const addProduct = (payload) => {
    return {
        type: ADDPRODUCT,
        payload,
    };
};

export const updateProduct = (...payload) => {
    return {
        type: UPDATEPRODUCT,
        payload,
    };
};

export const deleProduct = (payload) => {
    return {
        type: DELEPRODUCT,
        payload,
    };
};

export const plusProduct = (...payload) => {
    return {
        type: PLUSPRODUCT,
        payload,
    };
};

export const minusProduct = (...payload) => {
    return {
        type: MINUSPRODUCT,
        payload,
    };
};

export const closeModelProductCart = (payload) => {
    return {
        type: CLOSEMODELPRODUCTCART,
        payload,
    };
};

export const turnOffModelCart = () => {
    return {
        type: CLOSEMODELPRODUCTCARTBTN,
    };
};
