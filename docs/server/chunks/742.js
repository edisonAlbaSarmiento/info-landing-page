exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 9399:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__bCOhY",
	"main": "Home_main__nLjiQ",
	"footer": "Home_footer____T7K",
	"title": "Home_title__T09hD",
	"description": "Home_description__41Owk",
	"code": "Home_code__suPER",
	"grid": "Home_grid__GxQ85",
	"card": "Home_card___LpL1",
	"logo": "Home_logo__27_tb"
};


/***/ }),

/***/ 8176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uT": () => (/* reexport */ body),
  "Zb": () => (/* reexport */ card),
  "JI": () => (/* reexport */ detail_component),
  "$_": () => (/* reexport */ footer),
  "_q": () => (/* reexport */ head),
  "tl": () => (/* reexport */ pagination),
  "US": () => (/* reexport */ total_card_detail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/body/styled.ts

const ContentBody = (external_styled_components_default()).main`
	padding: 6% 0;
	min-height: 100vh;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme  })=>theme.colors.colorMain.salmon
};
	@media (max-width: 768px) {
		padding: 26% 0;
	}
`;
const ContentCardsMain = (external_styled_components_default()).div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;
const Redirect = (external_styled_components_default()).a`
	color: white;
	width: 100%;
	border: 0px;
	margin: 12px;
	display: flex;
	padding: 10px 16px;
	max-width: 256px;
	min-height: 46px;
	text-align: center;
	transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	align-items: center;
	border-radius: 100px;
	text-transform: none;
	justify-content: center;
	background-color: #ff452b;
	cursor: pointer;
	:hover {
		background-color: white;
		color: ${({ theme  })=>theme.colors.colorMain.title
};
		transform: translateX(4px);
	}
`;
const ContentInput = (external_styled_components_default()).div`
	width: 13%;
	border: 1px solid #b0bec5;
	margin: 0;
	padding: 0px 14px;
	border-radius: 50px;
	height: 46px;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		width: 74%;
	}
`;
const Input = (external_styled_components_default()).input`
	width: 100%;
	border: 0;
	height: 1.1876em;
	margin: 0;
	padding: 5% 0 5%;
	min-width: 0;
	background: none;
	box-sizing: content-box;
	animation-name: mui-auto-fill-cancel;
	letter-spacing: inherit;
	animation-duration: 10ms;
	outline: none;
`;
const ContentFilters = (external_styled_components_default()).div`
	width: 100%;
	padding: 0 5%;
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;
const ContentNotFound = (external_styled_components_default()).div`
	width: 100%;
	padding: 0 5%;
	display: flex;
	align-items: center;
`;


;// CONCATENATED MODULE: ./src/components/body/index.tsx




function Body({ data =[] , setPaginationPrev , setPaginationAfter  }) {
    const results = data === null || data === void 0 ? void 0 : data.results;
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)('');
    const { 0: searchResults , 1: setSearchResults  } = (0,external_react_.useState)([]);
    const { 0: typeFilter , 1: setTypeFilter  } = (0,external_react_.useState)('');
    const handleChange = (e)=>{
        setSearchTerm(e.target.value);
    };
    const getFilterOrderLess = (0,external_react_.useCallback)(async ()=>{
        setTypeFilter('less');
        const resultsData = await (results === null || results === void 0 ? void 0 : results.sort((a, b)=>a.vote_average - b.vote_average
        ));
        setSearchResults(resultsData);
    }, [
        results
    ]);
    const getFilterOrderHigher = (0,external_react_.useCallback)(async ()=>{
        setTypeFilter('higher');
        const resultsData = await (results === null || results === void 0 ? void 0 : results.sort((a, b)=>b.vote_average - a.vote_average
        ));
        setSearchResults(resultsData);
    }, [
        results
    ]);
    (0,external_react_.useEffect)(()=>{
        switch(typeFilter){
            case 'less':
                getFilterOrderLess();
                break;
            case 'higher':
                getFilterOrderHigher();
                break;
            default:
                setSearchResults(results);
                break;
        }
        async function getData() {
            const resultsData = await (results === null || results === void 0 ? void 0 : results.filter((item)=>item.title.toLowerCase().includes(searchTerm)
            ));
            setSearchResults(resultsData);
        }
        getData();
    }, [
        getFilterOrderHigher,
        getFilterOrderLess,
        results,
        searchTerm,
        typeFilter
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentBody, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentFilters, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ContentInput, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Input, {
                            type: "text",
                            placeholder: "Buscar",
                            value: searchTerm,
                            onChange: handleChange
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Redirect, {
                        onClick: ()=>getFilterOrderHigher()
                        ,
                        children: "Mayor calificaci\xf3n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Redirect, {
                        onClick: ()=>getFilterOrderLess()
                        ,
                        children: "Menor calificaci\xf3n"
                    })
                ]
            }),
            (searchResults === null || searchResults === void 0 ? void 0 : searchResults.length) !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(pagination, {
                setPaginationAfter: setPaginationAfter,
                setPaginationPrev: setPaginationPrev,
                paginationInit: data === null || data === void 0 ? void 0 : data.page,
                paginationPrev: data === null || data === void 0 ? void 0 : data.total_pages
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContentCardsMain, {
                children: (searchResults === null || searchResults === void 0 ? void 0 : searchResults.length) ? searchResults === null || searchResults === void 0 ? void 0 : searchResults.map((result, index)=>/*#__PURE__*/ jsx_runtime_.jsx(card, {
                        cardItem: result
                    }, index)
                ) : /*#__PURE__*/ jsx_runtime_.jsx(ContentNotFound, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Sin resultados"
                    })
                })
            }),
            (searchResults === null || searchResults === void 0 ? void 0 : searchResults.length) !== 0 && /*#__PURE__*/ jsx_runtime_.jsx(pagination, {
                setPaginationAfter: setPaginationAfter,
                setPaginationPrev: setPaginationPrev,
                paginationInit: data === null || data === void 0 ? void 0 : data.page,
                paginationPrev: data === null || data === void 0 ? void 0 : data.total_pages
            })
        ]
    });
}
/* harmony default export */ const body = (Body);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/theme/media.ts
var media = __webpack_require__(1125);
;// CONCATENATED MODULE: ./src/components/head/styled.ts


const Content = (external_styled_components_default()).div`
	top: 0px;
	width: 100%;
	height: 4.5rem;
	padding: 8px 0px;
	z-index: 1100;
	position: fixed;
	box-shadow: rgb(219 219 219 / 25%) 0px 4px 4px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	${media/* default.greaterThan */.Z.greaterThan('mobile')`
		width: 100%;
	`}
`;


;// CONCATENATED MODULE: ./src/components/head/index.tsx




function HeadMain() {
    return /*#__PURE__*/ jsx_runtime_.jsx(Content, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            src: "/img/houmLogo.svg",
            alt: "Vercel Logo",
            width: 72,
            height: 50
        })
    });
}
/* harmony default export */ const head = (HeadMain);

// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(9399);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./src/components/footer/index.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Home_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            href: "https://edisonalbasarmiento.github.io/Landing-Resume-Design/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
                "Powered by ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: (Home_module_default()).logo,
                    children: "Edison"
                })
            ]
        })
    });
}
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/shared/label/syled.ts

const TitleMain = (external_styled_components_default()).p`
	color: ${({ theme , color  })=>color ? color : theme.colors.colorMain.title
};
	font-family: 'Nunito', sans-serif;
	font-size: ${({ theme  })=>theme.fontSize.title
};
	line-height: ${({ theme  })=>theme.lineSpacing.title
};
	${({ center  })=>center ? 'text-align: center;' : ''
}
`;
const Subtitle = (external_styled_components_default()).p`
	color: ${({ theme , color  })=>color ? color : theme.colors.colorMain.subtitle
};
	font-family: 'Nunito', sans-serif;
	font-size: ${({ theme  })=>theme.fontSize.subtitle
};
	line-height: ${({ theme  })=>theme.lineSpacing.subtitle
};
	${({ center  })=>center ? 'text-align: center;' : ''
}
`;
const Description = (external_styled_components_default()).p`
	color: ${({ theme , color  })=>color ? color : theme.colors.colorMain.subDescription
};
	font-family: 'Nunito', sans-serif;
	font-size: ${({ theme  })=>theme.fontSize.description
};
	line-height: ${({ theme  })=>theme.lineSpacing.description
};
	${({ center  })=>center ? 'text-align: center;' : ''
}
`;

;// CONCATENATED MODULE: ./src/components/card/styled.ts


const ConetentCardMain = (external_styled_components_default()).div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1%;
	width: 30%;
	@media (max-width: 768px) {
		width: 100%;
		margin: 4% 0;
		flex-direction: column-reverse;
	}
	.redirect {
		color: ${({ theme , color  })=>color ? color : theme.colors.colorMain.hue
};
		font-family: 'Nunito', sans-serif;
		font-size: ${({ theme  })=>theme.fontSize.description
};
		line-height: ${({ theme  })=>theme.lineSpacing.description
};
	}
`;
const ConetentCardChildRight = (external_styled_components_default()).div`
	background-color: white;
	width: 50%;
	height: 100%;
	border-radius: 16px;
	padding: 5%;
	box-shadow: rgb(219 219 219 / 25%) 0px 4px 4px;
	@media (max-width: 768px) {
		width: 90%;
	}
`;
const ConetentCardChildLeft = (external_styled_components_default()).div`
	background-color: yellow;
	width: 40%;
	height: 170px;
	border-radius: 0 16px 16px 0;
	padding: 5%;
	background: ${({ backgroundImage  })=>backgroundImage ? `url(${backgroundImage}) no-repeat center` : `url('https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg') no-repeat center`
};
	@media (max-width: 768px) {
		width: 80%;
		border-radius: 16px 16px 0 0;
		flex-direction: column-reverse;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;
const ContentHeadCard = (external_styled_components_default()).div`
	margin: 0 0 5%;
	height: auto;
	word-wrap: break-word;
`;
const ContentFooterCard = (external_styled_components_default()).div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2% 0 0;
`;
const Title = external_styled_components_default()(TitleMain)``;


;// CONCATENATED MODULE: ./src/components/card/index.tsx





function Card({ cardItem ={} , selectItem  }) {
    const { id , original_title , title , backdrop_path , vote_average , release_date , original_language  } = cardItem;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ConetentCardMain, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ConetentCardChildRight, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentHeadCard, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle, {
                                children: [
                                    "Titulo original: ",
                                    original_title
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentFooterCard, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                                children: [
                                    "Puntuacion: ",
                                    vote_average
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                                children: [
                                    "Idioma: ",
                                    original_language
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                        children: [
                            "Fecha de Estreno: ",
                            release_date
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: `/detail/${id}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "redirect",
                            children: "Ver mas"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ConetentCardChildLeft, {
                backgroundImage: backdrop_path ? `https://image.tmdb.org/t/p/w300/${backdrop_path}` : '/img/houmLogo.svg'
            })
        ]
    });
}
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/components/detail-component/styled.ts

const styled_ContentBody = (external_styled_components_default()).main`
	padding: 6% 0;
	min-height: 100vh;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme  })=>theme.colors.colorMain.salmon
};
	@media (max-width: 768px) {
		padding: 26% 0;
	}
`;
const styled_ContentCardsMain = (external_styled_components_default()).div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;


;// CONCATENATED MODULE: ./src/components/detail-component/index.tsx





function DetailComponent({ data =[]  }) {
    const resultsDetail = data;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_ContentBody, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(styled_ContentCardsMain, {
                children: resultsDetail && /*#__PURE__*/ jsx_runtime_.jsx(total_card_detail, {
                    detailData: resultsDetail
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                href: `/`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    children: "Volver"
                })
            })
        ]
    });
}
/* harmony default export */ const detail_component = (DetailComponent);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowBackIos"
var ArrowBackIos_ = __webpack_require__(5898);
var ArrowBackIos_default = /*#__PURE__*/__webpack_require__.n(ArrowBackIos_);
// EXTERNAL MODULE: external "@material-ui/icons/ArrowForwardIos"
var ArrowForwardIos_ = __webpack_require__(5774);
var ArrowForwardIos_default = /*#__PURE__*/__webpack_require__.n(ArrowForwardIos_);
;// CONCATENATED MODULE: ./src/components/pagination/styled.ts

