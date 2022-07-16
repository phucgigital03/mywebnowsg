import { useReducer } from 'react';
import Dispatchter from '~/Storage/dipatchter';

function useReducerWithMiddleWare(reducer, initState, middleWare) {
    const [state, dispatch] = useReducer(reducer, initState);
    const dispatchWithMiddleWare = async (action) => {
        const resultData = await middleWare(action);
        Dispatchter(resultData, action, dispatch);
    };
    return [state, dispatchWithMiddleWare];
}

export default useReducerWithMiddleWare;
