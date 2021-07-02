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
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\pages\\_app.js";








const NodeBird = ({
  Component
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
      children: "NodeBird"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined)]
}, void 0, true);

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

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
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootRedicer);

/***/ }),

/***/ "./reduers/post.js":
/*!*************************!*\
  !*** ./reduers/post.js ***!
  \*************************/
/*! exports provided: intialState, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_IMAGE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const intialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
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
  addCommentError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null
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

const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
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
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
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
    case RETWEET_REQUEST:
      draft.retweetLoading = true;
      draft.retweetDone = false;
      draft.retweetError = null;
      break;

    case RETWEET_SUCCESS:
      {
        draft.retweetLoading = false;
        draft.retweetDone = true;
        draft.mainPosts.unshift(action.data);
        break;
      }

    case RETWEET_FAILURE:
      draft.retweetLoading = false;
      draft.retweetError = action.error;
      break;

    case REMOVE_IMAGE:
      draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.index);
      break;

    case UPLOAD_IMAGES_REQUEST:
      draft.uploadImagesLoading = true;
      draft.uploadImagesDone = false;
      draft.uploadImagesError = null;
      break;

    case UPLOAD_IMAGES_SUCCESS:
      {
        draft.imagePaths = draft.imagePaths.concat(action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;
      }

    case UPLOAD_IMAGES_FAILURE:
      draft.uploadImagesLoading = false;
      draft.uploadImagesError = action.error;
      break;

    case LIKE_POST_REQUEST:
      draft.likePostLoading = true;
      draft.likePostDone = false;
      draft.likePostError = null;
      break;

    case LIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers.push({
          id: action.data.UserId
        });
        draft.likePostLoading = false;
        draft.likePostDone = true;
        break;
      }

    case LIKE_POST_FAILURE:
      draft.likePostLoading = false;
      draft.likePostError = action.error;
      break;

    case UNLIKE_POST_REQUEST:
      draft.unlikePostLoading = true;
      draft.unlikePostDone = false;
      draft.unlikePostError = null;
      break;

    case UNLIKE_POST_SUCCESS:
      {
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
        draft.unlikePostLoading = false;
        draft.unlikePostDone = true;
      }
      break;

    case UNLIKE_POST_FAILURE:
      draft.unlikePostLoading = false;
      draft.unlikePostError = action.error;
      break;

    case LOAD_POSTS_REQUEST:
      draft.loadPostsLoading = true;
      draft.loadPostsDone = false;
      draft.loadPostsError = null;
      break;

    case LOAD_POSTS_SUCCESS:
      draft.loadPostsLoading = false;
      draft.loadPostsDone = true;
      draft.mainPosts = draft.mainPosts.concat(action.data);
      draft.hasMorePosts = action.data.length === 10;
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
      draft.imagePaths = [];
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
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
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
        post.Comments.unshift(action.data);
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
/*! exports provided: intialState, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_ME_INFO_REQUEST, LOAD_ME_INFO_SUCCESS, LOAD_ME_INFO_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const intialState = {
  loadMeInfoLoading: false,
  // 유저 정보 시도중
  loadMeInfoDone: false,
  loadMeInfoError: null,
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
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  userInfo: null // signUpData: {},
  // loginData: {},

};
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
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
const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
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
    case REMOVE_FOLLOWER_REQUEST:
      draft.removeFollowerLoading = true;
      draft.removeFollowerError = null;
      draft.removeFollowerDone = false;
      break;

    case REMOVE_FOLLOWER_SUCCESS:
      draft.removeFollowerLoading = false;
      draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
      draft.removeFollowerDone = true;
      break;

    case REMOVE_FOLLOWER_FAILURE:
      draft.removeFollowerLoading = false;
      draft.removeFollowerError = action.error;
      break;

    case LOAD_FOLLOWINGS_REQUEST:
      draft.loadFollowingsLoading = true;
      draft.loadFollowingsError = null;
      draft.loadFollowingsDone = false;
      break;

    case LOAD_FOLLOWINGS_SUCCESS:
      draft.loadFollowingsLoading = false;
      draft.me.Followings = action.data;
      draft.loadFollowingsDone = true;
      break;

    case LOAD_FOLLOWINGS_FAILURE:
      draft.loadFollowingsLoading = false;
      draft.loadFollowingsError = action.error;
      break;

    case LOAD_FOLLOWERS_REQUEST:
      draft.loadFollowersLoading = true;
      draft.loadFollowersError = null;
      draft.loadFollowersDone = false;
      break;

    case LOAD_FOLLOWERS_SUCCESS:
      draft.loadFollowersLoading = false;
      draft.me.Followers = action.data;
      draft.loadFollowersDone = true;
      break;

    case LOAD_FOLLOWERS_FAILURE:
      draft.loadFollowersLoading = false;
      draft.loadFollowersError = action.error;
      break;

    case LOAD_ME_INFO_REQUEST:
      draft.loadMeInfoLoading = true;
      draft.loadMeInfoDone = false;
      draft.loadMeInfoError = null;
      break;

    case LOAD_ME_INFO_SUCCESS:
      draft.loadMeInfoLoading = false;
      draft.me = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_ME_INFO_FAILURE:
      draft.loadMeInfoLoading = false;
      draft.loadMeInfoError = action.error;
      break;

    case LOAD_USER_REQUEST:
      draft.loadUserLoading = true;
      draft.loadUserError = null;
      draft.loadUserDone = false;
      break;

    case LOAD_USER_SUCCESS:
      draft.loadUserLoading = false;
      draft.userInfo = action.data;
      draft.loadUserDone = true;
      break;

    case LOAD_USER_FAILURE:
      draft.loadUserLoading = false;
      draft.loadUserError = action.error;
      break;

    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followError = null;
      draft.followDone = false;
      break;

    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.me.Followings.push({
        id: action.data.UserId
      });
      draft.followDone = true;
      break;

    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followError = action.error;
      break;

    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowError = null;
      draft.unfollowDone = false;
      break;

    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
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
      draft.me.nickname = action.data.nickname;
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



function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
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
      error: err.response.data
    });
  }
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data); // POST /post/1/comment
}

function* addComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchReweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchReweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment)]);
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




function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user/followings', data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function loadMeInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/user');
}

function* loadMeInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMeInfoAPI);
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
}

function followAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
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
// }LoadFollorwings


function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadMeInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_ME_INFO_REQUEST"], loadMeInfo);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reduers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], unfollow);
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
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMeInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), // call 이랑 다름
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHVlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1ZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJOb2RlQmlyZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJyb290UmVkaWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImNvbWJpbmVSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwidXNlciIsInBvc3QiLCJpbnRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImltYWdlUGF0aHMiLCJoYXNNb3JlUG9zdHMiLCJsaWtlUG9zdExvYWRpbmciLCJsaWtlUG9zdERvbmUiLCJsaWtlUG9zdEVycm9yIiwidW5saWtlUG9zdExvYWRpbmciLCJ1bmxpa2VQb3N0RG9uZSIsInVubGlrZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFVFdFRVRfUkVRVUVTVCIsIlJFVFdFRVRfU1VDQ0VTUyIsIlJFVFdFRVRfRkFJTFVSRSIsIlJFTU9WRV9JTUFHRSIsImFkZFBvc3QiLCJkYXRhIiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiaSIsImluZGV4IiwiY29uY2F0IiwiZmluZCIsImlkIiwiUG9zdElkIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsImxlbmd0aCIsIkNvbW1lbnRzIiwibG9hZE1lSW5mb0xvYWRpbmciLCJsb2FkTWVJbmZvRG9uZSIsImxvYWRNZUluZm9FcnJvciIsImxvYWRVc2VyTG9hZGluZyIsImxvYWRVc2VyRG9uZSIsImxvYWRVc2VyRXJyb3IiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5mb2xsb3dMb2FkaW5nIiwidW5mb2xsb3dEb25lIiwidW5mb2xsb3dFcnJvciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2luZ1VwTG9hZGluZyIsInNpbmdVcERvbmUiLCJzaW5nVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJsb2FkRm9sbG93aW5nc0xvYWRpbmciLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJsb2FkRm9sbG93aW5nc0Vycm9yIiwibG9hZEZvbGxvd2Vyc0xvYWRpbmciLCJsb2FkRm9sbG93ZXJzRG9uZSIsImxvYWRGb2xsb3dlcnNFcnJvciIsInJlbW92ZUZvbGxvd2VyTG9hZGluZyIsInJlbW92ZUZvbGxvd2VyRG9uZSIsInJlbW92ZUZvbGxvd2VyRXJyb3IiLCJtZSIsInVzZXJJbmZvIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiTE9BRF9NRV9JTkZPX1JFUVVFU1QiLCJMT0FEX01FX0lORk9fU1VDQ0VTUyIsIkxPQURfTUVfSU5GT19GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJGb2xsb3dlcnMiLCJGb2xsb3dpbmdzIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJuaWNrbmFtZSIsIlBvc3RzIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJyZXN1bHQiLCJjYWxsIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwiZGVsZXRlIiwidW5saWtlUG9zdCIsImxvYWRQb3N0c0FQSSIsImxhc3RJZCIsImdldCIsImxvYWRQb3N0cyIsImFkZFBvc3RBUEkiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJ3YXRjaFJld2VldCIsInRha2VMYXRlc3QiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVuTGlrZVBvc3QiLCJ3YXRjaExvYWRQb3N0cyIsInRocm90dGxlIiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50IiwicmVtb3ZlRm9sbG93ZXJBUEkiLCJyZW1vdmVGb2xsb3dlciIsImxvYWRGb2xsb3dlcnNBUEkiLCJsb2FkRm9sbG93ZXJzIiwibG9hZEZvbGxvd2luZ3NBUEkiLCJsb2FkRm9sbG93aW5ncyIsImNoYW5nZU5pY2tuYW1lQVBJIiwiY2hhbmdlTmlja25hbWUiLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwibG9hZE1lSW5mb0FQSSIsImxvYWRNZUluZm8iLCJsb2dJbkFQSSIsImxvZ0luIiwibG9nT3V0QVBJIiwibG9nT3V0Iiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaExvYWRNZUluZm8iLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7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aGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IChcclxuICA8PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8Q29tcG9uZW50IC8+XHJcbiAgPC8+XHJcbik7XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XHJcblxyXG4vLyDruYTrj5nquLAg7JWh7IWYIOunjOuTpOq4sFxyXG5cclxuLy8g7JWh7IWYIOunjOuTpOq4sFxyXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiAoe1xyXG4vLyAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxyXG4vLyAgIGRhdGEsXHJcbi8vIH0pO1xyXG5cclxuLy8gY2hhbmdlTmlja25hbWUoJ+yXkOuyoOuyoCcpO1xyXG5cclxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuY29uc3Qgcm9vdFJlZGljZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICB1c2VyLFxyXG4gICAgICAgIHBvc3QsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gY29tYmluZVJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZGljZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbnRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHJcbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblxyXG4gIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgcmV0d2VldEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKCkgPT4gQXJyYXkoMTApXHJcbi8vICAgLmZpbGwoKVxyXG4vLyAgIC5tYXAoKCkgPT4gKHtcclxuLy8gICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICBVc2VyOiB7XHJcbi8vICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbi8vICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbi8vICAgICB9LFxyXG4vLyAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbi8vICAgICBJbWFnZXM6IFtcclxuLy8gICAgICAge1xyXG4vLyAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuLy8gICAgICAgfSxcclxuLy8gICAgIF0sXHJcbi8vICAgICBDb21tZW50czogW1xyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuLy8gICAgICAgICBVc2VyOiB7XHJcbi8vICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlLFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgXSxcclxuLy8gICB9KSk7XHJcblxyXG4vLyBpbnRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbnRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KCkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG4vLyBjb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4vLyAgIGNvbnRlbnQ6IGRhdGEsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBuaWNrbmFtZTogJ+yViOyImO2akCcsXHJcbi8vICAgfSxcclxuLy8gfSk7XHJcblxyXG4vLyBjb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuLy8gICBpZDogZGF0YS5pZCxcclxuLy8gICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbi8vICAgVXNlcjoge1xyXG4vLyAgICAgaWQ6IDEsXHJcbi8vICAgICBuaWNrbmFtZTogJ+yViOyImO2ZmCcsXHJcbi8vICAgfSxcclxuLy8gICBJbWFnZXM6IFtdLFxyXG4vLyAgIENvbW1lbnRzOiBbXSxcclxuLy8gfSk7XHJcbi8vICDsnbTsoIQg7IOB7YOc66W8IOyVoeyFmOydhCDthrXtlbQg64uk7J2MIOyDge2DnOuhnCDrp4zrk6TslrTrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbi8vIHN0YXRl66W8IOyhsOyeke2VmOuptCDslYjrkJzri6QgZHJhZnTrp4wg7KGw7J6RXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbnRpYWxTdGF0ZSwgYWN0aW9uKSA9PiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoXHJcbiAgICAgICAgKHYsIGkpID0+IGkgIT09IGFjdGlvbi5pbmRleCxcclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXHJcbiAgICAgICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCxcclxuICAgICAgKTtcclxuICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoXHJcbiAgICAgICAgICAodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKFxyXG4gICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQsXHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoXHJcbiAgICAgICAgKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCxcclxuICAgICAgKTtcclxuICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcclxuICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkLFxyXG4gICAgICAvLyApO1xyXG4gICAgICAvLyBjb25zdCBwb3N0ID0geyAuLi5zdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XSB9O1xyXG4gICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgIC8vIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAvLyBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWFpblBvc3RzLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgLy8gfTtcclxuICAgIH1cclxuICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW50aWFsU3RhdGUgPSB7XHJcbiAgbG9hZE1lSW5mb0xvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOyLnOuPhOykkVxyXG4gIGxvYWRNZUluZm9Eb25lOiBmYWxzZSxcclxuICBsb2FkTWVJbmZvRXJyb3I6IG51bGwsXHJcblxyXG4gIGxvYWRVc2VyTG9hZGluZzogZmFsc2UsIC8vIOycoOyggCDsoJXrs7Qg7Iuc64+E7KSRXHJcbiAgbG9hZFVzZXJEb25lOiBmYWxzZSxcclxuICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG5cclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gIGZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG5cclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gIGxvZ091dEVycm9yOiBudWxsLFxyXG5cclxuICBzaW5nVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gIHNpbmdVcERvbmU6IGZhbHNlLFxyXG4gIHNpbmdVcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67CU6r646riwIOyLnOuPhOykkVxyXG4gIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuXHJcbiAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93aW5nc0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcblxyXG4gIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkRm9sbG93ZXJzRG9uZTogZmFsc2UsXHJcbiAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICByZW1vdmVGb2xsb3dlckxvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuICBtZTogbnVsbCxcclxuICB1c2VySW5mbzogbnVsbCxcclxuICAvLyBzaWduVXBEYXRhOiB7fSxcclxuICAvLyBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01FX0lORk9fUkVRVUVTVCA9ICdMT0FEX01FX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01FX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01FX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01FX0lORk9fRkFJTFVSRSA9ICdMT0FEX01FX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuLy8gY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbi8vICAgLi4uZGF0YSxcclxuLy8gICBuaWNrbmFtZTogJ+yViOyImO2ZmCcsXHJcbi8vICAgaWQ6IDEsXHJcbi8vICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4vLyAgIEZvbGxvd2luZ3M6IFtcclxuLy8gICAgIHsgaWQ6ICfruJTrnbzruJTrnbwnIH0sXHJcbi8vICAgICB7IGlkOiAn67iU652867iU6528JyB9LFxyXG4vLyAgICAgeyBpZDogJ+u4lOudvOu4lOudvCcgfSxcclxuLy8gICBdLFxyXG4vLyAgIEZvbGxvd2VyczogW1xyXG4vLyAgICAgeyBpZDogJ+u4lOudvOu4lOudvCcgfSxcclxuLy8gICAgIHsgaWQ6ICfruJTrnbzruJTrnbwnIH0sXHJcbi8vICAgICB7IGlkOiAn67iU652867iU6528JyB9LFxyXG4vLyAgIF0sXHJcbi8vIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IExPR19JTl9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoe1xyXG4gIHR5cGU6IExPR19PVVRfUkVRVUVTVCxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW50aWFsU3RhdGUsIGFjdGlvbikgPT4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBkcmFmdC5tZS5Gb2xsb3dlcnMuZmlsdGVyKFxyXG4gICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQsXHJcbiAgICAgICk7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfRk9MTE9XRVJTX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBMT0FEX0ZPTExPV0VSU19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9BRF9NRV9JTkZPX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvYWRNZUluZm9Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZE1lSW5mb0RvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9hZE1lSW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPQURfTUVfSU5GT19TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2FkTWVJbmZvTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9NRV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRNZUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvYWRNZUluZm9FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51c2VySW5mbyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoXHJcbiAgICAgICAgKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCxcclxuICAgICAgKTtcclxuICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gZmFsc2U7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgZHJhZnQubG9nSW5Eb25lID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuc2luZ1VwRXJyb3IgPSBudWxsO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LnNpbmdVcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgZHJhZnQubWUubmlja25hbWUgPSBhY3Rpb24uZGF0YS5uaWNrbmFtZTtcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIGJyZWFrO1xyXG5cclxuICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1lOiB7XHJcbiAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgLy8gICAgIFBvc3RzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuUG9zdHNdLFxyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vIH07XHJcbiAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuLy8gdGFrZUV2ZXJ5IOuhnOq3uOyduFxyXG4vLyDroZzqt7jsnbjsnbQg7Iuk7ZaJIOuQoOuWhCDquYzsp4Ag6riw64uk66as6rKg64ukXHJcbi8vIHRha2XroZwg7ZWY66m0IOydvO2ajOyEsSDsnbTquLAg65WM66y47JeQICB0YWtlRXZlcnkg66GcIO2VmOuptCDsp4TsoJXtlZwg7J2067Kk7Yq4IOumrOyKpOuEiCDsspjrn7wg64+Z7J6R7ZWY6riwIOuVjOusuOyXkFxyXG4vLyB3aGlsZSB0cnVlIOulvCDsgqzsmqkg7ZWY7KeAIOyViuqzoCDrj5nsnpEg6rCA64ql7ZWY64ukXHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsocG9zdFNhZ2EpLCAvLyBjYWxsIOydtOuekSDri6TrpoRcclxuICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgYWxsLFxyXG4gIGZvcmssXHJcbiAgcHV0LFxyXG4gIHRha2VMYXRlc3QsXHJcbiAgdGhyb3R0bGUsXHJcbiAgY2FsbCxcclxufSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgUkVUV0VFVF9SRVFVRVNULFxyXG4gIFJFVFdFRVRfU1VDQ0VTUyxcclxuICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxufSBmcm9tICcuLi9yZWR1ZXJzL3Bvc3QnO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1ZXJzL3VzZXInO1xyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC9wb3N0LyR7ZGF0YX0vcmV0d2VldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRVRXRUVUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvaW1hZ2VzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wYXRjaChgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVubGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5saWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoYC9wb3N0cz9sYXN0SWQ9JHtsYXN0SWQgfHwgMH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRQb3N0cyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdHNBUEksIGFjdGlvbi5sYXN0SWQpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdCcsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEuaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7IC8vIFBPU1QgL3Bvc3QvMS9jb21tZW50XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJld2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVwbG9hZEltYWdlcygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbkxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW1xyXG4gICAgZm9yayh3YXRjaFJld2VldCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoVW5MaWtlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgTE9HX0lOX1NVQ0NFU1MsXHJcbiAgTE9HX09VVF9GQUlMVVJFLFxyXG4gIExPR19PVVRfUkVRVUVTVCxcclxuICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgVU5GT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBVTkZPTExPV19SRVFVRVNULFxyXG4gIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgTE9BRF9NRV9JTkZPX0ZBSUxVUkUsXHJcbiAgTE9BRF9NRV9JTkZPX1NVQ0NFU1MsXHJcbiAgTE9BRF9NRV9JTkZPX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLFxyXG4gIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUsXHJcbiAgTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWVycy91c2VyJztcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvbGxvd2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93ZXJzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvdXNlci9mb2xsb3dlcnMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dlcnMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2Vyc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEZvbGxvd2luZ3NBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyL2ZvbGxvd2luZ3MnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvYWRGb2xsb3dpbmdzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dpbmdzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZU5pY2tuYW1lQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkVXNlcihhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkTWVJbmZvQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTWVJbmZvKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNZUluZm9BUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9NRV9JTkZPX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX01FX0lORk9fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbi8qXHJcbmNvbnN0IHRlc3QgPSBsb2dJbih7dHlwZTogJ0xPR19JTl9SRVFVRVNUJywgZGF0YToge2lkOiAnZGtzdG4xMjMwQG5hdmVyLmNvbSd9fSlcclxudGVzdC5uZXh0KCk7XHJcbuydtOugh+qyjCDthYzsiqTtirjrpbwg7ZWY6riwIO2OuO2VmOuLpCB5aWVsZOulvCDsgqzsmqntlZjrqbRcclxuKi9cclxuXHJcbi8vIOuhnOq3uOyduCDtlaDrlYwg642w7J207YSw64+EIOqwmeydtCDrs7TrgrTspJjslbwg7ZWY64qU642wIOydtOuftOuVkFxyXG4vLyDsi6TtlontlZwg7ZWo7IiYIOyViOyXkCBsb2dJbu2VqOyImCBhY3Rpb24g67Cb7JWE7IScXHJcblxyXG4vLyBjYWxsLCBmb3JrIOydmCDssKjsnbQgIGZvcmvripTruYTrj5nquLAsIGNhbGzsnYAg64+Z6riwIOutkOqwgCDri6TrpbzquYwgY2FsbCDrpbwg7ZWY66m0IGxvZ0luQVBJ6rCAIOumrO2EtCDtlaDrloQg6rmM7KeAIOq4sOuLpOumrOuptOyEnCByZXN1bHQg7JeQIOuEo+yWtOyjvOuKlOuNsFxyXG4vLyBmb3Jr66W8IO2VmOuptCDquLDri6Trpqzsp4Ag7JWK6rOgIOq3uOuDpSDrs7TrgrTrsoTrpqzqs6Ag67CU66GcIOuLpOydjOq7mCDsi6TtlonrkJzri6QhIVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzrtoDthLDripQg66ek6rCc67OA7IiY65OkXHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcblxyXG4gICAgLy8gZm9yayDrpbwg7IKs7Jqp7ZWY66m0IGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIpO+ydtOqxsOuCmCDrp4jssKzqsIDsp4Ag64ukXHJcbiAgICAvLyBjYWxsIOulvCDtlZjrqbQgYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIikudGhlbigoKSA9PiB7fSkg7J206rGw656RIOu5hOyKt+2VmOuLpFxyXG4gICAgLy8g7KCV66as7ZWY66m0IOqysOqzvOulvCDrsJvslYTsmKzrloQg6rmM7KeAIOq4sOuLpOumrOuKkOuDkCDslYTri4jrqbQg6re464OlIOuwlOuhnCDrhJjslrTqsIDripDrg5BcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICBjb25zb2xlLmxvZygn66Gc6re47JWE7JuDIOyLpO2WieuQqCcpO1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgeWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2lnblVwQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXInLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBGT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3VzZXIvJHtkYXRhfS9mb2xsb3dgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbi8vICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJyk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuLy8gICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG5cclxuLy8gICAgIHlpZWxkIHB1dCh7XHJcbi8vICAgICAgIHR5cGU6IFNJR05fVVBfU1VDQ0VTUyxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4vLyAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbi8vICAgICB9KTtcclxuLy8gICB9XHJcbi8vIH1Mb2FkRm9sbG9yd2luZ3NcclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZUZvbGxvd2VyKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsIHJlbW92ZUZvbGxvd2VyKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEZvbGxvd2VycygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBsb2FkRm9sbG93aW5ncyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaENoYW5nZU5pY2tuYW1lKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZE1lSW5mbygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfTUVfSU5GT19SRVFVRVNULCBsb2FkTWVJbmZvKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlRm9sbG93ZXIpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dlcnMpLFxyXG4gICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIGZvcmsod2F0Y2hDaGFuZ2VOaWNrbmFtZSksXHJcbiAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgZm9yayh3YXRjaExvYWRNZUluZm8pLFxyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksIC8vIGNhbGwg7J20656RIOuLpOumhFxyXG4gICAgZm9yayh3YXRjaFVuZm9sbG93KSxcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlLCBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5cclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWVycyc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+IChuZXh0KSA9PiAoYWN0aW9uKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuXHJcbiAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=