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

var DUMMY_MEETUPS = [{
  id: "m1",
  title: "The First MeetUp",
  image: "https://pixabay.com/get/g48a8cd5ff2ebb737728764e47d7b8911d3efc48f599060dd9bcc1c3f4e3beb493afd67e7b1f7c5f15c56262c154e4a81f8024693a72590b67e33b3450104c73d1b38a6f6a6e70e2c4b4838f364aa084e_1920.jpg",
  address: "Some address 42, Street 119",
  description: "The First"
}, {
  id: "m2",
  title: "The Second MeetUp",
  image: "https://pixabay.com/get/g29fde778476fc13276e14851c1fb175ef933275cafef79ed2c83b3f97dca56080ac7a80db7fc59e3c5da7e80b262706d9cf70fc52ab2dbd9b67ad6c7039bc6b9cf4f91878da34ae9c6d0bcb48deb6aae_1920.jpg",
  address: "Some address 4, Street 12",
  description: "The Second"
}, {
  id: "m3",
  title: "The Third MeetUp",
  image: "https://pixabay.com/get/g0e5aab3873b43e613a4c046a20364a641947e13c3e5828a65533aa7f1e5e9006f4171fb0f655fd83e0abe3581bc516124fcde485d816790b22a8a286ee2dcacaff721b7c53ead13491cb3f40f8eeca49_1920.jpg",
  address: "Some address 6, Street 92",
  description: "The Third"
}];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLENBQ3BCO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxrQkFGVDtBQUdFQyxPQUFLLEVBQ0gsb01BSko7QUFLRUMsU0FBTyxFQUFFLDZCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBRG9CLEVBU3BCO0FBQ0VKLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSxtQkFGVDtBQUdFQyxPQUFLLEVBQ0gsb01BSko7QUFLRUMsU0FBTyxFQUFFLDJCQUxYO0FBTUVDLGFBQVcsRUFBRTtBQU5mLENBVG9CLEVBaUJwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUNILG9NQUpKO0FBS0VDLFNBQU8sRUFBRSwyQkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQWpCb0IsQ0FBdEI7O0FBMkJBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLHNCQUFPLHFFQUFDLHNFQUFEO0FBQVksV0FBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztLQUZRRixROztBQXNCTUEsdUVBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDQ5N2I5YTQwNmQ2MzAyNDI2NDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJUaGUgRmlyc3QgTWVldFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3BpeGFiYXkuY29tL2dldC9nNDhhOGNkNWZmMmViYjczNzcyODc2NGU0N2Q3Yjg5MTFkM2VmYzQ4ZjU5OTA2MGRkOWJjYzFjM2Y0ZTNiZWI0OTNhZmQ2N2U3YjFmN2M1ZjE1YzU2MjYyYzE1NGU0YTgxZjgwMjQ2OTNhNzI1OTBiNjdlMzNiMzQ1MDEwNGM3M2QxYjM4YTZmNmE2ZTcwZTJjNGI0ODM4ZjM2NGFhMDg0ZV8xOTIwLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNDIsIFN0cmVldCAxMTlcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBGaXJzdFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIlRoZSBTZWNvbmQgTWVldFVwXCIsXHJcbiAgICBpbWFnZTpcclxuICAgICAgXCJodHRwczovL3BpeGFiYXkuY29tL2dldC9nMjlmZGU3Nzg0NzZmYzEzMjc2ZTE0ODUxYzFmYjE3NWVmOTMzMjc1Y2FmZWY3OWVkMmM4M2IzZjk3ZGNhNTYwODBhYzdhODBkYjdmYzU5ZTNjNWRhN2U4MGIyNjI3MDZkOWNmNzBmYzUyYWIyZGJkOWI2N2FkNmM3MDM5YmM2YjljZjRmOTE4NzhkYTM0YWU5YzZkMGJjYjQ4ZGViNmFhZV8xOTIwLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlc3MgNCwgU3RyZWV0IDEyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgU2Vjb25kXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJtM1wiLFxyXG4gICAgdGl0bGU6IFwiVGhlIFRoaXJkIE1lZXRVcFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9waXhhYmF5LmNvbS9nZXQvZzBlNWFhYjM4NzNiNDNlNjEzYTRjMDQ2YTIwMzY0YTY0MTk0N2UxM2MzZTU4MjhhNjU1MzNhYTdmMWU1ZTkwMDZmNDE3MWZiMGY2NTVmZDgzZTBhYmUzNTgxYmM1MTYxMjRmY2RlNDg1ZDgxNjc5MGIyMmE4YTI4NmVlMmRjYWNhZmY3MjFiN2M1M2VhZDEzNDkxY2IzZjQwZjhlZWNhNDlfMTkyMC5qcGdcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBhZGRyZXNzIDYsIFN0cmVldCA5MlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIFRoaXJkXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmZ1bmN0aW9uIEhvbWVQYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcclxuICAgIFwibW9uZ29kYitzcnY6Ly9kYXZpZDpPbVN6ZzVxWEx6MGJoRE5pQGNsdXN0ZXIwLmdvYXJxLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcclxuICApO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XHJcblxyXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwczogbWVldHVwcyxcclxuICAgIH0sXHJcbiAgICByZXZhbGlkYXRlOiAxMCxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL05vdGljZSBjYW4gb25seSBiZSBkb253IHdpdGhpbiBhIHBhZ2UgY29tcG9uZW50XHJcbi8vTm90aWNlIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyBpcyBwcmVzZXJ2ZWQgbmFtZVxyXG5cclxuLy9JdHMgYSBidWlsdCBpbiBmdW5jdGlvbiAsIG5leHRKUyB3aWxsIGxvb2sgZm9yIGEgZnVuY3Rpb24gd3RoIHRoYXQgbmFtZSBhbmQgaWYgaXQgZmluZHMgaXQgYW5kIHdpbGwgZXhlY3V0ZSB0aGlzIGZ1bmN0aW9uIGR1cmluZyB0aGlzIHByZS1yZW5kZXJpbmcgcHJvY2VzcyAuIGluIG90aGVyIHdvcmRzIGl0IHdpbGwgY2FsbCBnZXQgc3RhdGljIHByb3BzIGZpcnN0IGFuZCBvbmx5IHRoZW4gaXQgd2lsbCBjYWxsIHRoZSBwYWdlIGNvbXBvbmVudCBmdW5jdGlvbiB3ZSBjcmVhdGVkIHdoaWNoIHdpbGwgcmVzdWx0IHRoYXQgRklSU1QgdGhlIGZldGNoaW5nIHRoZSBkYXRhIHdpbGwgYmUgcHJvY2Nlc3NlZCBvbiB0aGUgc2VydmVyIGFuZCBvbmx5IHRoZW4gdGhlIHBhZ2UgY29tcG9uZW50IHdpbGwgYmUgcmVuZGVyZWRcclxuXHJcbi8vR2V0U3RhdGljUHJvcHMgTVVTVCByZXR1cm4gYW4gb2JqZWN0IC4gdGhpcyBvYmplY3QgTXVzdCBoYXZlIGEgS0VZIHdpdGggdGhlIG5hbWUgb2YgcHJvcHMhICwgdGhpcyBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gdGhlIGZldGNoZWQgZGF0YSAuXHJcblxyXG4vL1dlIGNhbiBhZGQgYSBmaWVsZCBJTlNJREUgT0YgVEhFIE9CSkVDVCBCVVQgT1VUU0lERSBPRiBQUk9QUyB3aGljaCBjYWxsZWQgcmV2YWxpZGF0ZSB3aGljaCB3YW50IGEgbnVtYmVyIG9mIHNlY29uZHMgLCBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHNlY29uZHMgd2UgcGFzc2VkIHRvIGl0IHdpbGwgZGV0ZXJtaW5lIG9uIHdoYXQgZnJlcSB0aGUgZ2V0U3RhdGljUHJvcCBzaG91bGQgYmUgUmUtZXZhbHVhdGVkIHdoaWNoIG1lYW5zIHdoYXQgaXMgbnVtYmVyIG9mIHNlY29uZHMgd2Ugd2FudCB0byB3YWl0IHRvIHVwZGF0ZSB0aGUgZmV0Y2hlZCBkYXRhXHJcblxyXG4vL0V4YW1wbGVcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuLy8gICAvL0ZldGNoIGRhdGEgZnJvbSBBUElcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgICByZXZhbGlkYXRlOiAxMCxcclxuLy8gICB9O1xyXG4vLyB9XHJcblxyXG4vL0Fub3RoZXIgc29sdXRpb24gaXMgZ2V0U2VydmVyU2lkZVByb3BzIHdoaWNoIHVzZWQgd2hlbiB1IG5lZWQgdG8gdXBkYXRlIHVyIGRhdGEgb24gdGhlIHBhZ2UgT04gRVZFUlkgUkVRVUVTVCBUTyBUSEUgU0VSVkVSIHVubGlrZSBnZXRTdGF0aWNQcm9wcyB3aGljaCB3aWxsIHVwZGF0ZSB0aGUgcGFnZSBldmVyeSBmZXcgc2Vjb25kcyBbbm90IGJhc2VkIG9uIHJlcXVlc3RzXVxyXG5cclxuLy9FeGFtcGxlOlxyXG5cclxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuLy8gICAvL0ZldGNoIERBVEFcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQUyxcclxuLy8gICAgIH0sXHJcbi8vICAgfTtcclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9