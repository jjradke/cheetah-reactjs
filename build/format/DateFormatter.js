'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _reactTime = require('react-time');

var _reactTime2 = _interopRequireDefault(_reactTime);

var _FormatterFactory = require('./FormatterFactory');

var _FormatterFactory2 = _interopRequireDefault(_FormatterFactory);

var DateFormatterApi = (function () {
    function DateFormatterApi() {
        _classCallCheck(this, DateFormatterApi);
    }

    _createClass(DateFormatterApi, [{
        key: 'format',
        value: function format(value) {
            return React.createElement(_reactTime2['default'], { value: value, format: 'YYYY/MM/DD' });
        }
    }]);

    return DateFormatterApi;
})();

var DateFormatter = new DateFormatterApi();

_FormatterFactory2['default'].register('date', DateFormatter);

module.exports = DateFormatter;