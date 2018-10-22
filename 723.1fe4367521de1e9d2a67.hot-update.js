webpackHotUpdate(723,{

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(415);
__webpack_require__(617);

/* eslint-disable no-unused-vars */
var React = __webpack_require__(1);
/* eslint-enable no-unused-vars */
var ReactDOM = __webpack_require__(16);
var ReactRouter = __webpack_require__(307);
var history = __webpack_require__(656);
var data = __webpack_require__(658);
var createElement = __webpack_require__(806);
var routes = __webpack_require__(807)(data);

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