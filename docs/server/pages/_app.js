"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./src/theme/media.ts
var media = __webpack_require__(1125);
;// CONCATENATED MODULE: ./src/theme/fonts.ts
const fontSize = {
    title: '1.375rem',
    subtitle: '1rem',
    description: '0.75rem'
};
/* harmony default export */ const fonts = (fontSize);

;// CONCATENATED MODULE: ./src/theme/colors.ts

const colors = {
    colorMain: {
        title: '#424242',
        hue: '#ff5000',
        light: '#273339',
        tint: '#626262',
        shade: '#0d0d0d',
        border: '#ff462c',
        placeHolder: '#c0cbd0',
        iconColor: '#ff442b',
        subTitle: '#263238',
        description: '#3a4349',
        subDescription: '#607D8B',
        totalWhite: '#fff8f7',
        salmon: '#fff3f2'
    },
    scalesGrey: {
        gris_90MB: '#4F4F4F',
        gris_80MB: '#676767',
        gris_70MB: '#828282',
        gris_60MB: '#989898',
        gris_50MB: '#BDBDBD',
        gris_40MB: '#E0E0E0',
        gris_30MB: '#EEEEEE',
        gris_20MB: '#F2F2F2',
        gris_10MB: '#FAFAFA'
    },
    rgba: {
        hue: 'rgba(0, 131, 255, 0.1);'
    }
};
/* harmony default export */ const theme_colors = (colors);

;// CONCATENATED MODULE: ./src/theme/lineSpacing.ts
const lineSpacing = {
    title: '1.3em',
    subtitle: '1.25em',
    description: '1.5em'
};
/* harmony default export */ const theme_lineSpacing = (lineSpacing);

;// CONCATENATED MODULE: ./src/theme/index.ts




const theme = {
    colors: theme_colors,
    media: media/* default */.Z,
    fontSize: fonts,
    lineSpacing: theme_lineSpacing
};
/* harmony default export */ const src_theme = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
        theme: src_theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5908);
/* harmony import */ var styled_media_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_media_query__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_media_query__WEBPACK_IMPORTED_MODULE_0__.generateMedia)({
    huge: '1500px',
    desktop: '1367px',
    medium: '1025px',
    tablet: '770px',
    mobile: '451px'
}));


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5908:
/***/ ((module) => {

module.exports = require("styled-media-query");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8389));
module.exports = __webpack_exports__;

})();