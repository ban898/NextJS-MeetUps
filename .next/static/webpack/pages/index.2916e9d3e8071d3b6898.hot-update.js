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
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBNkJBLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUZRRixROztBQWlCTUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjkxNmU5ZDNlODA3MWQzYjY4OTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJUaGUgRmlyc3QgTWVldFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3BpeGFiYXkuY29tL2dldC9nNDhhOGNkNWZmMmViYjczNzcyODc2NGU0N2Q3Yjg5MTFkM2VmYzQ4ZjU5OTA2MGRkOWJjYzFjM2Y0ZTNiZWI0OTNhZmQ2N2U3YjFmN2M1ZjE1YzU2MjYyYzE1NGU0YTgxZjgwMjQ2OTNhNzI1OTBiNjdlMzNiMzQ1MDEwNGM3M2QxYjM4YTZmNmE2ZTcwZTJjNGI0ODM4ZjM2NGFhMDg0ZV8xOTIwLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNDIsIFN0cmVldCAxMTlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBGaXJzdFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIlRoZSBTZWNvbmQgTWVldFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3BpeGFiYXkuY29tL2dldC9nMjlmZGU3Nzg0NzZmYzEzMjc2ZTE0ODUxYzFmYjE3NWVmOTMzMjc1Y2FmZWY3OWVkMmM4M2IzZjk3ZGNhNTYwODBhYzdhODBkYjdmYzU5ZTNjNWRhN2U4MGIyNjI3MDZkOWNmNzBmYzUyYWIyZGJkOWI2N2FkNmM3MDM5YmM2YjljZjRmOTE4NzhkYTM0YWU5YzZkMGJjYjQ4ZGViNmFhZV8xOTIwLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNCwgU3RyZWV0IDEyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgU2Vjb25kXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtM1wiLFxyXG4gICAgdGl0bGU6IFwiVGhlIFRoaXJkIE1lZXRVcFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9nZXQvZzBlNWFhYjM4NzNiNDNlNjEzYTRjMDQ2YTIwMzY0YTY0MTk0N2UxM2MzZTU4MjhhNjU1MzNhYTdmMWU1ZTkwMDZmNDE3MWZiMGY2NTVmZDgzZTBhYmUzNTgxYmM1MTYxMjRmY2RlNDg1ZDgxNjc5MGIyMmE4YTI4NmVlMmRjYWNhZmY3MjFiN2M1M2VhZDEzNDkxY2IzZjQwZjhlZWNhNDlfMTkyMC5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDYsIFN0cmVldCA5MlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIFRoaXJkXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLy9GZXRjaCBkYXRhIGZyb20gQVBJXHJcblxyXG4gIE1vbmdvQ2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbiAgICB9LFxyXG4gICAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy9Ob3RpY2UgY2FuIG9ubHkgYmUgZG9udyB3aXRoaW4gYSBwYWdlIGNvbXBvbmVudFxyXG4vL05vdGljZSBleHBvcnQgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMgaXMgcHJlc2VydmVkIG5hbWVcclxuXHJcbi8vSXRzIGEgYnVpbHQgaW4gZnVuY3Rpb24gLCBuZXh0SlMgd2lsbCBsb29rIGZvciBhIGZ1bmN0aW9uIHd0aCB0aGF0IG5hbWUgYW5kIGlmIGl0IGZpbmRzIGl0IGFuZCB3aWxsIGV4ZWN1dGUgdGhpcyBmdW5jdGlvbiBkdXJpbmcgdGhpcyBwcmUtcmVuZGVyaW5nIHByb2Nlc3MgLiBpbiBvdGhlciB3b3JkcyBpdCB3aWxsIGNhbGwgZ2V0IHN0YXRpYyBwcm9wcyBmaXJzdCBhbmQgb25seSB0aGVuIGl0IHdpbGwgY2FsbCB0aGUgcGFnZSBjb21wb25lbnQgZnVuY3Rpb24gd2UgY3JlYXRlZCB3aGljaCB3aWxsIHJlc3VsdCB0aGF0IEZJUlNUIHRoZSBmZXRjaGluZyB0aGUgZGF0YSB3aWxsIGJlIHByb2NjZXNzZWQgb24gdGhlIHNlcnZlciBhbmQgb25seSB0aGVuIHRoZSBwYWdlIGNvbXBvbmVudCB3aWxsIGJlIHJlbmRlcmVkXHJcblxyXG4vL0dldFN0YXRpY1Byb3BzIE1VU1QgcmV0dXJuIGFuIG9iamVjdCAuIHRoaXMgb2JqZWN0IE11c3QgaGF2ZSBhIEtFWSB3aXRoIHRoZSBuYW1lIG9mIHByb3BzISAsIHRoaXMgb2JqZWN0IHNob3VsZCBjb250YWluIHRoZSBmZXRjaGVkIGRhdGEgLlxyXG5cclxuLy9XZSBjYW4gYWRkIGEgZmllbGQgSU5TSURFIE9GIFRIRSBPQkpFQ1QgQlVUIE9VVFNJREUgT0YgUFJPUFMgd2hpY2ggY2FsbGVkIHJldmFsaWRhdGUgd2hpY2ggd2FudCBhIG51bWJlciBvZiBzZWNvbmRzICwgYmFzZWQgb24gdGhlIG51bWJlciBvZiBzZWNvbmRzIHdlIHBhc3NlZCB0byBpdCB3aWxsIGRldGVybWluZSBvbiB3aGF0IGZyZXEgdGhlIGdldFN0YXRpY1Byb3Agc2hvdWxkIGJlIFJlLWV2YWx1YXRlZCB3aGljaCBtZWFucyB3aGF0IGlzIG51bWJlciBvZiBzZWNvbmRzIHdlIHdhbnQgdG8gd2FpdCB0byB1cGRhdGUgdGhlIGZldGNoZWQgZGF0YVxyXG5cclxuLy9FeGFtcGxlXHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbi8vICAgLy9GZXRjaCBkYXRhIGZyb20gQVBJXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgICAgcmV2YWxpZGF0ZTogMTAsXHJcbi8vICAgfTtcclxuLy8gfVxyXG5cclxuLy9Bbm90aGVyIHNvbHV0aW9uIGlzIGdldFNlcnZlclNpZGVQcm9wcyB3aGljaCB1c2VkIHdoZW4gdSBuZWVkIHRvIHVwZGF0ZSB1ciBkYXRhIG9uIHRoZSBwYWdlIE9OIEVWRVJZIFJFUVVFU1QgVE8gVEhFIFNFUlZFUiB1bmxpa2UgZ2V0U3RhdGljUHJvcHMgd2hpY2ggd2lsbCB1cGRhdGUgdGhlIHBhZ2UgZXZlcnkgZmV3IHNlY29uZHMgW25vdCBiYXNlZCBvbiByZXF1ZXN0c11cclxuXHJcbi8vRXhhbXBsZTpcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbi8vICAgLy9GZXRjaCBEQVRBXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IERVTU1ZX01FRVRVUFMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==