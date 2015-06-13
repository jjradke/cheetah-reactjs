'use strict';

import FormatterFactory from './FormatterFactory';
import numeral from 'numeral';

class AmountFormatterApi {
    format(value) {
        return numeral(value).format('$0,0.00');
    }
}

var AmountFormatter = new AmountFormatterApi();

FormatterFactory.register('amount', AmountFormatter);

module.exports = AmountFormatter;