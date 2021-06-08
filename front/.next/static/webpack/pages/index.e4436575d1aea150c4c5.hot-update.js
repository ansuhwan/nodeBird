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

  var _useState = useState(mockData),
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


_s(Home, "HjvpQ1GbXRJQWGj6IpAD3IewJIo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJ0eXBlIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwidXNlU3RhdGUiLCJtb2NrRGF0YSIsImRhdGEiLCJzZXREYXRhIiwic2Nyb2xsTGlzdGVuZXIiLCJwYXJhbXMiLCJzY3JvbGxUb3AiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJsZW5ndGgiLCJpZCIsInV1aWR2NCIsImNvbnRlbnQiLCJyb3dSYW5kZXJlciIsImluZGV4Iiwic3R5bGUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBQ0EscUJBQWVDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBQTFCO0FBQUEsTUFBUUMsRUFBUixnQkFBUUEsRUFBUjs7QUFDQSxzQkFBc0RILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0csSUFBakI7QUFBQSxHQUFELENBQWpFO0FBQUEsTUFBUUMsU0FBUixpQkFBUUEsU0FBUjtBQUFBLE1BQW1CQyxZQUFuQixpQkFBbUJBLFlBQW5CO0FBQUEsTUFBaUNDLGdCQUFqQyxpQkFBaUNBLGdCQUFqQzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RWLFlBQVEsQ0FBQztBQUNQVyxVQUFJLEVBQUVDLGdFQUFrQkE7QUFEakIsS0FBRCxDQUFSO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFNQSxrQkFBd0JDLFFBQVEsQ0FBQ0MsUUFBRCxDQUFoQztBQUFBO0FBQUEsTUFBT0MsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxNQUFELEVBQVk7QUFDakMsUUFBSUEsTUFBTSxDQUFDQyxTQUFQLEdBQW1CRCxNQUFNLENBQUNFLFlBQTFCLElBQTBDRixNQUFNLENBQUNHLFlBQVAsR0FBc0IsR0FBcEUsRUFBeUU7QUFDdkUsVUFBSU4sSUFBSSxDQUFDTyxNQUFMLElBQWUsR0FBbkIsRUFBd0I7QUFDdEJOLGVBQU8sd0dBQ0ZELElBREUsSUFFTDtBQUNFUSxZQUFFLEVBQUVDLE1BQU0sRUFEWjtBQUVFQyxpQkFBTyxFQUFFO0FBRlgsU0FGSyxFQU1MO0FBQ0VGLFlBQUUsRUFBRUMsTUFBTSxFQURaO0FBRUVDLGlCQUFPLEVBQUU7QUFGWCxTQU5LLEVBVUw7QUFDRUYsWUFBRSxFQUFFQyxNQUFNLEVBRFo7QUFFRUMsaUJBQU8sRUFBRTtBQUZYLFNBVkssRUFjTDtBQUNFRixZQUFFLEVBQUVDLE1BQU0sRUFEWjtBQUVFQyxpQkFBTyxFQUFFO0FBRlgsU0FkSyxHQUFQO0FBa0JEO0FBQ0Y7QUFDRixHQXZCRDs7QUF5QkEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBc0I7QUFBQSxRQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsUUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3hDLFFBQU10QixJQUFJLEdBQUdTLElBQUksQ0FBQ1ksS0FBRCxDQUFqQjtBQUNBLHdCQUNFO0FBQUssV0FBSyxFQUFFQyxLQUFaO0FBQUEsZ0JBQ0d0QixJQUFJLENBQUNtQjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtELEdBUEQ7O0FBU0Esc0JBQ0UscUVBQUMsU0FBRDtBQUFXLGFBQVMsTUFBcEI7QUFBQSxjQUNHO0FBQUEsVUFBR0ksS0FBSCxTQUFHQSxLQUFIO0FBQUEsMEJBQ0MscUVBQUMsSUFBRDtBQUNFLGdCQUFRLEVBQUVkLElBQUksQ0FBQ08sTUFEakIsQ0FDeUI7QUFEekI7QUFFRSxjQUFNLEVBQUUsR0FGVixDQUVlO0FBRmY7QUFHRSxpQkFBUyxFQUFFLEdBSGIsQ0FHa0I7QUFIbEI7QUFJRSxhQUFLLEVBQUVPLEtBSlQsQ0FJZ0I7QUFKaEI7QUFLRSxtQkFBVyxFQUFFSCxXQUxmLENBSzRCO0FBTDVCO0FBTUUsZ0JBQVEsRUFBRVQsY0FOWixDQU00QjtBQU41QjtBQU9FLHdCQUFnQixFQUFFLENBUHBCLENBT3VCOztBQVB2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQ7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBNURELEMsQ0E4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0F6Rk1sQixJO1VBQ2FFLHVELEVBQ0ZDLHVELEVBQ3VDQSx1RDs7O0tBSGxESCxJO0FBMkZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDQzNjU3NWQxYWVhMTUwYzRjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG4vLyBpbXBvcnQgeyBBdXRvU2l6ZXIsIExpc3QgfSBmcm9tICdyZWFjdC12aXJ0dWFsaXplZCdcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb21lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9jb21wb21lbnRzL1Bvc3RDYXJkJztcclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbWVudHMvcG9zdEZvcm0nO1xyXG5pbXBvcnQgeyBMT0FEX1BPU1RTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1ZXJzL3Bvc3QnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobW9ja0RhdGEpO1xyXG4gIGNvbnN0IHNjcm9sbExpc3RlbmVyID0gKHBhcmFtcykgPT4ge1xyXG4gICAgaWYgKHBhcmFtcy5zY3JvbGxUb3AgKyBwYXJhbXMuY2xpZW50SGVpZ2h0ID49IHBhcmFtcy5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgaWYgKGRhdGEubGVuZ3RoIDw9IDEwMCkge1xyXG4gICAgICAgIHNldERhdGEoW1xyXG4gICAgICAgICAgLi4uZGF0YSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7LaU6rCA65CcIGNvbnRlbnTsnoXri4jri6QuJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgY29udGVudDogJ+y2lOqwgOuQnCBjb250ZW507J6F64uI64ukLicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfstpTqsIDrkJwgY29udGVudOyeheuLiOuLpC4nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn7LaU6rCA65CcIGNvbnRlbnTsnoXri4jri6QuJyxcclxuICAgICAgICAgIH1dKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJvd1JhbmRlcmVyID0gKHsgaW5kZXgsIHN0eWxlIH0pID0+IHtcclxuICAgIGNvbnN0IHBvc3QgPSBkYXRhW2luZGV4XTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cclxuICAgICAgICB7cG9zdC5jb250ZW50fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvU2l6ZXIgQXV0b1NpemVyPlxyXG4gICAgICB7KHsgd2lkdGggfSkgPT4gKFxyXG4gICAgICAgIDxMaXN0XHJcbiAgICAgICAgICByb3dDb3VudD17ZGF0YS5sZW5ndGh9IC8vIO2VreuqqeydmCDqsJzsiJhcclxuICAgICAgICAgIGhlaWdodD17NDAwfSAvLyDsi6TsoJwg66CM642U66eBIOuQmOuKlCDrhpLsnbTrspTsnIRcclxuICAgICAgICAgIHJvd0hlaWdodD17MjAwfSAvLyDtla3rqqnsnZjrhpLsnbRcclxuICAgICAgICAgIHdpZHRoPXt3aWR0aH0gLy8g7ZWt66qp7J2YIOuEiOu5hFxyXG4gICAgICAgICAgcm93UmVuZGVyZXI9e3Jvd1JhbmRlcmVyfSAvLyDtla3rqqnroIzrjZTrp4HtlaDrlYzsk7DripQg7ZWo7IiYXHJcbiAgICAgICAgICBvblNjcm9sbD17c2Nyb2xsTGlzdGVuZXJ9IC8vIHNjcm9sbCDtlajsiJhcclxuICAgICAgICAgIG92ZXJzY2FuUm93Q291bnQ9ezJ9IC8vIOuLpOydjOyXkCDroZzrk5ztlbTsmKwg7ZWt66qpIOuvuOumrCDsu6jthZDsuKAg64aS7J20IOyeoeq4sFxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0F1dG9TaXplcj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbi8vICAgICAgIGlmIChcclxuLy8gICAgICAgICB3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcclxuLy8gICAgICAgICA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gNTAwKVxyXG4vLyAgICAgICApIHtcclxuLy8gICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbi8vICAgICAgICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfUkVRVUVTVCxcclxuLy8gICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbi8vICAgICB9O1xyXG4vLyAgIH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmddKTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxBcHBMYXlvdXQ+XHJcbi8vICAgICAgIHttZSAmJiA8UG9zdEZvcm0gLz59XHJcbi8vICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbi8vICAgICAgICAgPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cclxuLy8gICAgICAgKSl9XHJcbi8vICAgICA8L0FwcExheW91dD5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==