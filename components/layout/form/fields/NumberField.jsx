'use strict';

import FormsyField from './FormsyField';

class NumberField extends FormsyField {

    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };
    }

    getValue() {
        return this.state.value;
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        this.props.onChange(event.target.value, event);
    }

    render() {
        // get latest value from parent on each render
        this.state.value = this.props.value;
        return (
            <span className={this.containerClassName()}>
                <input type="number"
                          className={this.fieldClassName()}
                          id={this.props.field}
                          max={this.props.max}
                          min={this.props.min? this.props.min: 0}
                          name={this.props.field}
                          value={this.state.value}
                          onChange={this.handleChange} />;
                <span className="form-control-message">{this.errorMessage()}</span>
            </span>
        );
    }

}

module.exports = NumberField;