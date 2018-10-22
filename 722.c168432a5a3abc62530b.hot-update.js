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
    this.stage.height = window.innerHeight - document.getElementById('header').scrollHeight - document.getElementById('footer').scrollHeight;
    this.stage.width = window.innerWidth;
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

/***/ })

})