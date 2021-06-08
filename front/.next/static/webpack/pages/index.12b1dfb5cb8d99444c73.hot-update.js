webpackHotUpdate_N_E("pages/index",{

/***/ "./reduers/user.js":
/*!*************************!*\
  !*** ./reduers/user.js ***!
  \*************************/
/*! exports provided: intialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var intialState = {
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowone: false,
  unfollowError: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  singUpLoading: false,
  // 회원가입 시도중
  singUpDone: false,
  singUpError: null,
  changeNicknameLoading: false,
  // 닉네임 바꾸기 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  me: null,
  signUpData: {},
  loginData: {}
};
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: '안수환',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '블라블라'
    }, {
      nickname: '블라블라'
    }, {
      nickname: '블라블라'
    }],
    Followers: [{
      nickname: '블라블라'
    }, {
      nickname: '블라블라'
    }, {
      nickname: '블라블라'
    }]
  });
};

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_1__["default"])(state, function (draft) {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.me.Followings.push({
          id: action.data
        });
        draft.followDone = true;
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = false;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        draft.unfollowDone = true;
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = false;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.me = dummyUser(action.data);
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = false;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.singUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.singUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWVycy91c2VyLmpzIl0sIm5hbWVzIjpbImludGlhbFN0YXRlIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93b25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2luZ1VwTG9hZGluZyIsInNpbmdVcERvbmUiLCJzaW5nVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiZGF0YSIsIm5pY2tuYW1lIiwiaWQiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInB1c2giLCJ1bmZvbGxvd0RvbmUiLCJmaWx0ZXIiLCJ2IiwiZXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInVuc2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3pCQyxlQUFhLEVBQUUsS0FEVTtBQUNIO0FBQ3RCQyxZQUFVLEVBQUUsS0FGYTtBQUd6QkMsYUFBVyxFQUFFLElBSFk7QUFJekJDLGlCQUFlLEVBQUUsS0FKUTtBQUlEO0FBQ3hCQyxhQUFXLEVBQUUsS0FMWTtBQU16QkMsZUFBYSxFQUFFLElBTlU7QUFPekJDLGNBQVksRUFBRSxLQVBXO0FBT0o7QUFDckJDLFdBQVMsRUFBRSxLQVJjO0FBU3pCQyxZQUFVLEVBQUUsSUFUYTtBQVV6QkMsZUFBYSxFQUFFLEtBVlU7QUFVSDtBQUN0QkMsWUFBVSxFQUFFLEtBWGE7QUFZekJDLGFBQVcsRUFBRSxJQVpZO0FBYXpCQyxlQUFhLEVBQUUsS0FiVTtBQWFIO0FBQ3RCQyxZQUFVLEVBQUUsS0FkYTtBQWV6QkMsYUFBVyxFQUFFLElBZlk7QUFnQnpCQyx1QkFBcUIsRUFBRSxLQWhCRTtBQWdCSztBQUM5QkMsb0JBQWtCLEVBQUUsS0FqQks7QUFrQnpCQyxxQkFBbUIsRUFBRSxJQWxCSTtBQW1CekJDLElBQUUsRUFBRSxJQW5CcUI7QUFvQnpCQyxZQUFVLEVBQUUsRUFwQmE7QUFxQnpCQyxXQUFTLEVBQUU7QUFyQmMsQ0FBcEI7QUF3QkEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBRUEsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBQ0EsSUFBTUMsdUJBQXVCLEdBQUcseUJBQWhDO0FBRUEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBRUEsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjs7QUFFUCxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0FBQUEseUNBQ2JBLElBRGE7QUFFaEJDLFlBQVEsRUFBRSxLQUZNO0FBR2hCQyxNQUFFLEVBQUUsQ0FIWTtBQUloQkMsU0FBSyxFQUFFLENBQUM7QUFBRUQsUUFBRSxFQUFFO0FBQU4sS0FBRCxDQUpTO0FBS2hCRSxjQUFVLEVBQUUsQ0FDVjtBQUFFSCxjQUFRLEVBQUU7QUFBWixLQURVLEVBRVY7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FGVSxFQUdWO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBSFUsQ0FMSTtBQVVoQkksYUFBUyxFQUFFLENBQ1Q7QUFBRUosY0FBUSxFQUFFO0FBQVosS0FEUyxFQUVUO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBRlMsRUFHVDtBQUFFQSxjQUFRLEVBQUU7QUFBWixLQUhTO0FBVks7QUFBQSxDQUFsQjs7QUFpQk8sSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDTixJQUFEO0FBQUEsU0FBVztBQUMzQ08sUUFBSSxFQUFFNUIsY0FEcUM7QUFFM0NxQixRQUFJLEVBQUpBO0FBRjJDLEdBQVg7QUFBQSxDQUEzQjtBQUtBLElBQU1RLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0I7QUFBQSxTQUFPO0FBQ3hDRCxRQUFJLEVBQUV6QjtBQURrQyxHQUFQO0FBQUEsQ0FBNUI7O0FBSVAsSUFBTTJCLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsTUFBQ0MsS0FBRCx1RUFBU3JELFdBQVQ7QUFBQSxNQUFzQnNELE1BQXRCO0FBQUEsU0FBaUNDLHFEQUFPLENBQUNGLEtBQUQsRUFBUSxVQUFDRyxLQUFELEVBQVc7QUFDekUsWUFBUUYsTUFBTSxDQUFDSixJQUFmO0FBQ0UsV0FBS2hCLGNBQUw7QUFDRXNCLGFBQUssQ0FBQ3ZELGFBQU4sR0FBc0IsSUFBdEI7QUFDQXVELGFBQUssQ0FBQ3JELFdBQU4sR0FBb0IsSUFBcEI7QUFDQXFELGFBQUssQ0FBQ3RELFVBQU4sR0FBbUIsS0FBbkI7QUFDQTs7QUFDRixXQUFLaUMsY0FBTDtBQUNFcUIsYUFBSyxDQUFDdkQsYUFBTixHQUFzQixLQUF0QjtBQUNBdUQsYUFBSyxDQUFDckMsRUFBTixDQUFTNEIsVUFBVCxDQUFvQlUsSUFBcEIsQ0FBeUI7QUFBRVosWUFBRSxFQUFFUyxNQUFNLENBQUNYO0FBQWIsU0FBekI7QUFDQWEsYUFBSyxDQUFDdEQsVUFBTixHQUFtQixJQUFuQjtBQUNBOztBQUNGLFdBQUtrQyxjQUFMO0FBQ0VvQixhQUFLLENBQUN2RCxhQUFOLEdBQXNCLEtBQXRCO0FBQ0F1RCxhQUFLLENBQUNyRCxXQUFOLEdBQW9CLEtBQXBCO0FBQ0E7O0FBRUYsV0FBS2tDLGdCQUFMO0FBQ0VtQixhQUFLLENBQUNwRCxlQUFOLEdBQXdCLElBQXhCO0FBQ0FvRCxhQUFLLENBQUNsRCxhQUFOLEdBQXNCLElBQXRCO0FBQ0FrRCxhQUFLLENBQUNFLFlBQU4sR0FBcUIsS0FBckI7QUFDQTs7QUFDRixXQUFLcEIsZ0JBQUw7QUFDRWtCLGFBQUssQ0FBQ3BELGVBQU4sR0FBd0IsS0FBeEI7QUFDQW9ELGFBQUssQ0FBQ3JDLEVBQU4sQ0FBUzRCLFVBQVQsR0FBc0JTLEtBQUssQ0FBQ3JDLEVBQU4sQ0FBUzRCLFVBQVQsQ0FBb0JZLE1BQXBCLENBQTJCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDZixFQUFGLEtBQVNTLE1BQU0sQ0FBQ1gsSUFBdkI7QUFBQSxTQUEzQixDQUF0QjtBQUNBYSxhQUFLLENBQUNFLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixXQUFLbkIsZ0JBQUw7QUFDRWlCLGFBQUssQ0FBQ3BELGVBQU4sR0FBd0IsS0FBeEI7QUFDQW9ELGFBQUssQ0FBQ2xELGFBQU4sR0FBc0IsS0FBdEI7QUFDQTs7QUFFRixXQUFLZ0IsY0FBTDtBQUNFa0MsYUFBSyxDQUFDakQsWUFBTixHQUFxQixJQUFyQjtBQUNBaUQsYUFBSyxDQUFDL0MsVUFBTixHQUFtQixJQUFuQjtBQUNBK0MsYUFBSyxDQUFDaEQsU0FBTixHQUFrQixLQUFsQjtBQUNBOztBQUNGLFdBQUtlLGNBQUw7QUFDRWlDLGFBQUssQ0FBQ2pELFlBQU4sR0FBcUIsS0FBckI7QUFDQWlELGFBQUssQ0FBQ3JDLEVBQU4sR0FBV3VCLFNBQVMsQ0FBQ1ksTUFBTSxDQUFDWCxJQUFSLENBQXBCO0FBQ0FhLGFBQUssQ0FBQ2hELFNBQU4sR0FBa0IsSUFBbEI7QUFDQTs7QUFDRixXQUFLZ0IsY0FBTDtBQUNFZ0MsYUFBSyxDQUFDakQsWUFBTixHQUFxQixLQUFyQjtBQUNBaUQsYUFBSyxDQUFDL0MsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUVGLFdBQUtnQixlQUFMO0FBQ0UrQixhQUFLLENBQUM5QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0E4QyxhQUFLLENBQUM3QyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E2QyxhQUFLLENBQUM1QyxXQUFOLEdBQW9CLElBQXBCO0FBQ0E7O0FBQ0YsV0FBS2MsZUFBTDtBQUNFOEIsYUFBSyxDQUFDOUMsYUFBTixHQUFzQixLQUF0QjtBQUNBOEMsYUFBSyxDQUFDN0MsVUFBTixHQUFtQixJQUFuQjtBQUNBNkMsYUFBSyxDQUFDckMsRUFBTixHQUFXLElBQVg7QUFDQTs7QUFDRixXQUFLUSxlQUFMO0FBQ0U2QixhQUFLLENBQUM5QyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0E4QyxhQUFLLENBQUM1QyxXQUFOLEdBQW9CMEMsTUFBTSxDQUFDTyxLQUEzQjtBQUNBOztBQUVGLFdBQUtqQyxlQUFMO0FBQ0U0QixhQUFLLENBQUNNLGFBQU4sR0FBc0IsSUFBdEI7QUFDQU4sYUFBSyxDQUFDTyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FQLGFBQUssQ0FBQ3pDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTs7QUFDRixXQUFLYyxlQUFMO0FBQ0UyQixhQUFLLENBQUNNLGFBQU4sR0FBc0IsS0FBdEI7QUFDQU4sYUFBSyxDQUFDTyxVQUFOLEdBQW1CLElBQW5CO0FBQ0E7O0FBQ0YsV0FBS2pDLGVBQUw7QUFDRTBCLGFBQUssQ0FBQ00sYUFBTixHQUFzQixLQUF0QjtBQUNBTixhQUFLLENBQUN6QyxXQUFOLEdBQW9CdUMsTUFBTSxDQUFDTyxLQUEzQjtBQUNBOztBQUVGLFdBQUs5Qix1QkFBTDtBQUNFeUIsYUFBSyxDQUFDeEMscUJBQU4sR0FBOEIsSUFBOUI7QUFDQXdDLGFBQUssQ0FBQ3ZDLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0F1QyxhQUFLLENBQUN0QyxtQkFBTixHQUE0QixJQUE1QjtBQUNBOztBQUNGLFdBQUtjLHVCQUFMO0FBQ0V3QixhQUFLLENBQUN4QyxxQkFBTixHQUE4QixLQUE5QjtBQUNBd0MsYUFBSyxDQUFDdkMsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTs7QUFDRixXQUFLZ0IsdUJBQUw7QUFDRXVCLGFBQUssQ0FBQ3hDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0F3QyxhQUFLLENBQUN0QyxtQkFBTixHQUE0Qm9DLE1BQU0sQ0FBQ08sS0FBbkM7QUFDQTs7QUFFRixXQUFLckIsY0FBTDtBQUNFZ0IsYUFBSyxDQUFDckMsRUFBTixDQUFTMkIsS0FBVCxDQUFla0IsT0FBZixDQUF1QjtBQUFFbkIsWUFBRSxFQUFFUyxNQUFNLENBQUNYO0FBQWIsU0FBdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNGLFdBQUtGLGlCQUFMO0FBQ0VlLGFBQUssQ0FBQ3JDLEVBQU4sQ0FBUzJCLEtBQVQsR0FBaUJVLEtBQUssQ0FBQ3JDLEVBQU4sQ0FBUzJCLEtBQVQsQ0FBZWEsTUFBZixDQUFzQixVQUFDQyxDQUFEO0FBQUEsaUJBQU9BLENBQUMsQ0FBQ2YsRUFBRixLQUFTUyxNQUFNLENBQUNYLElBQXZCO0FBQUEsU0FBdEIsQ0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNGO0FBQ0U7QUE5R0o7QUFnSEQsR0FqSHVELENBQXhDO0FBQUEsQ0FBaEI7O0FBbUhlUyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xMmIxZGZiNWNiOGQ5OTQ0NGM3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGlhbFN0YXRlID0ge1xyXG4gIGZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIHVuZm9sbG93b25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gIGxvZ0luTG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4TspJFcclxuICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICBsb2dPdXREb25lOiBmYWxzZSxcclxuICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICBzaW5nVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpbmdVcERvbmU6IGZhbHNlLFxyXG4gIHNpbmdVcEVycm9yOiBudWxsLFxyXG4gIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsIC8vIOuLieuEpOyehCDrsJTqvrjquLAg7Iuc64+E7KSRXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gIG1lOiBudWxsLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogJ+yViOyImO2ZmCcsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFtcclxuICAgIHsgbmlja25hbWU6ICfruJTrnbzruJTrnbwnIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn67iU652867iU6528JyB9LFxyXG4gICAgeyBuaWNrbmFtZTogJ+u4lOudvOu4lOudvCcgfSxcclxuICBdLFxyXG4gIEZvbGxvd2VyczogW1xyXG4gICAgeyBuaWNrbmFtZTogJ+u4lOudvOu4lOudvCcgfSxcclxuICAgIHsgbmlja25hbWU6ICfruJTrnbzruJTrnbwnIH0sXHJcbiAgICB7IG5pY2tuYW1lOiAn67iU652867iU6528JyB9LFxyXG4gIF0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW50aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2luZ1VwRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpbmdVcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9