import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  FOLLOW_FAILURE,
  UNFOLLOW_FAILURE,
  FOLLOW_SUCCESS,
  FOLLOW_REQUEST,
  UNFOLLOW_REQUEST,
  UNFOLLOW_SUCCESS,
  LOAD_ME_INFO_FAILURE,
  LOAD_ME_INFO_SUCCESS,
  LOAD_ME_INFO_REQUEST,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  CHANGE_NICKNAME_FAILURE,
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_FOLLOWERS_SUCCESS,
  LOAD_FOLLOWERS_FAILURE,
  LOAD_FOLLOWINGS_SUCCESS,
  LOAD_FOLLOWINGS_FAILURE,
  REMOVE_FOLLOWER_REQUEST,
  REMOVE_FOLLOWER_SUCCESS,
  REMOVE_FOLLOWER_FAILURE,
} from '../reduers/user';

function removeFollowerAPI(data) {
  return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield call(removeFollowerAPI, action.data);
    yield put({
      type: REMOVE_FOLLOWER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: REMOVE_FOLLOWER_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowersAPI(data) {
  return axios.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield call(loadFollowersAPI, action.data);
    yield put({
      type: LOAD_FOLLOWERS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: err.response.data,
    });
  }
}

function loadFollowingsAPI(data) {
  return axios.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield call(loadFollowingsAPI, action.data);
    yield put({
      type: LOAD_FOLLOWINGS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_FOLLOWINGS_FAILURE,
      error: err.response.data,
    });
  }
}

function changeNicknameAPI(data) {
  return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

function loadUserAPI() {
  return axios.get('/user');
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put({
      type: LOAD_ME_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_ME_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

/*
const test = logIn({type: 'LOG_IN_REQUEST', data: {id: 'dkstn1230@naver.com'}})
test.next();
이렇게 테스트를 하기 편하다 yield를 사용하면
*/

// 로그인 할때 데이터도 같이 보내줘야 하는데 이럴땐
// 실행한 함수 안에 logIn함수 action 받아서

// call, fork 의 차이  fork는비동기, call은 동기 뭐가 다를까 call 를 하면 logInAPI가 리턴 할떄 까지 기다리면서 result 에 넣어주는데
// fork를 하면 기다리지 않고 그냥 보내버리고 바로 다음께 실행된다!!
function* logIn(action) {
  try {
    // 첫번째 자리가 함수고 그 다음부터는 매개변수들
    const result = yield call(logInAPI, action.data);

    // fork 를 사용하면 axios.post("/api/login");이거나 마찬가지 다
    // call 를 하면 axios.post("/api/login").then(() => {}) 이거랑 비슷하다
    // 정리하면 결과를 받아올떄 까지 기다리느냐 아니면 그냥 바로 넘어가느냐
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
      // data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  console.log('로그아웃 실행됨');
  return axios.post('/user/logout');
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    console.log(result);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}
function followAPI(data) {
  return axios.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield call(followAPI, action.data);
    yield put({
      type: FOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

function unfollowAPI(data) {
  return axios.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield call(unfollowAPI, action.data);
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    });
  }
}

// function signUpAPI() {
//   return axios.post('/api/signUp');
// }

// function* signUp() {
//   try {
//     // const result = yield call(logOutAPI);
//     yield delay(1000);

//     yield put({
//       type: SIGN_UP_SUCCESS,
//     });
//   } catch (err) {
//     yield put({
//       type: SIGN_UP_FAILURE,
//       error: err.response.data,
//     });
//   }
// }LoadFollorwings

function* watchRemoveFollower() {
  yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function* watchLoadFollowers() {
  yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
  yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchLoadUser() {
  yield takeLatest(LOAD_ME_INFO_REQUEST, loadUser);
}
function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnfollow() {
  yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchRemoveFollower),
    fork(watchLoadFollowers),
    fork(watchLoadFollowings),
    fork(watchChangeNickname),
    fork(watchLoadUser),
    fork(watchFollow), // call 이랑 다름
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ]);
}
