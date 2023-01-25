/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/RainbowMagicConnector.ts":
/*!**************************************!*\
  !*** ./lib/RainbowMagicConnector.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rainbowMagicConnector\": () => (/* binding */ rainbowMagicConnector)\n/* harmony export */ });\n/* harmony import */ var _everipedia_wagmi_magic_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @everipedia/wagmi-magic-connector */ \"@everipedia/wagmi-magic-connector\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_everipedia_wagmi_magic_connector__WEBPACK_IMPORTED_MODULE_0__]);\n_everipedia_wagmi_magic_connector__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Import the MagicAuthConnector from the wagmi-magic-connector package\n\n// Define the rainbowMagicConnector function that will be used to create the Magic connector\nconst rainbowMagicConnector = ({ chains  })=>({\n        id: \"magic\",\n        name: \"Magic\",\n        iconUrl: \"https://svgshare.com/i/pXA.svg\",\n        iconBackground: \"white\",\n        createConnector: ()=>({\n                connector: new _everipedia_wagmi_magic_connector__WEBPACK_IMPORTED_MODULE_0__.MagicAuthConnector({\n                    chains,\n                    options: {\n                        // Get the API key from the .env file\n                        apiKey: \"pk_live_92A11DF7B5F94EE0\",\n                        oauthOptions: {\n                            providers: [\n                                \"google\",\n                                \"facebook\",\n                                \"twitter\"\n                            ]\n                        },\n                        isDarkMode: true,\n                        magicSdkConfiguration: {\n                            network: {\n                                rpcUrl: \"https://eth.public-rpc.com\",\n                                chainId: 1\n                            }\n                        }\n                    }\n                })\n            })\n    });\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvUmFpbmJvd01hZ2ljQ29ubmVjdG9yLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsdUVBQXVFO0FBQ0E7QUFFdkUsNEZBQTRGO0FBQ3JGLE1BQU1DLHdCQUF3QixDQUFDLEVBQUVDLE9BQU0sRUFBbUIsR0FBTTtRQUNyRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsZ0JBQWdCO1FBQ2hCQyxpQkFBaUIsSUFBTztnQkFDdEJDLFdBQVcsSUFBSVIsaUZBQWtCQSxDQUFDO29CQUNoQ0U7b0JBQ0FPLFNBQVM7d0JBQ1AscUNBQXFDO3dCQUNyQ0MsUUFBUUMsMEJBQXFDO3dCQUM3Q0csY0FBYzs0QkFDWkMsV0FBVztnQ0FBQztnQ0FBVTtnQ0FBWTs2QkFBVTt3QkFDOUM7d0JBQ0FDLFlBQVksSUFBSTt3QkFDaEJDLHVCQUF1Qjs0QkFDckJDLFNBQVM7Z0NBQ1BDLFFBQVE7Z0NBQ1JDLFNBQVM7NEJBQ1g7d0JBQ0Y7b0JBQ0Y7Z0JBQ0Y7WUFDRjtJQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWluYm93a2l0LW5leHQtdHN4Ly4vbGliL1JhaW5ib3dNYWdpY0Nvbm5lY3Rvci50cz9hZmEwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgTWFnaWNBdXRoQ29ubmVjdG9yIGZyb20gdGhlIHdhZ21pLW1hZ2ljLWNvbm5lY3RvciBwYWNrYWdlXG5pbXBvcnQgeyBNYWdpY0F1dGhDb25uZWN0b3IgfSBmcm9tIFwiQGV2ZXJpcGVkaWEvd2FnbWktbWFnaWMtY29ubmVjdG9yXCI7XG5cbi8vIERlZmluZSB0aGUgcmFpbmJvd01hZ2ljQ29ubmVjdG9yIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSB0aGUgTWFnaWMgY29ubmVjdG9yXG5leHBvcnQgY29uc3QgcmFpbmJvd01hZ2ljQ29ubmVjdG9yID0gKHsgY2hhaW5zIH06IHsgY2hhaW5zOiBhbnkgfSkgPT4gKHtcbiAgaWQ6IFwibWFnaWNcIixcbiAgbmFtZTogXCJNYWdpY1wiLFxuICBpY29uVXJsOiBcImh0dHBzOi8vc3Znc2hhcmUuY29tL2kvcFhBLnN2Z1wiLFxuICBpY29uQmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICBjcmVhdGVDb25uZWN0b3I6ICgpID0+ICh7XG4gICAgY29ubmVjdG9yOiBuZXcgTWFnaWNBdXRoQ29ubmVjdG9yKHtcbiAgICAgIGNoYWlucyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgLy8gR2V0IHRoZSBBUEkga2V5IGZyb20gdGhlIC5lbnYgZmlsZVxuICAgICAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX0FQSV9LRVkgYXMgc3RyaW5nLFxuICAgICAgICBvYXV0aE9wdGlvbnM6IHtcbiAgICAgICAgICBwcm92aWRlcnM6IFtcImdvb2dsZVwiLCBcImZhY2Vib29rXCIsIFwidHdpdHRlclwiXSxcbiAgICAgICAgfSxcbiAgICAgICAgaXNEYXJrTW9kZTogdHJ1ZSxcbiAgICAgICAgbWFnaWNTZGtDb25maWd1cmF0aW9uOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgcnBjVXJsOiBcImh0dHBzOi8vZXRoLnB1YmxpYy1ycGMuY29tXCIsXG4gICAgICAgICAgICBjaGFpbklkOiAxLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbn0pO1xuIl0sIm5hbWVzIjpbIk1hZ2ljQXV0aENvbm5lY3RvciIsInJhaW5ib3dNYWdpY0Nvbm5lY3RvciIsImNoYWlucyIsImlkIiwibmFtZSIsImljb25VcmwiLCJpY29uQmFja2dyb3VuZCIsImNyZWF0ZUNvbm5lY3RvciIsImNvbm5lY3RvciIsIm9wdGlvbnMiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTUFHSUNfQVBJX0tFWSIsIm9hdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImlzRGFya01vZGUiLCJtYWdpY1Nka0NvbmZpZ3VyYXRpb24iLCJuZXR3b3JrIiwicnBjVXJsIiwiY2hhaW5JZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/RainbowMagicConnector.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var _lib_RainbowMagicConnector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/RainbowMagicConnector */ \"./lib/RainbowMagicConnector.ts\");\n/* harmony import */ var _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wagmi/chains */ \"@wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _lib_RainbowMagicConnector__WEBPACK_IMPORTED_MODULE_6__, _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__, _lib_RainbowMagicConnector__WEBPACK_IMPORTED_MODULE_6__, _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.mainnet,\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.goerli,\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.polygon,\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.optimism,\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.arbitrum,\n    _wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.hardhat\n], [\n    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.connectorsForWallets)([\n    {\n        groupName: \"Recommended\",\n        wallets: [\n            (0,_lib_RainbowMagicConnector__WEBPACK_IMPORTED_MODULE_6__.rainbowMagicConnector)({\n                chains\n            })\n        ]\n    }\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: false,\n    connectors,\n    provider\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            theme: (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.darkTheme)(),\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/srujangurram/Projects/everipedia/magic-connector/rainbow-magic-example/pages/_app.tsx\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/srujangurram/Projects/everipedia/magic-connector/rainbow-magic-example/pages/_app.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/srujangurram/Projects/everipedia/magic-connector/rainbow-magic-example/pages/_app.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUdZO0FBS1g7QUFDbUM7QUFDWDtBQUNhO0FBUTlDO0FBRXZCLE1BQU0sRUFBRWMsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR1osc0RBQWVBLENBQzFDO0lBQUNRLGtEQUFPQTtJQUFFRixpREFBTUE7SUFBRUksa0RBQU9BO0lBQUVELG1EQUFRQTtJQUFFSixtREFBUUE7SUFBRUUsa0RBQU9BO0NBQUMsRUFDdkQ7SUFDRSx1REFBdUQ7SUFDdkRKLHNFQUFjQTtDQUNmO0FBR0gsTUFBTVUsYUFBYWQsNEVBQW9CQSxDQUFDO0lBQ3RDO1FBQ0VlLFdBQVc7UUFDWEMsU0FBUztZQUFDWCxpRkFBcUJBLENBQUM7Z0JBQUVPO1lBQU87U0FBRztJQUM5QztDQUNEO0FBRUQsTUFBTUssY0FBY2YsbURBQVlBLENBQUM7SUFDL0JnQixhQUFhLEtBQUs7SUFDbEJKO0lBQ0FEO0FBQ0Y7QUFFZSxTQUFTTSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQ0UsOERBQUNsQiw4Q0FBV0E7UUFBQ21CLFFBQVFMO2tCQUNuQiw0RUFBQ25CLHNFQUFrQkE7WUFBQ3lCLE9BQU94QixpRUFBU0E7WUFBSWEsUUFBUUE7c0JBQzlDLDRFQUFDUTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWluYm93a2l0LW5leHQtdHN4Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5pbXBvcnQge1xuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIGRhcmtUaGVtZSxcbiAgY29ubmVjdG9yc0ZvcldhbGxldHMsXG59IGZyb20gXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0XCI7XG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCB7IHJhaW5ib3dNYWdpY0Nvbm5lY3RvciB9IGZyb20gXCIuLi9saWIvUmFpbmJvd01hZ2ljQ29ubmVjdG9yXCI7XG5pbXBvcnQge1xuICBhcmJpdHJ1bSxcbiAgZ29lcmxpLFxuICBoYXJkaGF0LFxuICBtYWlubmV0LFxuICBvcHRpbWlzbSxcbiAgcG9seWdvbixcbn0gZnJvbSBcIkB3YWdtaS9jaGFpbnNcIjtcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFttYWlubmV0LCBnb2VybGksIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bSwgaGFyZGhhdF0sXG4gIFtcbiAgICAvLyBhbGNoZW15UHJvdmlkZXIoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkFMQ0hFTVlfSUQgfSksXG4gICAgcHVibGljUHJvdmlkZXIoKSxcbiAgXVxuKTtcblxuY29uc3QgY29ubmVjdG9ycyA9IGNvbm5lY3RvcnNGb3JXYWxsZXRzKFtcbiAge1xuICAgIGdyb3VwTmFtZTogXCJSZWNvbW1lbmRlZFwiLFxuICAgIHdhbGxldHM6IFtyYWluYm93TWFnaWNDb25uZWN0b3IoeyBjaGFpbnMgfSldLFxuICB9LFxuXSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgYXV0b0Nvbm5lY3Q6IGZhbHNlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgdGhlbWU9e2RhcmtUaGVtZSgpfSBjaGFpbnM9e2NoYWluc30+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZGFya1RoZW1lIiwiY29ubmVjdG9yc0ZvcldhbGxldHMiLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsInB1YmxpY1Byb3ZpZGVyIiwicmFpbmJvd01hZ2ljQ29ubmVjdG9yIiwiYXJiaXRydW0iLCJnb2VybGkiLCJoYXJkaGF0IiwibWFpbm5ldCIsIm9wdGltaXNtIiwicG9seWdvbiIsImNoYWlucyIsInByb3ZpZGVyIiwiY29ubmVjdG9ycyIsImdyb3VwTmFtZSIsIndhbGxldHMiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@everipedia/wagmi-magic-connector":
/*!****************************************************!*\
  !*** external "@everipedia/wagmi-magic-connector" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@everipedia/wagmi-magic-connector");;

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@wagmi/chains":
/*!********************************!*\
  !*** external "@wagmi/chains" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@wagmi/chains");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/providers/public");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();