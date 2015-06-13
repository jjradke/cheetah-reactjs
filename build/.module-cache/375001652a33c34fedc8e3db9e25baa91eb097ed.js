'use strict';

import FormatterFactory from './FormatterFactory';
import numeral from 'numeral';

function AmountFormatterApi(){}
    Object.defineProperty(AmountFormatterApi.prototype,"format",{writable:true,configurable:true,value:function(value) {
        return numeral(value).format('$0,0.00');
    }});


var AmountFormatter = new AmountFormatterApi();

FormatterFactory.register('amount', AmountFormatter);

module.exports = AmountFormatter;