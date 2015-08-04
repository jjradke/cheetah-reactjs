'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table = require('./Table');

var _Table2 = _interopRequireDefault(_Table);

var _ExternalTableContainer = require('./ExternalTableContainer');

var _ExternalTableContainer2 = _interopRequireDefault(_ExternalTableContainer);

var _reactBootstrap = require('react-bootstrap');

var dialogStyle = {
    position: 'absolute',
    top: '20%',
    left: $(window).width() / 2 - 400,
    right: '0',
    overflow: 'overlay',
    backgroundColor: 'white',
    padding: '10px',
    width: '800px',
    zIndex: 99999
};

var SelectDialog = (function (_React$Component) {
    _inherits(SelectDialog, _React$Component);

    function SelectDialog(props) {
        _classCallCheck(this, SelectDialog);

        _get(Object.getPrototypeOf(SelectDialog.prototype), 'constructor', this).call(this, props);
        this.state = props;

        if (this.props.data) {
            this.state.mode = 'local';
        } else {
            this.state.mode = 'remote';
        }

        this.selectedItems = [];

        this.columns = this.props.columns ? this.props.columns : [{
            name: "Checkbox",
            type: "checkbox"
        }, {
            name: "Id"
        }, {
            name: "Description"
        }];

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.generateCheckbox = this.generateCheckbox.bind(this);
        this.generateRadio = this.generateRadio.bind(this);
        this.done = this.done.bind(this);
    }

    _createClass(SelectDialog, [{
        key: 'handleChange',
        value: function handleChange(field, event) {
            if (event.target.checked) {
                this.selectedItems.push(field.Id);
            } else {
                this.selectedItems.splice(this.selectedItems.indexOf(field.Id), 1);
            }
        }
    }, {
        key: 'handleSelect',
        value: function handleSelect(field) {
            this.selectedItems.push(field.Id);

            this.done();
        }
    }, {
        key: 'done',
        value: function done() {
            this.props.done(this.selectedItems);

            this.props.onRequestHide();
        }
    }, {
        key: 'generateRadio',
        value: function generateRadio(item) {
            return _react2['default'].createElement('input', { type: 'radio', onChange: this.handleSelect.bind(this, item) });
        }
    }, {
        key: 'generateCheckbox',
        value: function generateCheckbox(item) {
            return _react2['default'].createElement('input', { type: 'checkbox', onChange: this.handleChange.bind(this, item) });
        }
    }, {
        key: 'render',
        value: function render() {

            var generators = [{
                name: "Checkbox",
                func: this.props.multiple ? this.generateSelect : this.generateRadio
            }];

            var table;
            if (this.state.mode == 'local') {
                table = _react2['default'].createElement(_Table2['default'], { data: this.state.data, columns: this.columns, generators: generators });
            } else {
                table = _react2['default'].createElement(_ExternalTableContainer2['default'], { url: this.state.resource, columns: this.columns, generators: generators });
            }

            return _react2['default'].createElement(
                _reactBootstrap.Modal,
                _extends({}, this.props, {
                    bsStyle: 'primary', title: 'Select', animation: false }),
                _react2['default'].createElement(
                    'div',
                    { className: 'modal-body' },
                    table
                ),
                _react2['default'].createElement(
                    'div',
                    { className: 'modal-footer' },
                    this.props.multiple ? _react2['default'].createElement(
                        _reactBootstrap.Button,
                        { onClick: this.done },
                        'Done'
                    ) : '',
                    _react2['default'].createElement(
                        _reactBootstrap.Button,
                        { onClick: this.props.onRequestHide },
                        'Cancel'
                    )
                )
            );
        }
    }]);

    return SelectDialog;
})(_react2['default'].Component);

module.exports = SelectDialog;