'use strict';

import FormatterFactory from './FormatterFactory';

class CreditCardFormatterApi {
    format(value) {
        if (!value || value.length < 4) {
            return '';
        }

        value = value.replace(' ', '');

        return '*********' + value.substring(value.length-4, value.length);
    }
}

var CreditCardFormatter = new CreditCardFormatterApi();

FormatterFactory.register('CreditCard', CreditCardFormatter);

module.exports = CreditCardFormatter;