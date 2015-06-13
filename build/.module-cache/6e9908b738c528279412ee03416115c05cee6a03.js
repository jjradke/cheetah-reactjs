'use strict';


    function FormatterFactoryApi() {
        this.formatters = { };
    }

    Object.defineProperty(FormatterFactoryApi.prototype,"register",{writable:true,configurable:true,value:function(type, formatter) {
        this.formatters[type] = formatter;
    }});

    Object.defineProperty(FormatterFactoryApi.prototype,"get",{writable:true,configurable:true,value:function(type) {
        return this.formatters[type];
    }});


var FormatterFactory = new FormatterFactoryApi();

module.exports = FormatterFactory;