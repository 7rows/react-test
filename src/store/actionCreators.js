import {
    FETCH_DATA,
    FETCHED_DATA,
    DELETE_ITEM, EDIT_ITEM, UPDATE_ITEM
} from "./actionTypes"

export const fetchData=()=>({
    type: FETCH_DATA
})

export const fetchedData=(data)=>({
    type: FETCHED_DATA,
    data
})

export const deleteItem=(value)=>({
  type: DELETE_ITEM,
  value
})

export const editItem=(value)=>({
    type: EDIT_ITEM,
    value
})


export const updateItem=(value)=>({
    type: UPDATE_ITEM,
    value
})