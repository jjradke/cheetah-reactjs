'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalDialog = function (_React$Component) {
    _inherits(ModalDialog, _React$Component);

    function ModalDialog(props) {
        _classCallCheck(this, ModalDialog);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ModalDialog).call(this, props));

        _this.preventDefault = function (e) {
            e.stopPropagation();
            e.preventDefault();
            e.returnValue = false;
            return e.returnValue;
        };

        _this.open = function () {
            var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };
            if (_this.props.onOpen) {
                _this.props.onOpen();
            }

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

        _this.close = function () {
            if (_this.props.onClose) {
                _this.props.onClose();
            }

            _this.setState({ open: false });
            window.onwheel = null;
            window.onmousewheel = null;
            window.ontouchmove = null;
            $('body').unbind('touchmove');
            document.onkeydown = null;
            return false;
        };

        _this.state = { open: props.open || false };

        _this.styles = {
            closeButton: {
                cursor: "pointer",
                fontSize: "32px",
                fontWeight: "lighter",
                float: "right"
            }
        };
        return _this;
    }

    _createClass(ModalDialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.open != this.props.open) {
                if (nextProps.open) {
                    this.open();
                } else {
                    this.close();
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactBootstrap.Modal,
                {
                    dialogClassName: this.props.dialogName,
                    show: this.state.open,
                    onHide: this.close,
                    animation: false,
                    bsSize: this.props.size },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2.default.createElement(
                        'div',
                        { style: this.props.containerStyle },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-xs-12' },
                            _react2.default.createElement('i', { style: this.styles.closeButton, className: (0, _classnames2.default)("fa", "fa-times-thin"),
                                onClick: this.close })
                        ),
                        this.props.children
                    )
                )
            );
        }
    }]);

    return ModalDialog;
}(_react2.default.Component);

module.exports = ModalDialog;