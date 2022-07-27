import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import CartProduct from './CartProduct';
import Authen from './Authen';

// component state small
const cartProPersistConfig = {
    key: 'cartProducts',
    storage: storage,
    blacklist: ['display'],
};

// main
const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['CartProducts'],
};

const RootReducer = combineReducers({
    CartProducts: persistReducer(cartProPersistConfig, CartProduct),
    Authentication: Authen,
});

export default persistReducer(rootPersistConfig, RootReducer);
