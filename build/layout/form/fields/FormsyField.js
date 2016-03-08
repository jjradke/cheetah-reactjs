'use strict';

var _dec, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormsyField = (_dec = _reactMixin2.default.decorate(_formsyReact2.default.Mixin), _dec(_class = function (_React$Component) {
    _inherits(FormsyField, _React$Component);

    function FormsyField() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, FormsyField);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FormsyField)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.errorMessage = function () {
            var errorMessage = '';

            // only will have an error message displayed if not valid
            if (!_this.isValid()) {
                // if its still required, show required message (as long as it is not pristine, e.g.
                // the user has actually done something in the field
                if (_this.showRequired() && !_this.isPristine()) {
                    errorMessage = _this.props.requiredMessage || 'This field is required.';
                } else if (_this.showError() && !_this.isPristine()) {
                    errorMessage = _this.getErrorMessage() || 'This field is invalid.';
                }
            }

            return errorMessage;
        }, _this.containerClassName = function () {
            var className = 'form-control-container';

            if (_this.showRequired() && !_this.isPristine()) {
                className += ' required';
            } else if (_this.showError() && !_this.isPristine()) {
                className += ' error';
            }

            return className;
        }, _this.fieldClassName = function () {
            var className = 'form-control';

            if (_this.showRequired() && !_this.isPristine()) {
                className += ' required';
            } else if (_this.showError() && !_this.isPristine()) {
                className += ' error';
            }

            return className;
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return FormsyField;
}(_react2.default.Component)) || _class);

module.exports = FormsyField;