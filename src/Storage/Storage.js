import { createContext } from 'react';
import reducer, { initState } from './reducer';
import useReducerWithMiddleWare from '~/hooks/useReducerWithMiddleWare';
import middleWare from './middleWare';

const Data = createContext();

function Storage({ children }) {
    const [state, dispatchWithMiddleWare] = useReducerWithMiddleWare(reducer, initState, middleWare);
    return <Data.Provider value={{ state, dispatchWithMiddleWare }}>{children}</Data.Provider>;
}

export { Data };
export default Storage;
