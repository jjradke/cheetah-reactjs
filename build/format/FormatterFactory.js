'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FormatterFactoryApi = (function () {
    function FormatterFactoryApi() {
        _classCallCheck(this, FormatterFactoryApi);

        this.formatters = {};
    }

    _createClass(FormatterFactoryApi, [{
        key: 'register',
        value: function register(type, formatter) {
            this.formatters[type] = formatter;
        }
    }, {
        key: 'get',
        value: function get(type) {
            return this.formatters[type];
        }
    }]);

    return FormatterFactoryApi;
})();

var FormatterFactory = new FormatterFactoryApi();

module.exports = FormatterFactory;