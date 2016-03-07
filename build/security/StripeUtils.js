'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StripeUtilsApi = function () {
    function StripeUtilsApi() {
        _classCallCheck(this, StripeUtilsApi);
    }

    _createClass(StripeUtilsApi, [{
        key: 'createToken',
        value: function createToken(paymentInfo) {
            var obj = {
                number: paymentInfo.CardNumber,
                cvc: paymentInfo.CardCode,
                exp_month: paymentInfo.ExpMonth,
                exp_year: paymentInfo.ExpYear,
                name: paymentInfo.Name,
                address_line1: paymentInfo.AddressLine1,
                address_line2: paymentInfo.AddressLine2,
                address_city: paymentInfo.City,
                address_state: paymentInfo.State,
                address_zip: paymentInfo.Zip,
                address_country: "US",
                metadata: {
                    'phone': paymentInfo.PhoneNumber
                }
            };

            return _rx2.default.Observable.create(function (observer) {
                Stripe.card.createToken(obj, function (status, response) {
                    if (status === 200) {
                        observer.onNext(response);
                        observer.onCompleted();
                    } else {
                        observer.onError(response);
                    }
                });
            });
        }
    }]);

    return StripeUtilsApi;
}();

var StripeUtils = new StripeUtilsApi();

module.exports = StripeUtils;