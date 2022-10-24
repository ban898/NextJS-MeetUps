webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "C:\\Users\\David\\Desktop\\NextJS\\06-onwards-to-a-bigger-project-starting-project\\pages\\index.js";

var DUMMY_MEETUPS = [{
  id: "m1",
  title: "The First MeetUp",
  image: "https://pixabay.com/get/g0371f2eebadd6402c51bfab9bba4559ed79d488725ba499b1c06438c712a18f9c6801f14651cba1044bb79be6a01a77f51e1db58fdec0feeff8fbf3648ad108c0d96655fe7896f54e5421f54240f5f43_1920.jpg",
  address: "Some address 42, Street 119",
  description: "The First"
}, {
  id: "m2",
  title: "The Second MeetUp",
  image: "https://pixabay.com/get/g8b3acdec2533d8582f3d1a7d74deb41829aeb5856042055a12a7b79da3e1402580f553dec7d3ead0e7254c0762b7d55ecef28cca42ceb409e9511bd6c23a20802e9d99692d3506da727c018f212d0c01_1280.jpg",
  address: "Some address 4, Street 12",
  description: "The Second"
}, {
  id: "m3",
  title: "The Third MeetUp",
  image: "https://pixabay.com/get/g0f4f79cb3d2b263438ae58a2ab93f812199c3efb79a4599b462e1e6dbbba0e60f2c8a43e2fd7b1989cc58f6ad9e48371637b743f0aa07307f4385bf30962f7dc343d36036bc0bff3e7168ac21ec4b6ad_1920.jpg",
  address: "Some address 6, Street 92",
  description: "The Third"
}];

function HomePage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 10
  }, this);
} // export async function getStaticProps() {
//   //Fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10,
//   };
// }


