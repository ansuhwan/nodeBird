webpackHotUpdate_N_E("pages/index",{

/***/ "./reduers/post.js":
/*!*************************!*\
  !*** ./reduers/post.js ***!
  \*************************/
/*! exports provided: intialState, ADD_POST_REQUEST, ADD_POST_SUCC, ADD_POST, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intialState", function() { return intialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCC", function() { return ADD_POST_SUCC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST", function() { return ADD_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var intialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "안수ㅎ환"
    },
    content: "게시글 #블라블라 #라블라블",
    Images: [{
      src: "https://picsum.photos/200/300"
    }, {
      src: "https://picsum.photos/id/237/200/300"
    }, {
      src: "https://picsum.photos/seed/picsum/200/300"
    }],
    Comments: [{
      User: {
        nickname: "블라"
      },
      content: "우와우"
    }, {
      User: {
        nickname: "블라11"
      },
      content: "우와우111"
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCC = "ADD_POST_REQUEST";
var ADD_POST = "ADD_POST_REQUEST";
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: "더미데이터 입니다",
  User: {
    id: 1,
    nickname: "안수환"
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : intialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWVycy9wb3N0LmpzIl0sIm5hbWVzIjpbImludGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0MiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsV0FBVyxHQUFHO0FBQ3ZCQyxXQUFTLEVBQUUsQ0FDUDtBQUNJQyxNQUFFLEVBQUUsQ0FEUjtBQUVJQyxRQUFJLEVBQUU7QUFDRkQsUUFBRSxFQUFFLENBREY7QUFFRkUsY0FBUSxFQUFFO0FBRlIsS0FGVjtBQU1JQyxXQUFPLEVBQUUsaUJBTmI7QUFPSUMsVUFBTSxFQUFFLENBQ0o7QUFDSUMsU0FBRyxFQUFFO0FBRFQsS0FESSxFQUlKO0FBQ0lBLFNBQUcsRUFBRTtBQURULEtBSkksRUFPSjtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQVBJLENBUFo7QUFrQklDLFlBQVEsRUFBRSxDQUNOO0FBQ0lMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJQyxhQUFPLEVBQUU7QUFKYixLQURNLEVBT047QUFDSUYsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURWO0FBSUlDLGFBQU8sRUFBRTtBQUpiLEtBUE07QUFsQmQsR0FETyxDQURZO0FBb0N2QkksWUFBVSxFQUFFLEVBcENXO0FBcUN2QkMsV0FBUyxFQUFFO0FBckNZLENBQXBCO0FBd0NBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGFBQWEsR0FBRyxrQkFBdEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsa0JBQWpCO0FBRUEsSUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUVGO0FBRGEsQ0FBaEI7QUFJUCxJQUFNRyxTQUFTLEdBQUc7QUFDZGQsSUFBRSxFQUFFLENBRFU7QUFFZEcsU0FBTyxFQUFFLFdBRks7QUFHZEYsTUFBSSxFQUFFO0FBQ0ZELE1BQUUsRUFBRSxDQURGO0FBRUZFLFlBQVEsRUFBRTtBQUZSLEdBSFE7QUFPZEUsUUFBTSxFQUFFLEVBUE07QUFRZEUsVUFBUSxFQUFFO0FBUkksQ0FBbEI7O0FBV0EsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBaUM7QUFBQSxNQUFoQ0MsS0FBZ0MsdUVBQXhCbEIsV0FBd0I7QUFBQSxNQUFYbUIsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUNJLDZDQUNPSyxLQURQO0FBRUlqQixpQkFBUyxHQUFHZSxTQUFILHNHQUFpQkUsS0FBSyxDQUFDakIsU0FBdkIsRUFGYjtBQUdJUyxpQkFBUyxFQUFFO0FBSGY7O0FBS0o7QUFDSSxhQUFPUSxLQUFQO0FBUlI7QUFVSCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Y2EwZjk0ODQ5MDc4Y2FhYjMxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGludGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCLslYjsiJjjhY7tmZhcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDogXCLqsozsi5zquIAgI+u4lOudvOu4lOudvCAj652867iU652867iUXCIsXHJcbiAgICAgICAgICAgIEltYWdlczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3MvMjAwLzMwMFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzNy8yMDAvMzAwXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9waWNzdW0vMjAwLzMwMFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBcIuu4lOudvFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYDsmrBcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogXCLruJTrnbwxMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCLsmrDsmYDsmrAxMTFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQyA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gICAgdHlwZTogQUREX1BPU1QsXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6IFwi642U66+4642w7J207YSwIOyeheuLiOuLpFwiLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiBcIuyViOyImO2ZmFwiLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW50aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9