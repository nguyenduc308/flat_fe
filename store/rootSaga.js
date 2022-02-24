import { fork, spawn } from "redux-saga/effects";
import workSaga from "./work/saga";

export default function* rootSaga() {
    yield fork(workSaga);
}
