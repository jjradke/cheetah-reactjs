'use strict';

import Timestamp from 'react-time';
import FormatterFactory from './FormatterFactory';

function DateFormatterApi(){}
    Object.defineProperty(DateFormatterApi.prototype,"format",{writable:true,configurable:true,value:function(value) {
        return React.createElement(Timestamp, {value: value, format: "YYYY/MM/DD"});
    }});


var DateFormatter = new DateFormatterApi();

FormatterFactory.register('date', DateFormatter);

module.exports = DateFormatter;