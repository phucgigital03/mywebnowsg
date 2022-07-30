import { post } from '~/utils/httpRequest';

export const postUserRegister = async (user) => {
    try {
        const res = await post('register', user);
        return res.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};

export const postUserSignIn = async (user) => {
    try {
        const res = await post('signIn', user);
        return res.data;
    } catch (error) {
        console.log(error);
        return undefined;
    }
};
