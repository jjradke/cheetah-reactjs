"use strict";

import Select from "react-select";

import FormsyField from "./FormsyField";

class SelectField extends FormsyField {

    static defaultProps = {
        labelKey: "Description",
        valueKey: "Id",
        validationError: "",
        validationErrors: {}
    }

    constructor(props) {
        super(props);

        if (typeof props.value === "string" && this.props.multiple) {
            this.state = {
                value: [props.value]
            }
        } else {
            this.state = {
                value: props.value
            }
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(props) {
        if (typeof props.value === "string" && this.props.multiple) {
            this.setState({value: [props.value]});
        } else {
            this.setState({value: props.value});
        }
    }

    handleChange = (value, object) => {
        let newValue = this.state.value;
        if (this.props.multiple) {
            newValue = _.pluck(object, "value");
        } else {
            newValue = value[this.props.valueKey] || value;
        }
        this.setValue(newValue);
        this.props.onChange(newValue, {
            target: {
                name: this.props.name
            }
        });
    };

    /* Multiselect component we use does not support disabling - this will disable
     the button it renders. May want to switch to a new Multiselect. Will need to
     test in Ecommerce Web Admin if so aswell.
     */

    render() {
        return (
            <div className={this.containerClassName()}>
                <Select {...this.props}
                    className={this.fieldClassName()}
                    options={this.props.options}
                    value={this.state.value}
                    onChange={this.handleChange}
                    multi={this.props.multiple}
                    disabled={this.props.disabled}
                    labelKey={this.props.labelKey}
                    valueKey={this.props.valueKey}
                />
                <span className="form-control-message">{this.errorMessage()}</span>
            </div>
        );
    }

}

module.exports = SelectField;