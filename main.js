/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.3.2 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.pointer-events-none {\n  pointer-events: none;\n}\n.visible {\n  visibility: visible;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.inset-0 {\n  inset: 0px;\n}\n.-bottom-6 {\n  bottom: -1.5rem;\n}\n.-left-5 {\n  left: -1.25rem;\n}\n.-top-2 {\n  top: -0.5rem;\n}\n.-z-10 {\n  z-index: -10;\n}\n.z-10 {\n  z-index: 10;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.grid {\n  display: grid;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-64 {\n  height: 16rem;\n}\n.h-9 {\n  height: 2.25rem;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.w-11\\/12 {\n  width: 91.666667%;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-full {\n  width: 100%;\n}\n.w-max {\n  width: -moz-max-content;\n  width: max-content;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.max-w-screen-sm {\n  max-width: 640px;\n}\n.max-w-sm {\n  max-width: 24rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes fadeIn {\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -20%, 0);\n  }\n\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.animate-fade-in {\n  animation: fadeIn .5s ease-out;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.auto-cols-fr {\n  grid-auto-columns: minmax(0, 1fr);\n}\n.auto-rows-auto {\n  grid-auto-rows: auto;\n}\n.flex-col {\n  flex-direction: column;\n}\n.content-center {\n  align-content: center;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.justify-items-center {\n  justify-items: center;\n}\n.gap-5 {\n  gap: 1.25rem;\n}\n.gap-7 {\n  gap: 1.75rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-8 {\n  border-width: 8px;\n}\n.border-pink-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 39 119 / var(--tw-border-opacity));\n}\n.border-opacity-75 {\n  --tw-border-opacity: 0.75;\n}\n.bg-indigo-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n}\n.bg-pink-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\n.bg-pink-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(190 24 93 / var(--tw-bg-opacity));\n}\n.bg-purple-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 33 168 / var(--tw-bg-opacity));\n}\n.bg-slate-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(51 65 85 / var(--tw-bg-opacity));\n}\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.from-pink-900 {\n  --tw-gradient-from: #831843 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(131 24 67 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.from-violet-500 {\n  --tw-gradient-from: #8b5cf6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(139 92 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.to-fuchsia-500 {\n  --tw-gradient-to: #d946ef var(--tw-gradient-to-position);\n}\n.to-pink-700 {\n  --tw-gradient-to: #be185d var(--tw-gradient-to-position);\n}\n.bg-cover {\n  background-size: cover;\n}\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.p-5 {\n  padding: 1.25rem;\n}\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.text-center {\n  text-align: center;\n}\n.align-middle {\n  vertical-align: middle;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-black {\n  font-weight: 900;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n.leading-8 {\n  line-height: 2rem;\n}\n.text-purple-500 {\n  --tw-text-opacity: 1;\n  color: rgb(168 85 247 / var(--tw-text-opacity));\n}\n.text-violet-50 {\n  --tw-text-opacity: 1;\n  color: rgb(245 243 255 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-cyan-500\\/50 {\n  --tw-shadow-color: rgb(6 182 212 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.outline {\n  outline-style: solid;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.drop-shadow-2xl {\n  --tw-drop-shadow: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15));\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes wave {\n  2% {\n    transform: translateX(1);\n  }\n\n  25% {\n    transform: translateX(-25%);\n  }\n\n  50% {\n    transform: translateX(-50%);\n    height: 16em;\n  }\n\n  75% {\n    transform: translateX(-25%);\n  }\n\n  100% {\n    transform: translateX(1);\n  }\n}\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n  cursor: default;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: -20;\n  height: 100vh;\n  background-image: url(\"https://w0.peakpx.com/wallpaper/427/48/HD-wallpaper-purple-haze-world-reflects-water-alien.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nbody::after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  background: linear-gradient(\n    315deg,\n    rgb(223 198 222 / 12%) 3%,\n    rgb(149 41 211 / 20%) 38%,\n    rgb(121 48 238 / 20%) 68%,\n    rgb(50 2 59 / 20%) 98%\n  );\n  animation: gradient 15s ease infinite;\n  background-size: 400% 400%;\n  background-attachment: fixed;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.wave {\n  background: rgba(231, 23, 204, 0.25);\n  border-radius: 1000% 1000% 0 0;\n  position: fixed;\n  width: 200%;\n  height: 20vh;\n  animation: wave 10s -3s linear infinite;\n  transform: translate3d(0, 0, 0);\n  opacity: 0.8;\n  bottom: 0;\n  left: 0;\n  z-index: -10;\n}\n\n.wave:nth-of-type(2) {\n  background: rgba(197, 144, 190, 0.582);\n  bottom: -1.25em;\n  animation: wave 18s linear reverse infinite;\n  opacity: 0.8;\n}\n\n.wave:nth-of-type(3) {\n  background: rgba(130, 7, 155, 0.25);\n  bottom: -2.5em;\n  animation: wave 20s -1s reverse infinite;\n  opacity: 0.9;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  margin-top: auto;\n  gap: 20px;\n}\n\nfooter img:hover {\n  cursor: pointer;\n  transform: scale(1.13);\n  transition: ease-in;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n}\n\n.disable {\n  background-color: rgba(74, 57, 77, 0.7);\n  display: none;\n}\n\n.show {\n  display: flex;\n  position: absolute;\n  inset: 0;\n}\n\n.cells {\n  flex: 1;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal {\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n}\n\nform {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));\n  grid-template-rows: repeat(3, 1fr);\n  justify-content: center;\n  gap: 30px;\n  min-height: 200px;\n}\n\n#computer-board .cells:hover {\n  z-index: 3;\n  outline: 2px solid #dec4ec;\n  cursor: pointer;\n}\n\n.modal-content {\n}\n\n.ships-container {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-auto-rows: 40px;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-content: center;\n  row-gap: 25px;\n  outline: 2px solid yellowgreen;\n  width: 300px;\n}\n\n.ship {\n  display: inline-grid;\n  grid-template-columns: rpeat(auto-fit, 40px);\n  margin-left: 40px;\n}\n\n.ship-cells:not(:last-child):not(.ship-on-grid *) {\n  border-right: 1px solid rgb(170, 22, 170);\n}\n\n.ship-selector {\n  display: inline-flex;\n  position: relative;\n  border-radius: 2px;\n  z-index: 3;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n.selected {\n  z-index: 20;\n  outline: 3px solid #00c6f8;\n}\n\n.ship-on-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n[data-vertical=\"true\"] .ship-cells:not(:last-child) {\n  border-bottom: 1px solid rgb(220, 62, 5);\n}\n\n[data-vertical=\"false\"] {\n  display: inline-flex;\n}\n\n[data-vertical=\"false\"] .ship-cells:not(:last-child) {\n  border-right: 1px solid rgb(220, 62, 5);\n}\n\n#playBtn {\n  grid-area: 3/1/4/3;\n  padding: 5px 10px;\n  font-size: 1.2rem;\n\n}\n\n.hover\\:scale-105:hover {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.hover\\:bg-purple-900:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(88 28 135 / var(--tw-bg-opacity));\n}\n\n.hover\\:shadow-xl:hover {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.group:hover .group-hover\\:bg-cyan-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(8 145 178 / var(--tw-bg-opacity));\n}\n\n@media (min-width: 640px) {\n\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\n\n@media (min-width: 768px) {\n\n  .md\\:h-8 {\n    height: 2rem;\n  }\n\n  .md\\:h-80 {\n    height: 20rem;\n  }\n\n  .md\\:w-8 {\n    width: 2rem;\n  }\n\n  .md\\:w-80 {\n    width: 20rem;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:gap-4 {\n    gap: 1rem;\n  }\n\n  .md\\:px-7 {\n    padding-left: 1.75rem;\n    padding-right: 1.75rem;\n  }\n\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:h-96 {\n    height: 24rem;\n  }\n\n  .lg\\:w-96 {\n    width: 24rem;\n  }\n\n  .lg\\:gap-20 {\n    gap: 5rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/styles.css","<no source>"],"names":[],"mappings":"AAAA;;CAAc,CAAd;;;CAAc;;AAAd;;;EAAA,sBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,mBAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,gBAAc;AAAA;;AAAd;;;;;;;CAAc;;AAAd;EAAA,gBAAc,EAAd,MAAc;EAAd,8BAAc,EAAd,MAAc;EAAd,gBAAc,EAAd,MAAc;EAAd,cAAc;KAAd,WAAc,EAAd,MAAc;EAAd,4NAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,+BAAc,EAAd,MAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,SAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,yCAAc;UAAd,iCAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;EAAA,kBAAc;EAAd,oBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;EAAd,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,mBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,+GAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,cAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,cAAc;EAAd,cAAc;EAAd,kBAAc;EAAd,wBAAc;AAAA;;AAAd;EAAA,eAAc;AAAA;;AAAd;EAAA,WAAc;AAAA;;AAAd;;;;CAAc;;AAAd;EAAA,cAAc,EAAd,MAAc;EAAd,qBAAc,EAAd,MAAc;EAAd,yBAAc,EAAd,MAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;EAAA,oBAAc,EAAd,MAAc;EAAd,eAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;EAAd,SAAc,EAAd,MAAc;EAAd,UAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,oBAAc;AAAA;;AAAd;;;CAAc;;AAAd;;;;EAAA,0BAAc,EAAd,MAAc;EAAd,6BAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,aAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,YAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,6BAAc,EAAd,MAAc;EAAd,oBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,wBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,0BAAc,EAAd,MAAc;EAAd,aAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,kBAAc;AAAA;;AAAd;;CAAc;;AAAd;;;;;;;;;;;;;EAAA,SAAc;AAAA;;AAAd;EAAA,SAAc;EAAd,UAAc;AAAA;;AAAd;EAAA,UAAc;AAAA;;AAAd;;;EAAA,gBAAc;EAAd,SAAc;EAAd,UAAc;AAAA;;AAAd;;CAAc;;AAAd;EAAA,gBAAc;AAAA;;AAAd;;;CAAc;;AAAd;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;EAAA,UAAc,EAAd,MAAc;EAAd,cAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;AAAA;;AAAd;;CAAc;AAAd;EAAA,eAAc;AAAA;;AAAd;;;;CAAc;;AAAd;;;;;;;;EAAA,cAAc,EAAd,MAAc;EAAd,sBAAc,EAAd,MAAc;AAAA;;AAAd;;CAAc;;AAAd;;EAAA,eAAc;EAAd,YAAc;AAAA;;AAAd,wEAAc;AAAd;EAAA,aAAc;AAAA;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;;AAAd;EAAA,wBAAc;EAAd,wBAAc;EAAd,mBAAc;EAAd,mBAAc;EAAd,cAAc;EAAd,cAAc;EAAd,cAAc;EAAd,eAAc;EAAd,eAAc;EAAd,aAAc;EAAd,aAAc;EAAd,kBAAc;EAAd,sCAAc;EAAd,8BAAc;EAAd,6BAAc;EAAd,4BAAc;EAAd,eAAc;EAAd,oBAAc;EAAd,sBAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,kBAAc;EAAd,2BAAc;EAAd,4BAAc;EAAd,sCAAc;EAAd,kCAAc;EAAd,2BAAc;EAAd,sBAAc;EAAd,8BAAc;EAAd,YAAc;EAAd,kBAAc;EAAd,gBAAc;EAAd,iBAAc;EAAd,kBAAc;EAAd,cAAc;EAAd,gBAAc;EAAd,aAAc;EAAd,mBAAc;EAAd,qBAAc;EAAd,2BAAc;EAAd,yBAAc;EAAd,0BAAc;EAAd,2BAAc;EAAd,uBAAc;EAAd,wBAAc;EAAd,yBAAc;EAAd;AAAc;AACd;EAAA;AAAoB;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AAApB;;EAAA;IAAA;EAAoB;AAAA;AACpB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,gBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,uBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;;EAAA;IAAA,UAAmB;IAAnB;EAAmB;;EAAnB;IAAA,UAAmB;IAAnB;EAAmB;AAAA;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,mEAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB,oEAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,+EAAmB;EAAnB,mGAAmB;EAAnB;AAAmB;AAAnB;EAAA,uCAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,4DAAmB;EAAnB;AAAmB;AAAnB;EAAA,gKAAmB;EAAnB,wJAAmB;EAAnB,iLAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;AAAnB;EAAA,wBAAmB;EAAnB,wDAAmB;EAAnB;AAAmB;;AAEnB;EACE;IACE,0BAA0B;EAC5B;EACA;IACE,8BAA8B;EAChC;EACA;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE;IACE,wBAAwB;EAC1B;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,2BAA2B;IAC3B,YAAY;EACd;;EAEA;IACE,2BAA2B;EAC7B;;EAEA;IACE,wBAAwB;EAC1B;AACF;;AAEA;EACE,SAAS;EACT,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,uHAAuH;EACvH,4BAA4B;EAC5B,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR;;;;;;GAMC;EACD,qCAAqC;EACrC,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,oCAAoC;EACpC,8BAA8B;EAC9B,eAAe;EACf,WAAW;EACX,YAAY;EACZ,uCAAuC;EACvC,+BAA+B;EAC/B,YAAY;EACZ,SAAS;EACT,OAAO;EACP,YAAY;AACd;;AAEA;EACE,sCAAsC;EACtC,eAAe;EACf,2CAA2C;EAC3C,YAAY;AACd;;AAEA;EACE,mCAAmC;EACnC,cAAc;EACd,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uCAAuC;EACvC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,eAAe,EAAE,kBAAkB;EACnC,UAAU,EAAE,eAAe;EAC3B,OAAO;EACP,MAAM;EACN,WAAW,EAAE,eAAe;EAC5B,YAAY,EAAE,gBAAgB;AAChC;;AAEA;EACE,aAAa;EACb,6DAA6D;EAC7D,kCAAkC;EAClC,uBAAuB;EACvB,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;AACA;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,uBAAuB;EACvB,qBAAqB;EACrB,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,4CAA4C;EAC5C,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;EACV,uBAAkB;EAAlB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,UAAU;AACZ;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;;AAEnB;;AAxOA;EAAA,mBCAA;EDAA,mBCAA;EDAA;CCAA;;ADAA;EAAA,mBCAA;EDAA;CCAA;;ADAA;EAAA,iFCAA;EDAA,qGCAA;EDAA;CCAA;;ADAA;EAAA,mBCAA;EDAA;CCAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA,oBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA,sBCAA;IDAA;GCAA;;EDAA;IAAA,kBCAA;IDAA;GCAA;CAAA;;ADAA;;EAAA;IAAA;GCAA;;EDAA;IAAA;GCAA;;EDAA;IAAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 0%;\n  }\n  50% {\n    background-position: 100% 100%;\n  }\n  100% {\n    background-position: 0% 0%;\n  }\n}\n\n@keyframes wave {\n  2% {\n    transform: translateX(1);\n  }\n\n  25% {\n    transform: translateX(-25%);\n  }\n\n  50% {\n    transform: translateX(-50%);\n    height: 16em;\n  }\n\n  75% {\n    transform: translateX(-25%);\n  }\n\n  100% {\n    transform: translateX(1);\n  }\n}\n\n* {\n  margin: 0;\n  box-sizing: border-box;\n  cursor: default;\n}\n\nbody::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  z-index: -20;\n  height: 100vh;\n  background-image: url(\"https://w0.peakpx.com/wallpaper/427/48/HD-wallpaper-purple-haze-world-reflects-water-alien.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nbody::after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  background: linear-gradient(\n    315deg,\n    rgb(223 198 222 / 12%) 3%,\n    rgb(149 41 211 / 20%) 38%,\n    rgb(121 48 238 / 20%) 68%,\n    rgb(50 2 59 / 20%) 98%\n  );\n  animation: gradient 15s ease infinite;\n  background-size: 400% 400%;\n  background-attachment: fixed;\n}\n\nbody {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.wave {\n  background: rgba(231, 23, 204, 0.25);\n  border-radius: 1000% 1000% 0 0;\n  position: fixed;\n  width: 200%;\n  height: 20vh;\n  animation: wave 10s -3s linear infinite;\n  transform: translate3d(0, 0, 0);\n  opacity: 0.8;\n  bottom: 0;\n  left: 0;\n  z-index: -10;\n}\n\n.wave:nth-of-type(2) {\n  background: rgba(197, 144, 190, 0.582);\n  bottom: -1.25em;\n  animation: wave 18s linear reverse infinite;\n  opacity: 0.8;\n}\n\n.wave:nth-of-type(3) {\n  background: rgba(130, 7, 155, 0.25);\n  bottom: -2.5em;\n  animation: wave 20s -1s reverse infinite;\n  opacity: 0.9;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n  justify-content: center;\n  margin-top: auto;\n  gap: 20px;\n}\n\nfooter img:hover {\n  cursor: pointer;\n  transform: scale(1.13);\n  transition: ease-in;\n}\n\nh1 {\n  display: flex;\n  justify-content: center;\n}\n\n.disable {\n  background-color: rgba(74, 57, 77, 0.7);\n  display: none;\n}\n\n.show {\n  display: flex;\n  position: absolute;\n  inset: 0;\n}\n\n.cells {\n  flex: 1;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal {\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n}\n\nform {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));\n  grid-template-rows: repeat(3, 1fr);\n  justify-content: center;\n  gap: 30px;\n  min-height: 200px;\n}\n\n#computer-board .cells:hover {\n  z-index: 3;\n  outline: 2px solid #dec4ec;\n  cursor: pointer;\n}\n\n.modal-content {\n}\n\n.ships-container {\n  grid-area: 2/2/3/3;\n  display: grid;\n  grid-auto-rows: 40px;\n  grid-auto-columns: 1fr;\n  justify-content: center;\n  align-content: center;\n  row-gap: 25px;\n  outline: 2px solid yellowgreen;\n  width: 300px;\n}\n\n.ship {\n  display: inline-grid;\n  grid-template-columns: rpeat(auto-fit, 40px);\n  margin-left: 40px;\n}\n\n.ship-cells:not(:last-child):not(.ship-on-grid *) {\n  border-right: 1px solid rgb(170, 22, 170);\n}\n\n.ship-selector {\n  display: inline-flex;\n  position: relative;\n  border-radius: 2px;\n  z-index: 3;\n  width: fit-content;\n  cursor: pointer;\n}\n\n.selected {\n  z-index: 20;\n  outline: 3px solid #00c6f8;\n}\n\n.ship-on-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n}\n\n[data-vertical=\"true\"] .ship-cells:not(:last-child) {\n  border-bottom: 1px solid rgb(220, 62, 5);\n}\n\n[data-vertical=\"false\"] {\n  display: inline-flex;\n}\n\n[data-vertical=\"false\"] .ship-cells:not(:last-child) {\n  border-right: 1px solid rgb(220, 62, 5);\n}\n\n#playBtn {\n  grid-area: 3/1/4/3;\n  padding: 5px 10px;\n  font-size: 1.2rem;\n\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/assets/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/player.js */ "./src/factories/player.js");
/* harmony import */ var _factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/gameboard.js */ "./src/factories/gameboard.js");
/* harmony import */ var _factories_ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/ship.js */ "./src/factories/ship.js");




/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(userName) {
  return {
    player1: new _factories_player_js__WEBPACK_IMPORTED_MODULE_0__["default"](userName),
    computer: new _factories_player_js__WEBPACK_IMPORTED_MODULE_0__["default"]("computer"),
    gameStart: true,
    isGameOver: false,
    playerBoard: (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    enemyBoard: (0,_factories_gameboard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    playerShips: [(0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2)],
    computerShips: [(0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(4), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(3), (0,_factories_ship_js__WEBPACK_IMPORTED_MODULE_2__["default"])(2)],
  };
}


/***/ }),

/***/ "./src/dom-tabs/StartingScreen.js":
/*!****************************************!*\
  !*** ./src/dom-tabs/StartingScreen.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assistance/domHelper.js */ "./src/dom-tabs/assistance/domHelper.js");


const inputName = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "input",
  {
    class: "nameInput p-2 rounded-sm text-purple-500",
    type: "text",
    required: true,
    placeholder: "Please enter your name",
    autofocus: true,
  },
  ["Player 1"]
);
const playButton = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "button",
  {
    class:
      "playBtn text-white bg-purple-800 p-3 py-1.5 rounded-xl hover:scale-105 hover:bg-purple-900 hover:shadow-xl transition-all",
  },
  ["Start Game"]
);

