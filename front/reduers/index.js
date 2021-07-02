import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// 비동기 액션 만들기

// 액션 만들기
// const changeNickname = (data) => ({
//   type: 'CHANGE_NICKNAME',
//   data,
// });

// changeNickname('에베베');

// (이전상태, 액션) => 다음상태
const rootRedicer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootRedicer;
