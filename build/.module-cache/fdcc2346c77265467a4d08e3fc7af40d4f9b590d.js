'use strict';

import React from 'react';

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){BasePage[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;BasePage.prototype=Object.create(____SuperProtoOf____Class1);BasePage.prototype.constructor=BasePage;BasePage.__superConstructor__=____Class1;
    function BasePage(props) {
        ____Class1.call(this,props);

        if (!this.state) {
            this.state = {};
        }
        this.state.requested = false;
        this.state.success = false;
    }

    Object.defineProperty(BasePage.prototype,"isSuccess",{writable:true,configurable:true,value:function() {
        return this.state.requested && this.state.success;
    }});

    Object.defineProperty(BasePage.prototype,"isRequested",{writable:true,configurable:true,value:function() {
        return this.state.requested;
    }});

    Object.defineProperty(BasePage.prototype,"succeed",{writable:true,configurable:true,value:function(message) {
        this.state.requested = true;
        this.state.success = true;
        if (!!message) this.state.message = message;
        this.setState(this.state);
    }});

    Object.defineProperty(BasePage.prototype,"fail",{writable:true,configurable:true,value:function(message) {
        this.state.requested = true;
        this.state.success = false;
        if (!!message) this.state.message = message;
        this.setState(this.state);
    }});


module.exports = BasePage;