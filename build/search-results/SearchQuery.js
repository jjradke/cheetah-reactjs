'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _restRestService = require('./../rest/RestService');

var _restRestService2 = _interopRequireDefault(_restRestService);

var _SearchField = require('./SearchField');

var _SearchField2 = _interopRequireDefault(_SearchField);

var SearchQuery = (function (_React$Component) {
    function SearchQuery(props) {
        _classCallCheck(this, SearchQuery);

        _get(Object.getPrototypeOf(SearchQuery.prototype), 'constructor', this).call(this, props);
        this.state = { data: { item: {} } };
        this.handleSearch = this.handleSearch.bind(this);
    }

    _inherits(SearchQuery, _React$Component);

    _createClass(SearchQuery, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'getSearchQuery',
        value: function getSearchQuery() {
            var params = '';
            for (var key in this.refs) {
                var ref = this.refs[key];
                if (key.substring(0, 7) == 'search.') {
                    var value = ref.getValue();
                    if (value != null && value.length > 0) {
                        params += (params == '' ? '?' : '&') + key.replace('search.', '') + '=' + value;
                    }
                }
            }
            return params;
        }
    }, {
        key: 'handleSearch',
        value: function handleSearch(event) {
            event.preventDefault();

            this.props.handleSearch();
        }
    }, {
        key: 'render',
        value: function render() {
            var searchFields = [];

            for (var i = 0; i < this.props.fields.length; i++) {
                var field = this.props.fields[i];
                field.ref = 'search.' + field.name;
                searchFields.push(_react2['default'].createElement(_SearchField2['default'], { field: field.name, label: field.label, ref: field.ref }));
            }

            return _react2['default'].createElement(
                'form',
                null,
                _react2['default'].createElement(
                    'p',
                    null,
                    'Search Fields'
                ),
                searchFields,
                _react2['default'].createElement(
                    'button',
                    { type: 'submit', onClick: this.handleSearch },
                    'Search'
                )
            );
        }
    }]);

    return SearchQuery;
})(_react2['default'].Component);

module.exports = SearchQuery;