const welcome = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "p",
  { class: "text-xl align-middle leading-8 h-9 uppercase", id: "welcome" },
  ["Welcome aboard!"]
);

const welcomeDiv = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)("div", { class: "flex align-center" }, [welcome]);

const form = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "form",
  {
    class:
      "animate-fade-in p-5 w-11/12 mx-auto my-auto justify-items-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white max-w-screen-sm",
  },
  [welcomeDiv, inputName, playButton]
);

const modalDiv = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "div",
  {
    style:
      "background-image: url('https://w0.peakpx.com/wallpaper/427/48/HD-wallpaper-purple-haze-world-reflects-water-alien.jpg');",
    class:
      "modal bg-no-repeat bg-cover min-w-full min-h-full flex justify-center content-center",
  },
  [form]
);

// Now here's the eventListener Logic
// - Prevent reloading window;
// - Call data.js, passing the name in the input
// - Save the data created in a variable
const body = document.querySelector("body");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(callback) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    /* Form.classList.remove('animate__zoomIn');
		form.classList.add('animate__fadeOutDown');
		form.addEventListener('animationend', () => {
			modalDiv.remove();
			callback(inputName.value);
		}); */
    modalDiv.remove();
    callback(inputName.value);
  });
  body.appendChild(modalDiv);
}


/***/ }),

/***/ "./src/dom-tabs/assistance/createBoard.js":
/*!************************************************!*\
  !*** ./src/dom-tabs/assistance/createBoard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderBoard)
/* harmony export */ });
function createMarker(text) {
  const marker = document.createElement("div");
  marker.setAttribute(
    "class",
    "marker -left-5 text-white absolute flex text-sm"
  );
  marker.textContent = text;
  return marker;
}

function createRow(rowNumber) {
  const row = document.createElement("div");
  row.setAttribute("class", "rows w-full flex flex-1");
  row.dataset.row = rowNumber;
  return row;
}

function createCell(columnNumber) {
  const cell = document.createElement("div");
  cell.setAttribute(
    "class",
    "cells relative inline-flex text-xl border border-opacity-75 border-pink-600"
  );
  cell.dataset.column = columnNumber;
  return cell;
}

// This renders a board in the DOM
function renderBoard(size, parent) {
  for (let i = 0; i < size; i += 1) {
    const row = createRow(i);
    row.appendChild(createMarker(i));
    for (let j = 0; j < size; j += 1) {
      const cell = createCell(j);
      row.appendChild(cell);
      if (i === size - 1) {
        const bottomMarker = createMarker(j);
        bottomMarker.classList.add("-bottom-6");
        bottomMarker.classList.remove("-left-5");
        cell.appendChild(bottomMarker);
      }
    }

    parent.appendChild(row);
  }
}


/***/ }),

/***/ "./src/dom-tabs/assistance/domHelper.js":
/*!**********************************************!*\
  !*** ./src/dom-tabs/assistance/domHelper.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domHelper": () => (/* binding */ domHelper)
/* harmony export */ });
function domHelper(tag, attr, childs) {
	const element = document.createElement(tag);

	for (const key in attr) {
		if ({}.hasOwnProperty.call(attr, key)) {
			element.setAttribute(key, attr[key]);
		}
	}

	if (Array.isArray(childs)) {
		childs.forEach(child => {
			element.appendChild((typeof child === 'string' || typeof child === 'number') ? document.createTextNode(child) : child);
		});
	}

	return element;
}




/***/ }),

/***/ "./src/dom-tabs/assistance/placeShipController.js":
/*!********************************************************!*\
  !*** ./src/dom-tabs/assistance/placeShipController.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markCurrentShip": () => (/* binding */ markCurrentShip),
/* harmony export */   "putInGameBoard": () => (/* binding */ putInGameBoard),
/* harmony export */   "renderShip": () => (/* binding */ renderShip),
/* harmony export */   "setShips": () => (/* binding */ setShips)
/* harmony export */ });
/* harmony import */ var _domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHelper */ "./src/dom-tabs/assistance/domHelper.js");
/*
    - This module should get the full control over:
        * Set ships in gameboard function instances (Both player and computer)
        * Set ships in gameboard DOM elements
            - Only render placed ships in playerBoard
*/



/*
    -To accomplish that, is needed:
        * Game Data
        * A way to get coordinates from DOM gameboard ✔️
        * A way to render ships in playerBoard
        * A way to mark the current ship that is going to be set on the gameboard ✔️
*/

/*
    There are two logics for event listeners.
    One for the selection of the boats ✔️
    One for the DOM board 🐥
*/

let currentShip = 0;
const savedPositions = [];

const markCurrentShip = (shipSelector, container) => {
  if (!shipSelector.dataset.shiporder) {
    return;
  }

  currentShip = Number(shipSelector.dataset.shiporder);
  container.querySelectorAll(".ship-selector").forEach((selector) => {
    selector.classList.remove("selected");
  });
  shipSelector.classList.add("selected");
};

// If is the player setting then receive coords from dom
// If is the pc setting then invoke random set boats
function saveCoords(coords) {
  console.log(coords);
  const object = savedPositions.find((obj) => obj.ref === currentShip);
  if (object) {
    object.coords = coords;
    console.log(savedPositions);
    return;
  }

  savedPositions.push({ coords, ref: currentShip });
  console.log(savedPositions);
}

function getShip(ships) {
  return ships[currentShip];
}

function getCoords(cell) {
  return [Number(cell.parentNode.dataset.row), Number(cell.dataset.column)];
}

const setShips = (cell, [playerBoard, playerShips]) => {
  if (playerBoard.isAvailable(getCoords(cell), getShip(playerShips))) {
    saveCoords(getCoords(cell));
  }

  return savedPositions;
};

const renderShip = (ship, container) => {
  const gridContainer = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)("div", { class: "ship-on-grid" }, []);
  gridContainer.dataset.vertical = getShip(ship).isVertical;
  for (let i = 0; i < getShip(ship).getSize(); i++) {
    const shipCell = (0,_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
      "div",
      {
        class:
          "ship-cells w-6 h-6 md:w-8 md:h-8 bg-indigo-50 relative pointer-events-none",
      },
      []
    );
    gridContainer.appendChild(shipCell);
  }

  container.appendChild(gridContainer);
};

// This add the ships into the playerBoard counterpart

const putInGameBoard = ([playerBoard, ships]) => {
  savedPositions.forEach((pos) => {
    playerBoard.setShip(ships[pos.ref], pos.coords);
  });
};




/***/ }),

/***/ "./src/dom-tabs/placementMenu.js":
/*!***************************************!*\
  !*** ./src/dom-tabs/placementMenu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assistance/domHelper */ "./src/dom-tabs/assistance/domHelper.js");
/* harmony import */ var _assistance_createBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistance/createBoard */ "./src/dom-tabs/assistance/createBoard.js");
/* harmony import */ var _assistance_placeShipController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assistance/placeShipController */ "./src/dom-tabs/assistance/placeShipController.js");




const body = document.querySelector("body");

// Make a modal that covers all the page.
// Render a board
// Those ships are going to be selected one at a time using a red outline as a guide
const playBtn = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "button",
  { id: "playBtn", class: "bg-pink-700 text-white" },
  ["Let's Fight!"]
);
const shipsContainer = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "div",
  {
    class:
      "grid auto-cols-fr auto-rows-auto gap-5 md:gap-4 justify-center content-center px-6 py-3 h-64 md:px-7 md:py-4 bg-slate-700  shadow-lg shadow-cyan-500/50 rounded-xl",
  },
  []
);
const boardContainer = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "div",
  {
    class:
      "border-pink-600 relative w-64 h-64 md:w-80 md:h-80  border-8 bg-slate-900 flex flex-col",
  },
  []
);
const title = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "p",
  { class: "text-xl text-center text-white sm:text-3xl" },
  ["Place your ships!"]
);
const placementDiv = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "div",
  {
    class:
      "modal-content flex flex-col gap-7 sm:flex-row items-center justify-around",
  },
  [boardContainer, shipsContainer]
);
const modalDiv = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
  "div",
  {
    style:
      "background-image: url('https://w0.peakpx.com/wallpaper/427/48/HD-wallpaper-purple-haze-world-reflects-water-alien.jpg');",
    class:
      "modal bg-no-repeat bg-cover min-w-full min-h-full flex flex-col justify-around items-center",
  },
  [title, placementDiv, playBtn]
);
// Const playerBoardContainer = document.querySelector(".player-board");

// Close modal

let boatPos;

function listenToShips(element, ships) {
  element.addEventListener("click", (e) => {
    if (!e.target.classList.contains("ship-selector")) return;
    (0,_assistance_placeShipController__WEBPACK_IMPORTED_MODULE_2__.markCurrentShip)(e.target, element);
  });
  element.addEventListener("dblclick", (e) => {
    if (!e.target.classList.contains("ship-selector")) return;
    const vertical = ships[e.target.dataset.shiporder];
    vertical.isVertical = !vertical.isVertical;
  });
}

function listenToCells(container, data) {
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("cells")) {
      boatPos = (0,_assistance_placeShipController__WEBPACK_IMPORTED_MODULE_2__.setShips)(e.target, [data.playerBoard, data.playerShips]);
      (0,_assistance_placeShipController__WEBPACK_IMPORTED_MODULE_2__.renderShip)(data.playerShips, e.target);
    }
  });
}

function renderShipsToPlace(shipData) {
  for (let i = 0; i < shipData.length; i++) {
    const shipSelector = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
      "div",
      {
        class:
          "ship-selector group inline-flex relative z-10 w-max cursor-pointer",
        "data-shipOrder": i,
      },
      []
    );
    const ship = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
      "div",
      { class: "inline-grid", "data-shipSize": shipData[i].getSize() },
      [shipSelector]
    );
    for (let j = 0; j < shipData[i].getSize(); j++) {
      const shipCells = (0,_assistance_domHelper__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
        "div",
        {
          class:
            "ship-cells w-6 h-6 md:w-8 md:h-8 bg-indigo-50 group-hover:bg-cyan-600 relative pointer-events-none",
        },
        []
      );
      shipSelector.appendChild(shipCells);
    }

    shipsContainer.appendChild(ship);
  }
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
  (0,_assistance_createBoard__WEBPACK_IMPORTED_MODULE_1__["default"])(10, boardContainer, false); // Create board and append it to the modal
  listenToCells(boardContainer, data);
  renderShipsToPlace(data.playerShips); // Create ships and append them to the ship container
  listenToShips(shipsContainer, data.playerShips);
  body.appendChild(modalDiv); // Append the modal to the body

  playBtn.addEventListener("click", () => {
    if (boatPos?.length === 5) {
      (0,_assistance_placeShipController__WEBPACK_IMPORTED_MODULE_2__.putInGameBoard)([data.playerBoard, data.playerShips]);
      modalDiv.remove();
    } else {
      console.log(boatPos?.length);
    }
  });
}


/***/ }),

/***/ "./src/dom-tabs/principalView.js":
/*!***************************************!*\
  !*** ./src/dom-tabs/principalView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assistance/domHelper.js */ "./src/dom-tabs/assistance/domHelper.js");
/* harmony import */ var _assistance_createBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assistance/createBoard.js */ "./src/dom-tabs/assistance/createBoard.js");
/* harmony import */ var _dist_github_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dist/github-logo.svg */ "./dist/github-logo.svg");




// Global Variables
const body = document.querySelector("body");
const playerBoard = document.querySelector("#player-board");
const aiBoard = document.querySelector("#computer-board");

// ---- BOARDS -------X

