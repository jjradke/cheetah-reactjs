'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormatterFactory = require('./FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooleanFormatterApi = function () {
    function BooleanFormatterApi() {
        _classCallCheck(this, BooleanFormatterApi);
    }

    _createClass(BooleanFormatterApi, [{
        key: 'format',
        value: function format(value) {
            return value ? 'Yes' : 'No';
        }
    }]);

    return BooleanFormatterApi;
}();

var BooleanFormatter = new BooleanFormatterApi();

_FormatterFactory2.default.register('boolean', BooleanFormatter);

module.exports = BooleanFormatter;