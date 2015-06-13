'use strict'

import React from 'react';
import RestService from './../rest/RestService';

class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {data: {item:{}}};
    }

    componentDidMount() {

    }

    getValue() {
        return React.findDOMNode(this.refs.input).value;
    }


    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.field} className="control-label">{this.props.label}</label>
                <input type="text" id={this.props.field} name={this.props.field} className="form-control" ref='input'  />
            </div>
        );
    }

}

module.exports = SearchField;