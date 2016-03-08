'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _AuthManager = require('../security/AuthManager');

var _AuthManager2 = _interopRequireDefault(_AuthManager);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var navbarRightStyle = {
    paddingTop: '15px'
};

var ApplicationHeader = function (_React$Component) {
    _inherits(ApplicationHeader, _React$Component);

    function ApplicationHeader(props) {
        _classCallCheck(this, ApplicationHeader);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ApplicationHeader).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(ApplicationHeader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var UserInfo, Pages;
            if (_AuthManager2.default.isAuthenticated()) {
                Pages = _react2.default.createElement(
                    _reactBootstrap.Nav,
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'home' },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'User Admin' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'users' },
                                'Users'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'security' },
                                'Roles & Permissions'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'alerts' },
                                'Alerts'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'Product Data' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'products' },
                                'Products'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'categories' },
                                'Categories'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'brands' },
                                'Brands'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'manufacturers' },
                                'Manufacturers'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'productlines' },
                                'Product Lines'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'skugroups' },
                                'Sku Groups'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'Orders, Shipping & System' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'orders' },
                                'Orders'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'shippers' },
                                'Shippers'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'controlvalues' },
                                'System Configuration'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.DropdownButton,
                        { title: 'Promotions' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'promotions' },
                                'Promotions'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: 'giftcards' },
                                'Gift Cards'
                            )
                        )
                    )
                );
                UserInfo = _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    _react2.default.createElement(
                        'li',
                        { style: navbarRightStyle },
                        'Hello ',
                        _AuthManager2.default.getUserId(),
                        '!'
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'logout' },
                            'Log off'
                        )
                    )
                );
            } else {
                UserInfo = _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav navbar-right' },
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'login' },
                            'Login'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: 'register' },
                            'Register'
                        )
                    )
                );
                Pages = _react2.default.createElement(_reactBootstrap.Nav, null);
            }
            return _react2.default.createElement(
                'div',
                { className: 'application-header' },
                _react2.default.createElement(
                    _reactBootstrap.Navbar,
                    { brand: 'Ecommerce Web Admin' },
                    Pages,
                    UserInfo
                )
            );
        }
    }]);

    return ApplicationHeader;
}(_react2.default.Component);

module.exports = ApplicationHeader;