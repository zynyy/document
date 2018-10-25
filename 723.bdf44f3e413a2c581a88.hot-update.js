webpackHotUpdate(723,{

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(410);
__webpack_require__(612);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(1);
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(16);
var ReactRouter = __webpack_require__(301);
var history = __webpack_require__(651);
var data = __webpack_require__(653);
var createElement = __webpack_require__(801);
var routes = __webpack_require__(802)(data);

var _window$location = window.location,
    pathname = _window$location.pathname,
    search = _window$location.search,
    hash = _window$location.hash;

var location = '' + pathname + search + hash;
var basename = '/document/';
ReactRouter.match({ routes: routes, location: location, basename: basename }, function () {
  var router = React.createElement(ReactRouter.Router, {
    history: ReactRouter.useRouterHistory(history.createHistory)({ basename: basename }),
    routes: routes,
    createElement: createElement
  });
  ReactDOM.render(router, document.getElementById('react-content'));
});

/***/ })

})