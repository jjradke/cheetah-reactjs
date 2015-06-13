'use strict';

class FormatterFactoryApi {
    constructor() {
        this.formatters = { };
    }

    register(type, formatter) {
        this.formatters[type] = formatter;
    }

    get(type) {
        return this.formatters[type];
    }
}

var FormatterFactory = new FormatterFactoryApi();

module.exports = FormatterFactory;