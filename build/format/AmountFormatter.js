'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _FormatterFactory = require('./FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var AmountFormatterApi = (function () {
    function AmountFormatterApi() {
        _classCallCheck(this, AmountFormatterApi);
    }

    _createClass(AmountFormatterApi, [{
        key: 'format',
        value: function format(value) {
            return (0, _numeral2['default'])(value).format('$0,0.00');
        }
    }]);

    return AmountFormatterApi;
})();

var AmountFormatter = new AmountFormatterApi();

_FormatterFactory2['default'].register('amount', AmountFormatter);

module.exports = AmountFormatter;