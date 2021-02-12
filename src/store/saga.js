import {DELETE_ITEM, EDIT_ITEM, FETCH_DATA, UPDATE_ITEM} from "./actionTypes";
import {fetchedData, updateItem} from "./actionCreators";
import API from "../utils/API";
import { all, call, takeEvery, select, put, fork } from 'redux-saga/effects';

function* fetchData() {
    try {
        const res = yield API.get('/', {}).then((resp)=> resp.data)
        if(!res.length) return
        res.map(i=> i.isEditing = false)
        const action = fetchedData(res);
        yield put(action);
    } catch (e) {
        console.log("Error", e);
    }
}

function* deleteItem({value}) {
    try {
        console.log(value);
        yield call(fetchData)
    }catch (e) {
        console.log("Can't delete item", e);
    }
}

function* editItem({value}) {
    try {
        const action = fetchedData(value)
        yield put(action)
    }catch (e) {
        console.log("Can't edit item", e);
    }
}

function* update({value}) {
    try {
        const res = yield API.post(`/${value._id}`, {
            value
        }).then((resp)=> resp.data)
        yield put(updateItem(res))
    }catch (e) {
        console.log("Can't edit item", e);
    }
}

function* saga() {
    yield all([
        takeEvery(FETCH_DATA, fetchData),
        takeEvery(EDIT_ITEM, editItem)
    ])
}

export default saga;
