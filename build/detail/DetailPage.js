'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var DetailPage = (function (_React$Component) {
    _inherits(DetailPage, _React$Component);

    function DetailPage(props) {
        _classCallCheck(this, DetailPage);

        _get(Object.getPrototypeOf(DetailPage.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    _createClass(DetailPage, [{
        key: 'handleUpdate',
        value: function handleUpdate() {
            for (var fieldName in this.refs) {
                var fieldValue = this.refs[fieldName].getValue();

                this.state.data.item[fieldName] = fieldValue;
            }

            return this.state.data.item;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadFromServer(this.props.id);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.loadFromServer(nextProps.id);

            for (var fieldName in this.refs) {
                var fieldValue = this.refs[fieldName];

                fieldValue.reset();
            }
        }
    }, {
        key: 'loadFromServer',
        value: function loadFromServer(id) {
            var _this = this;

            _restRestService2['default'].find(this.props.resourceName, decodeURIComponent(id)).subscribe(function (data) {
                data = _this.onDataLoad(data);

                _this.setState({ data: { item: data } });
            });
        }
    }, {
        key: 'onDataLoad',
        value: function onDataLoad(data) {
            return data;
        }
    }]);

    return DetailPage;
})(_react2['default'].Component);

module.exports = DetailPage;