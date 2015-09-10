'use strict';

import FormsyField from './FormsyField';

class EmailField extends FormsyField {
    constructor(props) {
        super(props);

        this.state = {
            email: props.value
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <span className={this.containerClassName()}>
                <input type="text"
                       onBlur={this.setEmail}
                       onChange={this.handleEmailInput}
                       value={this.state.email} {...this.props}
                       maxLength="100" />
                <span className="form-control-message">{this.errorMessage()}</span>
            </span>
        );
    }

    setEmail = (e) => {
        var targetVal = e.target.value;

        var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

        if (re.test(targetVal)) {
            if (this.props.match != null) {
                if (this.props.match === targetVal) {
                    this.setState({email: targetVal, message: ''});

                    this.props.handleChange(e);
                } else {
                    this.setState({message: 'Must match Email field'});
                }
            } else {
                this.setState({email: targetVal, message: ''});

                this.props.handleChange(e);
            }
        } else {
            this.setState({message: 'Invalid'});
        }
    };

    handleEmailInput = (e) => {
        var target = e.currentTarget,
            targetVal = target.value;

        this.setState({email: targetVal});

        this.props.handleChange(e);
    };
}

module.exports = EmailField;