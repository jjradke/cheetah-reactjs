'use strict';

import FormatterFactory from './FormatterFactory';

class BooleanFormatterApi {
    format(value) {
        return value ? 'Yes' : 'No';
    }
}

var BooleanFormatter = new BooleanFormatterApi();

FormatterFactory.register('boolean', BooleanFormatter);

module.exports = BooleanFormatter;