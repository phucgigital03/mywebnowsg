import { register, signin } from '../Action/Authen';
import { postUserSignIn, postUserRegister } from '~/services/authen/register';

export const registerApi = (user) => {
    return (dispatch) => {
        return (async () => {
            const dataUser = await postUserRegister(user);
            const fakeData = {
                token: null,
                user: dataUser,
            };
            if (dataUser) {
                dispatch(register(fakeData));
            }
        })();
    };
};

export const signInApi = (user) => {
    return (dispatch) => {
        return (async () => {
            const dataUser = await postUserSignIn(user);
            const fakeData = {
                token: 'sokdo39ienv',
                user: dataUser,
            };
            if (dataUser) {
                dispatch(signin(fakeData));
            }
        })();
    };
};
