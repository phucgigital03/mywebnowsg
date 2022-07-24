import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import RootReducer from '../Reducer/RootReducer';

// const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store);

export { persistor };
export default store;
