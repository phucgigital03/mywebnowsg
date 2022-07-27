import { REGISTER, SIGNIN, LOGOUT } from '../Constant/Authen';

export const register = (payload) => {
    return {
        type: REGISTER,
        payload,
    };
};

export const signin = (payload) => {
    return {
        type: SIGNIN,
        payload,
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};
