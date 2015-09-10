'use strict';

import React from 'react';

class CheckboxField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    getValue() {
        return this.state.value;
    }

    handleChange(event) {
        this.setState({ value: event.target.checked });
        this.props.onChange(event.target.checked);
    }


    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        return <input type="checkbox" id={this.props.field} name={this.props.field}
                      checked={this.state.value} onChange={this.handleChange} />;
    }

}

module.exports = CheckboxField;