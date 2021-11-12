import {createStore, applyMiddleware} from "redux";
import {reducer} from "../reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import {sagaWatcher} from "../sagas/sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagaWatcher)