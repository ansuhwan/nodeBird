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
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(2000);

        case 3:
          _context2.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
            type: "LOG_OUT_SUCCESS" // data: result.data,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsInVzZXJTYWdhIiwibG9nSW5BUEkiLCJkYXRhIiwiYXhpb3MiLCJwb3N0IiwiYWN0aW9uIiwiZGVsYXkiLCJwdXQiLCJ0eXBlIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJ0YWtlTGF0ZXN0IiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBaUJVQSxLO21HQTJCQUMsTTttR0FpQkFDLFU7bUdBR0FDLFc7bUdBSWVDLFE7O0FBcEV6Qjs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUNwQixTQUFPQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQXlCRixJQUF6QixDQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7OztBQUNBLFNBQVVOLEtBQVYsQ0FBZ0JTLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS1EsaUJBQU1DLGdFQUFLLENBQUMsSUFBRCxDQUFYOztBQUxSO0FBQUE7QUFVUSxpQkFBTUMsOERBQUcsQ0FBQztBQUNOQyxnQkFBSSxFQUFFLGdCQURBO0FBRU5OLGdCQUFJLEVBQUVHLE1BQU0sQ0FBQ0gsSUFGUCxDQUdOOztBQUhNLFdBQUQsQ0FBVDs7QUFWUjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQlEsaUJBQU1LLDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxnQkFEQTtBQUVOTixnQkFBSSxFQUFFLFlBQUlPLFFBQUosQ0FBYVA7QUFGYixXQUFELENBQVQ7O0FBaEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCQSxTQUFTUSxTQUFULEdBQXFCO0FBQ2pCLFNBQU9QLEtBQUssQ0FBQ0MsSUFBTixDQUFXLGFBQVgsQ0FBUDtBQUNIOztBQUVELFNBQVVQLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHUSxpQkFBTVMsZ0VBQUssQ0FBQyxJQUFELENBQVg7O0FBSFI7QUFBQTtBQUtRLGlCQUFNQyw4REFBRyxDQUFDO0FBQ05DLGdCQUFJLEVBQUUsaUJBREEsQ0FFTjs7QUFGTSxXQUFELENBQVQ7O0FBTFI7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVVEsaUJBQU1ELDhEQUFHLENBQUM7QUFDTkMsZ0JBQUksRUFBRSxpQkFEQTtBQUVOTixnQkFBSSxFQUFFLGFBQUlPLFFBQUosQ0FBYVA7QUFGYixXQUFELENBQVQ7O0FBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJBLFNBQVVKLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1hLHFFQUFVLENBQUMsZ0JBQUQsRUFBbUJmLEtBQW5CLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLFNBQVVHLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ksaUJBQU1ZLHFFQUFVLENBQUMsaUJBQUQsRUFBb0JkLE1BQXBCLENBQWhCOztBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllLFNBQVVHLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsaUJBQU1ZLDhEQUFHLENBQUMsQ0FDTkMsK0RBQUksQ0FBQ2YsVUFBRCxDQURFLEVBQ1k7QUFDbEJlLHlFQUFJLENBQUNkLFdBQUQsQ0FGRSxDQUFELENBQVQ7O0FBRFc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wYTdiY2E1NTY2Y2M4YzZkYTVjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIGRlbGF5IH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIsIGRhdGEpO1xyXG59XHJcblxyXG4vKiBcclxuY29uc3QgdGVzdCA9IGxvZ0luKHt0eXBlOiAnTE9HX0lOX1JFUVVFU1QnLCBkYXRhOiB7aWQ6ICdka3N0bjEyMzBAbmF2ZXIuY29tJ319KVxyXG50ZXN0Lm5leHQoKTsgXHJcbuydtOugh+qyjCDthYzsiqTtirjrpbwg7ZWY6riwIO2OuO2VmOuLpCB5aWVsZOulvCDsgqzsmqntlZjrqbRcclxuKi9cclxuXHJcbi8vIOuhnOq3uOyduCDtlaDrlYwg642w7J207YSw64+EIOqwmeydtCDrs7TrgrTspJjslbwg7ZWY64qU642wIOydtOuftOuVkFxyXG4vLyDsi6TtlontlZwg7ZWo7IiYIOyViOyXkCBsb2dJbu2VqOyImCBhY3Rpb24g67Cb7JWE7IScXHJcblxyXG4vLyBjYWxsLCBmb3JrIOydmCDssKjsnbQgIGZvcmvripTruYTrj5nquLAsIGNhbGzsnYAg64+Z6riwIOutkOqwgCDri6TrpbzquYwgY2FsbCDrpbwg7ZWY66m0IGxvZ0luQVBJ6rCAIOumrO2EtCDtlaDrloQg6rmM7KeAIOq4sOuLpOumrOuptOyEnCByZXN1bHQg7JeQIOuEo+yWtOyjvOuKlOuNsFxyXG4vLyBmb3Jr66W8IO2VmOuptCDquLDri6Trpqzsp4Ag7JWK6rOgIOq3uOuDpSDrs7TrgrTrsoTrpqzqs6Ag67CU66GcIOuLpOydjOq7mCDsi6TtlonrkJzri6QhIVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIOyyq+uyiOynuCDsnpDrpqzqsIAg7ZWo7IiY6rOgIOq3uCDri6TsnYzrtoDthLDripQg66ek6rCc67OA7IiY65OkXHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgyMDAwKTtcclxuXHJcbiAgICAgICAgLy8gZm9yayDrpbwg7IKs7Jqp7ZWY66m0IGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIpO+ydtOqxsOuCmCDrp4jssKzqsIDsp4Ag64ukXHJcbiAgICAgICAgLy8gY2FsbCDrpbwg7ZWY66m0IGF4aW9zLnBvc3QoXCIvYXBpL2xvZ2luXCIpLnRoZW4oKCkgPT4ge30pIOydtOqxsOuekSDruYTsirftlZjri6RcclxuICAgICAgICAvLyDsoJXrpqztlZjrqbQg6rKw6rO866W8IOuwm+yVhOyYrOuWhCDquYzsp4Ag6riw64uk66as64qQ64OQIOyVhOuLiOuptCDqt7jrg6Ug67CU66GcIOuEmOyWtOqwgOuKkOuDkFxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HX0lOX1NVQ0NFU1NcIixcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogXCJMT0dfSU5fRkFJTFVSRVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2xvZ291dFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDIwMDApO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIkxPR19PVVRfU1VDQ0VTU1wiLFxyXG4gICAgICAgICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiTE9HX09VVF9GQUlMVVJFXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dJbigpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoXCJMT0dfSU5fUkVRVUVTVFwiLCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChcIkxPR19PVVRfUkVRVUVTVFwiLCBsb2dPdXQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dJbiksIC8vY2FsbCDsnbTrnpEg64uk66aEXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9