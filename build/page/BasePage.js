'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasePage = function (_React$Component) {
    _inherits(BasePage, _React$Component);

    function BasePage(props) {
        _classCallCheck(this, BasePage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BasePage).call(this, props));

        if (!_this.state) {
            _this.state = {};
        }
        _this.state.requested = false;
        _this.state.success = false;
        return _this;
    }

    _createClass(BasePage, [{
        key: 'isSuccess',
        value: function isSuccess() {
            return this.state.requested && this.state.success;
        }
    }, {
        key: 'isRequested',
        value: function isRequested() {
            return this.state.requested;
        }
    }, {
        key: 'succeed',
        value: function succeed(message) {
            this.state.requested = true;
            this.state.success = true;
            if (!!message) this.state.message = message;
            this.setState(this.state);
        }
    }, {
        key: 'fail',
        value: function fail(message) {
            this.state.requested = true;
            this.state.success = false;
            if (!!message) this.state.message = message;
            this.setState(this.state);
        }
    }]);

    return BasePage;
}(_react2.default.Component);

module.exports = BasePage;