const ContentLink = (external_styled_components_default()).a`
	cursor: pointer;
	:hover {
		transform: translateX(4px);
	}
`;
const styled_Content = (external_styled_components_default()).div`
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	@media (max-width: 768px) {
		width: 60%;
	}
`;


;// CONCATENATED MODULE: ./src/components/pagination/index.tsx






function Pagination({ paginationInit , paginationPrev , setPaginationAfter , setPaginationPrev  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_Content, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                children: [
                    "Mostrando pagina ",
                    paginationInit,
                    " de ",
                    paginationPrev
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContentLink, {
                onClick: ()=>setPaginationAfter()
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowBackIos_default()), {
                    fontSize: "small"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContentLink, {
                onClick: ()=>setPaginationPrev()
                ,
                children: /*#__PURE__*/ jsx_runtime_.jsx((ArrowForwardIos_default()), {
                    fontSize: "small"
                })
            })
        ]
    });
}
/* harmony default export */ const pagination = (Pagination);

;// CONCATENATED MODULE: ./src/components/total-card-detail/styled.ts


const styled_ConetentCardMain = (external_styled_components_default()).div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1%;
	width: 100%;
	@media (max-width: 768px) {
		width: 100%;
		margin: 4% 0;
		flex-direction: column-reverse;
	}
	.redirect {
		color: ${({ theme , color  })=>color ? color : theme.colors.colorMain.hue
};
		font-family: 'Nunito', sans-serif;
		font-size: ${({ theme  })=>theme.fontSize.description
};
		line-height: ${({ theme  })=>theme.lineSpacing.description
};
	}
