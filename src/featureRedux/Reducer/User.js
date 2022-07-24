const UserReducer = {
    ADDUSER(state, action) {
        const product = action.payload;
        const Usernew = [...state.User, product];
        return {
            ...state,
            display: true,
            User: Usernew,
        };
    },
};

const initState = {
    Users: [],
};

const User = (state = initState, action) => {
    if (action.type && typeof UserReducer[action.type] === 'function') {
        return UserReducer[action.type](state, action);
    }
    return state;
};

export default User;
