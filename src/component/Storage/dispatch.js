import {
    ADDPRODUCT,
    PLUSPRODUCT,
    MINUSPRODUCT,
    DELEPRODUCT,
    CLOSEMODELPRODUCTCART,
    CLOSEMODELPRODUCTCARTBTN,
} from './action';

export const addProduct = (payload) => {
    return {
        type: ADDPRODUCT,
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

export const deleProduct = (payload) => {
    return {
        type: DELEPRODUCT,
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
