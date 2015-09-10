'use strict';

import FormsyField from './FormsyField';

class PhoneNumberField extends FormsyField {
    constructor(props) {
        super(props);

        this.state = {
            phoneNumber: this.formatNumber(props.value)
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={this.containerClassName()}>
                <input {...this.props}
                    type="text"
                    name={this.props.name}
                    className={this.fieldClassName()}
                    autoComplete="off"
                    value={this.state.phoneNumber}
                    disabled={this.props.disabled}
                    onChange={this.setPhoneNumber}
                    onKeyUp={this.handleKeyUp}
                    onKeyPress={this.handleNumberInput}
                    placeholder="Enter phone number"
                />

                <span className="form-control-message">{this.errorMessage()}</span>
            </div>
        );
    }

    handleKeyUp = (e) => {
        this.state.wasBackspace = e.which === 8; // used to display the state properly
                                                 // if user backspaces on something, we may
                                                 // need to hide one of the format characters
                                                 // as well
    };

    formatNumber = (number) => {
        if (number == null) { return ''; }

        var targetValNoSpecialChars = number.replace(/[\(\)\- ]/g, '');

        var outputFormat = '($1) $2-$3';

        if (targetValNoSpecialChars.length <= 2
            || (targetValNoSpecialChars.length == 3 && this.state.wasBackspace)) {
            outputFormat = '($1';
        } else if (targetValNoSpecialChars.length <= 5
            || (targetValNoSpecialChars.length == 6 && this.state.wasBackspace)) {
            outputFormat = '($1) $2';
        } else if (targetValNoSpecialChars.length > 5) {
            outputFormat = '($1) $2-$3'
        }

        return (targetValNoSpecialChars).replace(/(\d{1,3})(\d{1,3})?(\d{1,4})?/, outputFormat);
    };

    setPhoneNumber = (e) => {
        e.target.value = this.formatNumber(e.target.value);

        if (this.props.onChange) {
            this.props.onChange(e);
        }
        this.setValue(e.target.value);
        this.setState({phoneNumber: e.target.value, wasBackspace: false});
    };

    handleNumberInput = (e) => {
        var target = e.currentTarget,
            targetVal = target.value.replace(/[\(\)\- ]/g, ''),
            charCode = String.fromCharCode(e.which),
            maxLength = 10,
            selectedLength = target.selectionEnd - target.selectionStart;
        // don't add non-numbers and limit it to 10 numbers
        if (parseInt(charCode) === NaN
            || (targetVal.length >= maxLength && selectedLength == 0)) {

            e.preventDefault();
            e.stopPropagation();

        }
    }
}

module.exports = PhoneNumberField;