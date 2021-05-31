import {
    all,
    fork,
    call,
    takeEvery,
    put,
    takeLatest,
    delay,
} from "redux-saga/effects";
function addPostAPI(data) {
    return axios.post("/api/addpost", data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);

        yield put({
            type: "ADD_POST_SUCCESS",
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest("ADD_POST", addPost);
}

export default function* postSaga() {
    yield all([fork(watchAddPost)]);
}
