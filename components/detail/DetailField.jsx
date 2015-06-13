'use strict';

import React from 'react';
import TextField from '../layout/TextField';
import CheckboxField from '../layout/CheckboxField';
import SelectField from '../layout/SelectField';
import NumberField from '../layout/NumberField';
import DatePicker from 'react-datepicker';
import moment from 'moment';

var labelStyle = {
    paddingRight: '5px'
};

class DetailField extends React.Component {
    constructor(props) {
        super(props);

        this.state = props;
        this.hasInitialValue = false;
        this.initialValue = null;

        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
        this.prepareValue = this.prepareValue.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state = nextProps;
            this.setState(this.state);
    }

    prepareValue(value) {
        if (this.props.type == 'checkbox' && (this.initialValue == 'Y' || this.initialValue == 'N')) {
            return value ? 'Y' : 'N';
        }
        return value;
    }

    getValue() {
        return this.prepareValue(this.state.value);
    }

    reset() {
        this.hasInitialValue = false;
    }

    removeItem(event) {
        var roleId = $(event.target).data('roleId');
        var newValue = this.state.value;
        newValue.splice(this.state.value.map((object) => object.Id).indexOf(roleId), 1);
        this.setState({value: newValue });
    }

    handleChange(value) {
        this.state.value = value;
        this.setState(this.state);

        if (this.props.handleChange) {
            this.props.handleChange(this.prepareValue(value));
        }
    }

    handleDateChange(moment) {
        this.state.value = moment.toISOString();
        this.state.moment = moment;
        this.setState(this.state);

        if (this.props.handleChange) {
            this.props.handleChange(this.state.value);
        }
    }

    handleDropdownChange(field, isSelected) {
        if (isSelected) {
            this.state.value = this.props.options.filter((innerField) => {
                return innerField.Id == field.val() || this.state.value.map((f) => { return f.Id }).indexOf(innerField.Id) > -1;
            });

        } else {
            this.state.value = this.state.value.filter((innerField) => {
                return innerField.Id != field.val();
            });
        }

    }


    render() {
        if (!this.hasInitialValue && typeof this.props.value !== 'undefined') {
            this.hasInitialValue = true;
            this.initialValue = this.props.value;

            if (this.props.type == 'checkbox' && (this.initialValue == 'Y' || this.initialValue == 'N')) {
                this.state.value = this.initialValue == 'Y';
            } else {
                this.state.value = this.props.value;
            }
        }

        if (this.state.value != null) {
            this.state.moment = moment(this.state.value);
        }

        if (this.props.hide) { return <span/>; }
        var field;
        if (this.props.type == 'text') {
            field = <TextField field={this.state.field} value={this.state.value} onChange={this.handleChange} />;
        } else if (this.props.type == 'checkbox') {
            field = <CheckboxField field={this.state.field} value={this.state.value} onChange={this.handleChange} />;
        } else if (this.props.type == 'list') {
            field = <SelectField value={this.state.value} options={this.props.options} multiple={this.props.multiple} onChange={this.handleChange}/>;
        } else if (this.props.type == 'number') {
            field = <NumberField field={this.state.field} value={this.state.value} max={this.props.max}
                                 min={this.props.min} onChange={this.handleChange}/>;
        } else if (this.props.type == 'date') {
            field = <DatePicker
                key={this.state.field}
                selected={this.state.moment}
                onChange={this.handleDateChange}
                placeholderText="Click to select a date"
                />;
        }

        return (
            <div className="form-group">
                <label htmlFor={this.state.field} className="control-label" style={labelStyle}>{this.props.children}</label>
                {field}
            </div>
        );
    }

}

module.exports = DetailField;