'use strict';

import FormatterFactory from './FormatterFactory';

function BooleanFormatterApi(){}
    Object.defineProperty(BooleanFormatterApi.prototype,"format",{writable:true,configurable:true,value:function(value) {
        return value ? 'Yes' : 'No';
    }});


var BooleanFormatter = new BooleanFormatterApi();

FormatterFactory.register('boolean', BooleanFormatter);

module.exports = BooleanFormatter;