_c = HomePage;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxhQUFhLEdBQUcsQ0FDcEI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGtCQUZUO0FBR0VDLE9BQUssRUFDSCxvTUFKSjtBQUtFQyxTQUFPLEVBQUUsNkJBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FEb0IsRUFTcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLG1CQUZUO0FBR0VDLE9BQUssRUFDSCxvTUFKSjtBQUtFQyxTQUFPLEVBQUUsMkJBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FUb0IsRUFpQnBCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxrQkFGVDtBQUdFQyxPQUFLLEVBQ0gsb01BSko7QUFLRUMsU0FBTyxFQUFFLDJCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBakJvQixDQUF0Qjs7QUEyQkEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsc0JBQU8scUVBQUMsc0VBQUQ7QUFBWSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBWlNGLFE7QUFjTUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOThmNWU2YWVhNDMxNWMzMjdiN2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdFwiO1xyXG5cclxuY29uc3QgRFVNTVlfTUVFVFVQUyA9IFtcclxuICB7XHJcbiAgICBpZDogXCJtMVwiLFxyXG4gICAgdGl0bGU6IFwiVGhlIEZpcnN0IE1lZXRVcFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9nZXQvZzAzNzFmMmVlYmFkZDY0MDJjNTFiZmFiOWJiYTQ1NTllZDc5ZDQ4ODcyNWJhNDk5YjFjMDY0MzhjNzEyYTE4ZjljNjgwMWYxNDY1MWNiYTEwNDRiYjc5YmU2YTAxYTc3ZjUxZTFkYjU4ZmRlYzBmZWVmZjhmYmYzNjQ4YWQxMDhjMGQ5NjY1NWZlNzg5NmY1NGU1NDIxZjU0MjQwZjVmNDNfMTkyMC5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDQyLCBTdHJlZXQgMTE5XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgRmlyc3RcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJUaGUgU2Vjb25kIE1lZXRVcFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9nZXQvZzhiM2FjZGVjMjUzM2Q4NTgyZjNkMWE3ZDc0ZGViNDE4MjlhZWI1ODU2MDQyMDU1YTEyYTdiNzlkYTNlMTQwMjU4MGY1NTNkZWM3ZDNlYWQwZTcyNTRjMDc2MmI3ZDU1ZWNlZjI4Y2NhNDJjZWI0MDllOTUxMWJkNmMyM2EyMDgwMmU5ZDk5NjkyZDM1MDZkYTcyN2MwMThmMjEyZDBjMDFfMTI4MC5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDQsIFN0cmVldCAxMlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIFNlY29uZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTNcIixcclxuICAgIHRpdGxlOiBcIlRoZSBUaGlyZCBNZWV0VXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vcGl4YWJheS5jb20vZ2V0L2cwZjRmNzljYjNkMmIyNjM0MzhhZTU4YTJhYjkzZjgxMjE5OWMzZWZiNzlhNDU5OWI0NjJlMWU2ZGJiYmEwZTYwZjJjOGE0M2UyZmQ3YjE5ODljYzU4ZjZhZDllNDgzNzE2MzdiNzQzZjBhYTA3MzA3ZjQzODViZjMwOTYyZjdkYzM0M2QzNjAzNmJjMGJmZjNlNzE2OGFjMjFlYzRiNmFkXzE5MjAuanBnXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgYWRkcmVzcyA2LCBTdHJlZXQgOTJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBUaGlyZFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG4gIHJldHVybiA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPjtcclxufVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgIC8vRmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHJldmFsaWRhdGU6IDEwLFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vTm90aWNlIGNhbiBvbmx5IGJlIGRvbncgd2l0aGluIGEgcGFnZSBjb21wb25lbnRcclxuLy9Ob3RpY2UgZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzIGlzIHByZXNlcnZlZCBuYW1lXHJcblxyXG4vL0l0cyBhIGJ1aWx0IGluIGZ1bmN0aW9uICwgbmV4dEpTIHdpbGwgbG9vayBmb3IgYSBmdW5jdGlvbiB3dGggdGhhdCBuYW1lIGFuZCBpZiBpdCBmaW5kcyBpdCBhbmQgd2lsbCBleGVjdXRlIHRoaXMgZnVuY3Rpb24gZHVyaW5nIHRoaXMgcHJlLXJlbmRlcmluZyBwcm9jZXNzIC4gaW4gb3RoZXIgd29yZHMgaXQgd2lsbCBjYWxsIGdldCBzdGF0aWMgcHJvcHMgZmlyc3QgYW5kIG9ubHkgdGhlbiBpdCB3aWxsIGNhbGwgdGhlIHBhZ2UgY29tcG9uZW50IGZ1bmN0aW9uIHdlIGNyZWF0ZWQgd2hpY2ggd2lsbCByZXN1bHQgdGhhdCBGSVJTVCB0aGUgZmV0Y2hpbmcgdGhlIGRhdGEgd2lsbCBiZSBwcm9jY2Vzc2VkIG9uIHRoZSBzZXJ2ZXIgYW5kIG9ubHkgdGhlbiB0aGUgcGFnZSBjb21wb25lbnQgd2lsbCBiZSByZW5kZXJlZFxyXG5cclxuLy9HZXRTdGF0aWNQcm9wcyBNVVNUIHJldHVybiBhbiBvYmplY3QgLiB0aGlzIG9iamVjdCBNdXN0IGhhdmUgYSBLRVkgd2l0aCB0aGUgbmFtZSBvZiBwcm9wcyEgLCB0aGlzIG9iamVjdCBzaG91bGQgY29udGFpbiB0aGUgZmV0Y2hlZCBkYXRhIC5cclxuXHJcbi8vV2UgY2FuIGFkZCBhIGZpZWxkIElOU0lERSBPRiBUSEUgT0JKRUNUIEJVVCBPVVRTSURFIE9GIFBST1BTIHdoaWNoIGNhbGxlZCByZXZhbGlkYXRlIHdoaWNoIHdhbnQgYSBudW1iZXIgb2Ygc2Vjb25kcyAsIGJhc2VkIG9uIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB3ZSBwYXNzZWQgdG8gaXQgd2lsbCBkZXRlcm1pbmUgb24gd2hhdCBmcmVxIHRoZSBnZXRTdGF0aWNQcm9wIHNob3VsZCBiZSBSZS1ldmFsdWF0ZWQgd2hpY2ggbWVhbnMgd2hhdCBpcyBudW1iZXIgb2Ygc2Vjb25kcyB3ZSB3YW50IHRvIHdhaXQgdG8gdXBkYXRlIHRoZSBmZXRjaGVkIGRhdGFcclxuXHJcbi8vRXhhbXBsZVxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4vLyAgIC8vRmV0Y2ggZGF0YSBmcm9tIEFQSVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHJldmFsaWRhdGU6IDEwLFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vQW5vdGhlciBzb2x1dGlvbiBpcyBnZXRTZXJ2ZXJTaWRlUHJvcHMgd2hpY2ggdXNlZCB3aGVuIHUgbmVlZCB0byB1cGRhdGUgdXIgZGF0YSBvbiB0aGUgcGFnZSBPTiBFVkVSWSBSRVFVRVNUIFRPIFRIRSBTRVJWRVIgdW5saWtlIGdldFN0YXRpY1Byb3BzIHdoaWNoIHdpbGwgdXBkYXRlIHRoZSBwYWdlIGV2ZXJ5IGZldyBzZWNvbmRzIFtub3QgYmFzZWQgb24gcmVxdWVzdHNdXHJcblxyXG4vL0V4YW1wbGU6XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4vLyAgIC8vRmV0Y2ggREFUQVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTLFxyXG4vLyAgICAgfSxcclxuLy8gICB9O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=