import React from 'react';
import Formsy from 'formsy-react';
import reactMixin from "react-mixin";

@reactMixin.decorate(Formsy.Mixin)
class FormsyField extends React.Component {

    errorMessage = () => {
        var errorMessage = '';

        // only will have an error message displayed if not valid
        if (!this.isValid()) {
            // if its still required, show required message (as long as it is not pristine, e.g.
            // the user has actually done something in the field
            if (this.showRequired() && !this.isPristine()) {
                errorMessage = this.props.requiredMessage || 'This field is required.';
            } else if (this.showError() && !this.isPristine()) {
                errorMessage = this.getErrorMessage() || 'This field is invalid.';
            }
        }

        return errorMessage;
    };

    containerClassName = () => {
        var className = 'form-control-container';

        if (this.showRequired() && !this.isPristine()) {
            className += ' required';
        } else if (this.showError() && !this.isPristine()) {
            className += ' error';
        }

        return className;
    };

    fieldClassName = () => {
        var className = 'form-control';

        if (this.showRequired() && !this.isPristine()) {
            className += ' required';
        } else if (this.showError() && !this.isPristine()) {
            className += ' error';
        }

        return className;
    };
}
module.exports = FormsyField;