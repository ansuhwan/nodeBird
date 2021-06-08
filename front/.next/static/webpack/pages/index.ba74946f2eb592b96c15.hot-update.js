webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _compoments_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compoments/AppLayout */ "./compoments/AppLayout.js");
/* harmony import */ var _compoments_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compoments/PostCard */ "./compoments/PostCard.js");
/* harmony import */ var _compoments_postForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../compoments/postForm */ "./compoments/postForm.js");
/* harmony import */ var _reduers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reduers/post */ "./reduers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"]
    });
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(mainPosts),
      data = _useState[0],
      setData = _useState[1];

  var scrollListener = function scrollListener(params) {
    if (params.scrollTop + params.clientHeight >= params.scrollHeight - 300) {
      if (data.length <= 100) {
        setData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [mainPosts]));
      }
    }
  };

  var rowRanderer = function rowRanderer(_ref) {
    var index = _ref.index,
        style = _ref.style;
    var post = data[index];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_compoments_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      post: post
    }, post.id, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_virtualized__WEBPACK_IMPORTED_MODULE_3__["AutoSizer"], {
    AutoSizer: true,
    children: function children(_ref2) {
      var width = _ref2.width;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_virtualized__WEBPACK_IMPORTED_MODULE_3__["List"], {
        rowCount: data.length // 항목의 개수
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
        overscanRowCount: 2 // 다음에 로드해올 항목 미리 컨텐츠 높이 잡기

      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
}; //   useEffect(() => {
//     function onScroll() {
//       if (
//         window.scrollY + document.documentElement.clientHeight
//         > (document.documentElement.scrollHeight - 500)
//       ) {
//         if (hasMorePosts && !loadPostsLoading) {
//           dispatch({
//             type: LOAD_POSTS_REQUEST,
//           });
//         }
//       }
//     }
//     window.addEventListener('scroll', onScroll);
//     return () => {
//       window.removeEventListener('scroll', onScroll);
//     };
//   }, [hasMorePosts, loadPostsLoading]);
//   return (
//     <AppLayout>
//       {me && <PostForm />}
//       {mainPosts.map((post) => (
//         <PostCard key={post.id} post={post} />
//       ))}
//     </AppLayout>
//   );
// };


_s(Home, "FfTFC6dlrJlIXHh3XPDtlTpEYoo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNjcm9sbExpc3RlbmVyIiwicGFyYW1zIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwicm93UmFuZGVyZXIiLCJpbmRleCIsInN0eWxlIiwiaWQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBc0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQWpFO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxZQUFuQixpQkFBbUJBLFlBQW5CO0FBQUEsTUFBaUNDLGdCQUFqQyxpQkFBaUNBLGdCQUFqQzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RWLFlBQVEsQ0FBQztBQUNQVyxVQUFJLEVBQUVDLGdFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxrQkFBd0JDLHNEQUFRLENBQUNOLFNBQUQsQ0FBaEM7QUFBQSxNQUFPTyxJQUFQO0FBQUEsTUFBYUMsT0FBYjs7QUFDQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLE1BQUQsRUFBWTtBQUNqQyxRQUFJQSxNQUFNLENBQUNDLFNBQVAsR0FBbUJELE1BQU0sQ0FBQ0UsWUFBMUIsSUFBMENGLE1BQU0sQ0FBQ0csWUFBUCxHQUFzQixHQUFwRSxFQUF5RTtBQUN2RSxVQUFJTixJQUFJLENBQUNPLE1BQUwsSUFBZSxHQUFuQixFQUF3QjtBQUN0Qk4sZUFBTyx3R0FDRkQsSUFERSxJQUVMUCxTQUZLLEdBQVA7QUFJRDtBQUNGO0FBQ0YsR0FURDs7QUFXQSxNQUFNZSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFzQjtBQUFBLFFBQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxRQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDeEMsUUFBTWxCLElBQUksR0FBR1EsSUFBSSxDQUFDUyxLQUFELENBQWpCO0FBQ0Esd0JBQ0kscUVBQUMsNERBQUQ7QUFBd0IsVUFBSSxFQUFFakI7QUFBOUIsT0FBZUEsSUFBSSxDQUFDbUIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBR0QsR0FMRDs7QUFPQSxzQkFDRSxxRUFBQywyREFBRDtBQUFXLGFBQVMsTUFBcEI7QUFBQSxjQUNHO0FBQUEsVUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsMEJBQ0MscUVBQUMsc0RBQUQ7QUFDRSxnQkFBUSxFQUFFWixJQUFJLENBQUNPLE1BRGpCLENBQ3lCO0FBRHpCO0FBRUUsY0FBTSxFQUFFLEdBRlYsQ0FFZTtBQUZmO0FBR0UsaUJBQVMsRUFBRSxHQUhiLENBR2tCO0FBSGxCO0FBSUUsYUFBSyxFQUFFSyxLQUpULENBSWdCO0FBSmhCO0FBS0UsbUJBQVcsRUFBRUosV0FMZixDQUs0QjtBQUw1QjtBQU1FLGdCQUFRLEVBQUVOLGNBTlosQ0FNNEI7QUFONUI7QUFPRSx3QkFBZ0IsRUFBRSxDQVBwQixDQU91Qjs7QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQTVDRCxDLENBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBekVNakIsSTtVQUNhRSx1RCxFQUNGQyx1RCxFQUN1Q0EsdUQ7OztLQUhsREgsSTtBQTJFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmE3NDk0NmYyZWI1OTJiOTZjMTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEF1dG9TaXplciwgTGlzdCB9IGZyb20gJ3JlYWN0LXZpcnR1YWxpemVkJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb21lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb21lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbWVudHMvcG9zdEZvcm0nO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1ZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobWFpblBvc3RzKTtcclxuICBjb25zdCBzY3JvbGxMaXN0ZW5lciA9IChwYXJhbXMpID0+IHtcclxuICAgIGlmIChwYXJhbXMuc2Nyb2xsVG9wICsgcGFyYW1zLmNsaWVudEhlaWdodCA+PSBwYXJhbXMuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA8PSAxMDApIHtcclxuICAgICAgICBzZXREYXRhKFtcclxuICAgICAgICAgIC4uLmRhdGEsXHJcbiAgICAgICAgICBtYWluUG9zdHMsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCByb3dSYW5kZXJlciA9ICh7IGluZGV4LCBzdHlsZSB9KSA9PiB7XHJcbiAgICBjb25zdCBwb3N0ID0gZGF0YVtpbmRleF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0b1NpemVyIEF1dG9TaXplcj5cclxuICAgICAgeyh7IHdpZHRoIH0pID0+IChcclxuICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgcm93Q291bnQ9e2RhdGEubGVuZ3RofSAvLyDtla3rqqnsnZgg6rCc7IiYXHJcbiAgICAgICAgICBoZWlnaHQ9ezQwMH0gLy8g7Iuk7KCcIOugjOuNlOungSDrkJjripQg64aS7J2067KU7JyEXHJcbiAgICAgICAgICByb3dIZWlnaHQ9ezIwMH0gLy8g7ZWt66qp7J2Y64aS7J20XHJcbiAgICAgICAgICB3aWR0aD17d2lkdGh9IC8vIO2VreuqqeydmCDrhIjruYRcclxuICAgICAgICAgIHJvd1JlbmRlcmVyPXtyb3dSYW5kZXJlcn0gLy8g7ZWt66qp66CM642U66eB7ZWg65WM7JOw64qUIO2VqOyImFxyXG4gICAgICAgICAgb25TY3JvbGw9e3Njcm9sbExpc3RlbmVyfSAvLyBzY3JvbGwg7ZWo7IiYXHJcbiAgICAgICAgICBvdmVyc2NhblJvd0NvdW50PXsyfSAvLyDri6TsnYzsl5Ag66Gc65Oc7ZW07JisIO2VreuqqSDrr7jrpqwg7Luo7YWQ7LigIOuGkuydtCDsnqHquLBcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9BdXRvU2l6ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4vLyAgICAgICBpZiAoXHJcbi8vICAgICAgICAgd2luZG93LnNjcm9sbFkgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XHJcbi8vICAgICAgICAgPiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIDUwMClcclxuLy8gICAgICAgKSB7XHJcbi8vICAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4vLyAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbi8vICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbi8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4vLyAgICAgfTtcclxuLy8gICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nXSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8QXBwTGF5b3V0PlxyXG4vLyAgICAgICB7bWUgJiYgPFBvc3RGb3JtIC8+fVxyXG4vLyAgICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gKFxyXG4vLyAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XHJcbi8vICAgICAgICkpfVxyXG4vLyAgICAgPC9BcHBMYXlvdXQ+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=