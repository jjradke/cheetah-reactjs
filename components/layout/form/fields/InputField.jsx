'use strict';

import FormsyField from './FormsyField';

class InputField extends FormsyField {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    changeValue = (e) => {
        this.setValue(e.currentTarget.value);

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    render() {
        return (
            <div className={this.containerClassName()}>
                <input {...this.props}
                    type="text"
                    className={this.fieldClassName()}
                    onChange={this.changeValue}
                    value={this.getValue()}
                />
                <span className="form-control-message">
                    {this.errorMessage()}
                </span>
            </div>
        );
    }
}

module.exports = InputField;