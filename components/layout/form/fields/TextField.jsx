'use strict';

import React from 'react';

class TextField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    getValue() {
        return this.state.value;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value);
    }


    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        return <input type="text" id={this.props.field}
                      name={this.props.field} value={this.state.value}
                      onChange={this.handleChange} />;
    }

}

module.exports = TextField;