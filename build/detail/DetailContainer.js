'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('./../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

var _DetailBox = require('./DetailBox');

var _DetailBox2 = _interopRequireDefault(_DetailBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailContainer = function (_React$Component) {
    _inherits(DetailContainer, _React$Component);

    function DetailContainer(props) {
        _classCallCheck(this, DetailContainer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailContainer).call(this, props));

        _this.state = { data: { item: {} } };
        _this.data = [];
        return _this;
    }

    _createClass(DetailContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadFromServer();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.loadFromServer();
        }
    }, {
        key: 'loadFromServer',
        value: function loadFromServer() {
            var _this2 = this;

            _RestService2.default.get(this.props.url).subscribe(function (val) {
                _this2.setState({ data: val.data });

                if (_this2.props.onLoaded != null) {
                    _this2.props.onLoaded.call(_this2, val.data);
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _DetailBox2.default,
                { data: this.state.data },
                this.props.children
            );
        }
    }]);

    return DetailContainer;
}(_react2.default.Component);

module.exports = DetailContainer;