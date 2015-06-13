'use strict';

import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';

class SelectField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    getValue() {
        return this.state.value;
    }

    handleChange(field, isSelected) {
        if (this.props.multiple) {
            if (isSelected) {
                this.state.value = this.props.options.filter((innerField) => {
                    return innerField.Id == field.val()
                        || this.state.value.map((f) => {
                            return f.Id
                        }).indexOf(innerField.Id) > -1;
                });

            } else {
                this.state.value = this.state.value.filter((innerField) => {
                    return innerField.Id != field.val();
                });
            }
        } else {
            this.state.value = field.val();
        }

        this.props.onChange(this.state.value);
    }


    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        var newValues = [];
        if (this.props.options) {
            for (var i = 0; i < this.props.options.length; i++) {
                newValues.push({ value: this.props.options[i].Id, label: this.props.options[i].Description,
                    selected: (!this.state.value?false:(this.props.multiple?this.state.value.map((value) => {
                        return value.Id
                    }).indexOf(this.props.options[i].Id) > -1:this.state.value == this.props.options[i].Id)) });
            }
        }

        if (this.state.value != null && newValues.length > 0) {
            return <Multiselect data={newValues} onChange={this.handleChange} multiple={this.props.multiple} />;
        } else {
            return <div/>;
        }
    }

}

module.exports = SelectField;