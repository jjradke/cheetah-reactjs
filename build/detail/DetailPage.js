'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RestService = require('../rest/RestService');

var _RestService2 = _interopRequireDefault(_RestService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DetailPage = function (_React$Component) {
    _inherits(DetailPage, _React$Component);

    function DetailPage(props) {
        _classCallCheck(this, DetailPage);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailPage).call(this, props));

        _this.state = { data: { item: {} } };

        _this.handleUpdate = _this.handleUpdate.bind(_this);
        return _this;
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
            var _this2 = this;

            _RestService2.default.find(this.props.resourceName, decodeURIComponent(id)).subscribe(function (data) {
                data = _this2.onDataLoad(data);

                _this2.setState({ data: { item: data } });
            });
        }
    }, {
        key: 'onDataLoad',
        value: function onDataLoad(data) {
            return data;
        }
    }]);

    return DetailPage;
}(_react2.default.Component);

module.exports = DetailPage;