webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\David\\Desktop\\NextJS\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";


function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

_c = HomePage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); //-------------------------------------------------------------------------------------
//Notice can only be donw within a page component
//Notice export function getStaticProps is preserved name
//Its a built in function , nextJS will look for a function wth that name and if it finds it and will execute this function during this pre-rendering process . in other words it will call get static props first and only then it will call the page component function we created which will result that FIRST the fetching the data will be proccessed on the server and only then the page component will be rendered
//GetStaticProps MUST return an object . this object Must have a KEY with the name of props! , this object should contain the fetched data .
//We can add a field INSIDE OF THE OBJECT BUT OUTSIDE OF PROPS which called revalidate which want a number of seconds , based on the number of seconds we passed to it will determine on what freq the getStaticProp should be Re-evaluated which means what is number of seconds we want to wait to update the fetched data
//Example
// export async function getStaticProps() {
//   //Fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }
//Another solution is getServerSideProps which used when u need to update ur data on the page ON EVERY REQUEST TO THE SERVER unlike getStaticProps which will update the page every few seconds [not based on requests]
//Example:
// export async function getServerSideProps() {
//   //Fetch DATA
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

var _c;

$RefreshReg$(_c, "HomePage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0Q7O0tBRlFGLFE7O0FBNkJNQSx1RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNmJhN2JiODY1YTdkNGQzMjhkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9kYXZpZDpPbVN6ZzVxWEx6MGJoRE5pQGNsdXN0ZXIwLmdvYXJxLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApID0+ICh7XHJcbiAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgIGlkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCksXHJcbiAgICAgIH0pKSxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL05vdGljZSBjYW4gb25seSBiZSBkb253IHdpdGhpbiBhIHBhZ2UgY29tcG9uZW50XHJcbi8vTm90aWNlIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyBpcyBwcmVzZXJ2ZWQgbmFtZVxyXG5cclxuLy9JdHMgYSBidWlsdCBpbiBmdW5jdGlvbiAsIG5leHRKUyB3aWxsIGxvb2sgZm9yIGEgZnVuY3Rpb24gd3RoIHRoYXQgbmFtZSBhbmQgaWYgaXQgZmluZHMgaXQgYW5kIHdpbGwgZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uIGR1cmluZyB0aGlzIHByZS1yZW5kZXJpbmcgcHJvY2VzcyAuIGluIG90aGVyIHdvcmRzIGl0IHdpbGwgY2FsbCBnZXQgc3RhdGljIHByb3BzIGZpcnN0IGFuZCBvbmx5IHRoZW4gaXQgd2lsbCBjYWxsIHRoZSBwYWdlIGNvbXBvbmVudCBmdW5jdGlvbiB3ZSBjcmVhdGVkIHdoaWNoIHdpbGwgcmVzdWx0IHRoYXQgRklSU1QgdGhlIGZldGNoaW5nIHRoZSBkYXRhIHdpbGwgYmUgcHJvY2Nlc3NlZCBvbiB0aGUgc2VydmVyIGFuZCBvbmx5IHRoZW4gdGhlIHBhZ2UgY29tcG9uZW50IHdpbGwgYmUgcmVuZGVyZWRcclxuXHJcbi8vR2V0U3RhdGljUHJvcHMgTVVTVCByZXR1cm4gYW4gb2JqZWN0IC4gdGhpcyBvYmplY3QgTXVzdCBoYXZlIGEgS0VZIHdpdGggdGhlIG5hbWUgb2YgcHJvcHMhICwgdGhpcyBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gdGhlIGZldGNoZWQgZGF0YSAuXHJcblxyXG4vL1dlIGNhbiBhZGQgYSBmaWVsZCBJTlNJREUgT0YgVEhFIE9CSkVDVCBCVVQgT1VUU0lERSBPRiBQUk9QUyB3aGljaCBjYWxsZWQgcmV2YWxpZGF0ZSB3aGljaCB3YW50IGEgbnVtYmVyIG9mIHNlY29uZHMgLCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgd2UgcGFzc2VkIHRvIGl0IHdpbGwgZGV0ZXJtaW5lIG9uIHdoYXQgZnJlcSB0aGUgZ2V0U3RhdGljUHJvcCBzaG91bGQgYmUgUmUtZXZhbHVhdGVkIHdoaWNoIG1lYW5zIHdoYXQgaXMgbnVtYmVyIG9mIHNlY29uZHMgd2Ugd2FudCB0byB3YWl0IHRvIHVwZGF0ZSB0aGUgZmV0Y2hlZCBkYXRhXHJcblxyXG4vL0V4YW1wbGVcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuLy8gICAvL0ZldGNoIGRhdGEgZnJvbSBBUElcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgICByZXZhbGlkYXRlOiAxMCxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vL0Fub3RoZXIgc29sdXRpb24gaXMgZ2V0U2VydmVyU2lkZVByb3BzIHdoaWNoIHVzZWQgd2hlbiB1IG5lZWQgdG8gdXBkYXRlIHVyIGRhdGEgb24gdGhlIHBhZ2UgT04gRVZFUlkgUkVRVUVTVCBUTyBUSEUgU0VSVkVSIHVubGlrZSBnZXRTdGF0aWNQcm9wcyB3aGljaCB3aWxsIHVwZGF0ZSB0aGUgcGFnZSBldmVyeSBmZXcgc2Vjb25kcyBbbm90IGJhc2VkIG9uIHJlcXVlc3RzXVxyXG5cclxuLy9FeGFtcGxlOlxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICAvL0ZldGNoIERBVEFcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9