'use strict';

import React from 'react';
import Multiselect from 'react-bootstrap-multiselect';

class SelectField extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }

    getValue() {
        return this.state.value;
    }

    handleChange(field, isSelected) {
        if (this.props.multiple) {
            if (isSelected) {
                this.state.value = this.props.options.filter((innerField) => {
                    return this.getValueFromItem(innerField) == field.val()
                        || this.state.value.map((f) => {
                            return this.getValueFromItem(f)
                        }).indexOf(this.getValueFromItem(innerField)) > -1;
                });

            } else {
                this.state.value = this.state.value.filter((innerField) => {
                    return this.getValueFromItem(innerField) != field.val();
                });
            }
        } else {
            this.state.value = field.val();
        }

        this.props.onChange(this.state.value);
    }

    getLabel(item) {
        return (this.props.labelKey? item[this.props.labelKey]: item.Description);
    }

    getValueFromItem(item) {
        return (this.props.valueKey? item[this.props.valueKey]: item.Id);
    }

    /* Multiselect component we use does not support disabling - this will disable
     the button it renders. May want to switch to a new Multiselect. Will need to
     test in Ecommerce Web Admin if so aswell.
     */
    componentDidMount() { $('.multiselect', React.findDOMNode(this).parentNode).prop('disabled', this.props.disabled); }
    componentDidUpdate() { $('.multiselect', React.findDOMNode(this).parentNode).prop('disabled', this.props.disabled); }

    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        var newValues = [];
        if (this.props.options) {
            for (var i = 0; i < this.props.options.length; i++) {
                newValues.push({ value: this.getValueFromItem(this.props.options[i]), label: this.getLabel(this.props.options[i]),
                    selected: (!this.state.value?false:(this.props.multiple?this.state.value.map((value) => {
                        return this.getValueFromItem(value);
                    }).indexOf(this.getValueFromItem(this.props.options[i])) > -1:this.state.value == this.getValueFromItem(this.props.options[i]))) });
            }
        }

        return <Multiselect nonSelectedText="Choose an option" data={newValues} onChange={this.handleChange} multiple={this.props.multiple} disabled={this.props.disabled} size="2" />;
    }

}

module.exports = SelectField;