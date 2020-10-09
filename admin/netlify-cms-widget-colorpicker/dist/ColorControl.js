"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactColor = require("react-color");

var _validateColor = _interopRequireDefault(require("validate-color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_PICKER = "chrome";
var Picker = {
  block: _reactColor.BlockPicker,
  chrome: _reactColor.ChromePicker,
  compact: _reactColor.CompactPicker,
  github: _reactColor.GithubPicker,
  sketch: _reactColor.SketchPicker,
  swatches: _reactColor.SwatchesPicker,
  twitter: _reactColor.TwitterPicker
};

var ColorControl = /*#__PURE__*/function (_React$Component) {
  _inherits(ColorControl, _React$Component);

  var _super = _createSuper(ColorControl);

  function ColorControl() {
    var _this;

    _classCallCheck(this, ColorControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      displayColorPicker: false,
      color: _this.props.value,
      picker: _this.props.field.get("picker") || DEFAULT_PICKER,
      disableAlpha: _this.props.field.get("disableAlpha") || "false",
      colors: _this.props.field.get("colors") ? _this.props.field.get("colors").toJS() : ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"]
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        displayColorPicker: !_this.state.displayColorPicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (color) {
      var formatedColor = color.rgb.a < 1 ? "rgba(".concat(color.rgb.r, ", ").concat(color.rgb.g, ", ").concat(color.rgb.b, ", ").concat(color.rgb.a, ")") : color.hex;

      _this.setState({
        color: formatedColor
      });

      _this.props.onChange(formatedColor);
    });

    return _this;
  }

  _createClass(ColorControl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          forID = _this$props.forID,
          value = _this$props.value,
          _onChange = _this$props.onChange,
          classNameWrapper = _this$props.classNameWrapper,
          setActiveStyle = _this$props.setActiveStyle,
          setInactiveStyle = _this$props.setInactiveStyle;
      var DynamicPicker = Picker[this.state.picker];
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, " ", /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "absolute",
          zIndex: "1",
          background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")',
          height: "38px",
          width: "48px",
          marginTop: "10px",
          marginLeft: "10px",
          borderRadius: "5px"
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "absolute",
          zIndex: "2",
          background: (0, _validateColor["default"])(this.props.value) ? this.props.value : "#fff",
          cursor: "pointer",
          height: "38px",
          width: "48px",
          marginTop: "10px",
          marginLeft: "10px",
          borderRadius: "5px",
          border: "2px solid rgb(223, 223, 227)",
          textAlign: "center",
          fontSize: "27px",
          lineHeight: "1",
          paddingTop: "4px",
          color: (0, _validateColor["default"])(this.props.value) ? "rgba(255, 255, 255, 0)" : "rgb(223, 223, 227)"
        },
        onClick: this.handleClick
      }, "?"), this.state.displayColorPicker ? /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "absolute",
          zIndex: "3",
          marginTop: "48px",
          marginLeft: "12px"
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px"
        },
        onClick: this.handleClose
      }), /*#__PURE__*/_react["default"].createElement(DynamicPicker, {
        color: value || "",
        onChange: this.handleChange,
        triangle: "hide",
        colors: this.state.colors,
        presetColors: this.state.colors,
        disableAlpha: this.state.disableAlpha
      })) : null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        id: forID //readOnly={true}
        ,
        className: classNameWrapper,
        value: value || "",
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        },
        onFocus: setActiveStyle,
        onBlur: setInactiveStyle,
        style: {
          paddingLeft: "75px"
        }
      }));
    }
  }]);

  return ColorControl;
}(_react["default"].Component);

exports["default"] = ColorControl;

_defineProperty(ColorControl, "propTypes", {
  onChange: _propTypes["default"].func.isRequired,
  forID: _propTypes["default"].string,
  value: _propTypes["default"].node,
  classNameWrapper: _propTypes["default"].string.isRequired,
  setActiveStyle: _propTypes["default"].func.isRequired,
  setInactiveStyle: _propTypes["default"].func.isRequired
});

_defineProperty(ColorControl, "defaultProps", {
  value: ""
});
//# sourceMappingURL=ColorControl.js.map