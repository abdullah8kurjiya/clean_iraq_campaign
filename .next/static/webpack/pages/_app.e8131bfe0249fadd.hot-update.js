"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LanguageSwitcher */ \"./components/LanguageSwitcher.js\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n// import logoimg from \"../public/images/logo.png\";\n\n\n\n\nasync function getStaticProps(param) {\n    let { locale } = param;\n    return {\n        props: {\n            ...await serverSideTranslations(locale, [\n                \"common\",\n                \"home\"\n            ])\n        }\n    };\n}\nconst Header = ()=>{\n    _s();\n    const { t } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();\n    let Links = [\n        {\n            name: t(\"Home\"),\n            link: \"/\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"About Us\"),\n            link: \"/About Us\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 35,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Initiatives\"),\n            link: \"/Initiatives\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Events\"),\n            link: \"/Events\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 57,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Map\"),\n            link: \"/Map\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 68,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Contact Us\"),\n            link: \"/Contact Us\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 79,\n                columnNumber: 5\n            }, undefined)\n        },\n        {\n            name: t(\"Blog\"),\n            link: \"/Blog\",\n            icons: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                icon: \"fa-solid fa-comment-dots\",\n                className: \"px-2 lg:text-[1.5em]\",\n                color: \"#E4A954\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 90,\n                columnNumber: 5\n            }, undefined)\n        }\n    ];\n    let [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        class: \"flex justify-between items-center w-[90%]  mx-auto pt-4 pb-1 h-[62px] md:h-[118px] md:pt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \" w-[51.56px] h-[46.41px] md:w-[100px] md:h-[90px] cursor-pointer \",\n                    src: \"/images/logo.png\",\n                    alt: \"Picture of the author\",\n                    width: 100,\n                    height: 90\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                    lineNumber: 114,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 108,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"xl:flex items-center justify-between bg-white xl:px-10 px-7 z-30\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"md:mt-[30px] xl:flex xl:items-center xl:pb-8  absolute xl:static bg-[#fff] xl:z-auto  left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in \".concat(open ? \"top-[60.5px] md:top-20\" : \"top-[-540px]\"),\n                    children: Links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"xl:ml-8 xl:my-0 my-7 hover:text-primary flex\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"xl:hidden pr-3 pt-[2px] md:px-4 md:pt-1 md:text-3xl\",\n                                    children: link.icons\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                                    lineNumber: 133,\n                                    columnNumber: 8\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: link.link,\n                                    className: \"font-bold md:text-[24px] duration-500\",\n                                    children: link.name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 8\n                                }, undefined)\n                            ]\n                        }, link.name, true, {\n                            fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                            lineNumber: 129,\n                            columnNumber: 7\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                    lineNumber: 123,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 122,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                        lineNumber: 147,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>setOpen(!open),\n                        className: \"right-8 top-6 cursor-pointer xl:hidden\",\n                        children: open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: \"fa-solid fa-xmark\",\n                            className: \"px-2 text-[2rem]\",\n                            color: \"#E4A954\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                            lineNumber: 153,\n                            columnNumber: 7\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                            icon: \"fa-solid fa-bars\",\n                            className: \"px-2 text-[2rem]\",\n                            color: \"#E4A954\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                            lineNumber: 159,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                        lineNumber: 148,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n                lineNumber: 146,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\cleanCamp\\\\nextjs-blog\\\\components\\\\header.js\",\n        lineNumber: 107,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Header, \"mWpx7w3TVkgqFWGcbCsvWfAtUa8=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7QUFRYjtHQTFKTVI7O1FBQ1NMLHdEQUFjQTs7O0tBRHZCSztBQTRKTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci5qcz9jMDk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgbG9nb2ltZyBmcm9tIFwiLi4vcHVibGljL2ltYWdlcy9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2hlciBmcm9tIFwiLi4vY29tcG9uZW50cy9MYW5ndWFnZVN3aXRjaGVyXCI7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgbG9jYWxlIH0pIHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Li4uKGF3YWl0IHNlcnZlclNpZGVUcmFuc2xhdGlvbnMobG9jYWxlLCBbXCJjb21tb25cIiwgXCJob21lXCJdKSksXHJcblx0XHR9LFxyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuXHRjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XHJcblxyXG5cdGxldCBMaW5rcyA9IFtcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogdChcIkhvbWVcIiksXHJcblx0XHRcdGxpbms6IFwiL1wiLFxyXG5cdFx0XHRpY29uczogKFxyXG5cdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1jb21tZW50LWRvdHNcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHgtMiBsZzp0ZXh0LVsxLjVlbV1cIlxyXG5cdFx0XHRcdFx0Y29sb3I9XCIjRTRBOTU0XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogdChcIkFib3V0IFVzXCIpLFxyXG5cdFx0XHRsaW5rOiBcIi9BYm91dCBVc1wiLFxyXG5cdFx0XHRpY29uczogKFxyXG5cdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1jb21tZW50LWRvdHNcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHgtMiBsZzp0ZXh0LVsxLjVlbV1cIlxyXG5cdFx0XHRcdFx0Y29sb3I9XCIjRTRBOTU0XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogdChcIkluaXRpYXRpdmVzXCIpLFxyXG5cdFx0XHRsaW5rOiBcIi9Jbml0aWF0aXZlc1wiLFxyXG5cdFx0XHRpY29uczogKFxyXG5cdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1jb21tZW50LWRvdHNcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHgtMiBsZzp0ZXh0LVsxLjVlbV1cIlxyXG5cdFx0XHRcdFx0Y29sb3I9XCIjRTRBOTU0XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpLFxyXG5cdFx0fSxcclxuXHRcdHtcclxuXHRcdFx0bmFtZTogdChcIkV2ZW50c1wiKSxcclxuXHRcdFx0bGluazogXCIvRXZlbnRzXCIsXHJcblx0XHRcdGljb25zOiAoXHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLWNvbW1lbnQtZG90c1wiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIGxnOnRleHQtWzEuNWVtXVwiXHJcblx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiB0KFwiTWFwXCIpLFxyXG5cdFx0XHRsaW5rOiBcIi9NYXBcIixcclxuXHRcdFx0aWNvbnM6IChcclxuXHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0XHRpY29uPVwiZmEtc29saWQgZmEtY29tbWVudC1kb3RzXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInB4LTIgbGc6dGV4dC1bMS41ZW1dXCJcclxuXHRcdFx0XHRcdGNvbG9yPVwiI0U0QTk1NFwiXHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0KSxcclxuXHRcdH0sXHJcblx0XHR7XHJcblx0XHRcdG5hbWU6IHQoXCJDb250YWN0IFVzXCIpLFxyXG5cdFx0XHRsaW5rOiBcIi9Db250YWN0IFVzXCIsXHJcblx0XHRcdGljb25zOiAoXHJcblx0XHRcdFx0PEZvbnRBd2Vzb21lSWNvblxyXG5cdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLWNvbW1lbnQtZG90c1wiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJweC0yIGxnOnRleHQtWzEuNWVtXVwiXHJcblx0XHRcdFx0XHRjb2xvcj1cIiNFNEE5NTRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdCksXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRuYW1lOiB0KFwiQmxvZ1wiKSxcclxuXHRcdFx0bGluazogXCIvQmxvZ1wiLFxyXG5cdFx0XHRpY29uczogKFxyXG5cdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdGljb249XCJmYS1zb2xpZCBmYS1jb21tZW50LWRvdHNcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicHgtMiBsZzp0ZXh0LVsxLjVlbV1cIlxyXG5cdFx0XHRcdFx0Y29sb3I9XCIjRTRBOTU0XCJcclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpLFxyXG5cdFx0fSxcclxuXHRcdC8vIHsgbmFtZTogXCJIb21lXCIsIGxpbms6IFwiL1wiLCBpY29uczogPEJpSG9tZUFsdCAvPiB9LFxyXG5cdFx0Ly8geyBuYW1lOiBcIkFib3V0IFVzXCIsIGxpbms6IFwiL0Fib3V0IFVzXCIsIGljb25zOiA8UmlRdWlsbFBlbkxpbmUgLz4gfSxcclxuXHRcdC8vIHsgbmFtZTogXCJJbml0aWF0aXZlc1wiLCBsaW5rOiBcIi9Jbml0aWF0aXZlc1wiLCBpY29uczogPEFpT3V0bGluZVRyb3BoeSAvPiB9LFxyXG5cdFx0Ly8geyBuYW1lOiBcIkV2ZW50c1wiLCBsaW5rOiBcIi9FdmVudHNcIiwgaWNvbnM6IDxJb01lZ2FwaG9uZU91dGxpbmUgLz4gfSxcclxuXHRcdC8vIHsgbmFtZTogXCJNYXBcIiwgbGluazogXCIvTWFwXCIsIGljb25zOiA8SW9Mb2NhdGlvbk91dGxpbmUgLz4gfSxcclxuXHRcdC8vIHsgbmFtZTogXCJDb250YWN0IFVzXCIsIGxpbms6IFwiL0NvbnRhY3QgVXNcIiwgaWNvbnM6IDxJb0NoYXRib3hPdXRsaW5lIC8+IH0sXHJcblx0XHQvLyB7IG5hbWU6IFwiQmxvZ1wiLCBsaW5rOiBcIi9CbG9nXCIsIGljb25zOiA8QmlIZWFydCAvPiB9LFxyXG5cdF07XHJcblx0bGV0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGhlYWRlciBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciB3LVs5MCVdICBteC1hdXRvIHB0LTQgcGItMSBoLVs2MnB4XSBtZDpoLVsxMThweF0gbWQ6cHQtMFwiPlxyXG5cdFx0XHQ8YSBocmVmPVwiL1wiPlxyXG5cdFx0XHRcdHsvKiA8aW1nXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCIgdy1bNTEuNTZweF0gaC1bNDYuNDFweF0gbWQ6dy1bMTAwcHhdIG1kOmgtWzkwcHhdIGN1cnNvci1wb2ludGVyIFwiXHJcblx0XHRcdFx0XHRzcmM9e2xvZ29pbWd9XHJcblx0XHRcdFx0XHRhbHQ9XCJDbGVuLmxycSBsb2dvXCJcclxuXHRcdFx0XHQvPiAqL31cclxuXHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIiB3LVs1MS41NnB4XSBoLVs0Ni40MXB4XSBtZDp3LVsxMDBweF0gbWQ6aC1bOTBweF0gY3Vyc29yLXBvaW50ZXIgXCJcclxuXHRcdFx0XHRcdHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIlxyXG5cdFx0XHRcdFx0YWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcclxuXHRcdFx0XHRcdHdpZHRoPXsxMDB9XHJcblx0XHRcdFx0XHRoZWlnaHQ9ezkwfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvYT5cclxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJ4bDpmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctd2hpdGUgeGw6cHgtMTAgcHgtNyB6LTMwXCI+XHJcblx0XHRcdFx0PHVsXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2BtZDptdC1bMzBweF0geGw6ZmxleCB4bDppdGVtcy1jZW50ZXIgeGw6cGItOCAgYWJzb2x1dGUgeGw6c3RhdGljIGJnLVsjZmZmXSB4bDp6LWF1dG8gIGxlZnQtMCB3LWZ1bGwgeGw6dy1hdXRvIHhsOnBsLTAgcGwtOSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZWFzZS1pbiAke1xyXG5cdFx0XHRcdFx0XHRvcGVuID8gXCJ0b3AtWzYwLjVweF0gbWQ6dG9wLTIwXCIgOiBcInRvcC1bLTU0MHB4XVwiXHJcblx0XHRcdFx0XHR9YH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7TGlua3MubWFwKChsaW5rKSA9PiAoXHJcblx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdGtleT17bGluay5uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInhsOm1sLTggeGw6bXktMCBteS03IGhvdmVyOnRleHQtcHJpbWFyeSBmbGV4XCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwieGw6aGlkZGVuIHByLTMgcHQtWzJweF0gbWQ6cHgtNCBtZDpwdC0xIG1kOnRleHQtM3hsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7bGluay5pY29uc31cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17bGluay5saW5rfVxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9udC1ib2xkIG1kOnRleHQtWzI0cHhdIGR1cmF0aW9uLTUwMFwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0e2xpbmsubmFtZX1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L25hdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNlwiPlxyXG5cdFx0XHRcdDxMYW5ndWFnZVN3aXRjaGVyIC8+XHJcblx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyaWdodC04IHRvcC02IGN1cnNvci1wb2ludGVyIHhsOmhpZGRlblwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e29wZW4gPyAoXHJcblx0XHRcdFx0XHRcdDxGb250QXdlc29tZUljb25cclxuXHRcdFx0XHRcdFx0XHRpY29uPVwiZmEtc29saWQgZmEteG1hcmtcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInB4LTIgdGV4dC1bMnJlbV1cIlxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwiI0U0QTk1NFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHQ8Rm9udEF3ZXNvbWVJY29uXHJcblx0XHRcdFx0XHRcdFx0aWNvbj1cImZhLXNvbGlkIGZhLWJhcnNcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInB4LTIgdGV4dC1bMnJlbV1cIlxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwiI0U0QTk1NFwiXHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdC8vIDxJb01lbnUgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IHctWzM3LjY0cHhdIGgtWzM3LjY0cHhdIG1kOnctWzczcHhdIG1kOmgtWzczcHhdXCIgLz5cclxuXHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkZvbnRBd2Vzb21lSWNvbiIsIkxhbmd1YWdlU3dpdGNoZXIiLCJ1c2VUcmFuc2xhdGlvbiIsImdldFN0YXRpY1Byb3BzIiwibG9jYWxlIiwicHJvcHMiLCJzZXJ2ZXJTaWRlVHJhbnNsYXRpb25zIiwiSGVhZGVyIiwidCIsIkxpbmtzIiwibmFtZSIsImxpbmsiLCJpY29ucyIsImljb24iLCJjbGFzc05hbWUiLCJjb2xvciIsIm9wZW4iLCJzZXRPcGVuIiwiaGVhZGVyIiwiY2xhc3MiLCJhIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibmF2IiwidWwiLCJtYXAiLCJsaSIsImRpdiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header.js\n"));

/***/ })

});