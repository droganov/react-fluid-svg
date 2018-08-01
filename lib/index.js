"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Svg = function (_Component) {
   _inherits(Svg, _Component);

   function Svg() {
      _classCallCheck(this, Svg);

      return _possibleConstructorReturn(this, (Svg.__proto__ || Object.getPrototypeOf(Svg)).apply(this, arguments));
   }

   _createClass(Svg, [{
      key: "render",
      value: function render() {
         var _props = this.props,
             center = _props.center,
             width = _props.width,
             propsHeight = _props.height,
             propsMinWidth = _props.minWidth,
             propMaxWidth = _props.maxWidth,
             htmlProps = _objectWithoutProperties(_props, ["center", "width", "height", "minWidth", "maxWidth"]);

         // variables


         var height = propsHeight ? propsHeight : width;
         var minWidth = propsMinWidth || 0;
         var maxWidth = propMaxWidth || width;

         // container styling
         var containerStyle = {
            maxWidth: maxWidth + "px",
            minWidth: minWidth + "px"
         };

         if (center === 'true' || center === true) containerStyle.margin = 'auto';

         // wrap styling
         var wrapStyle = {
            height: 0,
            paddingBottom: height / width * 100 + "%",
            position: 'relative',
            width: '100%'
         };

         // svg props
         var svgInjectProps = {
            preserveAspectRatio: 'xMinYMin meet',
            width: null,
            height: null,
            style: {
               position: 'absolute',
               top: 0,
               left: 0,
               bottom: 0,
               right: 0,
               display: 'block',
               fill: 'currentColor'
               // width: '100%',
               // height: '100%',
            }
         };
         var svgProps = Object.assign({}, this.props.children.props, svgInjectProps);
         return _react2.default.createElement(
            "div",
            _extends({}, htmlProps, {
               style: Object.assign({}, this.props.style, containerStyle)
            }),
            _react2.default.createElement(
               "div",
               { style: wrapStyle },
               _react2.default.createElement("svg", svgProps)
            )
         );
      }
   }]);

   return Svg;
}(_react.Component);

Svg.propTypes = {
   center: _propTypes2.default.bool,
   width: _propTypes2.default.number.isRequired,
   height: _propTypes2.default.number,
   minWidth: _propTypes2.default.number,
   maxWidth: _propTypes2.default.number
};
Svg.defaultProps = { center: false };
exports.default = Svg;