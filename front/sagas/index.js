import { all, fork } from 'redux-saga/effects';

// takeEvery 로그인
// 로그인이 실행 될떄 까지 기다리겠다
// take로 하면 일회성 이기 때문에  takeEvery 로 하면 진정한 이벤트 리스너 처럼 동작하기 때문에
// while true 를 사용 하지 않고 동작 가능하다

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    fork(postSaga), // call 이랑 다름
    fork(userSaga),
  ]);
}
