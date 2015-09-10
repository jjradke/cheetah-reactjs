'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _formsyReact = require('formsy-react');

var _formsyReact2 = _interopRequireDefault(_formsyReact);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var FormsyField = (function (_React$Component) {
    function FormsyField() {
        var _this = this;

        _classCallCheck(this, _FormsyField);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }

        this.errorMessage = function () {
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
        };

        this.containerClassName = function () {
            var className = 'form-control-container';

            if (_this.showRequired() && !_this.isPristine()) {
                className += ' required';
            } else if (_this.showError() && !_this.isPristine()) {
                className += ' error';
            }

            return className;
        };

        this.fieldClassName = function () {
            var className = 'form-control';

            if (_this.showRequired() && !_this.isPristine()) {
                className += ' required';
            } else if (_this.showError() && !_this.isPristine()) {
                className += ' error';
            }

            return className;
        };
    }

    _inherits(FormsyField, _React$Component);

    var _FormsyField = FormsyField;
    FormsyField = _reactMixin2['default'].decorate(_formsyReact2['default'].Mixin)(FormsyField) || FormsyField;
    return FormsyField;
})(_react2['default'].Component);

module.exports = FormsyField;