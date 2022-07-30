import { auth } from '~/firebase';
import { register, signin, logout } from '../Action/Authen';

const postUserRegister = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const postUserSignIn = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const logOut = () => {
    return auth.signOut();
};

const resetPassWord = (email) => {
    return auth.sendPasswordResetEmail(email);
};

export const registerApi = (user) => {
    return (dispatch) => {
        return (async () => {
            const { email, password } = user;
            try {
                const resUser = await postUserRegister(email, password);
                const dataUser = {
                    token: resUser.user.uid,
                    refreshToken: resUser.user.refreshToken,
                };
                dispatch(register(dataUser));
                console.log(resUser.user);
            } catch (error) {
                console.log(error);
                return 'The email address is already in use by another account.';
            }
        })();
    };
};

export const signInApi = (user) => {
    return (dispatch) => {
        return (async () => {
            const { email, password } = user;
            console.log(email, password);
            try {
                const resUser = await postUserSignIn(email, password);
                const dataUser = {
                    user: {
                        email: resUser.user.email,
                    },
                    token: resUser.user.uid,
                    refreshToken: resUser.user.refreshToken,
                };
                dispatch(signin(dataUser));
            } catch (error) {
                console.log(error?.message.split(':')[1]);
                return error?.message.split(':')[1];
            }
        })();
    };
};

export const logOutApi = () => {
    return (dispatch) => {
        return (async () => {
            try {
                const res = await logOut();
                dispatch(logout());
            } catch (error) {
                console.log(error);
                return error?.message;
            }
        })();
    };
};

export const resetPassWordApi = (email) => {
    return (dispatch) => {
        return (async () => {
            try {
                const res = await resetPassWord(email);
                console.log(res);
                return undefined;
            } catch (error) {
                console.log(error);
                return error?.message;
            }
        })();
    };
};
