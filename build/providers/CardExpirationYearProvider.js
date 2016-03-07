'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardExpirationYearProviderApi = function () {
    function CardExpirationYearProviderApi() {
        _classCallCheck(this, CardExpirationYearProviderApi);

        this.years = [];

        for (var i = 2015; i < 2025; i++) {
            this.years.push({
                value: '' + i
            });
        }
    }

    _createClass(CardExpirationYearProviderApi, [{
        key: 'getYears',
        value: function getYears() {
            return this.years;
        }
    }]);

    return CardExpirationYearProviderApi;
}();

var CardExpirationYearProvider = new CardExpirationYearProviderApi();

module.exports = CardExpirationYearProvider;