"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Login.jsx":
/*!**********************************!*\
  !*** ./src/components/Login.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_desktop_Coding_Last_Call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_desktop_Coding_Last_Call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_desktop_Coding_Last_Call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n// import { gapi } from 'gapi-script';\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Login() {\n    var handleLogin = function() {\n        var _ref = _asyncToGenerator(_Users_desktop_Coding_Last_Call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(googleData) {\n            var res, data;\n            return _Users_desktop_Coding_Last_Call_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return fetch(\"/api/v1/auth/google\", {\n                            method: \"POST\",\n                            body: JSON.stringify({\n                                token: googleData.tokenId\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 2:\n                        res = _ctx.sent;\n                        _ctx.next = 5;\n                        return res.json();\n                    case 5:\n                        data = _ctx.sent;\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // store returned user somehow\n        }));\n        return function handleLogin(googleData) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // useEffect(() => {\n    // const initClient = () => {\n    //         gapi.client.init({\n    //         clientId: clientId,\n    //         scope: ''\n    //     });\n    //     };\n    // });\n    var onSuccess = function(res) {\n        console.log('success:', res);\n    };\n    var onFailure = function(err) {\n        console.log('failed:', err);\n    };\n    return(// <GoogleLogin\n    //     clientId={clientId}\n    //     buttonText=\"Sign in with Google\"\n    //     onSuccess={onSuccess}\n    //     onFailure={onFailure}\n    //     cookiePolicy={'single_host_origin'}\n    //     isSignedIn={true}\n    // />\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_google_login__WEBPACK_IMPORTED_MODULE_2__.GoogleLogin, {\n            clientId: \"596749184708-9paaqi0f7cqqqrd1tv1iht4kk6hb280b.apps.googleusercontent.com\",\n            buttonText: \"Log in with Google\",\n            onSuccess: handleLogin,\n            onFailure: handleLogin,\n            cookiePolicy: 'single_host_origin'\n        }, void 0, false, {\n            fileName: \"/Users/desktop/Coding/Last_Call/src/components/Login.jsx\",\n            lineNumber: 48,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/desktop/Coding/Last_Call/src/components/Login.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this));\n}\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQsRUFBc0M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBSTdCRyxLQUFLLEdBQUcsQ0FBQztJQUNkLEdBQUssQ0FBQ0MsV0FBVztnTEFBRyxRQUFRLFNBQUZDLFVBQVUsRUFBSSxDQUFDO2dCQUMvQkMsR0FBRyxFQVNIQyxJQUFJOzs7OzsrQkFUUUMsS0FBSyxDQUFDLENBQXFCLHNCQUFFLENBQUM7NEJBQzVDQyxNQUFNLEVBQUUsQ0FBTTs0QkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO2dDQUN0QkMsS0FBSyxFQUFFUixVQUFVLENBQUNTLE9BQU87NEJBQzNCLENBQUM7NEJBQ0RDLE9BQU8sRUFBRSxDQUFDO2dDQUNSLENBQWMsZUFBRSxDQUFrQjs0QkFDcEMsQ0FBQzt3QkFDSCxDQUFDOzt3QkFSS1QsR0FBRzs7K0JBU1VBLEdBQUcsQ0FBQ1UsSUFBSTs7d0JBQXJCVCxJQUFJOzs7Ozs7UUFDVixFQUE4QjtRQUNoQyxDQUFDO3dCQVpHSCxXQUFXLENBQVNDLFVBQVU7Ozs7SUFhcEMsRUFBb0I7SUFDcEIsRUFBNkI7SUFDN0IsRUFBNkI7SUFDN0IsRUFBOEI7SUFDOUIsRUFBb0I7SUFDcEIsRUFBVTtJQUNWLEVBQVM7SUFDVCxFQUFNO0lBR04sR0FBSyxDQUFDWSxTQUFTLEdBQUcsUUFBUSxDQUFQWCxHQUFHLEVBQUssQ0FBQztRQUN4QlksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVSxXQUFFYixHQUFHO0lBQy9CLENBQUM7SUFDRCxHQUFLLENBQUNjLFNBQVMsR0FBRyxRQUFRLENBQVBDLEdBQUcsRUFBSyxDQUFDO1FBQ3hCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFTLFVBQUVFLEdBQUc7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FDTixFQUFlO0lBQ2YsRUFBMEI7SUFDMUIsRUFBdUM7SUFDdkMsRUFBNEI7SUFDNUIsRUFBNEI7SUFDNUIsRUFBMEM7SUFDMUMsRUFBd0I7SUFDeEIsRUFBSztnRkFDSkMsQ0FBRzs4RkFDSHRCLDJEQUFXO1lBQ1p1QixRQUFRLEVBQUMsQ0FBMEU7WUFDbkZDLFVBQVUsRUFBQyxDQUFvQjtZQUMvQlAsU0FBUyxFQUFFYixXQUFXO1lBQ3RCZ0IsU0FBUyxFQUFFaEIsV0FBVztZQUN0QnFCLFlBQVksRUFBRSxDQUFvQjs7Ozs7Ozs7Ozs7QUFNdEMsQ0FBQztLQXBEUXRCLEtBQUs7QUFzRGQsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qc3g/MjllNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb29nbGVMb2dpbiB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG4vLyBpbXBvcnQgeyBnYXBpIH0gZnJvbSAnZ2FwaS1zY3JpcHQnO1xuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cblxuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIGdvb2dsZURhdGEgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvdjEvYXV0aC9nb29nbGVcIiwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHRva2VuOiBnb29nbGVEYXRhLnRva2VuSWRcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgLy8gc3RvcmUgcmV0dXJuZWQgdXNlciBzb21laG93XG4gICAgICB9XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCBpbml0Q2xpZW50ID0gKCkgPT4ge1xuICAgIC8vICAgICAgICAgZ2FwaS5jbGllbnQuaW5pdCh7XG4gICAgLy8gICAgICAgICBjbGllbnRJZDogY2xpZW50SWQsXG4gICAgLy8gICAgICAgICBzY29wZTogJydcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIH07XG4gICAgLy8gfSk7XG5cblxuICAgIGNvbnN0IG9uU3VjY2VzcyA9IChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3M6JywgcmVzKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uRmFpbHVyZSA9IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZDonLCBlcnIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgIC8vIDxHb29nbGVMb2dpblxuICAgIC8vICAgICBjbGllbnRJZD17Y2xpZW50SWR9XG4gICAgLy8gICAgIGJ1dHRvblRleHQ9XCJTaWduIGluIHdpdGggR29vZ2xlXCJcbiAgICAvLyAgICAgb25TdWNjZXNzPXtvblN1Y2Nlc3N9XG4gICAgLy8gICAgIG9uRmFpbHVyZT17b25GYWlsdXJlfVxuICAgIC8vICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuICAgIC8vICAgICBpc1NpZ25lZEluPXt0cnVlfVxuICAgIC8vIC8+XG4gICAgPGRpdj5cbiAgICA8R29vZ2xlTG9naW5cbiAgICBjbGllbnRJZD1cIjU5Njc0OTE4NDcwOC05cGFhcWkwZjdjcXFxcmQxdHYxaWh0NGtrNmhiMjgwYi5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgYnV0dG9uVGV4dD1cIkxvZyBpbiB3aXRoIEdvb2dsZVwiXG4gICAgb25TdWNjZXNzPXtoYW5kbGVMb2dpbn1cbiAgICBvbkZhaWx1cmU9e2hhbmRsZUxvZ2lufVxuICAgIGNvb2tpZVBvbGljeT17J3NpbmdsZV9ob3N0X29yaWdpbid9XG4vPlxuXG48L2Rpdj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il0sIm5hbWVzIjpbIkdvb2dsZUxvZ2luIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMb2dpbiIsImhhbmRsZUxvZ2luIiwiZ29vZ2xlRGF0YSIsInJlcyIsImRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJ0b2tlbklkIiwiaGVhZGVycyIsImpzb24iLCJvblN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwib25GYWlsdXJlIiwiZXJyIiwiZGl2IiwiY2xpZW50SWQiLCJidXR0b25UZXh0IiwiY29va2llUG9saWN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Login.jsx\n");

/***/ })

});