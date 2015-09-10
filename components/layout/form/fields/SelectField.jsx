'use strict';

import Select from 'react-select';

import FormsyField from './FormsyField';

class SelectField extends FormsyField {

    constructor(props) {
        super(props);

        if (typeof props.value === 'string' && this.props.multiple) {
            this.state = {
                value: [props.value]
            }
        } else {
            this.state = {
                value: props.value
            }
        }

        this.state = { value: props.value };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.forceUpdate();
    }

    handleChange = (value, object) => {
        if (this.props.multiple) {
            this.state.value = _.pluck(object, 'value');
        } else {
            this.state.value = value;
        }
        this.setValue(this.state.value);
        this.props.onChange(this.state.value);
    };

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

    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        var newValues = [];
        if (this.props.options) {
            for (var i = 0; i < this.props.options.length; i++) {
                newValues.push({
                    value: this.getValueFromItem(this.props.options[i]),
                    label: this.getLabel(this.props.options[i])
                });
            }
        }

        var className = this.showRequired() ? 'required' : this.showError() ? 'error' : null;

        var errorMessage = this.getErrorMessage();

        return <div className={this.containerClassName}>

            <Select {...this.props}
                options={newValues}
                value={this.state.value}
                onChange={this.handleChange}
                multi={this.props.multiple}
                disabled={this.props.disabled}
                className={this.fieldClassName()}
            />

            <span className="form-control-message">{this.errorMessage()}</span>

            <div className="clearfix"></div>
        </div>
    }

}

module.exports = SelectField;