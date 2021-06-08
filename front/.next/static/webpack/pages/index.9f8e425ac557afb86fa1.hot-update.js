webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _compoments_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compoments/AppLayout */ "./compoments/AppLayout.js");
/* harmony import */ var _compoments_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compoments/PostCard */ "./compoments/PostCard.js");
/* harmony import */ var _compoments_postForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compoments/postForm */ "./compoments/postForm.js");
/* harmony import */ var _reduers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reduers/post */ "./reduers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      aaa = _useState[0],
      setaaa = _useState[1];

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 500) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reduers_post__WEBPACK_IMPORTED_MODULE_6__["LOAD_POSTS_REQUEST"]
          });
        }
      }
    }

    setaaa(onScroll);
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading]);

  var rowRanderer = function rowRanderer(_ref) {
    var index = _ref.index,
        style = _ref.style;
    var post = mainPosts[index];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
      style: style,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_compoments_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["AutoSizer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_compoments_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: function children(_ref2) {
        var width = _ref2.width;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(react_virtualized__WEBPACK_IMPORTED_MODULE_2__["List"], {
          rowCount: mainPosts.length // 항목의 개수
          ,
          height: 400 // 실제 렌더링 되는 높이범위
          ,
          rowHeight: 200 // 항목의높이
          ,
          width: width // 항목의 너비
          ,
          rowRenderer: rowRanderer // 항목렌더링할때쓰는 함수
          ,
          onScroll: scrollListener // scroll 함수
          ,
          overscanRowCount: 2
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, _this);
};

_s(Home, "iwUx5LvGX/npQemZ6HHcAaeNhms=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJhYWEiLCJzZXRhYWEiLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwibG9hZFBvc3RzTG9hZGluZyIsInVzZUVmZmVjdCIsInR5cGUiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicm93UmFuZGVyZXIiLCJpbmRleCIsInN0eWxlIiwiaWQiLCJ3aWR0aCIsImxlbmd0aCIsInNjcm9sbExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBZUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFBQSxNQUFRQyxFQUFSLGdCQUFRQSxFQUFSOztBQUNBLGtCQUFxQkMsc0RBQVEsRUFBN0I7QUFBQSxNQUFPQyxHQUFQO0FBQUEsTUFBV0MsTUFBWDs7QUFDQSxzQkFBc0ROLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ00sSUFBakI7QUFBQSxHQUFELENBQWpFO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxZQUFuQixpQkFBbUJBLFlBQW5CO0FBQUEsTUFBaUNDLGdCQUFqQyxpQkFBaUNBLGdCQUFqQzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RiLFlBQVEsQ0FBQztBQUNQYyxVQUFJLEVBQUVDLGdFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BRix5REFBUyxDQUFDLFlBQU07QUFDZCxhQUFTRyxRQUFULEdBQW9CO0FBQ2xCLFVBQ0VDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxZQUExQyxHQUNHRixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXdDLEdBRjdDLEVBR0U7QUFDQSxZQUFJWCxZQUFZLElBQUksQ0FBQ0MsZ0JBQXJCLEVBQXVDO0FBQ3JDWixrQkFBUSxDQUFDO0FBQ1BjLGdCQUFJLEVBQUVDLGdFQUFrQkE7QUFEakIsV0FBRCxDQUFSO0FBR0Q7QUFDRjtBQUNGOztBQUNEUCxVQUFNLENBQUNRLFFBQUQsQ0FBTjtBQUNBQyxVQUFNLENBQUNNLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDUCxRQUFsQztBQUNBLFdBQU8sWUFBTTtBQUNYQyxZQUFNLENBQUNPLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDUixRQUFyQztBQUNELEtBRkQ7QUFHRCxHQWxCUSxFQWtCTixDQUFDTCxZQUFELEVBQWVDLGdCQUFmLENBbEJNLENBQVQ7O0FBb0JBLE1BQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUEsUUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLFFBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN4QyxRQUFNbEIsSUFBSSxHQUFHQyxTQUFTLENBQUNnQixLQUFELENBQXRCO0FBQ0Esd0JBQ0U7QUFBSyxXQUFLLEVBQUVDLEtBQVo7QUFBQSw2QkFDRSxxRUFBQyw0REFBRDtBQUF3QixZQUFJLEVBQUVsQjtBQUE5QixTQUFlQSxJQUFJLENBQUNtQixFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0QsR0FQRDs7QUFTQSxzQkFDRSxxRUFBQywyREFBRDtBQUFBLDJCQUVFLHFFQUFDLDZEQUFEO0FBQUEsZ0JBQ0c7QUFBQSxZQUFHQyxLQUFILFNBQUdBLEtBQUg7QUFBQSw0QkFDQyxxRUFBQyxzREFBRDtBQUNFLGtCQUFRLEVBQUVuQixTQUFTLENBQUNvQixNQUR0QixDQUM4QjtBQUQ5QjtBQUVFLGdCQUFNLEVBQUUsR0FGVixDQUVlO0FBRmY7QUFHRSxtQkFBUyxFQUFFLEdBSGIsQ0FHa0I7QUFIbEI7QUFJRSxlQUFLLEVBQUVELEtBSlQsQ0FJZ0I7QUFKaEI7QUFLRSxxQkFBVyxFQUFFSixXQUxmLENBSzRCO0FBTDVCO0FBTUUsa0JBQVEsRUFBRU0sY0FOWixDQU00QjtBQU41QjtBQU9FLDBCQUFnQixFQUFFO0FBUHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0ExREQ7O0dBQU1oQyxJO1VBQ2FFLHVELEVBQ0ZDLHVELEVBRXVDQSx1RDs7O0tBSmxESCxJO0FBNERTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjhlNDI1YWM1NTdhZmI4NmZhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQXV0b1NpemVyLCBMaXN0IH0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbWVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL2NvbXBvbWVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgUG9zdEZvcm0gZnJvbSAnLi4vY29tcG9tZW50cy9wb3N0Rm9ybSc7XHJcbmltcG9ydCB7IExPQURfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IFthYWEsc2V0YWFhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4gICAgICAgID4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSA1MDApXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRhYWEob25TY3JvbGwpXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuICBjb25zdCByb3dSYW5kZXJlciA9ICh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XHJcbiAgICBjb25zdCBwb3N0ID0gbWFpblBvc3RzW2luZGV4XTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvU2l6ZXI+XHJcblxyXG4gICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgIHsoeyB3aWR0aCB9KSA9PiAoXHJcbiAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICByb3dDb3VudD17bWFpblBvc3RzLmxlbmd0aH0gLy8g7ZWt66qp7J2YIOqwnOyImFxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQwMH0gLy8g7Iuk7KCcIOugjOuNlOungSDrkJjripQg64aS7J2067KU7JyEXHJcbiAgICAgICAgICAgIHJvd0hlaWdodD17MjAwfSAvLyDtla3rqqnsnZjrhpLsnbRcclxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofSAvLyDtla3rqqnsnZgg64SI67mEXHJcbiAgICAgICAgICAgIHJvd1JlbmRlcmVyPXtyb3dSYW5kZXJlcn0gLy8g7ZWt66qp66CM642U66eB7ZWg65WM7JOw64qUIO2VqOyImFxyXG4gICAgICAgICAgICBvblNjcm9sbD17c2Nyb2xsTGlzdGVuZXJ9IC8vIHNjcm9sbCDtlajsiJhcclxuICAgICAgICAgICAgb3ZlcnNjYW5Sb3dDb3VudD17Mn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICA8L0F1dG9TaXplcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==