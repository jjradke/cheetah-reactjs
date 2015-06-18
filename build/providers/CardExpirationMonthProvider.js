'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CardExpirationMonthProviderApi = (function () {
    function CardExpirationMonthProviderApi() {
        _classCallCheck(this, CardExpirationMonthProviderApi);

        this.months = [];

        for (var i = 1; i < 13; i++) {
            this.months.push({
                value: i < 10 ? '0' + i : '' + i
            });
        }
    }

    _createClass(CardExpirationMonthProviderApi, [{
        key: 'getMonths',
        value: function getMonths() {
            return this.months;
        }
    }]);

    return CardExpirationMonthProviderApi;
})();

var CardExpirationMonthProvider = new CardExpirationMonthProviderApi();

module.exports = CardExpirationMonthProvider;