`;
const styled_ConetentCardChildRight = (external_styled_components_default()).div`
	background-color: white;
	width: 50%;
	height: 100%;
	border-radius: 16px;
	padding: 5%;
	box-shadow: rgb(219 219 219 / 25%) 0px 4px 4px;
	@media (max-width: 768px) {
		width: 90%;
	}
`;
const styled_ConetentCardChildLeft = (external_styled_components_default()).div`
	width: 20%;
	height: 170px;
	border-radius: 0 16px 16px 0;
	padding: 5%;
	background: ${({ backgroundImage  })=>backgroundImage ? `url(${backgroundImage}) no-repeat center` : `url('https://image.tmdb.org/t/p/w185_and_h278_bestv2/hpohdtx5ABjZs1BIyYUzwq9CYxJ.jpg') no-repeat center`
};
	background-size: cover;
	@media (max-width: 768px) {
		width: 80%;
		border-radius: 16px 16px 0 0;
		flex-direction: column-reverse;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
`;
const styled_ContentHeadCard = (external_styled_components_default()).div`
	margin: 0 0 5%;
	height: auto;
	word-wrap: break-word;
`;
const styled_ContentFooterCard = (external_styled_components_default()).div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2% 0 0;
`;
const styled_Title = external_styled_components_default()(TitleMain)``;


;// CONCATENATED MODULE: ./src/components/total-card-detail/index.tsx




function TotalCardDetail({ detailData ={}  }) {
    const { id , original_title , title , backdrop_path , vote_average , release_date , original_language , overview  } = detailData;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_ConetentCardMain, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_ConetentCardChildRight, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_ContentHeadCard, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(styled_Title, {
                                children: title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Subtitle, {
                                children: [
                                    "Titulo original: ",
                                    original_title
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styled_ContentFooterCard, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                                children: [
                                    "Puntuacion: ",
                                    vote_average
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                                children: [
                                    "Idioma: ",
                                    original_language
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                        children: [
                            "Descripcion: ",
                            overview
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Description, {
                        children: [
                            "Fecha de Estreno: ",
                            release_date
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(styled_ConetentCardChildLeft, {
                backgroundImage: backdrop_path ? `https://image.tmdb.org/t/p/w300/${backdrop_path}` : '/img/houmLogo.svg'
            })
        ]
    });
}
/* harmony default export */ const total_card_detail = (TotalCardDetail);

;// CONCATENATED MODULE: ./src/components/index.ts










/***/ }),

/***/ 2547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* reexport */ GetDataMovies),
  "s": () => (/* reexport */ GetDataMoviesById)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/hooks/data.ts

const BASE_API = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=259ca4808a9892a64dfbead7a0cbcfc7';
const GetDataMovies = (page, lenguage)=>{
    const { 0: myData , 1: setData  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        fetch(`${BASE_API}popular?${API_KEY}&language=${lenguage}&page=${page}`).then((response)=>response.json()
        ).then((data)=>setData(data)
        ).catch((error)=>console.log(error)
        );
    }, [
        lenguage,
        page
    ]);
    return myData;
};
const GetDataMoviesById = (id = 1, lenguage)=>{
    const { 0: myData , 1: setData  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        fetch(`${BASE_API}${id}?${API_KEY}&language=${lenguage}`).then((response)=>response.json()
        ).then((data)=>setData(data)
        );
    }, [
        id,
        lenguage
    ]);
    return myData;
};


;// CONCATENATED MODULE: ./src/hooks/index.ts




/***/ }),

/***/ 1125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;