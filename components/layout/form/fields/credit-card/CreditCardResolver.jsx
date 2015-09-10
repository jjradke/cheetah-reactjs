'use strict';

var defaultFormat = /(\d{1,4})/g;

var cards = [
    {
        type: 'maestro',
        name: 'Maestro',
        pattern: /^(5018|5020|5038|6304|6759|676[1-3]|6768|5612|5893|6304|6759|0604|6390)/,
        format: defaultFormat,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
    },
    {
        type: 'diners_club',
        name: 'Diners Club',
        pattern: /^(36|38|30[0-5])/,
        format: defaultFormat,
        length: [14],
        cvcLength: [3],
        luhn: true
    },
    {
        type: 'laser',
        name: 'Laser',
        pattern: /^(6706|6771|6709)/,
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
    },
    {
        type: 'jcb',
        name: 'JCB',
        pattern: /^35/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
    },
    {
        type: 'china_union',
        name: 'China Union',
        pattern: /^62/,
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: false
    },
    {
        type: 'discover',
        name: 'Discover',
        pattern: /^(6011|65|64[4-9]|622)/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true,
        icon: 'images/credit-cards/discover.png'
    },
    {
        type: 'mastercard',
        name: 'MasterCard',
        pattern: /^5[1-5]/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true,
        icon: 'images/credit-cards/mastercard.png'
    },
    {
        type: 'amex',
        name: 'American Express',
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: true,
        icon: 'images/credit-cards/amex.png'
    },
    {
        type: 'visa',
        name: 'Visa',
        pattern: /^4/,
        format: defaultFormat,
        length: [13, 14, 15, 16],
        cvcLength: [3],
        luhn: true,
        icon: 'images/credit-cards/visa.png'
    }
];

class CreditCardResolverApi {

    constructor() {

    }

    resolve(cardNumber) {
        cardNumber = (cardNumber + "").replace(/D/g, "");
        for (var i = 0; i < cards.length; i++) {
            var n = cards[i];
            if (n.pattern.test(cardNumber)) return n;
        }
    }

    resolveName(cardNumber) {
        var card = this.resolve(cardNumber);

        return card != null ? card.name : null;
    }

}

var CreditCardResolver = new CreditCardResolverApi();

module.exports = CreditCardResolver;