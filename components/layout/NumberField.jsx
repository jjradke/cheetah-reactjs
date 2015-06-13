'use strict';

import React from 'react';

class NumberField extends React.Component {

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
        return <input type="number" id={this.props.field} max={this.props.max} min={this.props.min?this.props.min:0}
                      name={this.props.field} value={this.state.value}
                      onChange={this.handleChange} />;
    }

}

module.exports = NumberField;