import {
    DELETE_ITEM, EDIT_ITEM,
    FETCH_DATA,
    FETCHED_DATA, UPDATE_ITEM
} from './actionTypes';

const defaultState = {
    data: []
};

export default (state = defaultState, action) => {
    if (action.type === FETCHED_DATA) {
        return { ...state, data: action.data }
    }


    if(action.type === EDIT_ITEM) {
        return { ...state, data: state.data.find((id)=> id === action.data._id).map(i => i.isEditing = true)}
    }

    if(action.type === UPDATE_ITEM) {

        return {...state, data: action.data}
    }

    return state;
};
