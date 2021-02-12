import {
    DELETE_ITEM,
    FETCH_DATA,
    FETCHED_DATA
} from './actionTypes';

const defaultState = {
    data: []
};

export default (state = defaultState, action) => {
    if (action.type === FETCHED_DATA) {
        return { ...state, data: action.data }
    }

    return state;
};
