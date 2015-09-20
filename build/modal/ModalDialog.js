'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var ModalDialog = (function (_React$Component) {
    function ModalDialog(props) {
        var _this = this;

        _classCallCheck(this, ModalDialog);

        _get(Object.getPrototypeOf(ModalDialog.prototype), 'constructor', this).call(this, props);

        this.preventDefault = function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.returnValue = false;
            return e.returnValue;
        };

        this.open = function () {
            _this.setState({ open: true });
            window.onwheel = _this.preventDefault;
            window.onmousewheel = _this.preventDefault;
            window.ontouchmove = _this.preventDefault;
            $('body').bind('touchmove', function (e) {
                e.preventDefault();
                return false;
            });
            document.onkeydown = function (e) {
                if (keys[e.keyCode]) {
                    e.preventDefault();return false;
                }
            };
            return false;
        };

        this.close = function () {
            _this.setState({ open: false });
            window.onwheel = null;
            window.onmousewheel = null;
            window.ontouchmove = null;
            $('body').unbind('touchmove');
            document.onkeydown = null;
            return false;
        };

        this.getContent = function () {};

        this.getStyle = function () {};

        this.state = { open: props.open || false };

        this.styles = {
            closeButton: {
                cursor: 'pointer',
                fontSize: '32px',
                fontWeight: 'lighter',
                float: 'right'
            }
        };
    }

    _inherits(ModalDialog, _React$Component);

    _createClass(ModalDialog, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                _reactBootstrap.Modal,
                {
                    dialogClassName: this.props.dialogName,
                    show: this.state.open,
                    onHide: this.close,
                    animation: false,
                    bsSize: this.props.size },
                _react2['default'].createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2['default'].createElement(
                        'div',
                        { style: this.getStyle() },
                        _react2['default'].createElement(
                            'div',
                            { className: 'col-xs-12' },
                            _react2['default'].createElement('i', { style: this.styles.closeButton, className: (0, _classnames2['default'])('fa', 'fa-times-thin'),
                                onClick: this.close })
                        ),
                        this.getContent()
                    )
                )
            );
        }
    }]);

    return ModalDialog;
})(_react2['default'].Component);

module.exports = ModalDialog;

// empty - should be overridden

// empty - should be overridden