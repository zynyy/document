webpackHotUpdate(722,{

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _row = __webpack_require__(111);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(112);

var _col2 = _interopRequireDefault(_col);

var _popover = __webpack_require__(348);

var _popover2 = _interopRequireDefault(_popover);

var _icon = __webpack_require__(30);

var _icon2 = _interopRequireDefault(_icon);

var _cascader = __webpack_require__(872);

var _cascader2 = _interopRequireDefault(_cascader);

var _input = __webpack_require__(220);

var _input2 = _interopRequireDefault(_input);

var _menu = __webpack_require__(377);

var _menu2 = _interopRequireDefault(_menu);

var _layout = __webpack_require__(113);

var _layout2 = _interopRequireDefault(_layout);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(114);

__webpack_require__(115);

__webpack_require__(351);

__webpack_require__(76);

__webpack_require__(879);

__webpack_require__(146);

__webpack_require__(378);

__webpack_require__(116);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _router = __webpack_require__(110);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = _layout2.default.Header;
var SubMenu = _menu2.default.SubMenu,
    ItemGroup = _menu2.default.ItemGroup,
    Item = _menu2.default.Item;
var Search = _input2.default.Search;


var docsearch = void 0;
if (typeof window !== 'undefined') {
  docsearch = __webpack_require__(881); // eslint-disable-line
}

function initDocSearch() {
  if (!docsearch) {
    return;
  }
  docsearch({
    appId: 'YZX024ZZ4G',
    apiKey: '1cb38cc8ca9b9f4ba880a97a98d75981',
    indexName: 'hyl_doc',
    inputSelector: '#search-box input',
    debug: false // Set debug to true if you want to inspect the dropdown
  });
}

var HeaderContent = function (_React$Component) {
  _inherits(HeaderContent, _React$Component);

  function HeaderContent(props) {
    _classCallCheck(this, HeaderContent);

    var _this = _possibleConstructorReturn(this, (HeaderContent.__proto__ || Object.getPrototypeOf(HeaderContent)).call(this, props));

    _this.handleDocsChange = function (value) {
      // console.warn(url);
      var router = _this.props.router;

      router.push(value.join('/') + '/index');
    };

    _this.handleNavClick = function (_ref) {
      var key = _ref.key;

      _this.setState({
        current: key
      });
    };

    _this.handleWidthLengthFocus = function () {
      _this.setState({
        widthLength: 280
      });
    };

    _this.handleWidthLengthBlur = function () {
      _this.setState({
        widthLength: 150
      });
    };

    _this.handleMenuVisibleChange = function (visible) {
      _this.setState({
        menuVisible: visible
      });
    };

    _this.state = {
      current: props.params.index,
      widthLength: 150,
      menuVisible: false
    };
    return _this;
  }

  _createClass(HeaderContent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      initDocSearch();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          config = _props.config,
          params = _props.params,
          location = _props.location,
          isMobile = _props.isMobile;
      var _state = this.state,
          current = _state.current,
          widthLength = _state.widthLength,
          menuVisible = _state.menuVisible;
      var docs = config.docs;
      var pathname = location.pathname;

      var mode = isMobile ? 'inline' : 'horizontal';
      var moduleName = params.index;
      var selectValue = pathname.split('/').slice(0, 2);
      var options = Object.keys(docs).map(function (doc) {
        return {
          value: doc,
          label: docs[doc].name,
          disabled: !docs[doc].index,
          children: docs[doc].index ? Object.keys(docs[doc].index).map(function (item) {
            return {
              value: item,
              label: item,
              disabled: moduleName === item
            };
          }) : ''
        };
      });

      var menu = [_react2.default.createElement(_cascader2.default, {
        options: options,
        value: selectValue,
        onChange: this.handleDocsChange,
        allowClear: false,
        key: 'docs'
      }), _react2.default.createElement(
        'nav',
        { id: 'nav', key: 'nav' },
        _react2.default.createElement(
          _menu2.default,
          {
            mode: mode,
            selectedKeys: [current],
            onClick: this.handleNavClick
          },
          _react2.default.createElement(
            _menu2.default.Item,
            { key: 'home' },
            _react2.default.createElement(
              _router.Link,
              { to: '/' },
              ' \u9996\u9875 '
            )
          ),
          _react2.default.createElement(
            SubMenu,
            { title: _react2.default.createElement(
                'span',
                { className: 'submenu-title-wrapper' },
                ' \u6587\u6863 '
              ) },
            Object.keys(docs).map(function (doc) {
              return _react2.default.createElement(
                ItemGroup,
                { title: docs[doc].name, key: doc },
                docs[doc].index ? Object.keys(docs[doc].index).map(function (item) {
                  return _react2.default.createElement(
                    Item,
                    { key: item },
                    current !== item ? _react2.default.createElement(
                      _router.Link,
                      { to: docs[doc].index[item] },
                      item
                    ) : _react2.default.createElement(
                      'span',
                      null,
                      item
                    )
                  );
                }) : ''
              );
            })
          ),
          _react2.default.createElement(
            _menu2.default.Item,
            null,
            _react2.default.createElement(
              'a',
              { href: '//me.65ker.com', target: '_blank', rel: 'noopener noreferrer' },
              ' \u5173\u4E8E\u6211 '
            )
          )
        )
      )];

      return _react2.default.createElement(
        'header',
        { id: 'header' },
        _react2.default.createElement(
          Header,
          { className: 'navbar-light' },
          isMobile && moduleName && _react2.default.createElement(
            _popover2.default,
            {
              overlayClassName: 'popover-menu',
              placement: 'bottomRight',
              content: menu,
              trigger: 'click',
              visible: menuVisible,
              arrowPointAtCenter: true,
              onVisibleChange: this.handleMenuVisibleChange
            },
            _react2.default.createElement(_icon2.default, {
              className: 'nav-phone-icon',
              type: 'menu'
            })
          ),
          _react2.default.createElement(
            _row2.default,
            { gutter: 16, type: 'flex', justify: 'start' },
            _react2.default.createElement(
              _col2.default,
              { span: 5, className: 'logo', xxl: 4, xl: 5, lg: 5, md: 6, sm: 24, xs: 24 },
              _react2.default.createElement(
                _router.Link,
                { to: '/' },
                '\u7F16\u7A0B\u6587\u6863'
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: isMobile ? 0 : 5, className: 'search', id: 'search-box' },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(Search, {
                  placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD',
                  style: { width: widthLength, transition: 'width 0.5s' },
                  onFocus: this.handleWidthLengthFocus,
                  onBlur: this.handleWidthLengthBlur
                })
              )
            ),
            _react2.default.createElement(
              _col2.default,
              { span: moduleName && !isMobile ? 9 : 0, className: 'nav' },
              menu[1]
            ),
            _react2.default.createElement(
              _col2.default,
              { span: moduleName && !isMobile ? 4 : 0, className: 'docs' },
              menu[0]
            )
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(props, state) {
      var index = props.params.index;
      var current = state.current;

      if (current !== index) {
        return {
          current: index
        };
      }
      return null;
    }
  }]);

  return HeaderContent;
}(_react2.default.Component);

exports.default = HeaderContent;


HeaderContent.propTypes = {
  config: _propTypes2.default.shape({
    docs: _propTypes2.default.object
  }).isRequired,
  params: _propTypes2.default.shape({
    index: _propTypes2.default.string
  }).isRequired,
  location: _propTypes2.default.shape().isRequired,
  router: _propTypes2.default.shape().isRequired,
  isMobile: _propTypes2.default.bool.isRequired
};
module.exports = exports['default'];

/***/ })

})