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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _compoments_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compoments/AppLayout */ "./compoments/AppLayout.js");
/* harmony import */ var _compoments_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../compoments/PostCard */ "./compoments/PostCard.js");
/* harmony import */ var _compoments_postForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../compoments/postForm */ "./compoments/postForm.js");
/* harmony import */ var _reduers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reduers/post */ "./reduers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import { AutoSizer, List } from 'react-virtualized'







var Home = function Home() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    dispatch({
      type: _reduers_post__WEBPACK_IMPORTED_MODULE_7__["LOAD_POSTS_REQUEST"]
    });
  }, []);

  var _useState = useState(mainPosts),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var scrollListener = function scrollListener(params) {
    if (params.scrollTop + params.clientHeight >= params.scrollHeight - 300) {
      if (data.length <= 100) {
        setData([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [{
          id: uuidv4(),
          content: '추가된 content입니다.'
        }, {
          id: uuidv4(),
          content: '추가된 content입니다.'
        }, {
          id: uuidv4(),
          content: '추가된 content입니다.'
        }, {
          id: uuidv4(),
          content: '추가된 content입니다.'
        }]));
      }
    }
  };

  var rowRanderer = function rowRanderer(_ref) {
    var index = _ref.index,
        style = _ref.style;
    var post = data[index];
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
      style: style,
      children: post.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(AutoSizer, {
    AutoSizer: true,
    children: function children(_ref2) {
      var width = _ref2.width;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(List, {
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
        lineNumber: 57,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
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
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInNjcm9sbExpc3RlbmVyIiwicGFyYW1zIiwic2Nyb2xsVG9wIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwibGVuZ3RoIiwiaWQiLCJ1dWlkdjQiLCJjb250ZW50Iiwicm93UmFuZGVyZXIiLCJpbmRleCIsInN0eWxlIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUFlQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUExQjtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7O0FBQ0Esc0JBQXNESCwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNHLElBQWpCO0FBQUEsR0FBRCxDQUFqRTtBQUFBLE1BQVFDLFNBQVIsaUJBQVFBLFNBQVI7QUFBQSxNQUFtQkMsWUFBbkIsaUJBQW1CQSxZQUFuQjtBQUFBLE1BQWlDQyxnQkFBakMsaUJBQWlDQSxnQkFBakM7O0FBQ0FDLHlEQUFTLENBQUMsWUFBTTtBQUNkVixZQUFRLENBQUM7QUFDUFcsVUFBSSxFQUFFQyxnRUFBa0JBO0FBRGpCLEtBQUQsQ0FBUjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsa0JBQXdCQyxRQUFRLENBQUNOLFNBQUQsQ0FBaEM7QUFBQTtBQUFBLE1BQU9PLElBQVA7QUFBQSxNQUFhQyxPQUFiOztBQUNBLE1BQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsTUFBRCxFQUFZO0FBQ2pDLFFBQUlBLE1BQU0sQ0FBQ0MsU0FBUCxHQUFtQkQsTUFBTSxDQUFDRSxZQUExQixJQUEwQ0YsTUFBTSxDQUFDRyxZQUFQLEdBQXNCLEdBQXBFLEVBQXlFO0FBQ3ZFLFVBQUlOLElBQUksQ0FBQ08sTUFBTCxJQUFlLEdBQW5CLEVBQXdCO0FBQ3RCTixlQUFPLHdHQUNGRCxJQURFLElBRUw7QUFDRVEsWUFBRSxFQUFFQyxNQUFNLEVBRFo7QUFFRUMsaUJBQU8sRUFBRTtBQUZYLFNBRkssRUFNTDtBQUNFRixZQUFFLEVBQUVDLE1BQU0sRUFEWjtBQUVFQyxpQkFBTyxFQUFFO0FBRlgsU0FOSyxFQVVMO0FBQ0VGLFlBQUUsRUFBRUMsTUFBTSxFQURaO0FBRUVDLGlCQUFPLEVBQUU7QUFGWCxTQVZLLEVBY0w7QUFDRUYsWUFBRSxFQUFFQyxNQUFNLEVBRFo7QUFFRUMsaUJBQU8sRUFBRTtBQUZYLFNBZEssR0FBUDtBQWtCRDtBQUNGO0FBQ0YsR0F2QkQ7O0FBeUJBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXNCO0FBQUEsUUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLFFBQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN4QyxRQUFNckIsSUFBSSxHQUFHUSxJQUFJLENBQUNZLEtBQUQsQ0FBakI7QUFDQSx3QkFDRTtBQUFLLFdBQUssRUFBRUMsS0FBWjtBQUFBLGdCQUNHckIsSUFBSSxDQUFDa0I7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFLRCxHQVBEOztBQVNBLHNCQUNFLHFFQUFDLFNBQUQ7QUFBVyxhQUFTLE1BQXBCO0FBQUEsY0FDRztBQUFBLFVBQUdJLEtBQUgsU0FBR0EsS0FBSDtBQUFBLDBCQUNDLHFFQUFDLElBQUQ7QUFDRSxnQkFBUSxFQUFFZCxJQUFJLENBQUNPLE1BRGpCLENBQ3lCO0FBRHpCO0FBRUUsY0FBTSxFQUFFLEdBRlYsQ0FFZTtBQUZmO0FBR0UsaUJBQVMsRUFBRSxHQUhiLENBR2tCO0FBSGxCO0FBSUUsYUFBSyxFQUFFTyxLQUpULENBSWdCO0FBSmhCO0FBS0UsbUJBQVcsRUFBRUgsV0FMZixDQUs0QjtBQUw1QjtBQU1FLGdCQUFRLEVBQUVULGNBTlosQ0FNNEI7QUFONUI7QUFPRSx3QkFBZ0IsRUFBRSxDQVBwQixDQU91Qjs7QUFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQTVERCxDLENBOERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0dBekZNakIsSTtVQUNhRSx1RCxFQUNGQyx1RCxFQUN1Q0EsdUQ7OztLQUhsREgsSTtBQTJGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTY5ZjYzY2NiNWI1OWJiMDE0YTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuLy8gaW1wb3J0IHsgQXV0b1NpemVyLCBMaXN0IH0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9tZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9tZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuLi9jb21wb21lbnRzL3Bvc3RGb3JtJztcclxuaW1wb3J0IHsgTE9BRF9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWVycy9wb3N0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG1haW5Qb3N0cyk7XHJcbiAgY29uc3Qgc2Nyb2xsTGlzdGVuZXIgPSAocGFyYW1zKSA9PiB7XHJcbiAgICBpZiAocGFyYW1zLnNjcm9sbFRvcCArIHBhcmFtcy5jbGllbnRIZWlnaHQgPj0gcGFyYW1zLnNjcm9sbEhlaWdodCAtIDMwMCkge1xyXG4gICAgICBpZiAoZGF0YS5sZW5ndGggPD0gMTAwKSB7XHJcbiAgICAgICAgc2V0RGF0YShbXHJcbiAgICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfstpTqsIDrkJwgY29udGVudOyeheuLiOuLpC4nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7LaU6rCA65CcIGNvbnRlbnTsnoXri4jri6QuJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgY29udGVudDogJ+y2lOqwgOuQnCBjb250ZW507J6F64uI64ukLicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfstpTqsIDrkJwgY29udGVudOyeheuLiOuLpC4nLFxyXG4gICAgICAgICAgfV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm93UmFuZGVyZXIgPSAoeyBpbmRleCwgc3R5bGUgfSkgPT4ge1xyXG4gICAgY29uc3QgcG9zdCA9IGRhdGFbaW5kZXhdO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgIHtwb3N0LmNvbnRlbnR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dG9TaXplciBBdXRvU2l6ZXI+XHJcbiAgICAgIHsoeyB3aWR0aCB9KSA9PiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgIHJvd0NvdW50PXtkYXRhLmxlbmd0aH0gLy8g7ZWt66qp7J2YIOqwnOyImFxyXG4gICAgICAgICAgaGVpZ2h0PXs0MDB9IC8vIOyLpOygnCDroIzrjZTrp4Eg65CY64qUIOuGkuydtOuylOychFxyXG4gICAgICAgICAgcm93SGVpZ2h0PXsyMDB9IC8vIO2VreuqqeydmOuGkuydtFxyXG4gICAgICAgICAgd2lkdGg9e3dpZHRofSAvLyDtla3rqqnsnZgg64SI67mEXHJcbiAgICAgICAgICByb3dSZW5kZXJlcj17cm93UmFuZGVyZXJ9IC8vIO2VreuqqeugjOuNlOunge2VoOuVjOyTsOuKlCDtlajsiJhcclxuICAgICAgICAgIG9uU2Nyb2xsPXtzY3JvbGxMaXN0ZW5lcn0gLy8gc2Nyb2xsIO2VqOyImFxyXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dDb3VudD17Mn0gLy8g64uk7J2M7JeQIOuhnOuTnO2VtOyYrCDtla3rqqkg66+466asIOy7qO2FkOy4oCDrhpLsnbQg7J6h6riwXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgIDwvQXV0b1NpemVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuLy8gICAgICAgaWYgKFxyXG4vLyAgICAgICAgIHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxyXG4vLyAgICAgICAgID4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSA1MDApXHJcbi8vICAgICAgICkge1xyXG4vLyAgICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIWxvYWRQb3N0c0xvYWRpbmcpIHtcclxuLy8gICAgICAgICAgIGRpc3BhdGNoKHtcclxuLy8gICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19SRVFVRVNULFxyXG4vLyAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4vLyAgICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuLy8gICAgIH07XHJcbi8vICAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZ10pO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPEFwcExheW91dD5cclxuLy8gICAgICAge21lICYmIDxQb3N0Rm9ybSAvPn1cclxuLy8gICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IChcclxuLy8gICAgICAgICA8UG9zdENhcmQga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxyXG4vLyAgICAgICApKX1cclxuLy8gICAgIDwvQXBwTGF5b3V0PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9