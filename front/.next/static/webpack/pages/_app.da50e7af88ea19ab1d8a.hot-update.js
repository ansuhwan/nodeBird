webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");


var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logIn),
    _marked2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(logOut),
    _marked3 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogIn),
    _marked4 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(watchLogOut),
    _marked5 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(userSaga);



function logInAPI(data) {
  return axios.post("/api/login", data);
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


function logIn(action) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

        case 3:
          _context.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_IN_SUCCESS",
            data: action.data // data: result.data,

          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_IN_FAILURE",
            data: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function logOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_OUT_SUCCESS",
            data: result.data
          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_OUT_FAILURE",
            data: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function watchLogIn() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogIn$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("LOG_IN_REQUEST", logIn);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchLogOut() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function watchLogOut$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])("LOG_OUT_REQUEST", logOut);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function userSaga() {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function userSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogIn), //call 이랑 다름
          Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogOut)]);

        case 2:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsInVzZXJTYWdhIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJyZXN1bHQiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBaUJVQSxLO21HQTJCQUMsTTttR0FpQkFDLFU7bUdBR0FDLFc7bUdBSWVDLFE7O0FBcEV6Qjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUNBLFNBQVVOLEtBQVYsQ0FBZ0JTLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS1EsaUJBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUxSO0FBQUE7QUFVUSxpQkFBTUMsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFLGdCQURBO0FBRU5OLGdCQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFGUCxDQUdOOztBQUhNLFdBQUQsQ0FBVDs7QUFWUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQlEsaUJBQU1LLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxnQkFEQTtBQUVOTixnQkFBSSxFQUFFLFlBQUlPLFFBQUosQ0FBYVA7QUFGYixXQUFELENBQVQ7O0FBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCQSxTQUFTUSxTQUFULEdBQXFCO0FBQ2pCLFNBQU9QLEtBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVQLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHUSxpQkFBTVMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSFI7QUFBQTtBQUtRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsaUJBREE7QUFFTk4sZ0JBQUksRUFBRVMsTUFBTSxDQUFDVDtBQUZQLFdBQUQsQ0FBVDs7QUFMUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVUSxpQkFBTUssOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFLGlCQURBO0FBRU5OLGdCQUFJLEVBQUUsYUFBSU8sUUFBSixDQUFhUDtBQUZiLFdBQUQsQ0FBVDs7QUFWUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQkEsU0FBVUosVUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSSxpQkFBTWMscUVBQVUsQ0FBQyxnQkFBRCxFQUFtQmhCLEtBQW5CLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLFNBQVVHLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1hLHFFQUFVLENBQUMsaUJBQUQsRUFBb0JmLE1BQXBCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1hLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2hCLFVBQUQsQ0FERSxFQUNZO0FBQ2xCZ0IseUVBQUksQ0FBQ2YsV0FBRCxDQUZFLENBQUQsQ0FBVDs7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRhNTBlN2FmODhlYTE5YWIxZDhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIiwgZGF0YSk7XHJcbn1cclxuXHJcbi8qIFxyXG5jb25zdCB0ZXN0ID0gbG9nSW4oe3R5cGU6ICdMT0dfSU5fUkVRVUVTVCcsIGRhdGE6IHtpZDogJ2Rrc3RuMTIzMEBuYXZlci5jb20nfX0pXHJcbnRlc3QubmV4dCgpOyBcclxu7J2066CH6rKMIO2FjOyKpO2KuOulvCDtlZjquLAg7Y647ZWY64ukIHlpZWxk66W8IOyCrOyaqe2VmOuptFxyXG4qL1xyXG5cclxuLy8g66Gc6re47J24IO2VoOuVjCDrjbDsnbTthLDrj4Qg6rCZ7J20IOuztOuCtOykmOyVvCDtlZjripTrjbAg7J2065+065WQXHJcbi8vIOyLpO2Wie2VnCDtlajsiJgg7JWI7JeQIGxvZ0lu7ZWo7IiYIGFjdGlvbiDrsJvslYTshJxcclxuXHJcbi8vIGNhbGwsIGZvcmsg7J2YIOywqOydtCAgZm9ya+uKlOu5hOuPmeq4sCwgY2FsbOydgCDrj5nquLAg662Q6rCAIOuLpOulvOq5jCBjYWxsIOulvCDtlZjrqbQgbG9nSW5BUEnqsIAg66as7YS0IO2VoOuWhCDquYzsp4Ag6riw64uk66as66m07IScIHJlc3VsdCDsl5Ag64Sj7Ja07KO864qU642wXHJcbi8vIGZvcmvrpbwg7ZWY66m0IOq4sOuLpOumrOyngCDslYrqs6Ag6re464OlIOuztOuCtOuyhOumrOqzoCDrsJTroZwg64uk7J2M6ruYIOyLpO2WieuQnOuLpCEhXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8g7LKr67KI7Ke4IOyekOumrOqwgCDtlajsiJjqs6Ag6re4IOuLpOydjOu2gO2EsOuKlCDrp6TqsJzrs4DsiJjrk6RcclxuXHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDIwMDApO1xyXG5cclxuICAgICAgICAvLyBmb3JrIOulvCDsgqzsmqntlZjrqbQgYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIik77J206rGw64KYIOuniOywrOqwgOyngCDri6RcclxuICAgICAgICAvLyBjYWxsIOulvCDtlZjrqbQgYXhpb3MucG9zdChcIi9hcGkvbG9naW5cIikudGhlbigoKSA9PiB7fSkg7J206rGw656RIOu5hOyKt+2VmOuLpFxyXG4gICAgICAgIC8vIOygleumrO2VmOuptCDqsrDqs7zrpbwg67Cb7JWE7Jis65aEIOq5jOyngCDquLDri6TrpqzripDrg5Ag7JWE64uI66m0IOq3uOuDpSDrsJTroZwg64SY7Ja06rCA64qQ64OQXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogXCJMT0dfSU5fU1VDQ0VTU1wiLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkxPR19JTl9GQUlMVVJFXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HX09VVF9TVUNDRVNTXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogXCJMT0dfT1VUX0ZBSUxVUkVcIixcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChcIkxPR19JTl9SRVFVRVNUXCIsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFwiTE9HX09VVF9SRVFVRVNUXCIsIGxvZ091dCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSwgLy9jYWxsIOydtOuekSDri6TrpoRcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=