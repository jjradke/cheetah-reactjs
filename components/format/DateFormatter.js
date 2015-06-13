'use strict';

import Timestamp from 'react-time';
import FormatterFactory from './FormatterFactory';

class DateFormatterApi {
    format(value) {
        return <Timestamp value={value} format='YYYY/MM/DD' />;
    }
}

var DateFormatter = new DateFormatterApi();

FormatterFactory.register('date', DateFormatter);

module.exports = DateFormatter;