import {DELETE_ITEM, FETCH_DATA} from "./actionTypes";
import {fetchedData} from "./actionCreators";
import API from "../utils/API";
import { all, call, takeEvery, select, put, fork } from 'redux-saga/effects';

function* fetchData() {
    try {
        // const res = yield API.get('/', {}).then((resp)=> resp.data)
        // if(!res.length) return
        // res.map(i=> i.isEditing = false)
        // const action = fetchedData(res);
        // yield put(action);
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

function* saga() {
    yield all([
        takeEvery(FETCH_DATA, fetchData),
        takeEvery(DELETE_ITEM, deleteItem)
    ])
}

export default saga;
