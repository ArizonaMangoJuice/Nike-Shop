import {useState} from 'react';

const useGlobalState = () => {
    const [state, setState] = useState({value: 'fa', items: []});

    const actions = action => {
        const {type, payload} = action;

        switch (type) {
            case 'setState': 
                return setState(payload);
            case 'increment': 
                return setState(payload);
            case 'decrement': 
                console.log('inside the hook', payload)
                return setState(payload);
            case 'remove': 
                return setState(payload);
            default:
                return state;
        }
    }
    return {state, actions}
};

export default useGlobalState;
