module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\pages\\_app.js";









const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(NodeBird)));

/***/ }),

/***/ "./reduers/index.js":
/*!**************************!*\
  !*** ./reduers/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reduers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reduers/post.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // 비동기 액션 만들기
// 액션 만들기

const changeNickname = data => {
  return {
    type: "CHANGE_NICKNAME",
    data
  };
};

changeNickname("에베베"); // (이전상태, 액션) => 다음상태

const rootRedicer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootRedicer);

/***/ }),

/***/ "./reduers/post.js":
/*!*************************!*\
  !*** ./reduers/post.js ***!
  \*************************/
/*! exports provided: intialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const intialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
}; // export const generateDummyPost = () => Array(10)
//   .fill()
//   .map(() => ({
//     id: shortId.generate(),
//     User: {
//       id: shortId.generate(),
//       nickname: faker.name.findName(),
//     },
//     content: faker.lorem.paragraph(),
//     Images: [
//       {
//         src: faker.image.image(),
//       },
//     ],
//     Comments: [
//       {
//         id: shortId.generate(),
//         User: {
//           id: shortId.generate(),
//           nickname: faker.name.findName(),
//         },
//         content: faker.lorem.sentence,
//       },
//     ],
//   }));
// intialState.mainPosts = intialState.mainPosts.concat(generateDummyPost());

const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
}); // const dummyComment = (data) => ({
//   id: shortId.generate(),
//   content: data,
//   User: {
//     id: 1,
//     nickname: '안수횐',
//   },
// });
// const dummyPost = (data) => ({
//   id: data.id,
//   content: data.content,
//   User: {
//     id: 1,
//     nickname: '안수환',
//   },
//   Images: [],
//   Comments: [],
// });
//  이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
// state를 조작하면 안된다 draft만 조작

const reducer = (state = intialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = action.data.concat(draft.mainPosts);
      draft.hasMorePosts = draft.mainPosts.length < 50;
      break;

    case LOAD_POSTS_FAILURE:
      draft.loadPostsLoading = false;
      draft.loadPostsError = action.error;
      break;

    case ADD_POST_REQUEST:
      draft.addPostLoading = true;
      draft.addPostDone = false;
      draft.addPostError = null;
      break;

    case ADD_POST_SUCCESS:
      draft.addPostLoading = false;
      draft.addPostDone = true;
      draft.mainPosts.unshift(action.data);
      break;

    case ADD_POST_FAILURE:
      draft.addPostLoading = false;
      draft.addPostError = action.error;
      break;

    case REMOVE_POST_REQUEST:
      draft.removePostLoading = true;
      draft.removePostDone = false;
      draft.removePostError = null;
      break;

    case REMOVE_POST_SUCCESS:
      {
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        break;
      }

    case REMOVE_POST_FAILURE:
      draft.removePostLoading = false;
      draft.removePostError = action.error;
      break;

    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;

    case ADD_COMMENT_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data.content);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break; // const postIndex = state.mainPosts.findIndex(
        //   (v) => v.id === action.data.postId,
        // );
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
      }

    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reduers/user.js":
/*!*************************!*\
  !*** ./reduers/user.js ***!
  \*************************/
/*! exports provided: intialState, LOAD_ME_INFO_REQUEST, LOAD_ME_INFO_SUCCESS, LOAD_ME_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ME_INFO_REQUEST", function() { return LOAD_ME_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ME_INFO_SUCCESS", function() { return LOAD_ME_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_ME_INFO_FAILURE", function() { return LOAD_ME_INFO_FAILURE; });
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
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const intialState = {
  loadUserLoading: false,
  // 유저 정보 시도중
  loadUserDone: false,
  loadUserError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
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
const LOAD_ME_INFO_REQUEST = 'LOAD_ME_INFO_REQUEST';
const LOAD_ME_INFO_SUCCESS = 'LOAD_ME_INFO_SUCCESS';
const LOAD_ME_INFO_FAILURE = 'LOAD_ME_INFO_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME'; // const dummyUser = (data) => ({
//   ...data,
//   nickname: '안수환',
//   id: 1,
//   Posts: [{ id: 1 }],
//   Followings: [
//     { id: '블라블라' },
//     { id: '블라블라' },
//     { id: '블라블라' },
//   ],
//   Followers: [
//     { id: '블라블라' },
//     { id: '블라블라' },
//     { id: '블라블라' },
//   ],
// });

const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
});

const reducer = (state = intialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case LOAD_ME_INFO_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_ME_INFO_SUCCESS:
      draft.loadUserLoading = false;
      draft.me = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_ME_INFO_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = false;
      break;

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
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
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
      draft.me = action.data;
      draft.logInDone = true;
      break;

    case LOG_IN_FAILURE:
      draft.logInLoading = false;
      draft.logInError = action.error;
      break;

    case LOG_OUT_REQUEST:
      draft.logOutLoading = true;
      draft.logOutError = null;
      draft.logOutDone = false;
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
      draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");

 // takeEvery 로그인
// 로그인이 실행 될떄 까지 기다리겠다
// take로 하면 일회성 이기 때문에  takeEvery 로 하면 진정한 이벤트 리스너 처럼 동작하기 때문에
// while true 를 사용 하지 않고 동작 가능하다



axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = 'http://localhost:3065';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), // call 이랑 다름
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduers/post */ "./reduers/post.js");
/* harmony import */ var _reduers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reduers/user */ "./reduers/user.js");

 // import shortId from 'shortid';

 // import axios from 'axios';



function loadPostsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts', data);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', {
    content: data
  });
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data); // yield delay(1000);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
} // function removePostAPI(data) {
//   return axios.delete(`/post/${data.postId}/comment`, data, {
//     withCredentials: true,
//   });
// }


function* removePost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    console.log('result', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reduers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reduers/user */ "./reduers/user.js");




function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadUser() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_ME_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_ME_INFO_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/login', data);
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
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data); // fork 를 사용하면 axios.post("/api/login");이거나 마찬가지 다
    // call 를 하면 axios.post("/api/login").then(() => {}) 이거랑 비슷하다
    // 정리하면 결과를 받아올떄 까지 기다리느냐 아니면 그냥 바로 넘어가느냐

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data // data: result.data,

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI() {
  console.log('로그아웃 실행됨');
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
} // function signUpAPI() {
//   return axios.post('/api/signUp');
// }


function* follow(action) {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
} // function signUpAPI() {
//   return axios.post('/api/signUp');
// }


function* unFollow(action) {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
} // function signUpAPI() {
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
// }


function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_ME_INFO_REQUEST"], loadUser);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unFollow);
}

function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], signUp);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), // call 이랑 다름
  Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reduers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reduers */ "./reduers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reduers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1ZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiY2hhbmdlTmlja25hbWUiLCJkYXRhIiwidHlwZSIsInJvb3RSZWRpY2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsIkhZRFJBVEUiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJpbnRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImlkIiwiZmluZCIsIlBvc3RJZCIsIkNvbW1lbnRzIiwiY29udGVudCIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2luZ1VwTG9hZGluZyIsInNpbmdVcERvbmUiLCJzaW5nVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0FEX01FX0lORk9fUkVRVUVTVCIsIkxPQURfTUVfSU5GT19TVUNDRVNTIiwiTE9BRF9NRV9JTkZPX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsIkZvbGxvd2luZ3MiLCJwdXNoIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJQb3N0cyIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsImxvYWRQb3N0c0FQSSIsImdldCIsImxvYWRQb3N0cyIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImFkZFBvc3RBUEkiLCJyZW1vdmVQb3N0IiwiZGVsYXkiLCJhZGRDb21tZW50QVBJIiwicG9zdElkIiwiY29uc29sZSIsImxvZyIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwibG9hZFVzZXJBUEkiLCJsb2FkVXNlciIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3ciLCJ1bkZvbGxvdyIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFD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R0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJMLGdCQUFqQixDQUFwQjtBQUNBLFFBQU1RLFFBQVEsR0FDVixRQUNNQyxTQUROLEdBRU1DLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FIN0I7QUFLQSxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUMvSCxnREFBRCxFQUFVMEgsUUFBVixDQUF6QjtBQUNBSSxPQUFLLENBQUNFLFFBQU4sR0FBaUJULGNBQWMsQ0FBQ1UsR0FBZixDQUFtQnpELDhDQUFuQixDQUFqQjtBQUNBLFNBQU9zRCxLQUFQO0FBQ0gsQ0FYRDs7QUFhQSxNQUFNM0ssT0FBTyxHQUFHK0ssd0VBQWEsQ0FBQ1osY0FBRCxFQUFpQjtBQUMxQ2EsT0FBSztBQURxQyxDQUFqQixDQUE3QjtBQUllaEwsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuLy8g67mE64+Z6riwIOyVoeyFmCDrp4zrk6TquLBcclxuXHJcbi8vIOyVoeyFmCDrp4zrk6TquLBcclxuY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBcIkNIQU5HRV9OSUNLTkFNRVwiLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY2hhbmdlTmlja25hbWUoXCLsl5DrsqDrsqBcIik7XHJcblxyXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxyXG5jb25zdCByb290UmVkaWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVzZXIsXHJcbiAgICBwb3N0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWRpY2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW50aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAoKSA9PiBBcnJheSgxMClcclxuLy8gICAuZmlsbCgpXHJcbi8vICAgLm1hcCgoKSA9PiAoe1xyXG4vLyAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgIFVzZXI6IHtcclxuLy8gICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgIH0sXHJcbi8vICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuLy8gICAgIEltYWdlczogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICAgIENvbW1lbnRzOiBbXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgIFVzZXI6IHtcclxuLy8gICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UsXHJcbi8vICAgICAgIH0sXHJcbi8vICAgICBdLFxyXG4vLyAgIH0pKTtcclxuXHJcbi8vIGludGlhbFN0YXRlLm1haW5Qb3N0cyA9IGludGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoKSk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICBjb250ZW50OiBkYXRhLFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgbmlja25hbWU6ICfslYjsiJjtmpAnLFxyXG4vLyAgIH0sXHJcbi8vIH0pO1xyXG5cclxuLy8gY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbi8vICAgaWQ6IGRhdGEuaWQsXHJcbi8vICAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4vLyAgIFVzZXI6IHtcclxuLy8gICAgIGlkOiAxLFxyXG4vLyAgICAgbmlja25hbWU6ICfslYjsiJjtmZgnLFxyXG4vLyAgIH0sXHJcbi8vICAgSW1hZ2VzOiBbXSxcclxuLy8gICBDb21tZW50czogW10sXHJcbi8vIH0pO1xyXG4vLyAg7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zroZwg66eM65Ok7Ja064K064qUIO2VqOyImCjrtojrs4DshLHsnYAg7KeA7YKk66m07IScKVxyXG4vLyBzdGF0ZeulvCDsobDsnpHtlZjrqbQg7JWI65Cc64ukIGRyYWZ066eMIOyhsOyekVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW50aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEuY29udGVudCk7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoXHJcbiAgICAgIC8vICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCxcclxuICAgICAgLy8gKTtcclxuICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgLy8gcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAvLyBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIC8vIH07XHJcbiAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBicmVhaztcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGludGlhbFN0YXRlID0ge1xyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg7Iuc64+E7KSRXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG5cclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG5cclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG5cclxuICBzaW5nVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpbmdVcERvbmU6IGZhbHNlLFxyXG4gIHNpbmdVcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67CU6r646riwIOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHJcbiAgbWU6IG51bGwsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01FX0lORk9fUkVRVUVTVCA9ICdMT0FEX01FX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01FX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01FX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01FX0lORk9fRkFJTFVSRSA9ICdMT0FEX01FX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbi8vICAgLi4uZGF0YSxcclxuLy8gICBuaWNrbmFtZTogJ+yViOyImO2ZmCcsXHJcbi8vICAgaWQ6IDEsXHJcbi8vICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4vLyAgIEZvbGxvd2luZ3M6IFtcclxuLy8gICAgIHsgaWQ6ICfruJTrnbzruJTrnbwnIH0sXHJcbi8vICAgICB7IGlkOiAn67iU652867iU6528JyB9LFxyXG4vLyAgICAgeyBpZDogJ+u4lOudvOu4lOudvCcgfSxcclxuLy8gICBdLFxyXG4vLyAgIEZvbGxvd2VyczogW1xyXG4vLyAgICAgeyBpZDogJ+u4lOudvOu4lOudvCcgfSxcclxuLy8gICAgIHsgaWQ6ICfruJTrnbzruJTrnbwnIH0sXHJcbi8vICAgICB7IGlkOiAn67iU652867iU6528JyB9LFxyXG4vLyAgIF0sXHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW50aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX01FX0lORk9fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NRV9JTkZPX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NRV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoXHJcbiAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLFxyXG4gICAgICApO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5zaW5nVXBFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2luZ1VwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWU6IHtcclxuICAgICAgLy8gICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4vLyB0YWtlRXZlcnkg66Gc6re47J24XHJcbi8vIOuhnOq3uOyduOydtCDsi6Ttlokg65Cg65aEIOq5jOyngCDquLDri6TrpqzqsqDri6RcclxuLy8gdGFrZeuhnCDtlZjrqbQg7J287ZqM7ISxIOydtOq4sCDrlYzrrLjsl5AgIHRha2VFdmVyeSDroZwg7ZWY66m0IOynhOygle2VnCDsnbTrsqTtirgg66as7Iqk64SIIOyymOufvCDrj5nsnpHtlZjquLAg65WM66y47JeQXHJcbi8vIHdoaWxlIHRydWUg66W8IOyCrOyaqSDtlZjsp4Ag7JWK6rOgIOuPmeyekSDqsIDriqXtlZjri6RcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayhwb3N0U2FnYSksIC8vIGNhbGwg7J20656RIOuLpOumhFxyXG4gICAgZm9yayh1c2VyU2FnYSksXHJcbiAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBhbGwsXHJcbiAgZm9yayxcclxuICBwdXQsXHJcbiAgdGFrZUxhdGVzdCxcclxuICBkZWxheSxcclxuICB0aHJvdHRsZSxcclxuICBjYWxsLFxyXG59IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQge1xyXG4gIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX1BPU1RfUkVRVUVTVCxcclxuICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG59IGZyb20gJy4uL3JlZHVlcnMvcG9zdCc7XHJcbi8vIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRSB9IGZyb20gJy4uL3JlZHVlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgeyBjb250ZW50OiBkYXRhIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuLy8gICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSwge1xyXG4vLyAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zb2xlLmxvZygncmVzdWx0JywgcmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQge1xyXG4gIExPR19JTl9GQUlMVVJFLFxyXG4gIExPR19JTl9SRVFVRVNULFxyXG4gIExPR19JTl9TVUNDRVNTLFxyXG4gIExPR19PVVRfRkFJTFVSRSxcclxuICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgTE9HX09VVF9TVUNDRVNTLFxyXG4gIFNJR05fVVBfUkVRVUVTVCxcclxuICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gIEZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgRk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19TVUNDRVNTLFxyXG4gIExPQURfTUVfSU5GT19GQUlMVVJFLFxyXG4gIExPQURfTUVfSU5GT19TVUNDRVNTLFxyXG4gIExPQURfTUVfSU5GT19SRVFVRVNULFxyXG59IGZyb20gJy4uL3JlZHVlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkVXNlckFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlcicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NRV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01FX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbi8qXHJcbmNvbnN0IHRlc3QgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAnZGtzdG4xMjMwQG5hdmVyLmNvbSd9fSlcclxudGVzdC5uZXh0KCk7XHJcbuydtOugh+qyjCDthYzsiqTtirjrpbwg7ZWY6riwIO2OuO2VmOuLpCB5aWVsZOulvCDsgqzsmqntlZjrqbRcclxuKi9cclxuXHJcbi8vIOuhnOq3uOyduCDtlaDrlYwg642w7J207YSw64+EIOqwmeydtCDrs7TrgrTspJjslbwg7ZWY64qU642wIOydtOuftOuVkFxyXG4vLyDsi6TtlontlZwg7ZWo7IiYIOyViOyXkCBsb2dJbu2VqOyImCBhY3Rpb24g67Cb7JWE7IScXHJcblxyXG4vLyBjYWxsLCBmb3JrIOydmCDssKjsnbQgIGZvcmvripTruYTrj5nquLAsIGNhbGzsnYAg64+Z6riwIOutkOqwgCDri6TrpbzquYwgY2FsbCDrpbwg7ZWY66m0IGxvZ0luQVBJ6rCAIOumrO2EtCDtlaDrloQg6rmM7KeAIOq4sOuLpOumrOuptOyEnCByZXN1bHQg7JeQIOuEo+yWtOyjvOuKlOuNsFxyXG4vLyBmb3Jr66W8IO2VmOuptCDquLDri6Trpqzsp4Ag7JWK6rOgIOq3uOuDpSDrs7TrgrTrsoTrpqzqs6Ag67CU66GcIOuLpOydjOq7mCDsi6TtlonrkJzri6QhIVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzrtoDthLDripQg66ek6rCc67OA7IiY65OkXHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgLy8gZm9yayDrpbwg7IKs7Jqp7ZWY66m0IGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIpO+ydtOqxsOuCmCDrp4jssKzqsIDsp4Ag64ukXHJcbiAgICAvLyBjYWxsIOulvCDtlZjrqbQgYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIikudGhlbigoKSA9PiB7fSkg7J206rGw656RIOu5hOyKt+2VmOuLpFxyXG4gICAgLy8g7KCV66as7ZWY66m0IOqysOqzvOulvCDrsJvslYTsmKzrloQg6rmM7KeAIOq4sOuLpOumrOuKkOuDkCDslYTri4jrqbQg6re464OlIOuwlOuhnCDrhJjslrTqsIDripDrg5BcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICBjb25zb2xlLmxvZygn66Gc6re47JWE7JuDIOyLpO2WieuQqCcpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJyk7XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpO1xyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLy8gZnVuY3Rpb24gc2lnblVwQVBJKCkge1xyXG4vLyAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiogc2lnblVwKCkge1xyXG4vLyAgIHRyeSB7XHJcbi8vICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbi8vICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuXHJcbi8vICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbi8vICAgICB9KTtcclxuLy8gICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuLy8gICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTUVfSU5GT19SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bkZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgIGZvcmsod2F0Y2hGb2xsb3cpLCAvLyBjYWxsIOydtOuekSDri6TrpoRcclxuICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9XHJcbiAgICAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT5cclxuICAgIChuZXh0KSA9PlxyXG4gICAgKGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbiAgICB9O1xyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSlcclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==