function createBoards(boardSize, playerRef, PCRef) {
  (0,_assistance_createBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(boardSize, playerRef);
  (0,_assistance_createBoard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(boardSize, PCRef);
  const disable = document.createElement("div");
  aiBoard.appendChild(disable);
  disable.classList.add("disable");
}

// ---- FOOTER -------X

function footer(body) {
  const p = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)("p", {}, ["Developed by avatec2312."]);
  const img = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)("img", { src: _dist_github_logo_svg__WEBPACK_IMPORTED_MODULE_2__ }, []);
  const a = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
    "a",
    {
      href: "https://github.com/WillAvatec/battleship-2",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    [img]
  );

  const footer = (0,_assistance_domHelper_js__WEBPACK_IMPORTED_MODULE_0__.domHelper)(
    "footer",
    {
      class: "text-white py-3 bg-gradient-to-r from-pink-900 to-pink-700",
    },
    [p, a]
  );
  body.appendChild(footer);
}

const clickCellHandler = (data) => {
  const enemyBoardCells = document.querySelectorAll("#computer-board .cells");
  const disableCover = document.querySelector(".disable");
  enemyBoardCells.forEach((cell) => {
    cell.addEventListener(
      "click",
      () => {
        cellHandler(cell, data.player1, data.enemyBoard);
        disableCover.classList.add("show");
        aiAttack(data.computer, data.playerBoard);
      },
      { once: true }
    );
  });

  function writeOnCell(cell, value) {
    if (value === "☒") {
      cell.style.backgroundColor = "#ed4c86";
    } else {
      cell.style.backgroundColor = "#c8c8e5";
    }
  }

  //	Console.log(data.enemyBoard.AreAllSunked());

  function aiAttack(pc, playerBoard) {
    const [row, column, value] = pc.randomAttack(playerBoard);
    const rowElement = document.querySelector(`[data-row="${row}"]`);
    const cell = rowElement.querySelector(`[data-column="${column}"]`);
    // Render it on the DOM
    setTimeout(() => {
      writeOnCell(cell, value);
      disableCover.classList.remove("show");
    }, 600);
  }

  // Listener Handler
  function cellHandler(cell, player, board) {
    // Attack enemy Board
    const value = player.attackTo(
      [cell.parentNode.dataset.row, cell.dataset.column, cell],
      board
    );

    // Render it on the DOM
    writeOnCell(cell, value);
  }
};

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(data) {
  footer(body);
  createBoards(10, playerBoard, aiBoard);
  clickCellHandler(data);
}


/***/ }),

/***/ "./src/factories/gameboard.js":
/*!************************************!*\
  !*** ./src/factories/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(boardSize = 10) {
	const board = new Array(boardSize).fill()
		.map(() => Array(boardSize).fill(null));
	const shipPositions = [];
	function getBoard(coord) {
		if (coord) {
			return board[coord[0]][coord[1]];
		}

		return board;
	}

	function isAvailable(coord, s, b = board) {
		const [x, y] = coord;
		const vert = s.isVertical;
		const max = b.length;
		let isOccupied = false;
		const size = s.getSize();
		const isInsideBoard = ((x >= 0 && x < max) && (y >= 0 && y < max));
		const couldOverflow = b?.[x + size] === undefined && b?.[x]?.[y + size] === undefined;
		if (isInsideBoard) {
			for (let i = 0; i < s.getSize(); i += 1) {
				if (vert && !isOccupied) {
					isOccupied = b[x][y + i] === 1;
				}

				if (!vert && !isOccupied) {
					isOccupied = b[x]?.[y] === 1;
				}
			}
		}

		return (isInsideBoard && !isOccupied && !couldOverflow);
	}

	function setShip(ship, coord) {
		const [x, y] = coord;
		const size = ship.getSize();
		const {isVertical} = ship;
		if (!isAvailable(coord, ship, board)) {
			return 'invalid';
		}

		if (!isVertical && size >= 1) {
			for (let i = 0; i < size; i += 1) {
				board[x][y + i] = 1;
			}
		}

		if (isVertical && size >= 1) {
			for (let i = 0; i < size; i += 1) {
				board[x + i][y] = 1;
			}
		}

		shipPositions.push({start: {x, y}, ship});
		return board;
	}

	// {start:{x,y},ship}
	function checkBoatPosition(set, coord) {
		const [row, column] = coord; // 0 - 0
		const [startX, startY] = [set.start.x, set.start.y]; // 0 - 2 * Ship Starting position
		const length = set.ship.getSize(); // 3
		let result = false;
		for (let i = 0; i < length; i += 1) {
			if (set.ship.isVertical && startX + i === Number(row)) {
				result = true;
				break;
			}

			if (!set.ship.isVertical && startY + i === Number(column)) {
				result = true;
				break;
			}
		}

		return result;
	}

	// This is only invoked if the boat exists in the shipPositions array.
	function findBoat(coord) {
		const result = shipPositions.find(ship => checkBoatPosition(ship, coord));
		return result.ship;
	}

	// This should set the value on the internal board
	function receiveAttack(coord) {
		const [x, y] = coord;
		let value = '·';
		if (board[x][y] === 1) {
			findBoat(coord).hit();
			value = '☒';
		}

		board[x][y] = value;

		return value;
	}

	function AreAllSunked() {
		// Check if all boats in board are sunked
		let counter = 0;
		if (shipPositions.length > 0) {
			shipPositions.forEach(obj => {
				if (obj.ship.isSunk().sunked) {
					counter += 1;
				}
			});
			return counter === shipPositions.length;
		}
	}

	return {
		isAvailable,
		getBoard,
		setShip,
		receiveAttack,
		AreAllSunked,
	};
}


/***/ }),

/***/ "./src/factories/player.js":
/*!*********************************!*\
  !*** ./src/factories/player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
	constructor(name = 'Player1') {
		if (name === 'computer') {
			// Pick one randomly
			const names = ['Joey', 'Mark', 'Will', 'Colonel', 'Beth'];
			this.name = names[Math.floor(Math.random() * names.length)] + '\'s Board';
		} else {
			this.name = name + '\'s Board';
		}

		this.record = [];
	}

	attackTo(coord, board) {
		const [x, y] = coord;
		if (this.record.find(obj => obj.row === x && obj.column === y)) {
			return false;
		}

		this.record.push({row: x, column: y});
		return board.receiveAttack(coord);
	}

	randomAttack(board) {
		if (this.record.length === 100) {
			return false;
		}

		let row = Math.floor(Math.random() * 10);
		let column = Math.floor(Math.random() * 10);

		while (this.hasAlreadyHit(row, column)) {
			row = Math.floor(Math.random() * 10);
			column = Math.floor(Math.random() * 10);
		}

		const value = this.attackTo([row, column], board);

		return [row, column, value];
	}

	hasAlreadyHit(row, column) {
		for (let i = 0; i < this.record.length; i += 1) {
			if (
				this.record[i].row === row
          && this.record[i].column === column
			) {
				return true;
			}
		}

		return false;
	}
});


/***/ }),

/***/ "./src/factories/ship.js":
/*!*******************************!*\
  !*** ./src/factories/ship.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(size = 1) {
	const length = size;
	let sunked = false;
	let hits = 0;
	const isVertical = false;

	function hit(damage = 1) {
		if (hits < length) {
			hits += damage;
		}

		return hits;
	}

	function getSize() {
		return length;
	}

	function isSunk() {
		sunked = hits >= length;
		return {sunked, hits};
	}

	return {
		isSunk,
		hit,
		getSize,
		isVertical,
	};
}


/***/ }),

/***/ "./dist/github-logo.svg":
/*!******************************!*\
  !*** ./dist/github-logo.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "04be58c17b3d5e974442.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_tabs_StartingScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-tabs/StartingScreen */ "./src/dom-tabs/StartingScreen.js");
/* harmony import */ var _dom_tabs_principalView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-tabs/principalView */ "./src/dom-tabs/principalView.js");
/* harmony import */ var _dom_tabs_placementMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-tabs/placementMenu */ "./src/dom-tabs/placementMenu.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _assets_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/css/styles.css */ "./src/assets/css/styles.css");






// - Define variables before
// - Create logic
// - Call the start of the game at the end

let gameData;
let player;
let computer;

const displayNames = ([player, computer]) => {
  const playerName = document.querySelector(".player-name");
  const computerName = document.querySelector(".computer-name");
  playerName.textContent = player.name;
  computerName.textContent = computer.name;
};

