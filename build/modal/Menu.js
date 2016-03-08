'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
    _inherits(Menu, _Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));

        _this.show = function () {
            var keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };
            _this.setState({ visible: true });
            document.addEventListener("click", _this.hide);
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
        };

        _this.hide = function (e) {
            if (e !== undefined) {
                var target = e.target;

                if (target != null && $(target).parents('.menu').length > 0) {
                    return;
                }
            }

            _this.setState({ visible: false });
            document.removeEventListener("click", _this.hide);
            window.onwheel = null;
            window.onmousewheel = null;
            window.ontouchmove = null;
            $('body').unbind('touchmove');
            document.onkeydown = null;
        };

        _this.state = { visible: false };
        return _this;
    }

    _createClass(Menu, [{
        key: 'preventDefault',
        value: function preventDefault(e) {
            e.stopPropagation();
            e.preventDefault();
            e.returnValue = false;
            return e.returnValue;
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement('div', { className: this.state.visible ? 'menu-container' : '' }),
                React.createElement(
                    'div',
                    { className: 'menu' },
                    React.createElement(
                        'div',
                        { className: (this.state.visible ? "visible " : "") + this.props.alignment },
                        React.createElement(
                            'div',
                            { style: this.props.containerStyle },
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react.Component);

module.exports = Menu;