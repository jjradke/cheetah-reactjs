'use strict';

import React from 'react';
import RestService from '../rest/RestService';

var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){DetailPage[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;DetailPage.prototype=Object.create(____SuperProtoOf____Class0);DetailPage.prototype.constructor=DetailPage;DetailPage.__superConstructor__=____Class0;
    function DetailPage(props) {
        ____Class0.call(this,props);
        this.state = {data: {item:{}}};

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    Object.defineProperty(DetailPage.prototype,"handleUpdate",{writable:true,configurable:true,value:function() {
        for (var fieldName in this.refs) {
            var fieldValue = this.refs[fieldName].getValue();

            this.state.data.item[fieldName] = fieldValue;
        }

        return this.state.data.item;
    }});

    Object.defineProperty(DetailPage.prototype,"componentDidMount",{writable:true,configurable:true,value:function() {
        this.loadFromServer(this.props.id);
    }});

    Object.defineProperty(DetailPage.prototype,"componentWillReceiveProps",{writable:true,configurable:true,value:function(nextProps) {
        this.loadFromServer(nextProps.id);

        for (var fieldName in this.refs) {
            var fieldValue = this.refs[fieldName];

            fieldValue.reset();
        }
    }});

    Object.defineProperty(DetailPage.prototype,"loadFromServer",{writable:true,configurable:true,value:function(id) {
        RestService.find(this.props.resourceName, decodeURIComponent(id)).subscribe(function(data)  {
            data = this.onDataLoad(data);

            this.setState({data: {item:data}});
        }.bind(this))
    }});

    Object.defineProperty(DetailPage.prototype,"onDataLoad",{writable:true,configurable:true,value:function(data) {
        return data;
    }});


module.exports = DetailPage;