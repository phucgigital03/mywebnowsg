const AuthenReducer = {
    REGISTER(state, action) {
        const { token, refreshToken } = action.payload;
        return {
            ...state,
            token,
            refreshToken,
            user: null,
        };
    },
    SIGNIN(state, action) {
        const { user, token, refreshToken } = action.payload;
        return {
            ...state,
            token,
            refreshToken,
            user,
        };
    },
    LOGOUT(state, action) {
        return {
            ...state,
            token: null,
            refreshToken: null,
            user: null,
        };
    },
};

const initState = {
    token: null,
    refreshToken: null,
    user: null,
};

const Authen = (state = initState, action) => {
    if (action.type && typeof AuthenReducer[action.type] === 'function') {
        return AuthenReducer[action.type](state, action);
    }
    return state;
};

export default Authen;
