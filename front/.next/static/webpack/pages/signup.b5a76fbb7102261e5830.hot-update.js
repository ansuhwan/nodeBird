webpackHotUpdate_N_E("pages/signup",{

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _compoments_AppLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../compoments/AppLayout */ "./compoments/AppLayout.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reduers_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reduers/user */ "./reduers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "C:\\Users\\User\\Desktop\\SuHwan\\workspace\\reactProject\\front\\pages\\signup.js",
    _templateObject,
    _this = undefined,
    _s = $RefreshSig$();









 // const [passwordCheck, onChangePasswordCheck] = useInput("");
// 패스워드 체크는 다른지 같은지 확인 해야되서 커스텀 훅 사용 안함


var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  color: red;\n"])));
_c = ErrorMessage;

var Signup = function Signup() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpLoading = _useSelector.signUpLoading,
      singUpDone = _useSelector.singUpDone,
      singUpError = _useSelector.singUpError;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (singUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [singUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (singUpError) {
      antd__WEBPACK_IMPORTED_MODULE_5__["message"].info('This is a normal message');
    }
  }, [singUpError]);

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      passwordCheck = _useState[0],
      setPasswordCheck = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      passwrodError = _useState2[0],
      setPasswordError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangePasswordCheck = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);
  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSunmit = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function () {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(email, nickname, password);
    dispatch({
      type: _reduers_user__WEBPACK_IMPORTED_MODULE_10__["SIGN_UP_REQUEST"],
      data: {
        email: email,
        password: password,
        nickname: nickname
      }
    });
  }, [email, password, passwordCheck, term]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_compoments_AppLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
        children: "\uD68C\uC6D0\uAC00\uC785 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      onFinish: onSunmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-email",
          children: "\uC774\uBA54\uC77C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-email",
          type: "email",
          value: email,
          required: true,
          onChange: onChangEmail
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-nick",
          children: "\uB2C9\uB124\uC784"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-nick",
          value: nickname,
          required: true,
          onChange: onChangeNickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-nick",
          children: "\uBE44\uBC00\uBC88\uD638"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-password",
          type: "password",
          value: password,
          required: true,
          onChange: onChangePassword
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("label", {
          htmlFor: "user-password-check",
          children: "\uBE44\uBC00\uBC88\uD638\uCCB4\uD06C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Input"], {
          name: "user-password-check",
          value: passwordCheck,
          type: "password",
          required: true,
          onChange: onChangePasswordCheck
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), passwrodError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ErrorMessage, {
          children: "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58 \uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Checkbox"], {
          name: "user-term",
          checked: term,
          onChange: onChangeTerm,
          children: "\uCCB4\uD06C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, _this), termError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(ErrorMessage, {
          children: "\uC57D\uAD00\uC5D0 \uB3D9\uC758 \uD558\uC154\uC57C\uD569\uB2C8\uB2E4."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("div", {
        style: {
          marginTop: 10
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "primary",
          htmlType: "submit",
          loading: signUpLoading,
          children: "\uAC00\uC785\uD558\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 5
  }, _this);
};

_s(Signup, "VDUuiwJEO8q8ot9AzLZpDb4iZIU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c2 = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c, _c2;

$RefreshReg$(_c, "ErrorMessage");
$RefreshReg$(_c2, "Signup");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbIkVycm9yTWVzc2FnZSIsInN0eWxlZCIsImRpdiIsIlNpZ251cCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInNpZ25VcExvYWRpbmciLCJzaW5nVXBEb25lIiwic2luZ1VwRXJyb3IiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwibWVzc2FnZSIsImluZm8iLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ0VtYWlsIiwibmlja25hbWUiLCJvbkNoYW5nZU5pY2tuYW1lIiwicGFzc3dvcmQiLCJvbkNoYW5nZVBhc3N3b3JkIiwidXNlU3RhdGUiLCJwYXNzd29yZENoZWNrIiwic2V0UGFzc3dvcmRDaGVjayIsInBhc3N3cm9kRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVBhc3N3b3JkQ2hlY2siLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlVGVybSIsImNoZWNrZWQiLCJvblN1bm1pdCIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0NBRUE7QUFDQTs7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLGdLQUFsQjtLQUFNRixZOztBQUlOLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFDQSxxQkFBbURDLCtEQUFXLENBQzVELFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FENEQsQ0FBOUQ7QUFBQSxNQUFRQyxhQUFSLGdCQUFRQSxhQUFSO0FBQUEsTUFBdUJDLFVBQXZCLGdCQUF1QkEsVUFBdkI7QUFBQSxNQUFtQ0MsV0FBbkMsZ0JBQW1DQSxXQUFuQzs7QUFJQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUYsVUFBSixFQUFnQjtBQUNkRyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNKLFVBQUQsQ0FKTSxDQUFUO0FBTUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlELFdBQUosRUFBaUI7QUFDZkksa0RBQU8sQ0FBQ0MsSUFBUixDQUFhLDBCQUFiO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ0wsV0FBRCxDQUpNLENBQVQ7O0FBTUEsa0JBQThCTSwrREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxZQUFkOztBQUNBLG1CQUFxQ0YsK0RBQVEsQ0FBQyxFQUFELENBQTdDO0FBQUE7QUFBQSxNQUFPRyxRQUFQO0FBQUEsTUFBaUJDLGdCQUFqQjs7QUFDQSxtQkFBcUNKLCtEQUFRLENBQUMsRUFBRCxDQUE3QztBQUFBO0FBQUEsTUFBT0ssUUFBUDtBQUFBLE1BQWlCQyxnQkFBakI7O0FBRUEsa0JBQTBDQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEQ7QUFBQSxNQUFPQyxhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMENGLHNEQUFRLENBQUMsS0FBRCxDQUFsRDtBQUFBLE1BQU9HLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUF3Qkosc0RBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT0ssSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQWtDTixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPTyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLHFCQUFxQixHQUFHQyx5REFBVyxDQUN2QyxVQUFDQyxDQUFELEVBQU87QUFDTFQsb0JBQWdCLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWhCO0FBQ0FULG9CQUFnQixDQUFDTyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVCxLQUFtQmYsUUFBcEIsQ0FBaEI7QUFDRCxHQUpzQyxFQUt2QyxDQUFDQSxRQUFELENBTHVDLENBQXpDO0FBUUEsTUFBTWdCLFlBQVksR0FBR0oseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87QUFDdENMLFdBQU8sQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNHLE9BQVYsQ0FBUDtBQUNBUCxnQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNELEdBSCtCLEVBRzdCLEVBSDZCLENBQWhDO0FBSUEsTUFBTVEsUUFBUSxHQUFHTix5REFBVyxDQUFDLFlBQU07QUFDakMsUUFBSVosUUFBUSxLQUFLRyxhQUFqQixFQUFnQztBQUM5QixhQUFPRyxnQkFBZ0IsQ0FBQyxJQUFELENBQXZCO0FBQ0Q7O0FBQ0QsUUFBSSxDQUFDQyxJQUFMLEVBQVc7QUFDVCxhQUFPRyxZQUFZLENBQUMsSUFBRCxDQUFuQjtBQUNEOztBQUVEUyxXQUFPLENBQUNDLEdBQVIsQ0FBWXhCLEtBQVosRUFBbUJFLFFBQW5CLEVBQTZCRSxRQUE3QjtBQUVBbEIsWUFBUSxDQUFDO0FBQ1B1QyxVQUFJLEVBQUVDLDhEQURDO0FBRVBDLFVBQUksRUFBRTtBQUFFM0IsYUFBSyxFQUFMQSxLQUFGO0FBQVNJLGdCQUFRLEVBQVJBLFFBQVQ7QUFBbUJGLGdCQUFRLEVBQVJBO0FBQW5CO0FBRkMsS0FBRCxDQUFSO0FBSUQsR0FkMkIsRUFjekIsQ0FBQ0YsS0FBRCxFQUFRSSxRQUFSLEVBQWtCRyxhQUFsQixFQUFpQ0ksSUFBakMsQ0FkeUIsQ0FBNUI7QUFnQkEsc0JBQ0Usc0VBQUMsNkRBQUQ7QUFBQSw0QkFDRSxzRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUUsc0VBQUMseUNBQUQ7QUFBTSxjQUFRLEVBQUVXLFFBQWhCO0FBQUEsOEJBQ0U7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxzRUFBQywwQ0FBRDtBQUNFLGNBQUksRUFBQyxZQURQO0FBRUUsY0FBSSxFQUFDLE9BRlA7QUFHRSxlQUFLLEVBQUV0QixLQUhUO0FBSUUsa0JBQVEsTUFKVjtBQUtFLGtCQUFRLEVBQUVDO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVlFO0FBQUEsZ0NBQ0U7QUFBTyxpQkFBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0Usc0VBQUMsMENBQUQ7QUFDRSxjQUFJLEVBQUMsV0FEUDtBQUVFLGVBQUssRUFBRUMsUUFGVDtBQUdFLGtCQUFRLE1BSFY7QUFJRSxrQkFBUSxFQUFFQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkYsZUFzQkU7QUFBQSxnQ0FDRTtBQUFPLGlCQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxzRUFBQywwQ0FBRDtBQUNFLGNBQUksRUFBQyxlQURQO0FBRUUsY0FBSSxFQUFDLFVBRlA7QUFHRSxlQUFLLEVBQUVDLFFBSFQ7QUFJRSxrQkFBUSxNQUpWO0FBS0Usa0JBQVEsRUFBRUM7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXRCRixlQWlDRTtBQUFBLGdDQUNFO0FBQU8saUJBQU8sRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxzRUFBQywwQ0FBRDtBQUNFLGNBQUksRUFBQyxxQkFEUDtBQUVFLGVBQUssRUFBRUUsYUFGVDtBQUdFLGNBQUksRUFBQyxVQUhQO0FBSUUsa0JBQVEsTUFKVjtBQUtFLGtCQUFRLEVBQUVRO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQVVHTixhQUFhLGlCQUNaLHNFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakNGLGVBK0NFO0FBQUEsZ0NBQ0Usc0VBQUMsNkNBQUQ7QUFBVSxjQUFJLEVBQUMsV0FBZjtBQUEyQixpQkFBTyxFQUFFRSxJQUFwQztBQUEwQyxrQkFBUSxFQUFFUyxZQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHUCxTQUFTLGlCQUFJLHNFQUFDLFlBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQS9DRixlQXFERTtBQUFLLGFBQUssRUFBRTtBQUFFZSxtQkFBUyxFQUFFO0FBQWIsU0FBWjtBQUFBLCtCQUNFLHNFQUFDLDJDQUFEO0FBQVEsY0FBSSxFQUFDLFNBQWI7QUFBdUIsa0JBQVEsRUFBQyxRQUFoQztBQUF5QyxpQkFBTyxFQUFFckMsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0VELENBekhEOztHQUFNTixNO1VBQ2FFLHVELEVBQ2tDQyx1RCxFQWdCckJXLHVELEVBQ09BLHVELEVBQ0FBLHVEOzs7TUFwQmpDZCxNO0FBMkhTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuYjVhNzZmYmI3MTAyMjYxZTU4MzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm0sIElucHV0LCBDaGVja2JveCwgQnV0dG9uLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uL2NvbXBvbWVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWVycy91c2VyJztcclxuLy8gY29uc3QgW3Bhc3N3b3JkQ2hlY2ssIG9uQ2hhbmdlUGFzc3dvcmRDaGVja10gPSB1c2VJbnB1dChcIlwiKTtcclxuLy8g7Yyo7Iqk7JuM65OcIOyytO2BrOuKlCDri6Trpbjsp4Ag6rCZ7J2A7KeAIO2ZleyduCDtlbTslbzrkJjshJwg7Luk7Iqk7YWAIO2bhSDsgqzsmqkg7JWI7ZWoXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBzaWduVXBMb2FkaW5nLCBzaW5nVXBEb25lLCBzaW5nVXBFcnJvciB9ID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGUpID0+IHN0YXRlLnVzZXJcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpbmdVcERvbmUpIHtcclxuICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuICB9LCBbc2luZ1VwRG9uZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNpbmdVcEVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuaW5mbygnVGhpcyBpcyBhIG5vcm1hbCBtZXNzYWdlJyk7XHJcbiAgICB9XHJcbiAgfSwgW3NpbmdVcEVycm9yXSk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ0VtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IFtwYXNzd29yZENoZWNrLCBzZXRQYXNzd29yZENoZWNrXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dyb2RFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmRDaGVjayA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgc2V0UGFzc3dvcmRDaGVjayhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICAgIH0sXHJcbiAgICBbcGFzc3dvcmRdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBvblN1bm1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gcGFzc3dvcmRDaGVjaykge1xyXG4gICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICghdGVybSkge1xyXG4gICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGVtYWlsLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgfSxcclxuICAgIH0pO1xyXG4gIH0sIFtlbWFpbCwgcGFzc3dvcmQsIHBhc3N3b3JkQ2hlY2ssIHRlcm1dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT7tmozsm5DqsIDsnoUgfCBOb2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEZvcm0gb25GaW5pc2g9e29uU3VubWl0fT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLWVtYWlsXCI+7J2066mU7J28PC9sYWJlbD5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ0VtYWlsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyLW5pY2tcIj7ri4nrhKTsnoQ8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInVzZXItbmlja1wiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItbmlja1wiPuu5hOuwgOuyiO2YuDwvbGFiZWw+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXItcGFzc3dvcmQtY2hlY2tcIj7ruYTrsIDrsojtmLjssrTtgaw8L2xhYmVsPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgbmFtZT1cInVzZXItcGFzc3dvcmQtY2hlY2tcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRDaGVja31cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmRDaGVja31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICB7cGFzc3dyb2RFcnJvciAmJiAoXHJcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mCDtlZjsp4Ag7JWK7Iq164uI64ukLjwvRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPENoZWNrYm94IG5hbWU9XCJ1c2VyLXRlcm1cIiBjaGVja2VkPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT5cclxuICAgICAgICAgICAg7LK07YGsXHJcbiAgICAgICAgICA8L0NoZWNrYm94PlxyXG4gICAgICAgICAge3Rlcm1FcnJvciAmJiA8RXJyb3JNZXNzYWdlPuyVveq0gOyXkCDrj5nsnZgg7ZWY7IWU7JW87ZWp64uI64ukLjwvRXJyb3JNZXNzYWdlPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtzaWduVXBMb2FkaW5nfT5cclxuICAgICAgICAgICAg6rCA7J6F7ZWY6riwXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==