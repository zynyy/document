webpackHotUpdate(722,{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = start;

var _group = __webpack_require__(252);

var _group2 = _interopRequireDefault(_group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
  function Canvas(el, num) {
    var _this = this;

    _classCallCheck(this, Canvas);

    this.groups = [];
    this.running = true;

    this.destroy = function () {
      _this.running = false;
    };

    this.loop = function () {
      var ctx = _this.ctx,
          stage = _this.stage;
      var width = stage.width,
          height = stage.height;

      if (_this.running) {
        requestAnimationFrame(_this.loop);
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(0, 0, 0,0.05)';
        ctx.fillRect(0, 0, width, height);
        _this.groups.forEach(function (g) {
          return g.update();
        });
      } else {
        clearInterval(_this.timer);
      }
    };

    this.stage = el;
    this.num = num || 100;
    this.ctx = el.getContext('2d');
    this.stage.height = window.innerHeight - 64 - document.getElementById('footer').scrollHeight;
    this.stage.width = window.innerWidth;
    console.warn(document.getElementById('header').scrollHeight);
  }

  _createClass(Canvas, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      var _stage = this.stage,
          width = _stage.width,
          height = _stage.height;
      var groups = this.groups;

      groups.push(this.newGroup(width / 2, height / 2));
      this.timer = setInterval(function () {
        var posX = Math.random() * width;
        var posY = Math.random() * height;
        groups.push(_this2.newGroup(posX, posY));
        if (groups.length > 8) {
          groups.splice(0, 1);
        }
      }, 1500);
    }
  }, {
    key: 'newGroup',
    value: function newGroup(x, y) {
      var ctx = this.ctx,
          num = this.num,
          stage = this.stage;
      var width = stage.width;

      var group = new _group2.default(ctx, x, y, num);
      group.setWidth = width;
      return group;
    }
  }]);

  return Canvas;
}();

function start(el) {
  if (el) {
    var c = new Canvas(el);
    c.init();
    c.loop();
    return c;
  }
  return null;
}
module.exports = exports['default'];

/***/ }),

/***/ 380:
false,

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./template/About": 149,
	"./template/About/": 149,
	"./template/About/index": 149,
	"./template/About/index.jsx": 149,
	"./template/Component/CSS/Standard": 232,
	"./template/Component/CSS/Standard.jsx": 232,
	"./template/Component/CSS/UnitConvert": 268,
	"./template/Component/CSS/UnitConvert.jsx": 268,
	"./template/Component/CSS/UnitSelect": 223,
	"./template/Component/CSS/UnitSelect.jsx": 223,
	"./template/Component/CSS/moduleVersion": 233,
	"./template/Component/CSS/moduleVersion.js": 233,
	"./template/Component/CharRef": 120,
	"./template/Component/CharRef/": 120,
	"./template/Component/CharRef/CopyCharaRef": 226,
	"./template/Component/CharRef/CopyCharaRef.jsx": 226,
	"./template/Component/CharRef/characters": 227,
	"./template/Component/CharRef/characters.js": 227,
	"./template/Component/CharRef/index": 120,
	"./template/Component/CharRef/index.jsx": 120,
	"./template/Component/EditButton": 234,
	"./template/Component/EditButton.jsx": 234,
	"./template/Component/HTML/Compatible": 235,
	"./template/Component/HTML/Compatible.jsx": 235,
	"./template/Component/HTML/Standard": 236,
	"./template/Component/HTML/Standard.jsx": 236,
	"./template/Component/JavaScript/Standard": 237,
	"./template/Component/JavaScript/Standard.jsx": 237,
	"./template/Content": 150,
	"./template/Content/": 150,
	"./template/Content/Article": 379,
	"./template/Content/Article.jsx": 379,
	"./template/Content/CSSDocument": 248,
	"./template/Content/CSSDocument.jsx": 248,
	"./template/Content/Documents": 250,
	"./template/Content/Documents.jsx": 250,
	"./template/Content/HTMLDocument": 244,
	"./template/Content/HTMLDocument.jsx": 244,
	"./template/Content/JavaScriptDocument": 249,
	"./template/Content/JavaScriptDocument.jsx": 249,
	"./template/Content/LeftSide": 242,
	"./template/Content/LeftSide.jsx": 242,
	"./template/Content/Main": 238,
	"./template/Content/Main.jsx": 238,
	"./template/Content/index": 150,
	"./template/Content/index.jsx": 150,
	"./template/Context/Mobile": 117,
	"./template/Context/Mobile.js": 117,
	"./template/Demo/CSSDemo": 267,
	"./template/Demo/CSSDemo.jsx": 267,
	"./template/Demo/HTMLDemo": 246,
	"./template/Demo/HTMLDemo.jsx": 246,
	"./template/Home": 152,
	"./template/Home/": 152,
	"./template/Home/Background": 251,
	"./template/Home/Background.jsx": 251,
	"./template/Home/HomePageWrapper": 255,
	"./template/Home/HomePageWrapper.jsx": 255,
	"./template/Home/HomeScene": 256,
	"./template/Home/HomeScene.jsx": 256,
	"./template/Home/canvas": 118,
	"./template/Home/canvas/": 118,
	"./template/Home/canvas/group": 252,
	"./template/Home/canvas/group.js": 252,
	"./template/Home/canvas/index": 118,
	"./template/Home/canvas/index.js": 118,
	"./template/Home/canvas/star": 253,
	"./template/Home/canvas/star.js": 253,
	"./template/Home/canvas/utils": 254,
	"./template/Home/canvas/utils.js": 254,
	"./template/Home/index": 152,
	"./template/Home/index.jsx": 152,
	"./template/Layout": 153,
	"./template/Layout/": 153,
	"./template/Layout/Footer": 261,
	"./template/Layout/Footer.jsx": 261,
	"./template/Layout/Header": 257,
	"./template/Layout/Header.jsx": 257,
	"./template/Layout/index": 153,
	"./template/Layout/index.jsx": 153,
	"./template/NotFound": 231,
	"./template/NotFound.jsx": 231,
	"./template/utils": 151,
	"./template/utils.js": 151
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 825;

/***/ })

})