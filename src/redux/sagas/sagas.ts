import {call, put, takeEvery, all} from "redux-saga/effects";
import {getDog} from "../../api/api";
import {fetchDogAC, AT, requestDogAC} from "../reducers/rootReducer";

function* fetchUser() {
    try {
        console.log("fdsfdsf");
        const url: string = yield getDog();
        console.log(url);
        
        yield put(fetchDogAC(url));
    } catch (e) {
        console.error(e)
    }
}

export function* sagaWatcher() {
    yield takeEvery(AT.REQUEST_DOG, fetchUser)
}