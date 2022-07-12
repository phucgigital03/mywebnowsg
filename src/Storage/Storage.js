import styles from './Storage.module.scss';
import classNames from 'classnames/bind';
import { createContext, useReducer } from 'react';

import reducer, { initState } from './reducer';

const cx = classNames.bind(styles);
const Data = createContext();

function Storage({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    return <Data.Provider value={[state, dispatch]}>{children}</Data.Provider>;
}

export { Data };
export default Storage;