const gameStarter = (playerName) => {
  gameData = (0,_data_js__WEBPACK_IMPORTED_MODULE_3__["default"])(playerName);
  [player, computer] = [gameData.player1, gameData.computer];
  displayNames([player, computer]);
  (0,_dom_tabs_placementMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(gameData);
  (0,_dom_tabs_principalView__WEBPACK_IMPORTED_MODULE_1__["default"])(gameData);
};

const initializeGame = () => {
  (0,_dom_tabs_StartingScreen__WEBPACK_IMPORTED_MODULE_0__["default"])(gameStarter);
};

initializeGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUMvRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsMFhBQTBYLDRCQUE0Qiw0QkFBNEIsZ0NBQWdDLGtDQUFrQyxVQUFVLHdCQUF3QixxQkFBcUIsR0FBRyxxWUFBcVksc0JBQXNCLDJDQUEyQyw2QkFBNkIsMEJBQTBCLG9CQUFvQix1UEFBdVAsMENBQTBDLDRDQUE0QyxVQUFVLGdLQUFnSyxlQUFlLGlDQUFpQyxVQUFVLDJOQUEyTixlQUFlLDJCQUEyQixrQ0FBa0MsVUFBVSxpR0FBaUcsOENBQThDLDhDQUE4QyxHQUFHLGtHQUFrRyx1QkFBdUIseUJBQXlCLEdBQUcsaUZBQWlGLG1CQUFtQiw2QkFBNkIsR0FBRywyRUFBMkUsd0JBQXdCLEdBQUcsMEpBQTBKLHlIQUF5SCwyQkFBMkIsVUFBVSxpRUFBaUUsbUJBQW1CLEdBQUcsMkdBQTJHLG1CQUFtQixtQkFBbUIsdUJBQXVCLDZCQUE2QixHQUFHLFNBQVMsb0JBQW9CLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxnYkFBZ2Isb0JBQW9CLGtDQUFrQyxzQ0FBc0MsVUFBVSxrTUFBa00sMEJBQTBCLDRCQUE0QixpQ0FBaUMsaUNBQWlDLDJCQUEyQixzQkFBc0IsdUJBQXVCLFVBQVUsOEZBQThGLHlCQUF5QixHQUFHLG1MQUFtTCxnQ0FBZ0MsMENBQTBDLG1DQUFtQyxVQUFVLCtGQUErRixrQkFBa0IsR0FBRywrTUFBK00scUJBQXFCLEdBQUcsbUZBQW1GLDZCQUE2QixHQUFHLGlKQUFpSixpQkFBaUIsR0FBRyw2SEFBNkgsbUNBQW1DLGlDQUFpQyxVQUFVLG9HQUFvRyw2QkFBNkIsR0FBRyxxS0FBcUssZ0NBQWdDLDBCQUEwQixVQUFVLHNFQUFzRSx1QkFBdUIsR0FBRyw0SkFBNEosY0FBYyxHQUFHLGNBQWMsY0FBYyxlQUFlLEdBQUcsWUFBWSxlQUFlLEdBQUcsb0JBQW9CLHFCQUFxQixjQUFjLGVBQWUsR0FBRyw2RUFBNkUscUJBQXFCLEdBQUcsa1FBQWtRLGdCQUFnQiwyQkFBMkIsVUFBVSxnREFBZ0QsZ0JBQWdCLDJCQUEyQixVQUFVLCtFQUErRSxvQkFBb0IsR0FBRyxpRkFBaUYsb0JBQW9CLEdBQUcsbWJBQW1iLG9CQUFvQixtQ0FBbUMsVUFBVSx3S0FBd0ssb0JBQW9CLGlCQUFpQixHQUFHLHlGQUF5RixrQkFBa0IsR0FBRywwQkFBMEIsNkJBQTZCLDZCQUE2Qix3QkFBd0Isd0JBQXdCLG1CQUFtQixtQkFBbUIsbUJBQW1CLG9CQUFvQixvQkFBb0Isa0JBQWtCLGtCQUFrQix1QkFBdUIsMkNBQTJDLG1DQUFtQyxrQ0FBa0MsaUNBQWlDLG9CQUFvQix5QkFBeUIsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsdUJBQXVCLGdDQUFnQyxpQ0FBaUMsMkNBQTJDLHVDQUF1QyxnQ0FBZ0MsMkJBQTJCLG1DQUFtQyxpQkFBaUIsdUJBQXVCLHFCQUFxQixzQkFBc0IsdUJBQXVCLG1CQUFtQixxQkFBcUIsa0JBQWtCLHdCQUF3QiwwQkFBMEIsZ0NBQWdDLDhCQUE4QiwrQkFBK0IsZ0NBQWdDLDRCQUE0Qiw2QkFBNkIsOEJBQThCLDJCQUEyQixHQUFHLGdCQUFnQiw2QkFBNkIsNkJBQTZCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLG9CQUFvQixrQkFBa0Isa0JBQWtCLHVCQUF1QiwyQ0FBMkMsbUNBQW1DLGtDQUFrQyxpQ0FBaUMsb0JBQW9CLHlCQUF5QiwyQkFBMkIsNEJBQTRCLDZCQUE2Qix1QkFBdUIsZ0NBQWdDLGlDQUFpQywyQ0FBMkMsdUNBQXVDLGdDQUFnQywyQkFBMkIsbUNBQW1DLGlCQUFpQix1QkFBdUIscUJBQXFCLHNCQUFzQix1QkFBdUIsbUJBQW1CLHFCQUFxQixrQkFBa0Isd0JBQXdCLDBCQUEwQixnQ0FBZ0MsOEJBQThCLCtCQUErQixnQ0FBZ0MsNEJBQTRCLDZCQUE2Qiw4QkFBOEIsMkJBQTJCLEdBQUcsY0FBYyxnQkFBZ0IsR0FBRyw2QkFBNkIsa0JBQWtCLHVCQUF1QixLQUFLLEdBQUcsNkJBQTZCLGtCQUFrQix1QkFBdUIsS0FBSyxHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLEtBQUssR0FBRyw4QkFBOEIsa0JBQWtCLHdCQUF3QixLQUFLLEdBQUcsOEJBQThCLGtCQUFrQix3QkFBd0IsS0FBSyxHQUFHLHdCQUF3Qix5QkFBeUIsR0FBRyxZQUFZLHdCQUF3QixHQUFHLFVBQVUsb0JBQW9CLEdBQUcsYUFBYSx1QkFBdUIsR0FBRyxhQUFhLHVCQUF1QixHQUFHLFlBQVksZUFBZSxHQUFHLGNBQWMsb0JBQW9CLEdBQUcsWUFBWSxtQkFBbUIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLFVBQVUsaUJBQWlCLEdBQUcsU0FBUyxnQkFBZ0IsR0FBRyxZQUFZLHNCQUFzQix1QkFBdUIsR0FBRyxZQUFZLHFCQUFxQix3QkFBd0IsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxnQkFBZ0IseUJBQXlCLEdBQUcsU0FBUyxrQkFBa0IsR0FBRyxnQkFBZ0IseUJBQXlCLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxRQUFRLG1CQUFtQixHQUFHLFNBQVMsa0JBQWtCLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGNBQWMsc0JBQXNCLEdBQUcsUUFBUSxrQkFBa0IsR0FBRyxTQUFTLGlCQUFpQixHQUFHLFdBQVcsZ0JBQWdCLEdBQUcsVUFBVSw0QkFBNEIsdUJBQXVCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxvQkFBb0IscUJBQXFCLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxXQUFXLGlCQUFpQixHQUFHLGNBQWMsb01BQW9NLEdBQUcscUJBQXFCLFVBQVUsaUJBQWlCLHlDQUF5QyxLQUFLLFlBQVksaUJBQWlCLHNDQUFzQyxLQUFLLEdBQUcsb0JBQW9CLG1DQUFtQyxHQUFHLG1CQUFtQixvQkFBb0IsR0FBRyxpQkFBaUIsc0NBQXNDLEdBQUcsbUJBQW1CLHlCQUF5QixHQUFHLGFBQWEsMkJBQTJCLEdBQUcsbUJBQW1CLDBCQUEwQixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxtQkFBbUIsNEJBQTRCLEdBQUcsb0JBQW9CLG1DQUFtQyxHQUFHLG1CQUFtQixrQ0FBa0MsR0FBRyx5QkFBeUIsMEJBQTBCLEdBQUcsVUFBVSxpQkFBaUIsR0FBRyxVQUFVLGlCQUFpQixHQUFHLG9CQUFvQixxQkFBcUIsR0FBRyxrQkFBa0IsNEJBQTRCLEdBQUcsc0JBQXNCLHdCQUF3QixHQUFHLGVBQWUsNEJBQTRCLEdBQUcsZUFBZSwyQkFBMkIsR0FBRyxXQUFXLHNCQUFzQixHQUFHLGFBQWEsc0JBQXNCLEdBQUcsb0JBQW9CLDJCQUEyQiw2REFBNkQsR0FBRyxzQkFBc0IsOEJBQThCLEdBQUcsaUJBQWlCLHVCQUF1Qiw4REFBOEQsR0FBRyxnQkFBZ0IsdUJBQXVCLDZEQUE2RCxHQUFHLGdCQUFnQix1QkFBdUIsNERBQTRELEdBQUcsa0JBQWtCLHVCQUF1Qiw2REFBNkQsR0FBRyxpQkFBaUIsdUJBQXVCLDJEQUEyRCxHQUFHLGlCQUFpQix1QkFBdUIsMkRBQTJELEdBQUcscUJBQXFCLDBFQUEwRSxHQUFHLGtCQUFrQixpRUFBaUUsd0VBQXdFLHdFQUF3RSxHQUFHLG9CQUFvQixpRUFBaUUseUVBQXlFLHdFQUF3RSxHQUFHLG1CQUFtQiw2REFBNkQsR0FBRyxnQkFBZ0IsNkRBQTZELEdBQUcsYUFBYSwyQkFBMkIsR0FBRyxpQkFBaUIsaUNBQWlDLEdBQUcsUUFBUSxvQkFBb0IsR0FBRyxRQUFRLHFCQUFxQixHQUFHLFFBQVEscUJBQXFCLEdBQUcsU0FBUyx5QkFBeUIsMEJBQTBCLEdBQUcsU0FBUyx5QkFBeUIsNEJBQTRCLEdBQUcsYUFBYSwwQkFBMEIsNkJBQTZCLEdBQUcsU0FBUyx5QkFBeUIsNEJBQTRCLEdBQUcsU0FBUyxzQkFBc0IseUJBQXlCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQiwyQkFBMkIsR0FBRyxhQUFhLHVCQUF1Qix3QkFBd0IsR0FBRyxZQUFZLHdCQUF3Qix5QkFBeUIsR0FBRyxZQUFZLHVCQUF1Qix5QkFBeUIsR0FBRyxlQUFlLHFCQUFxQixHQUFHLGNBQWMsOEJBQThCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyxvQkFBb0IseUJBQXlCLG9EQUFvRCxHQUFHLG1CQUFtQix5QkFBeUIscURBQXFELEdBQUcsZUFBZSx5QkFBeUIscURBQXFELEdBQUcsY0FBYyxvRkFBb0Ysd0dBQXdHLDRHQUE0RyxHQUFHLHlCQUF5Qiw0Q0FBNEMsMENBQTBDLEdBQUcsWUFBWSx5QkFBeUIsR0FBRyxTQUFTLHlCQUF5QixzTEFBc0wsR0FBRyxvQkFBb0IsaUVBQWlFLHNMQUFzTCxHQUFHLGVBQWUscUtBQXFLLDZKQUE2SixzTEFBc0wsNkRBQTZELCtCQUErQixHQUFHLG1CQUFtQiw2QkFBNkIsNkRBQTZELCtCQUErQixHQUFHLHlCQUF5QixRQUFRLGlDQUFpQyxLQUFLLFNBQVMscUNBQXFDLEtBQUssVUFBVSxpQ0FBaUMsS0FBSyxHQUFHLHFCQUFxQixRQUFRLCtCQUErQixLQUFLLFdBQVcsa0NBQWtDLEtBQUssV0FBVyxrQ0FBa0MsbUJBQW1CLEtBQUssV0FBVyxrQ0FBa0MsS0FBSyxZQUFZLCtCQUErQixLQUFLLEdBQUcsT0FBTyxjQUFjLDJCQUEyQixvQkFBb0IsR0FBRyxrQkFBa0Isa0JBQWtCLHVCQUF1QixhQUFhLGlCQUFpQixrQkFBa0IsOEhBQThILGlDQUFpQywyQkFBMkIsR0FBRyxpQkFBaUIsa0JBQWtCLHVCQUF1QixnQkFBZ0IsYUFBYSwrS0FBK0ssMENBQTBDLCtCQUErQixpQ0FBaUMsR0FBRyxVQUFVLHNCQUFzQixrQkFBa0IsMkJBQTJCLEdBQUcsV0FBVyx5Q0FBeUMsbUNBQW1DLG9CQUFvQixnQkFBZ0IsaUJBQWlCLDRDQUE0QyxvQ0FBb0MsaUJBQWlCLGNBQWMsWUFBWSxpQkFBaUIsR0FBRywwQkFBMEIsMkNBQTJDLG9CQUFvQixnREFBZ0QsaUJBQWlCLEdBQUcsMEJBQTBCLHdDQUF3QyxtQkFBbUIsNkNBQTZDLGlCQUFpQixHQUFHLFlBQVksa0JBQWtCLGdDQUFnQyx3QkFBd0IsNEJBQTRCLHFCQUFxQixjQUFjLEdBQUcsc0JBQXNCLG9CQUFvQiwyQkFBMkIsd0JBQXdCLEdBQUcsUUFBUSxrQkFBa0IsNEJBQTRCLEdBQUcsY0FBYyw0Q0FBNEMsa0JBQWtCLEdBQUcsV0FBVyxrQkFBa0IsdUJBQXVCLGFBQWEsR0FBRyxZQUFZLFlBQVkseUJBQXlCLDRCQUE0Qix3QkFBd0IsR0FBRyxZQUFZLHFCQUFxQixtQ0FBbUMsNEJBQTRCLFdBQVcsaUJBQWlCLGtDQUFrQyxvQkFBb0IsVUFBVSxrQkFBa0Isa0VBQWtFLHVDQUF1Qyw0QkFBNEIsY0FBYyxzQkFBc0IsR0FBRyxrQ0FBa0MsZUFBZSwrQkFBK0Isb0JBQW9CLEdBQUcsb0JBQW9CLEdBQUcsc0JBQXNCLHVCQUF1QixrQkFBa0IseUJBQXlCLDJCQUEyQiw0QkFBNEIsMEJBQTBCLGtCQUFrQixtQ0FBbUMsaUJBQWlCLEdBQUcsV0FBVyx5QkFBeUIsaURBQWlELHNCQUFzQixHQUFHLHVEQUF1RCw4Q0FBOEMsR0FBRyxvQkFBb0IseUJBQXlCLHVCQUF1Qix1QkFBdUIsZUFBZSw0QkFBNEIsdUJBQXVCLG9CQUFvQixHQUFHLGVBQWUsZ0JBQWdCLCtCQUErQixHQUFHLG1CQUFtQix1QkFBdUIsV0FBVyxZQUFZLGVBQWUsR0FBRywyREFBMkQsNkNBQTZDLEdBQUcsK0JBQStCLHlCQUF5QixHQUFHLDREQUE0RCw0Q0FBNEMsR0FBRyxjQUFjLHVCQUF1QixzQkFBc0Isc0JBQXNCLEtBQUssOEJBQThCLHVCQUF1Qix1QkFBdUIsb01BQW9NLEdBQUcsa0NBQWtDLHVCQUF1Qiw0REFBNEQsR0FBRyw4QkFBOEIscUZBQXFGLHlHQUF5Ryw0R0FBNEcsR0FBRyw2Q0FBNkMsdUJBQXVCLDREQUE0RCxHQUFHLCtCQUErQixzQkFBc0IsMEJBQTBCLEtBQUssc0JBQXNCLDBCQUEwQiwyQkFBMkIsS0FBSyxHQUFHLCtCQUErQixpQkFBaUIsbUJBQW1CLEtBQUssa0JBQWtCLG9CQUFvQixLQUFLLGlCQUFpQixrQkFBa0IsS0FBSyxrQkFBa0IsbUJBQW1CLEtBQUssc0JBQXNCLDBCQUEwQixLQUFLLG1CQUFtQixnQkFBZ0IsS0FBSyxrQkFBa0IsNEJBQTRCLDZCQUE2QixLQUFLLGtCQUFrQix3QkFBd0IsMkJBQTJCLEtBQUssR0FBRyxnQ0FBZ0Msa0JBQWtCLG9CQUFvQixLQUFLLGtCQUFrQixtQkFBbUIsS0FBSyxvQkFBb0IsZ0JBQWdCLEtBQUssR0FBRyxTQUFTLDJHQUEyRyxZQUFZLE1BQU0sT0FBTyxxQkFBcUIsb0JBQW9CLHFCQUFxQixxQkFBcUIsTUFBTSxNQUFNLFdBQVcsTUFBTSxXQUFXLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLHFCQUFxQixVQUFVLG9CQUFvQixxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixxQkFBcUIsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0Isb0JBQW9CLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIsb0JBQW9CLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxRQUFRLE1BQU0sS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixNQUFNLFFBQVEsTUFBTSxTQUFTLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLE1BQU0sUUFBUSxxQkFBcUIscUJBQXFCLHFCQUFxQixNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLGlCQUFpQixVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE9BQU8sTUFBTSxLQUFLLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLG9CQUFvQixvQkFBb0IsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLFFBQVEsTUFBTSxZQUFZLG9CQUFvQixxQkFBcUIsTUFBTSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxXQUFXLE1BQU0sT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsTUFBTSxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLE9BQU8sTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxzQkFBc0IscUJBQXFCLFdBQVcsVUFBVSxvQkFBb0IsdUJBQXVCLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUss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OztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyREQsNkJBQWUsb0NBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUQ7QUFDTDtBQUNHO0FBQ3JCO0FBQ0M7O0FBRWpDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSxvREFBTztBQUNwQjtBQUNBO0FBQ0EsRUFBRSxtRUFBYTtBQUNmLEVBQUUsbUVBQVU7QUFDWjs7QUFFQTtBQUNBLEVBQUUsb0VBQWM7QUFDaEI7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3M/NzkyNyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS10YWJzL1N0YXJ0aW5nU2NyZWVuLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLXRhYnMvYXNzaXN0YW5jZS9jcmVhdGVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS10YWJzL2Fzc2lzdGFuY2UvZG9tSGVscGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLXRhYnMvYXNzaXN0YW5jZS9wbGFjZVNoaXBDb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLXRhYnMvcGxhY2VtZW50TWVudS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS10YWJzL3ByaW5jaXBhbFZpZXcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9mYWN0b3JpZXMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjMuMiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbjUuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmVhdHVyZS1zZXR0aW5ncyBieSBkZWZhdWx0LlxcbjYuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgLW8tdGFiLXNpemU6IDQ7XFxuICAgICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBub3JtYWw7IC8qIDUgKi9cXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOiBub3JtYWw7IC8qIDYgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjotbW96LXBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogTWFrZSBlbGVtZW50cyB3aXRoIHRoZSBIVE1MIGhpZGRlbiBhdHRyaWJ1dGUgc3RheSBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteDogMDtcXG4gIC0tdHctYm9yZGVyLXNwYWNpbmcteTogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctZ3JhZGllbnQtZnJvbS1wb3NpdGlvbjogIDtcXG4gIC0tdHctZ3JhZGllbnQtdmlhLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC10by1wb3NpdGlvbjogIDtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcblxcbjo6YmFja2Ryb3Age1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy14OiAwO1xcbiAgLS10dy1ib3JkZXItc3BhY2luZy15OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb246ICA7XFxuICAtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uOiAgO1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIH1cXG59XFxuLnBvaW50ZXItZXZlbnRzLW5vbmUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5pbnNldC0wIHtcXG4gIGluc2V0OiAwcHg7XFxufVxcbi4tYm90dG9tLTYge1xcbiAgYm90dG9tOiAtMS41cmVtO1xcbn1cXG4uLWxlZnQtNSB7XFxuICBsZWZ0OiAtMS4yNXJlbTtcXG59XFxuLi10b3AtMiB7XFxuICB0b3A6IC0wLjVyZW07XFxufVxcbi4tei0xMCB7XFxuICB6LWluZGV4OiAtMTA7XFxufVxcbi56LTEwIHtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LWF1dG8ge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XFxufVxcbi5pbmxpbmUtYmxvY2sge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcbi5pbmxpbmUtZ3JpZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC02IHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4uaC02NCB7XFxuICBoZWlnaHQ6IDE2cmVtO1xcbn1cXG4uaC05IHtcXG4gIGhlaWdodDogMi4yNXJlbTtcXG59XFxuLm1pbi1oLWZ1bGwge1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuLnctMTFcXFxcLzEyIHtcXG4gIHdpZHRoOiA5MS42NjY2NjclO1xcbn1cXG4udy02IHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcbi53LTY0IHtcXG4gIHdpZHRoOiAxNnJlbTtcXG59XFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLnctbWF4IHtcXG4gIHdpZHRoOiAtbW96LW1heC1jb250ZW50O1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG4ubWluLXctZnVsbCB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxufVxcbi5tYXgtdy1zY3JlZW4tc20ge1xcbiAgbWF4LXdpZHRoOiA2NDBweDtcXG59XFxuLm1heC13LXNtIHtcXG4gIG1heC13aWR0aDogMjRyZW07XFxufVxcbi5mbGV4LTEge1xcbiAgZmxleDogMSAxIDAlO1xcbn1cXG4udHJhbnNmb3JtIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXR3LXRyYW5zbGF0ZS14KSwgdmFyKC0tdHctdHJhbnNsYXRlLXkpKSByb3RhdGUodmFyKC0tdHctcm90YXRlKSkgc2tld1godmFyKC0tdHctc2tldy14KSkgc2tld1kodmFyKC0tdHctc2tldy15KSkgc2NhbGVYKHZhcigtLXR3LXNjYWxlLXgpKSBzY2FsZVkodmFyKC0tdHctc2NhbGUteSkpO1xcbn1cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuXFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwJSwgMCk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuLmFuaW1hdGUtZmFkZS1pbiB7XFxuICBhbmltYXRpb246IGZhZGVJbiAuNXMgZWFzZS1vdXQ7XFxufVxcbi5jdXJzb3ItcG9pbnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hdXRvLWNvbHMtZnIge1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpO1xcbn1cXG4uYXV0by1yb3dzLWF1dG8ge1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udGVudC1jZW50ZXIge1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4uaXRlbXMtY2VudGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5qdXN0aWZ5LWFyb3VuZCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuLmp1c3RpZnktaXRlbXMtY2VudGVyIHtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuLmdhcC01IHtcXG4gIGdhcDogMS4yNXJlbTtcXG59XFxuLmdhcC03IHtcXG4gIGdhcDogMS43NXJlbTtcXG59XFxuLm92ZXJmbG93LWhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udGV4dC1lbGxpcHNpcyB7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLndoaXRlc3BhY2Utbm93cmFwIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5yb3VuZGVkLXNtIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xcbn1cXG4ucm91bmRlZC14bCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xcbn1cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLTgge1xcbiAgYm9yZGVyLXdpZHRoOiA4cHg7XFxufVxcbi5ib3JkZXItcGluay02MDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIxOSAzOSAxMTkgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLW9wYWNpdHktNzUge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMC43NTtcXG59XFxuLmJnLWluZGlnby01MCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4IDI0MiAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1waW5rLTYwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5IDM5IDExOSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXBpbmstNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTAgMjQgOTMgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1wdXJwbGUtODAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDcgMzMgMTY4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctc2xhdGUtNzAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSA2NSA4NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXNsYXRlLTkwMCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUgMjMgNDIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmFkaWVudC10by1yIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tdHctZ3JhZGllbnQtc3RvcHMpKTtcXG59XFxuLmZyb20tcGluay05MDAge1xcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjODMxODQzIHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xcbiAgLS10dy1ncmFkaWVudC10bzogcmdiKDEzMSAyNCA2NyAvIDApIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcXG4gIC0tdHctZ3JhZGllbnQtc3RvcHM6IHZhcigtLXR3LWdyYWRpZW50LWZyb20pLCB2YXIoLS10dy1ncmFkaWVudC10byk7XFxufVxcbi5mcm9tLXZpb2xldC01MDAge1xcbiAgLS10dy1ncmFkaWVudC1mcm9tOiAjOGI1Y2Y2IHZhcigtLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb24pO1xcbiAgLS10dy1ncmFkaWVudC10bzogcmdiKDEzOSA5MiAyNDYgLyAwKSB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxuICAtLXR3LWdyYWRpZW50LXN0b3BzOiB2YXIoLS10dy1ncmFkaWVudC1mcm9tKSwgdmFyKC0tdHctZ3JhZGllbnQtdG8pO1xcbn1cXG4udG8tZnVjaHNpYS01MDAge1xcbiAgLS10dy1ncmFkaWVudC10bzogI2Q5NDZlZiB2YXIoLS10dy1ncmFkaWVudC10by1wb3NpdGlvbik7XFxufVxcbi50by1waW5rLTcwMCB7XFxuICAtLXR3LWdyYWRpZW50LXRvOiAjYmUxODVkIHZhcigtLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uKTtcXG59XFxuLmJnLWNvdmVyIHtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5iZy1uby1yZXBlYXQge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLnAtMiB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5wLTMge1xcbiAgcGFkZGluZzogMC43NXJlbTtcXG59XFxuLnAtNSB7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG4ucHgtNiB7XFxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcXG59XFxuLnB5LTEge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcXG59XFxuLnB5LTFcXFxcLjUge1xcbiAgcGFkZGluZy10b3A6IDAuMzc1cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuMzc1cmVtO1xcbn1cXG4ucHktMyB7XFxuICBwYWRkaW5nLXRvcDogMC43NXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ucHktNCB7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG4udGV4dC1jZW50ZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWxpZ24tbWlkZGxlIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi50ZXh0LTR4bCB7XFxuICBmb250LXNpemU6IDIuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG4udGV4dC1zbSB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LXhsIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4uZm9udC1ibGFjayB7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG4udXBwZXJjYXNlIHtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5sZWFkaW5nLTgge1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbi50ZXh0LXB1cnBsZS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE2OCA4NSAyNDcgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtdmlvbGV0LTUwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyNDUgMjQzIDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnNoYWRvdy1sZyB7XFxuICAtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDRweCA2cHggLTRweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxMHB4IDE1cHggLTNweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDRweCA2cHggLTRweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy1jeWFuLTUwMFxcXFwvNTAge1xcbiAgLS10dy1zaGFkb3ctY29sb3I6IHJnYig2IDE4MiAyMTIgLyAwLjUpO1xcbiAgLS10dy1zaGFkb3c6IHZhcigtLXR3LXNoYWRvdy1jb2xvcmVkKTtcXG59XFxuLm91dGxpbmUge1xcbiAgb3V0bGluZS1zdHlsZTogc29saWQ7XFxufVxcbi5ibHVyIHtcXG4gIC0tdHctYmx1cjogYmx1cig4cHgpO1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG4uZHJvcC1zaGFkb3ctMnhsIHtcXG4gIC0tdHctZHJvcC1zaGFkb3c6IGRyb3Atc2hhZG93KDAgMjVweCAyNXB4IHJnYigwIDAgMCAvIDAuMTUpKTtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXItY29sb3IsIHRleHQtZGVjb3JhdGlvbi1jb2xvciwgZmlsbCwgc3Ryb2tlLCBvcGFjaXR5LCBib3gtc2hhZG93LCB0cmFuc2Zvcm0sIGZpbHRlciwgYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXIsIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxNTBtcztcXG59XFxuLnRyYW5zaXRpb24tYWxsIHtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyB3YXZlIHtcXG4gIDIlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEpO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgICBoZWlnaHQ6IDE2ZW07XFxuICB9XFxuXFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI1JSk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEpO1xcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmJvZHk6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgei1pbmRleDogLTIwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly93MC5wZWFrcHguY29tL3dhbGxwYXBlci80MjcvNDgvSEQtd2FsbHBhcGVyLXB1cnBsZS1oYXplLXdvcmxkLXJlZmxlY3RzLXdhdGVyLWFsaWVuLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbmJvZHk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMzE1ZGVnLFxcbiAgICByZ2IoMjIzIDE5OCAyMjIgLyAxMiUpIDMlLFxcbiAgICByZ2IoMTQ5IDQxIDIxMSAvIDIwJSkgMzglLFxcbiAgICByZ2IoMTIxIDQ4IDIzOCAvIDIwJSkgNjglLFxcbiAgICByZ2IoNTAgMiA1OSAvIDIwJSkgOTglXFxuICApO1xcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAxNXMgZWFzZSBpbmZpbml0ZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxuYm9keSB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ud2F2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzMSwgMjMsIDIwNCwgMC4yNSk7XFxuICBib3JkZXItcmFkaXVzOiAxMDAwJSAxMDAwJSAwIDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMjAwJTtcXG4gIGhlaWdodDogMjB2aDtcXG4gIGFuaW1hdGlvbjogd2F2ZSAxMHMgLTNzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTEwO1xcbn1cXG5cXG4ud2F2ZTpudGgtb2YtdHlwZSgyKSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5NywgMTQ0LCAxOTAsIDAuNTgyKTtcXG4gIGJvdHRvbTogLTEuMjVlbTtcXG4gIGFuaW1hdGlvbjogd2F2ZSAxOHMgbGluZWFyIHJldmVyc2UgaW5maW5pdGU7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi53YXZlOm50aC1vZi10eXBlKDMpIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTMwLCA3LCAxNTUsIDAuMjUpO1xcbiAgYm90dG9tOiAtMi41ZW07XFxuICBhbmltYXRpb246IHdhdmUgMjBzIC0xcyByZXZlcnNlIGluZmluaXRlO1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmZvb3RlciBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEzKTtcXG4gIHRyYW5zaXRpb246IGVhc2UtaW47XFxufVxcblxcbmgxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRpc2FibGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgNTcsIDc3LCAwLjcpO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbn1cXG5cXG4uY2VsbHMge1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgNDAwcHgpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzBweDtcXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbn1cXG5cXG4jY29tcHV0ZXItYm9hcmQgLmNlbGxzOmhvdmVyIHtcXG4gIHotaW5kZXg6IDM7XFxuICBvdXRsaW5lOiAycHggc29saWQgI2RlYzRlYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbn1cXG5cXG4uc2hpcHMtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogMi8yLzMvMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogNDBweDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDI1cHg7XFxuICBvdXRsaW5lOiAycHggc29saWQgeWVsbG93Z3JlZW47XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5zaGlwIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBycGVhdChhdXRvLWZpdCwgNDBweCk7XFxuICBtYXJnaW4tbGVmdDogNDBweDtcXG59XFxuXFxuLnNoaXAtY2VsbHM6bm90KDpsYXN0LWNoaWxkKTpub3QoLnNoaXAtb24tZ3JpZCAqKSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTcwLCAyMiwgMTcwKTtcXG59XFxuXFxuLnNoaXAtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB6LWluZGV4OiAzO1xcbiAgd2lkdGg6IC1tb3otZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICB6LWluZGV4OiAyMDtcXG4gIG91dGxpbmU6IDNweCBzb2xpZCAjMDBjNmY4O1xcbn1cXG5cXG4uc2hpcC1vbi1ncmlkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG5bZGF0YS12ZXJ0aWNhbD1cXFwidHJ1ZVxcXCJdIC5zaGlwLWNlbGxzOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjAsIDYyLCA1KTtcXG59XFxuXFxuW2RhdGEtdmVydGljYWw9XFxcImZhbHNlXFxcIl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcblxcbltkYXRhLXZlcnRpY2FsPVxcXCJmYWxzZVxcXCJdIC5zaGlwLWNlbGxzOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDIyMCwgNjIsIDUpO1xcbn1cXG5cXG4jcGxheUJ0biB7XFxuICBncmlkLWFyZWE6IDMvMS80LzM7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG5cXG4uaG92ZXJcXFxcOnNjYWxlLTEwNTpob3ZlciB7XFxuICAtLXR3LXNjYWxlLXg6IDEuMDU7XFxuICAtLXR3LXNjYWxlLXk6IDEuMDU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSh2YXIoLS10dy10cmFuc2xhdGUteCksIHZhcigtLXR3LXRyYW5zbGF0ZS15KSkgcm90YXRlKHZhcigtLXR3LXJvdGF0ZSkpIHNrZXdYKHZhcigtLXR3LXNrZXcteCkpIHNrZXdZKHZhcigtLXR3LXNrZXcteSkpIHNjYWxlWCh2YXIoLS10dy1zY2FsZS14KSkgc2NhbGVZKHZhcigtLXR3LXNjYWxlLXkpKTtcXG59XFxuXFxuLmhvdmVyXFxcXDpiZy1wdXJwbGUtOTAwOmhvdmVyIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCAyOCAxMzUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5ob3ZlclxcXFw6c2hhZG93LXhsOmhvdmVyIHtcXG4gIC0tdHctc2hhZG93OiAwIDIwcHggMjVweCAtNXB4IHJnYigwIDAgMCAvIDAuMSksIDAgOHB4IDEwcHggLTZweCByZ2IoMCAwIDAgLyAwLjEpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAyMHB4IDI1cHggLTVweCB2YXIoLS10dy1zaGFkb3ctY29sb3IpLCAwIDhweCAxMHB4IC02cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcblxcbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOmJnLWN5YW4tNjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4IDE0NSAxNzggLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLnNtXFxcXDpmbGV4LXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuc21cXFxcOnRleHQtM3hsIHtcXG4gICAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLm1kXFxcXDpoLTgge1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICB9XFxuXFxuICAubWRcXFxcOmgtODAge1xcbiAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgfVxcblxcbiAgLm1kXFxcXDp3LTgge1xcbiAgICB3aWR0aDogMnJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6dy04MCB7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6ZmxleC1yb3cge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLm1kXFxcXDpnYXAtNCB7XFxuICAgIGdhcDogMXJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6cHgtNyB7XFxuICAgIHBhZGRpbmctbGVmdDogMS43NXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMS43NXJlbTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6cHktNCB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmxnXFxcXDpoLTk2IHtcXG4gICAgaGVpZ2h0OiAyNHJlbTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6dy05NiB7XFxuICAgIHdpZHRoOiAyNHJlbTtcXG4gIH1cXG5cXG4gIC5sZ1xcXFw6Z2FwLTIwIHtcXG4gICAgZ2FwOiA1cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VBQUEsc0JBQWMsRUFBZCxNQUFjO0VBQWQsZUFBYyxFQUFkLE1BQWM7RUFBZCxtQkFBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Ozs7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYyxFQUFkLE1BQWM7RUFBZCw4QkFBYyxFQUFkLE1BQWM7RUFBZCxnQkFBYyxFQUFkLE1BQWM7RUFBZCxjQUFjO0tBQWQsV0FBYyxFQUFkLE1BQWM7RUFBZCw0TkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCwrQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLG9CQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOzs7O0NBQWM7O0FBQWQ7RUFBQSxTQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0VBQWQscUJBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx5Q0FBYztVQUFkLGlDQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQUFBLGtCQUFjO0VBQWQsb0JBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7RUFBZCx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLG1CQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkOzs7O0VBQUEsK0dBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGNBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDs7RUFBQSxjQUFjO0VBQWQsY0FBYztFQUFkLGtCQUFjO0VBQWQsd0JBQWM7QUFBQTs7QUFBZDtFQUFBLGVBQWM7QUFBQTs7QUFBZDtFQUFBLFdBQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkO0VBQUEsY0FBYyxFQUFkLE1BQWM7RUFBZCxxQkFBYyxFQUFkLE1BQWM7RUFBZCx5QkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7OztDQUFjOztBQUFkOzs7OztFQUFBLG9CQUFjLEVBQWQsTUFBYztFQUFkLGVBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsb0JBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7RUFBZCxTQUFjLEVBQWQsTUFBYztFQUFkLFVBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsb0JBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7RUFBQSwwQkFBYyxFQUFkLE1BQWM7RUFBZCw2QkFBYyxFQUFkLE1BQWM7RUFBZCxzQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGdCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSx3QkFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLFlBQWM7QUFBQTs7QUFBZDs7O0NBQWM7O0FBQWQ7RUFBQSw2QkFBYyxFQUFkLE1BQWM7RUFBZCxvQkFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLHdCQUFjO0FBQUE7O0FBQWQ7OztDQUFjOztBQUFkO0VBQUEsMEJBQWMsRUFBZCxNQUFjO0VBQWQsYUFBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7Q0FBYzs7QUFBZDtFQUFBLGtCQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7Ozs7Ozs7Ozs7RUFBQSxTQUFjO0FBQUE7O0FBQWQ7RUFBQSxTQUFjO0VBQWQsVUFBYztBQUFBOztBQUFkO0VBQUEsVUFBYztBQUFBOztBQUFkOzs7RUFBQSxnQkFBYztFQUFkLFNBQWM7RUFBZCxVQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7RUFBQSxnQkFBYztBQUFBOztBQUFkOzs7Q0FBYzs7QUFBZDtFQUFBLFVBQWMsRUFBZCxNQUFjO0VBQWQsY0FBYyxFQUFkLE1BQWM7QUFBQTs7QUFBZDs7RUFBQSxVQUFjLEVBQWQsTUFBYztFQUFkLGNBQWMsRUFBZCxNQUFjO0FBQUE7O0FBQWQ7O0NBQWM7O0FBQWQ7O0VBQUEsZUFBYztBQUFBOztBQUFkOztDQUFjO0FBQWQ7RUFBQSxlQUFjO0FBQUE7O0FBQWQ7Ozs7Q0FBYzs7QUFBZDs7Ozs7Ozs7RUFBQSxjQUFjLEVBQWQsTUFBYztFQUFkLHNCQUFjLEVBQWQsTUFBYztBQUFBOztBQUFkOztDQUFjOztBQUFkOztFQUFBLGVBQWM7RUFBZCxZQUFjO0FBQUE7O0FBQWQsd0VBQWM7QUFBZDtFQUFBLGFBQWM7QUFBQTs7QUFBZDtFQUFBLHdCQUFjO0VBQWQsd0JBQWM7RUFBZCxtQkFBYztFQUFkLG1CQUFjO0VB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QjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQSxzQkFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLGtCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUEsNERBQW1CO0VBQW5CLG1FQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLDREQUFtQjtFQUFuQixvRUFBbUI7RUFBbkI7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBO0FBQW1CO0FBQW5CO0VBQUE7QUFBbUI7QUFBbkI7RUFBQTtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLHFCQUFtQjtFQUFuQjtBQUFtQjtBQUFuQjtFQUFBLG9CQUFtQjtFQUFuQjtB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QUE7R0NBQTs7RURBQTtJQUFBLGtCQ0FBO0lEQUE7R0NBQTtDQUFBOztBREFBOztFQUFBO0lBQUE7R0NBQTs7RURBQTtJQUFBO0dDQUE7O0VEQUE7SUFBQTtHQ0FBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG4gIDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgd2F2ZSB7XFxuICAyJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxKTtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjUlKTtcXG4gIH1cXG5cXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgaGVpZ2h0OiAxNmVtO1xcbiAgfVxcblxcbiAgNzUlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yNSUpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxKTtcXG4gIH1cXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5ib2R5OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IC0yMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vdzAucGVha3B4LmNvbS93YWxscGFwZXIvNDI3LzQ4L0hELXdhbGxwYXBlci1wdXJwbGUtaGF6ZS13b3JsZC1yZWZsZWN0cy13YXRlci1hbGllbi5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG5ib2R5OjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDMxNWRlZyxcXG4gICAgcmdiKDIyMyAxOTggMjIyIC8gMTIlKSAzJSxcXG4gICAgcmdiKDE0OSA0MSAyMTEgLyAyMCUpIDM4JSxcXG4gICAgcmdiKDEyMSA0OCAyMzggLyAyMCUpIDY4JSxcXG4gICAgcmdiKDUwIDIgNTkgLyAyMCUpIDk4JVxcbiAgKTtcXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgMTVzIGVhc2UgaW5maW5pdGU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDQwMCUgNDAwJTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLndhdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzEsIDIzLCAyMDQsIDAuMjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAwMCUgMTAwMCUgMCAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDIwMCU7XFxuICBoZWlnaHQ6IDIwdmg7XFxuICBhbmltYXRpb246IHdhdmUgMTBzIC0zcyBsaW5lYXIgaW5maW5pdGU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IC0xMDtcXG59XFxuXFxuLndhdmU6bnRoLW9mLXR5cGUoMikge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxOTcsIDE0NCwgMTkwLCAwLjU4Mik7XFxuICBib3R0b206IC0xLjI1ZW07XFxuICBhbmltYXRpb246IHdhdmUgMThzIGxpbmVhciByZXZlcnNlIGluZmluaXRlO1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4ud2F2ZTpudGgtb2YtdHlwZSgzKSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzMCwgNywgMTU1LCAwLjI1KTtcXG4gIGJvdHRvbTogLTIuNWVtO1xcbiAgYW5pbWF0aW9uOiB3YXZlIDIwcyAtMXMgcmV2ZXJzZSBpbmZpbml0ZTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb290ZXIgaW1nOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xMyk7XFxuICB0cmFuc2l0aW9uOiBlYXNlLWluO1xcbn1cXG5cXG5oMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kaXNhYmxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzQsIDU3LCA3NywgMC43KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG59XFxuXFxuLmNlbGxzIHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDQwMHB4KSk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDMwcHg7XFxuICBtaW4taGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIC5jZWxsczpob3ZlciB7XFxuICB6LWluZGV4OiAzO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkICNkZWM0ZWM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG59XFxuXFxuLnNoaXBzLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDQwcHg7XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICByb3ctZ2FwOiAyNXB4O1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHllbGxvd2dyZWVuO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4uc2hpcCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcnBlYXQoYXV0by1maXQsIDQwcHgpO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi5zaGlwLWNlbGxzOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5zaGlwLW9uLWdyaWQgKikge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKDE3MCwgMjIsIDE3MCk7XFxufVxcblxcbi5zaGlwLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgei1pbmRleDogMztcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIHotaW5kZXg6IDIwO1xcbiAgb3V0bGluZTogM3B4IHNvbGlkICMwMGM2Zjg7XFxufVxcblxcbi5zaGlwLW9uLWdyaWQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxufVxcblxcbltkYXRhLXZlcnRpY2FsPVxcXCJ0cnVlXFxcIl0gLnNoaXAtY2VsbHM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIyMCwgNjIsIDUpO1xcbn1cXG5cXG5bZGF0YS12ZXJ0aWNhbD1cXFwiZmFsc2VcXFwiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuXFxuW2RhdGEtdmVydGljYWw9XFxcImZhbHNlXFxcIl0gLnNoaXAtY2VsbHM6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMjIwLCA2MiwgNSk7XFxufVxcblxcbiNwbGF5QnRuIHtcXG4gIGdyaWQtYXJlYTogMy8xLzQvMztcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL2ZhY3Rvcmllcy9wbGF5ZXIuanNcIjtcbmltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZmFjdG9yaWVzL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHNoaXAgZnJvbSBcIi4vZmFjdG9yaWVzL3NoaXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHVzZXJOYW1lKSB7XG4gIHJldHVybiB7XG4gICAgcGxheWVyMTogbmV3IFBsYXllcih1c2VyTmFtZSksXG4gICAgY29tcHV0ZXI6IG5ldyBQbGF5ZXIoXCJjb21wdXRlclwiKSxcbiAgICBnYW1lU3RhcnQ6IHRydWUsXG4gICAgaXNHYW1lT3ZlcjogZmFsc2UsXG4gICAgcGxheWVyQm9hcmQ6IGdhbWVCb2FyZCgpLFxuICAgIGVuZW15Qm9hcmQ6IGdhbWVCb2FyZCgpLFxuICAgIHBsYXllclNoaXBzOiBbc2hpcCg0KSwgc2hpcCg0KSwgc2hpcCgzKSwgc2hpcCgzKSwgc2hpcCgyKV0sXG4gICAgY29tcHV0ZXJTaGlwczogW3NoaXAoNCksIHNoaXAoNCksIHNoaXAoMyksIHNoaXAoMyksIHNoaXAoMildLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgZG9tSGVscGVyIH0gZnJvbSBcIi4vYXNzaXN0YW5jZS9kb21IZWxwZXIuanNcIjtcblxuY29uc3QgaW5wdXROYW1lID0gZG9tSGVscGVyKFxuICBcImlucHV0XCIsXG4gIHtcbiAgICBjbGFzczogXCJuYW1lSW5wdXQgcC0yIHJvdW5kZWQtc20gdGV4dC1wdXJwbGUtNTAwXCIsXG4gICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgcGxhY2Vob2xkZXI6IFwiUGxlYXNlIGVudGVyIHlvdXIgbmFtZVwiLFxuICAgIGF1dG9mb2N1czogdHJ1ZSxcbiAgfSxcbiAgW1wiUGxheWVyIDFcIl1cbik7XG5jb25zdCBwbGF5QnV0dG9uID0gZG9tSGVscGVyKFxuICBcImJ1dHRvblwiLFxuICB7XG4gICAgY2xhc3M6XG4gICAgICBcInBsYXlCdG4gdGV4dC13aGl0ZSBiZy1wdXJwbGUtODAwIHAtMyBweS0xLjUgcm91bmRlZC14bCBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6YmctcHVycGxlLTkwMCBob3ZlcjpzaGFkb3cteGwgdHJhbnNpdGlvbi1hbGxcIixcbiAgfSxcbiAgW1wiU3RhcnQgR2FtZVwiXVxuKTtcblxuY29uc3Qgd2VsY29tZSA9IGRvbUhlbHBlcihcbiAgXCJwXCIsXG4gIHsgY2xhc3M6IFwidGV4dC14bCBhbGlnbi1taWRkbGUgbGVhZGluZy04IGgtOSB1cHBlcmNhc2VcIiwgaWQ6IFwid2VsY29tZVwiIH0sXG4gIFtcIldlbGNvbWUgYWJvYXJkIVwiXVxuKTtcblxuY29uc3Qgd2VsY29tZURpdiA9IGRvbUhlbHBlcihcImRpdlwiLCB7IGNsYXNzOiBcImZsZXggYWxpZ24tY2VudGVyXCIgfSwgW3dlbGNvbWVdKTtcblxuY29uc3QgZm9ybSA9IGRvbUhlbHBlcihcbiAgXCJmb3JtXCIsXG4gIHtcbiAgICBjbGFzczpcbiAgICAgIFwiYW5pbWF0ZS1mYWRlLWluIHAtNSB3LTExLzEyIG14LWF1dG8gbXktYXV0byBqdXN0aWZ5LWl0ZW1zLWNlbnRlciByb3VuZGVkLXhsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS12aW9sZXQtNTAwIHRvLWZ1Y2hzaWEtNTAwIHRleHQtd2hpdGUgbWF4LXctc2NyZWVuLXNtXCIsXG4gIH0sXG4gIFt3ZWxjb21lRGl2LCBpbnB1dE5hbWUsIHBsYXlCdXR0b25dXG4pO1xuXG5jb25zdCBtb2RhbERpdiA9IGRvbUhlbHBlcihcbiAgXCJkaXZcIixcbiAge1xuICAgIHN0eWxlOlxuICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdzAucGVha3B4LmNvbS93YWxscGFwZXIvNDI3LzQ4L0hELXdhbGxwYXBlci1wdXJwbGUtaGF6ZS13b3JsZC1yZWZsZWN0cy13YXRlci1hbGllbi5qcGcnKTtcIixcbiAgICBjbGFzczpcbiAgICAgIFwibW9kYWwgYmctbm8tcmVwZWF0IGJnLWNvdmVyIG1pbi13LWZ1bGwgbWluLWgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyIGNvbnRlbnQtY2VudGVyXCIsXG4gIH0sXG4gIFtmb3JtXVxuKTtcblxuLy8gTm93IGhlcmUncyB0aGUgZXZlbnRMaXN0ZW5lciBMb2dpY1xuLy8gLSBQcmV2ZW50IHJlbG9hZGluZyB3aW5kb3c7XG4vLyAtIENhbGwgZGF0YS5qcywgcGFzc2luZyB0aGUgbmFtZSBpbiB0aGUgaW5wdXRcbi8vIC0gU2F2ZSB0aGUgZGF0YSBjcmVhdGVkIGluIGEgdmFyaWFibGVcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvKiBGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVfX3pvb21JbicpO1xuXHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fZmFkZU91dERvd24nKTtcblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdG1vZGFsRGl2LnJlbW92ZSgpO1xuXHRcdFx0Y2FsbGJhY2soaW5wdXROYW1lLnZhbHVlKTtcblx0XHR9KTsgKi9cbiAgICBtb2RhbERpdi5yZW1vdmUoKTtcbiAgICBjYWxsYmFjayhpbnB1dE5hbWUudmFsdWUpO1xuICB9KTtcbiAgYm9keS5hcHBlbmRDaGlsZChtb2RhbERpdik7XG59XG4iLCJmdW5jdGlvbiBjcmVhdGVNYXJrZXIodGV4dCkge1xuICBjb25zdCBtYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYXJrZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiY2xhc3NcIixcbiAgICBcIm1hcmtlciAtbGVmdC01IHRleHQtd2hpdGUgYWJzb2x1dGUgZmxleCB0ZXh0LXNtXCJcbiAgKTtcbiAgbWFya2VyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgcmV0dXJuIG1hcmtlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm93KHJvd051bWJlcikge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJyb3dzIHctZnVsbCBmbGV4IGZsZXgtMVwiKTtcbiAgcm93LmRhdGFzZXQucm93ID0gcm93TnVtYmVyO1xuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDZWxsKGNvbHVtbk51bWJlcikge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2VsbC5zZXRBdHRyaWJ1dGUoXG4gICAgXCJjbGFzc1wiLFxuICAgIFwiY2VsbHMgcmVsYXRpdmUgaW5saW5lLWZsZXggdGV4dC14bCBib3JkZXIgYm9yZGVyLW9wYWNpdHktNzUgYm9yZGVyLXBpbmstNjAwXCJcbiAgKTtcbiAgY2VsbC5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbk51bWJlcjtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbi8vIFRoaXMgcmVuZGVycyBhIGJvYXJkIGluIHRoZSBET01cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckJvYXJkKHNpemUsIHBhcmVudCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkgKz0gMSkge1xuICAgIGNvbnN0IHJvdyA9IGNyZWF0ZVJvdyhpKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoY3JlYXRlTWFya2VyKGkpKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGogKz0gMSkge1xuICAgICAgY29uc3QgY2VsbCA9IGNyZWF0ZUNlbGwoaik7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICBpZiAoaSA9PT0gc2l6ZSAtIDEpIHtcbiAgICAgICAgY29uc3QgYm90dG9tTWFya2VyID0gY3JlYXRlTWFya2VyKGopO1xuICAgICAgICBib3R0b21NYXJrZXIuY2xhc3NMaXN0LmFkZChcIi1ib3R0b20tNlwiKTtcbiAgICAgICAgYm90dG9tTWFya2VyLmNsYXNzTGlzdC5yZW1vdmUoXCItbGVmdC01XCIpO1xuICAgICAgICBjZWxsLmFwcGVuZENoaWxkKGJvdHRvbU1hcmtlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIGRvbUhlbHBlcih0YWcsIGF0dHIsIGNoaWxkcykge1xuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG5cdGZvciAoY29uc3Qga2V5IGluIGF0dHIpIHtcblx0XHRpZiAoe30uaGFzT3duUHJvcGVydHkuY2FsbChhdHRyLCBrZXkpKSB7XG5cdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJba2V5XSk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkoY2hpbGRzKSkge1xuXHRcdGNoaWxkcy5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGVsZW1lbnQuYXBwZW5kQ2hpbGQoKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykgPyBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkgOiBjaGlsZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudDtcbn1cblxuZXhwb3J0IHtkb21IZWxwZXJ9O1xuIiwiLypcbiAgICAtIFRoaXMgbW9kdWxlIHNob3VsZCBnZXQgdGhlIGZ1bGwgY29udHJvbCBvdmVyOlxuICAgICAgICAqIFNldCBzaGlwcyBpbiBnYW1lYm9hcmQgZnVuY3Rpb24gaW5zdGFuY2VzIChCb3RoIHBsYXllciBhbmQgY29tcHV0ZXIpXG4gICAgICAgICogU2V0IHNoaXBzIGluIGdhbWVib2FyZCBET00gZWxlbWVudHNcbiAgICAgICAgICAgIC0gT25seSByZW5kZXIgcGxhY2VkIHNoaXBzIGluIHBsYXllckJvYXJkXG4qL1xuXG5pbXBvcnQgeyBkb21IZWxwZXIgfSBmcm9tIFwiLi9kb21IZWxwZXJcIjtcblxuLypcbiAgICAtVG8gYWNjb21wbGlzaCB0aGF0LCBpcyBuZWVkZWQ6XG4gICAgICAgICogR2FtZSBEYXRhXG4gICAgICAgICogQSB3YXkgdG8gZ2V0IGNvb3JkaW5hdGVzIGZyb20gRE9NIGdhbWVib2FyZCDinJTvuI9cbiAgICAgICAgKiBBIHdheSB0byByZW5kZXIgc2hpcHMgaW4gcGxheWVyQm9hcmRcbiAgICAgICAgKiBBIHdheSB0byBtYXJrIHRoZSBjdXJyZW50IHNoaXAgdGhhdCBpcyBnb2luZyB0byBiZSBzZXQgb24gdGhlIGdhbWVib2FyZCDinJTvuI9cbiovXG5cbi8qXG4gICAgVGhlcmUgYXJlIHR3byBsb2dpY3MgZm9yIGV2ZW50IGxpc3RlbmVycy5cbiAgICBPbmUgZm9yIHRoZSBzZWxlY3Rpb24gb2YgdGhlIGJvYXRzIOKclO+4j1xuICAgIE9uZSBmb3IgdGhlIERPTSBib2FyZCDwn5ClXG4qL1xuXG5sZXQgY3VycmVudFNoaXAgPSAwO1xuY29uc3Qgc2F2ZWRQb3NpdGlvbnMgPSBbXTtcblxuY29uc3QgbWFya0N1cnJlbnRTaGlwID0gKHNoaXBTZWxlY3RvciwgY29udGFpbmVyKSA9PiB7XG4gIGlmICghc2hpcFNlbGVjdG9yLmRhdGFzZXQuc2hpcG9yZGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3VycmVudFNoaXAgPSBOdW1iZXIoc2hpcFNlbGVjdG9yLmRhdGFzZXQuc2hpcG9yZGVyKTtcbiAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcC1zZWxlY3RvclwiKS5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xuICAgIHNlbGVjdG9yLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG4gIHNoaXBTZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG59O1xuXG4vLyBJZiBpcyB0aGUgcGxheWVyIHNldHRpbmcgdGhlbiByZWNlaXZlIGNvb3JkcyBmcm9tIGRvbVxuLy8gSWYgaXMgdGhlIHBjIHNldHRpbmcgdGhlbiBpbnZva2UgcmFuZG9tIHNldCBib2F0c1xuZnVuY3Rpb24gc2F2ZUNvb3Jkcyhjb29yZHMpIHtcbiAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgY29uc3Qgb2JqZWN0ID0gc2F2ZWRQb3NpdGlvbnMuZmluZCgob2JqKSA9PiBvYmoucmVmID09PSBjdXJyZW50U2hpcCk7XG4gIGlmIChvYmplY3QpIHtcbiAgICBvYmplY3QuY29vcmRzID0gY29vcmRzO1xuICAgIGNvbnNvbGUubG9nKHNhdmVkUG9zaXRpb25zKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzYXZlZFBvc2l0aW9ucy5wdXNoKHsgY29vcmRzLCByZWY6IGN1cnJlbnRTaGlwIH0pO1xuICBjb25zb2xlLmxvZyhzYXZlZFBvc2l0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGdldFNoaXAoc2hpcHMpIHtcbiAgcmV0dXJuIHNoaXBzW2N1cnJlbnRTaGlwXTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29vcmRzKGNlbGwpIHtcbiAgcmV0dXJuIFtOdW1iZXIoY2VsbC5wYXJlbnROb2RlLmRhdGFzZXQucm93KSwgTnVtYmVyKGNlbGwuZGF0YXNldC5jb2x1bW4pXTtcbn1cblxuY29uc3Qgc2V0U2hpcHMgPSAoY2VsbCwgW3BsYXllckJvYXJkLCBwbGF5ZXJTaGlwc10pID0+IHtcbiAgaWYgKHBsYXllckJvYXJkLmlzQXZhaWxhYmxlKGdldENvb3JkcyhjZWxsKSwgZ2V0U2hpcChwbGF5ZXJTaGlwcykpKSB7XG4gICAgc2F2ZUNvb3JkcyhnZXRDb29yZHMoY2VsbCkpO1xuICB9XG5cbiAgcmV0dXJuIHNhdmVkUG9zaXRpb25zO1xufTtcblxuY29uc3QgcmVuZGVyU2hpcCA9IChzaGlwLCBjb250YWluZXIpID0+IHtcbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvbUhlbHBlcihcImRpdlwiLCB7IGNsYXNzOiBcInNoaXAtb24tZ3JpZFwiIH0sIFtdKTtcbiAgZ3JpZENvbnRhaW5lci5kYXRhc2V0LnZlcnRpY2FsID0gZ2V0U2hpcChzaGlwKS5pc1ZlcnRpY2FsO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdldFNoaXAoc2hpcCkuZ2V0U2l6ZSgpOyBpKyspIHtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvbUhlbHBlcihcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOlxuICAgICAgICAgIFwic2hpcC1jZWxscyB3LTYgaC02IG1kOnctOCBtZDpoLTggYmctaW5kaWdvLTUwIHJlbGF0aXZlIHBvaW50ZXItZXZlbnRzLW5vbmVcIixcbiAgICAgIH0sXG4gICAgICBbXVxuICAgICk7XG4gICAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwQ2VsbCk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG59O1xuXG4vLyBUaGlzIGFkZCB0aGUgc2hpcHMgaW50byB0aGUgcGxheWVyQm9hcmQgY291bnRlcnBhcnRcblxuY29uc3QgcHV0SW5HYW1lQm9hcmQgPSAoW3BsYXllckJvYXJkLCBzaGlwc10pID0+IHtcbiAgc2F2ZWRQb3NpdGlvbnMuZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgcGxheWVyQm9hcmQuc2V0U2hpcChzaGlwc1twb3MucmVmXSwgcG9zLmNvb3Jkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbWFya0N1cnJlbnRTaGlwLCBzZXRTaGlwcywgcmVuZGVyU2hpcCwgcHV0SW5HYW1lQm9hcmQgfTtcbiIsImltcG9ydCB7IGRvbUhlbHBlciB9IGZyb20gXCIuL2Fzc2lzdGFuY2UvZG9tSGVscGVyXCI7XG5pbXBvcnQgcmVuZGVyQm9hcmQgZnJvbSBcIi4vYXNzaXN0YW5jZS9jcmVhdGVCb2FyZFwiO1xuaW1wb3J0IHtcbiAgbWFya0N1cnJlbnRTaGlwLFxuICBwdXRJbkdhbWVCb2FyZCxcbiAgcmVuZGVyU2hpcCxcbiAgc2V0U2hpcHMsXG59IGZyb20gXCIuL2Fzc2lzdGFuY2UvcGxhY2VTaGlwQ29udHJvbGxlclwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIE1ha2UgYSBtb2RhbCB0aGF0IGNvdmVycyBhbGwgdGhlIHBhZ2UuXG4vLyBSZW5kZXIgYSBib2FyZFxuLy8gVGhvc2Ugc2hpcHMgYXJlIGdvaW5nIHRvIGJlIHNlbGVjdGVkIG9uZSBhdCBhIHRpbWUgdXNpbmcgYSByZWQgb3V0bGluZSBhcyBhIGd1aWRlXG5jb25zdCBwbGF5QnRuID0gZG9tSGVscGVyKFxuICBcImJ1dHRvblwiLFxuICB7IGlkOiBcInBsYXlCdG5cIiwgY2xhc3M6IFwiYmctcGluay03MDAgdGV4dC13aGl0ZVwiIH0sXG4gIFtcIkxldCdzIEZpZ2h0IVwiXVxuKTtcbmNvbnN0IHNoaXBzQ29udGFpbmVyID0gZG9tSGVscGVyKFxuICBcImRpdlwiLFxuICB7XG4gICAgY2xhc3M6XG4gICAgICBcImdyaWQgYXV0by1jb2xzLWZyIGF1dG8tcm93cy1hdXRvIGdhcC01IG1kOmdhcC00IGp1c3RpZnktY2VudGVyIGNvbnRlbnQtY2VudGVyIHB4LTYgcHktMyBoLTY0IG1kOnB4LTcgbWQ6cHktNCBiZy1zbGF0ZS03MDAgIHNoYWRvdy1sZyBzaGFkb3ctY3lhbi01MDAvNTAgcm91bmRlZC14bFwiLFxuICB9LFxuICBbXVxuKTtcbmNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9tSGVscGVyKFxuICBcImRpdlwiLFxuICB7XG4gICAgY2xhc3M6XG4gICAgICBcImJvcmRlci1waW5rLTYwMCByZWxhdGl2ZSB3LTY0IGgtNjQgbWQ6dy04MCBtZDpoLTgwICBib3JkZXItOCBiZy1zbGF0ZS05MDAgZmxleCBmbGV4LWNvbFwiLFxuICB9LFxuICBbXVxuKTtcbmNvbnN0IHRpdGxlID0gZG9tSGVscGVyKFxuICBcInBcIixcbiAgeyBjbGFzczogXCJ0ZXh0LXhsIHRleHQtY2VudGVyIHRleHQtd2hpdGUgc206dGV4dC0zeGxcIiB9LFxuICBbXCJQbGFjZSB5b3VyIHNoaXBzIVwiXVxuKTtcbmNvbnN0IHBsYWNlbWVudERpdiA9IGRvbUhlbHBlcihcbiAgXCJkaXZcIixcbiAge1xuICAgIGNsYXNzOlxuICAgICAgXCJtb2RhbC1jb250ZW50IGZsZXggZmxleC1jb2wgZ2FwLTcgc206ZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kXCIsXG4gIH0sXG4gIFtib2FyZENvbnRhaW5lciwgc2hpcHNDb250YWluZXJdXG4pO1xuY29uc3QgbW9kYWxEaXYgPSBkb21IZWxwZXIoXG4gIFwiZGl2XCIsXG4gIHtcbiAgICBzdHlsZTpcbiAgICAgIFwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3cwLnBlYWtweC5jb20vd2FsbHBhcGVyLzQyNy80OC9IRC13YWxscGFwZXItcHVycGxlLWhhemUtd29ybGQtcmVmbGVjdHMtd2F0ZXItYWxpZW4uanBnJyk7XCIsXG4gICAgY2xhc3M6XG4gICAgICBcIm1vZGFsIGJnLW5vLXJlcGVhdCBiZy1jb3ZlciBtaW4tdy1mdWxsIG1pbi1oLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWFyb3VuZCBpdGVtcy1jZW50ZXJcIixcbiAgfSxcbiAgW3RpdGxlLCBwbGFjZW1lbnREaXYsIHBsYXlCdG5dXG4pO1xuLy8gQ29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcblxuLy8gQ2xvc2UgbW9kYWxcblxubGV0IGJvYXRQb3M7XG5cbmZ1bmN0aW9uIGxpc3RlblRvU2hpcHMoZWxlbWVudCwgc2hpcHMpIHtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtc2VsZWN0b3JcIikpIHJldHVybjtcbiAgICBtYXJrQ3VycmVudFNoaXAoZS50YXJnZXQsIGVsZW1lbnQpO1xuICB9KTtcbiAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXAtc2VsZWN0b3JcIikpIHJldHVybjtcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IHNoaXBzW2UudGFyZ2V0LmRhdGFzZXQuc2hpcG9yZGVyXTtcbiAgICB2ZXJ0aWNhbC5pc1ZlcnRpY2FsID0gIXZlcnRpY2FsLmlzVmVydGljYWw7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBsaXN0ZW5Ub0NlbGxzKGNvbnRhaW5lciwgZGF0YSkge1xuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNlbGxzXCIpKSB7XG4gICAgICBib2F0UG9zID0gc2V0U2hpcHMoZS50YXJnZXQsIFtkYXRhLnBsYXllckJvYXJkLCBkYXRhLnBsYXllclNoaXBzXSk7XG4gICAgICByZW5kZXJTaGlwKGRhdGEucGxheWVyU2hpcHMsIGUudGFyZ2V0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJTaGlwc1RvUGxhY2Uoc2hpcERhdGEpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwRGF0YS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHNoaXBTZWxlY3RvciA9IGRvbUhlbHBlcihcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOlxuICAgICAgICAgIFwic2hpcC1zZWxlY3RvciBncm91cCBpbmxpbmUtZmxleCByZWxhdGl2ZSB6LTEwIHctbWF4IGN1cnNvci1wb2ludGVyXCIsXG4gICAgICAgIFwiZGF0YS1zaGlwT3JkZXJcIjogaSxcbiAgICAgIH0sXG4gICAgICBbXVxuICAgICk7XG4gICAgY29uc3Qgc2hpcCA9IGRvbUhlbHBlcihcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzOiBcImlubGluZS1ncmlkXCIsIFwiZGF0YS1zaGlwU2l6ZVwiOiBzaGlwRGF0YVtpXS5nZXRTaXplKCkgfSxcbiAgICAgIFtzaGlwU2VsZWN0b3JdXG4gICAgKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBEYXRhW2ldLmdldFNpemUoKTsgaisrKSB7XG4gICAgICBjb25zdCBzaGlwQ2VsbHMgPSBkb21IZWxwZXIoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgIFwic2hpcC1jZWxscyB3LTYgaC02IG1kOnctOCBtZDpoLTggYmctaW5kaWdvLTUwIGdyb3VwLWhvdmVyOmJnLWN5YW4tNjAwIHJlbGF0aXZlIHBvaW50ZXItZXZlbnRzLW5vbmVcIixcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgICk7XG4gICAgICBzaGlwU2VsZWN0b3IuYXBwZW5kQ2hpbGQoc2hpcENlbGxzKTtcbiAgICB9XG5cbiAgICBzaGlwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzaGlwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YSkge1xuICByZW5kZXJCb2FyZCgxMCwgYm9hcmRDb250YWluZXIsIGZhbHNlKTsgLy8gQ3JlYXRlIGJvYXJkIGFuZCBhcHBlbmQgaXQgdG8gdGhlIG1vZGFsXG4gIGxpc3RlblRvQ2VsbHMoYm9hcmRDb250YWluZXIsIGRhdGEpO1xuICByZW5kZXJTaGlwc1RvUGxhY2UoZGF0YS5wbGF5ZXJTaGlwcyk7IC8vIENyZWF0ZSBzaGlwcyBhbmQgYXBwZW5kIHRoZW0gdG8gdGhlIHNoaXAgY29udGFpbmVyXG4gIGxpc3RlblRvU2hpcHMoc2hpcHNDb250YWluZXIsIGRhdGEucGxheWVyU2hpcHMpO1xuICBib2R5LmFwcGVuZENoaWxkKG1vZGFsRGl2KTsgLy8gQXBwZW5kIHRoZSBtb2RhbCB0byB0aGUgYm9keVxuXG4gIHBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoYm9hdFBvcz8ubGVuZ3RoID09PSA1KSB7XG4gICAgICBwdXRJbkdhbWVCb2FyZChbZGF0YS5wbGF5ZXJCb2FyZCwgZGF0YS5wbGF5ZXJTaGlwc10pO1xuICAgICAgbW9kYWxEaXYucmVtb3ZlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKGJvYXRQb3M/Lmxlbmd0aCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IGRvbUhlbHBlciB9IGZyb20gXCIuL2Fzc2lzdGFuY2UvZG9tSGVscGVyLmpzXCI7XG5pbXBvcnQgYm9hcmQgZnJvbSBcIi4vYXNzaXN0YW5jZS9jcmVhdGVCb2FyZC5qc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2Rpc3QvZ2l0aHViLWxvZ28uc3ZnXCI7XG5cbi8vIEdsb2JhbCBWYXJpYWJsZXNcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXItYm9hcmRcIik7XG5jb25zdCBhaUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb21wdXRlci1ib2FyZFwiKTtcblxuLy8gLS0tLSBCT0FSRFMgLS0tLS0tLVhcblxuZnVuY3Rpb24gY3JlYXRlQm9hcmRzKGJvYXJkU2l6ZSwgcGxheWVyUmVmLCBQQ1JlZikge1xuICBib2FyZChib2FyZFNpemUsIHBsYXllclJlZik7XG4gIGJvYXJkKGJvYXJkU2l6ZSwgUENSZWYpO1xuICBjb25zdCBkaXNhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWlCb2FyZC5hcHBlbmRDaGlsZChkaXNhYmxlKTtcbiAgZGlzYWJsZS5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZVwiKTtcbn1cblxuLy8gLS0tLSBGT09URVIgLS0tLS0tLVhcblxuZnVuY3Rpb24gZm9vdGVyKGJvZHkpIHtcbiAgY29uc3QgcCA9IGRvbUhlbHBlcihcInBcIiwge30sIFtcIkRldmVsb3BlZCBieSBhdmF0ZWMyMzEyLlwiXSk7XG4gIGNvbnN0IGltZyA9IGRvbUhlbHBlcihcImltZ1wiLCB7IHNyYzogSWNvbiB9LCBbXSk7XG4gIGNvbnN0IGEgPSBkb21IZWxwZXIoXG4gICAgXCJhXCIsXG4gICAge1xuICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vV2lsbEF2YXRlYy9iYXR0bGVzaGlwLTJcIixcbiAgICAgIHRhcmdldDogXCJfYmxhbmtcIixcbiAgICAgIHJlbDogXCJub29wZW5lciBub3JlZmVycmVyXCIsXG4gICAgfSxcbiAgICBbaW1nXVxuICApO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvbUhlbHBlcihcbiAgICBcImZvb3RlclwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBcInRleHQtd2hpdGUgcHktMyBiZy1ncmFkaWVudC10by1yIGZyb20tcGluay05MDAgdG8tcGluay03MDBcIixcbiAgICB9LFxuICAgIFtwLCBhXVxuICApO1xuICBib2R5LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbmNvbnN0IGNsaWNrQ2VsbEhhbmRsZXIgPSAoZGF0YSkgPT4ge1xuICBjb25zdCBlbmVteUJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NvbXB1dGVyLWJvYXJkIC5jZWxsc1wiKTtcbiAgY29uc3QgZGlzYWJsZUNvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNhYmxlXCIpO1xuICBlbmVteUJvYXJkQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgICgpID0+IHtcbiAgICAgICAgY2VsbEhhbmRsZXIoY2VsbCwgZGF0YS5wbGF5ZXIxLCBkYXRhLmVuZW15Qm9hcmQpO1xuICAgICAgICBkaXNhYmxlQ292ZXIuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAgIGFpQXR0YWNrKGRhdGEuY29tcHV0ZXIsIGRhdGEucGxheWVyQm9hcmQpO1xuICAgICAgfSxcbiAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gd3JpdGVPbkNlbGwoY2VsbCwgdmFsdWUpIHtcbiAgICBpZiAodmFsdWUgPT09IFwi4piSXCIpIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWQ0Yzg2XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYzhjOGU1XCI7XG4gICAgfVxuICB9XG5cbiAgLy9cdENvbnNvbGUubG9nKGRhdGEuZW5lbXlCb2FyZC5BcmVBbGxTdW5rZWQoKSk7XG5cbiAgZnVuY3Rpb24gYWlBdHRhY2socGMsIHBsYXllckJvYXJkKSB7XG4gICAgY29uc3QgW3JvdywgY29sdW1uLCB2YWx1ZV0gPSBwYy5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgIGNvbnN0IHJvd0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1gKTtcbiAgICBjb25zdCBjZWxsID0gcm93RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2x1bW49XCIke2NvbHVtbn1cIl1gKTtcbiAgICAvLyBSZW5kZXIgaXQgb24gdGhlIERPTVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd3JpdGVPbkNlbGwoY2VsbCwgdmFsdWUpO1xuICAgICAgZGlzYWJsZUNvdmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICAgIH0sIDYwMCk7XG4gIH1cblxuICAvLyBMaXN0ZW5lciBIYW5kbGVyXG4gIGZ1bmN0aW9uIGNlbGxIYW5kbGVyKGNlbGwsIHBsYXllciwgYm9hcmQpIHtcbiAgICAvLyBBdHRhY2sgZW5lbXkgQm9hcmRcbiAgICBjb25zdCB2YWx1ZSA9IHBsYXllci5hdHRhY2tUbyhcbiAgICAgIFtjZWxsLnBhcmVudE5vZGUuZGF0YXNldC5yb3csIGNlbGwuZGF0YXNldC5jb2x1bW4sIGNlbGxdLFxuICAgICAgYm9hcmRcbiAgICApO1xuXG4gICAgLy8gUmVuZGVyIGl0IG9uIHRoZSBET01cbiAgICB3cml0ZU9uQ2VsbChjZWxsLCB2YWx1ZSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkYXRhKSB7XG4gIGZvb3Rlcihib2R5KTtcbiAgY3JlYXRlQm9hcmRzKDEwLCBwbGF5ZXJCb2FyZCwgYWlCb2FyZCk7XG4gIGNsaWNrQ2VsbEhhbmRsZXIoZGF0YSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYm9hcmRTaXplID0gMTApIHtcblx0Y29uc3QgYm9hcmQgPSBuZXcgQXJyYXkoYm9hcmRTaXplKS5maWxsKClcblx0XHQubWFwKCgpID0+IEFycmF5KGJvYXJkU2l6ZSkuZmlsbChudWxsKSk7XG5cdGNvbnN0IHNoaXBQb3NpdGlvbnMgPSBbXTtcblx0ZnVuY3Rpb24gZ2V0Qm9hcmQoY29vcmQpIHtcblx0XHRpZiAoY29vcmQpIHtcblx0XHRcdHJldHVybiBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dO1xuXHRcdH1cblxuXHRcdHJldHVybiBib2FyZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzQXZhaWxhYmxlKGNvb3JkLCBzLCBiID0gYm9hcmQpIHtcblx0XHRjb25zdCBbeCwgeV0gPSBjb29yZDtcblx0XHRjb25zdCB2ZXJ0ID0gcy5pc1ZlcnRpY2FsO1xuXHRcdGNvbnN0IG1heCA9IGIubGVuZ3RoO1xuXHRcdGxldCBpc09jY3VwaWVkID0gZmFsc2U7XG5cdFx0Y29uc3Qgc2l6ZSA9IHMuZ2V0U2l6ZSgpO1xuXHRcdGNvbnN0IGlzSW5zaWRlQm9hcmQgPSAoKHggPj0gMCAmJiB4IDwgbWF4KSAmJiAoeSA+PSAwICYmIHkgPCBtYXgpKTtcblx0XHRjb25zdCBjb3VsZE92ZXJmbG93ID0gYj8uW3ggKyBzaXplXSA9PT0gdW5kZWZpbmVkICYmIGI/Llt4XT8uW3kgKyBzaXplXSA9PT0gdW5kZWZpbmVkO1xuXHRcdGlmIChpc0luc2lkZUJvYXJkKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHMuZ2V0U2l6ZSgpOyBpICs9IDEpIHtcblx0XHRcdFx0aWYgKHZlcnQgJiYgIWlzT2NjdXBpZWQpIHtcblx0XHRcdFx0XHRpc09jY3VwaWVkID0gYlt4XVt5ICsgaV0gPT09IDE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXZlcnQgJiYgIWlzT2NjdXBpZWQpIHtcblx0XHRcdFx0XHRpc09jY3VwaWVkID0gYlt4XT8uW3ldID09PSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChpc0luc2lkZUJvYXJkICYmICFpc09jY3VwaWVkICYmICFjb3VsZE92ZXJmbG93KTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldFNoaXAoc2hpcCwgY29vcmQpIHtcblx0XHRjb25zdCBbeCwgeV0gPSBjb29yZDtcblx0XHRjb25zdCBzaXplID0gc2hpcC5nZXRTaXplKCk7XG5cdFx0Y29uc3Qge2lzVmVydGljYWx9ID0gc2hpcDtcblx0XHRpZiAoIWlzQXZhaWxhYmxlKGNvb3JkLCBzaGlwLCBib2FyZCkpIHtcblx0XHRcdHJldHVybiAnaW52YWxpZCc7XG5cdFx0fVxuXG5cdFx0aWYgKCFpc1ZlcnRpY2FsICYmIHNpemUgPj0gMSkge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpICs9IDEpIHtcblx0XHRcdFx0Ym9hcmRbeF1beSArIGldID0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoaXNWZXJ0aWNhbCAmJiBzaXplID49IDEpIHtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSArPSAxKSB7XG5cdFx0XHRcdGJvYXJkW3ggKyBpXVt5XSA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0c2hpcFBvc2l0aW9ucy5wdXNoKHtzdGFydDoge3gsIHl9LCBzaGlwfSk7XG5cdFx0cmV0dXJuIGJvYXJkO1xuXHR9XG5cblx0Ly8ge3N0YXJ0Ont4LHl9LHNoaXB9XG5cdGZ1bmN0aW9uIGNoZWNrQm9hdFBvc2l0aW9uKHNldCwgY29vcmQpIHtcblx0XHRjb25zdCBbcm93LCBjb2x1bW5dID0gY29vcmQ7IC8vIDAgLSAwXG5cdFx0Y29uc3QgW3N0YXJ0WCwgc3RhcnRZXSA9IFtzZXQuc3RhcnQueCwgc2V0LnN0YXJ0LnldOyAvLyAwIC0gMiAqIFNoaXAgU3RhcnRpbmcgcG9zaXRpb25cblx0XHRjb25zdCBsZW5ndGggPSBzZXQuc2hpcC5nZXRTaXplKCk7IC8vIDNcblx0XHRsZXQgcmVzdWx0ID0gZmFsc2U7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKHNldC5zaGlwLmlzVmVydGljYWwgJiYgc3RhcnRYICsgaSA9PT0gTnVtYmVyKHJvdykpIHtcblx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghc2V0LnNoaXAuaXNWZXJ0aWNhbCAmJiBzdGFydFkgKyBpID09PSBOdW1iZXIoY29sdW1uKSkge1xuXHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0Ly8gVGhpcyBpcyBvbmx5IGludm9rZWQgaWYgdGhlIGJvYXQgZXhpc3RzIGluIHRoZSBzaGlwUG9zaXRpb25zIGFycmF5LlxuXHRmdW5jdGlvbiBmaW5kQm9hdChjb29yZCkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IHNoaXBQb3NpdGlvbnMuZmluZChzaGlwID0+IGNoZWNrQm9hdFBvc2l0aW9uKHNoaXAsIGNvb3JkKSk7XG5cdFx0cmV0dXJuIHJlc3VsdC5zaGlwO1xuXHR9XG5cblx0Ly8gVGhpcyBzaG91bGQgc2V0IHRoZSB2YWx1ZSBvbiB0aGUgaW50ZXJuYWwgYm9hcmRcblx0ZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuXHRcdGNvbnN0IFt4LCB5XSA9IGNvb3JkO1xuXHRcdGxldCB2YWx1ZSA9ICfCtyc7XG5cdFx0aWYgKGJvYXJkW3hdW3ldID09PSAxKSB7XG5cdFx0XHRmaW5kQm9hdChjb29yZCkuaGl0KCk7XG5cdFx0XHR2YWx1ZSA9ICfimJInO1xuXHRcdH1cblxuXHRcdGJvYXJkW3hdW3ldID0gdmFsdWU7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBBcmVBbGxTdW5rZWQoKSB7XG5cdFx0Ly8gQ2hlY2sgaWYgYWxsIGJvYXRzIGluIGJvYXJkIGFyZSBzdW5rZWRcblx0XHRsZXQgY291bnRlciA9IDA7XG5cdFx0aWYgKHNoaXBQb3NpdGlvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0c2hpcFBvc2l0aW9ucy5mb3JFYWNoKG9iaiA9PiB7XG5cdFx0XHRcdGlmIChvYmouc2hpcC5pc1N1bmsoKS5zdW5rZWQpIHtcblx0XHRcdFx0XHRjb3VudGVyICs9IDE7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGNvdW50ZXIgPT09IHNoaXBQb3NpdGlvbnMubGVuZ3RoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0aXNBdmFpbGFibGUsXG5cdFx0Z2V0Qm9hcmQsXG5cdFx0c2V0U2hpcCxcblx0XHRyZWNlaXZlQXR0YWNrLFxuXHRcdEFyZUFsbFN1bmtlZCxcblx0fTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcblx0Y29uc3RydWN0b3IobmFtZSA9ICdQbGF5ZXIxJykge1xuXHRcdGlmIChuYW1lID09PSAnY29tcHV0ZXInKSB7XG5cdFx0XHQvLyBQaWNrIG9uZSByYW5kb21seVxuXHRcdFx0Y29uc3QgbmFtZXMgPSBbJ0pvZXknLCAnTWFyaycsICdXaWxsJywgJ0NvbG9uZWwnLCAnQmV0aCddO1xuXHRcdFx0dGhpcy5uYW1lID0gbmFtZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmFtZXMubGVuZ3RoKV0gKyAnXFwncyBCb2FyZCc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMubmFtZSA9IG5hbWUgKyAnXFwncyBCb2FyZCc7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNvcmQgPSBbXTtcblx0fVxuXG5cdGF0dGFja1RvKGNvb3JkLCBib2FyZCkge1xuXHRcdGNvbnN0IFt4LCB5XSA9IGNvb3JkO1xuXHRcdGlmICh0aGlzLnJlY29yZC5maW5kKG9iaiA9PiBvYmoucm93ID09PSB4ICYmIG9iai5jb2x1bW4gPT09IHkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5yZWNvcmQucHVzaCh7cm93OiB4LCBjb2x1bW46IHl9KTtcblx0XHRyZXR1cm4gYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG5cdH1cblxuXHRyYW5kb21BdHRhY2soYm9hcmQpIHtcblx0XHRpZiAodGhpcy5yZWNvcmQubGVuZ3RoID09PSAxMDApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRsZXQgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdGxldCBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cblx0XHR3aGlsZSAodGhpcy5oYXNBbHJlYWR5SGl0KHJvdywgY29sdW1uKSkge1xuXHRcdFx0cm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0Y29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5hdHRhY2tUbyhbcm93LCBjb2x1bW5dLCBib2FyZCk7XG5cblx0XHRyZXR1cm4gW3JvdywgY29sdW1uLCB2YWx1ZV07XG5cdH1cblxuXHRoYXNBbHJlYWR5SGl0KHJvdywgY29sdW1uKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnJlY29yZC5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLnJlY29yZFtpXS5yb3cgPT09IHJvd1xuICAgICAgICAgICYmIHRoaXMucmVjb3JkW2ldLmNvbHVtbiA9PT0gY29sdW1uXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc2l6ZSA9IDEpIHtcblx0Y29uc3QgbGVuZ3RoID0gc2l6ZTtcblx0bGV0IHN1bmtlZCA9IGZhbHNlO1xuXHRsZXQgaGl0cyA9IDA7XG5cdGNvbnN0IGlzVmVydGljYWwgPSBmYWxzZTtcblxuXHRmdW5jdGlvbiBoaXQoZGFtYWdlID0gMSkge1xuXHRcdGlmIChoaXRzIDwgbGVuZ3RoKSB7XG5cdFx0XHRoaXRzICs9IGRhbWFnZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGl0cztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFNpemUoKSB7XG5cdFx0cmV0dXJuIGxlbmd0aDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzU3VuaygpIHtcblx0XHRzdW5rZWQgPSBoaXRzID49IGxlbmd0aDtcblx0XHRyZXR1cm4ge3N1bmtlZCwgaGl0c307XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGlzU3Vuayxcblx0XHRoaXQsXG5cdFx0Z2V0U2l6ZSxcblx0XHRpc1ZlcnRpY2FsLFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3RhcnRpbmdTY3JlZW4gZnJvbSBcIi4vZG9tLXRhYnMvU3RhcnRpbmdTY3JlZW5cIjtcbmltcG9ydCBnYW1lU2NyZWVuIGZyb20gXCIuL2RvbS10YWJzL3ByaW5jaXBhbFZpZXdcIjtcbmltcG9ydCBwbGFjZW1lbnRNZW51IGZyb20gXCIuL2RvbS10YWJzL3BsYWNlbWVudE1lbnVcIjtcbmltcG9ydCBzZXREYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBcIi4vYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCI7XG5cbi8vIC0gRGVmaW5lIHZhcmlhYmxlcyBiZWZvcmVcbi8vIC0gQ3JlYXRlIGxvZ2ljXG4vLyAtIENhbGwgdGhlIHN0YXJ0IG9mIHRoZSBnYW1lIGF0IHRoZSBlbmRcblxubGV0IGdhbWVEYXRhO1xubGV0IHBsYXllcjtcbmxldCBjb21wdXRlcjtcblxuY29uc3QgZGlzcGxheU5hbWVzID0gKFtwbGF5ZXIsIGNvbXB1dGVyXSkgPT4ge1xuICBjb25zdCBwbGF5ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItbmFtZVwiKTtcbiAgY29uc3QgY29tcHV0ZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1uYW1lXCIpO1xuICBwbGF5ZXJOYW1lLnRleHRDb250ZW50ID0gcGxheWVyLm5hbWU7XG4gIGNvbXB1dGVyTmFtZS50ZXh0Q29udGVudCA9IGNvbXB1dGVyLm5hbWU7XG59O1xuXG5jb25zdCBnYW1lU3RhcnRlciA9IChwbGF5ZXJOYW1lKSA9PiB7XG4gIGdhbWVEYXRhID0gc2V0RGF0YShwbGF5ZXJOYW1lKTtcbiAgW3BsYXllciwgY29tcHV0ZXJdID0gW2dhbWVEYXRhLnBsYXllcjEsIGdhbWVEYXRhLmNvbXB1dGVyXTtcbiAgZGlzcGxheU5hbWVzKFtwbGF5ZXIsIGNvbXB1dGVyXSk7XG4gIHBsYWNlbWVudE1lbnUoZ2FtZURhdGEpO1xuICBnYW1lU2NyZWVuKGdhbWVEYXRhKTtcbn07XG5cbmNvbnN0IGluaXRpYWxpemVHYW1lID0gKCkgPT4ge1xuICBzdGFydGluZ1NjcmVlbihnYW1lU3RhcnRlcik7XG59O1xuXG5pbml0aWFsaXplR2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9