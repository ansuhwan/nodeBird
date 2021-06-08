webpackHotUpdate_N_E("pages/index",{

/***/ "./compoments/FollowButton.js":
/*!************************************!*\
  !*** ./compoments/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reduers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reduers/user */ "./reduers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\compoments\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();








var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      followLoading = _useSelector.followLoading,
      unfollowLoading = _useSelector.unfollowLoading;

  console.log('post.User.id', post.User.id);
  var isFollowing = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return console.log('v.id', v.id);
  });
  var onClickButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    console.log('눌름');
    console.log('isFollowing', isFollowing);

    if (isFollowing) {
      dispatch({
        type: _reduers_user__WEBPACK_IMPORTED_MODULE_4__["UNFOLLOW_REQUEST"],
        data: post.User.id
      });
    } else {
      dispatch({
        type: _reduers_user__WEBPACK_IMPORTED_MODULE_4__["FOLLOW_REQUEST"],
        data: post.User.id
      });
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    loading: followLoading || unfollowLoading,
    onClick: onClickButton,
    children: isFollowing ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(FollowButton, "oQRGZ4+MgpAjZ6p1zzrPk3lOofY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = FollowButton;
FollowButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9tZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiZm9sbG93TG9hZGluZyIsInVuZm9sbG93TG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwiaWQiLCJpc0ZvbGxvd2luZyIsIkZvbGxvd2luZ3MiLCJmaW5kIiwidiIsIm9uQ2xpY2tCdXR0b24iLCJ1c2VDYWxsYmFjayIsInR5cGUiLCJVTkZPTExPV19SRVFVRVNUIiwiZGF0YSIsIkZPTExPV19SRVFVRVNUIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNqQyxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLHFCQUErQ0MsK0RBQVcsQ0FDeEQsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUR3RCxDQUExRDtBQUFBLE1BQVFDLEVBQVIsZ0JBQVFBLEVBQVI7QUFBQSxNQUFZQyxhQUFaLGdCQUFZQSxhQUFaO0FBQUEsTUFBMkJDLGVBQTNCLGdCQUEyQkEsZUFBM0I7O0FBSUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJWLElBQUksQ0FBQ1csSUFBTCxDQUFVQyxFQUF0QztBQUNBLE1BQU1DLFdBQVcsR0FBR1AsRUFBSCxhQUFHQSxFQUFILHVCQUFHQSxFQUFFLENBQUVRLFVBQUosQ0FBZUMsSUFBZixDQUFvQixVQUFDQyxDQUFEO0FBQUEsV0FBT1AsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQk0sQ0FBQyxDQUFDSixFQUF0QixDQUFQO0FBQUEsR0FBcEIsQ0FBcEI7QUFFQSxNQUFNSyxhQUFhLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN0Q1QsV0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRyxXQUEzQjs7QUFDQSxRQUFJQSxXQUFKLEVBQWlCO0FBQ2ZaLGNBQVEsQ0FBQztBQUNQa0IsWUFBSSxFQUFFQyw4REFEQztBQUVQQyxZQUFJLEVBQUVyQixJQUFJLENBQUNXLElBQUwsQ0FBVUM7QUFGVCxPQUFELENBQVI7QUFJRCxLQUxELE1BS087QUFDTFgsY0FBUSxDQUFDO0FBQ1BrQixZQUFJLEVBQUVHLDREQURDO0FBRVBELFlBQUksRUFBRXJCLElBQUksQ0FBQ1csSUFBTCxDQUFVQztBQUZULE9BQUQsQ0FBUjtBQUlEO0FBQ0YsR0FkZ0MsRUFjOUIsRUFkOEIsQ0FBakM7QUFlQSxzQkFDRSxxRUFBQywyQ0FBRDtBQUFRLFdBQU8sRUFBRUwsYUFBYSxJQUFJQyxlQUFsQztBQUFtRCxXQUFPLEVBQUVTLGFBQTVEO0FBQUEsY0FDR0osV0FBVyxHQUFHLE1BQUgsR0FBWTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTdCRDs7R0FBTWQsWTtVQUNhRyx1RCxFQUM4QkMsdUQ7OztLQUYzQ0osWTtBQThCTkEsWUFBWSxDQUFDd0IsU0FBYixHQUF5QjtBQUN2QjtBQUNBdkIsTUFBSSxFQUFFd0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFGQSxDQUF6QjtBQUtlM0IsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTZhOWM2MjVlYmNjZDQ3MzlhNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgRk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1ZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUsIGZvbGxvd0xvYWRpbmcsIHVuZm9sbG93TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnVzZXIsXHJcbiAgKTtcclxuXHJcbiAgY29uc29sZS5sb2coJ3Bvc3QuVXNlci5pZCcsIHBvc3QuVXNlci5pZCk7XHJcbiAgY29uc3QgaXNGb2xsb3dpbmcgPSBtZT8uRm9sbG93aW5ncy5maW5kKCh2KSA9PiBjb25zb2xlLmxvZygndi5pZCcsIHYuaWQpKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCfriIzrpoQnKTtcclxuICAgIGNvbnNvbGUubG9nKCdpc0ZvbGxvd2luZycsIGlzRm9sbG93aW5nKTtcclxuICAgIGlmIChpc0ZvbGxvd2luZykge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LlVzZXIuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEZPTExPV19SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuVXNlci5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uIGxvYWRpbmc9e2ZvbGxvd0xvYWRpbmcgfHwgdW5mb2xsb3dMb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT5cclxuICAgICAge2lzRm9sbG93aW5nID8gJ+yWuO2MlOuhnOyasCcgOiAn7YyU66Gc7JqwJ31cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbkZvbGxvd0J1dHRvbi5wcm9wVHlwZXMgPSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93QnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9