const AuthenReducer = {
    REGISTER(state, action) {
        const { user, token } = action.payload;
        // localStorage.setItem('token', token);
        console.log(user, token);
        return {
            ...state,
            token: token,
            user: null,
        };
    },
    SIGNIN(state, action) {
        const { user, token } = action.payload;
        return {
            ...state,
            token: token,
            user: user,
        };
    },
    LOGOUT(state, action) {
        return {
            ...state,
            token: null,
            user: null,
        };
    },
};

const initState = {
    token: null,
    user: null,
};

const Authen = (state = initState, action) => {
    if (action.type && typeof AuthenReducer[action.type] === 'function') {
        return AuthenReducer[action.type](state, action);
    }
    return state;
};

export default Authen;
