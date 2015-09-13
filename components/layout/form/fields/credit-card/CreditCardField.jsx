'use strict';

import FormsyField from '../FormsyField';

import CreditCardResolver from './CreditCardResolver';


class CreditCardField extends FormsyField {
    constructor(props) {
        super(props);
        this.state = {cardNumber: '', cardType: ''};

        this.styles = {
            'discover': {
                background: 'white url(images/credit-cards/discover.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'visa': {
                background: 'white url(images/credit-cards/visa.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'mastercard': {
                background: 'white url(images/credit-cards/mastercard.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'amex': {
                background: 'white url(images/credit-cards/amex.png) no-repeat right center',
                backgroundSize: '30px'
            },
            'null': {
                backgroundColor: 'white'
            }
        };
    }

    componentDidMount() {
        this.setCardNumber({
            target: {
                name: this.props.name,
                value: this.props.value
            },
            manual: true
        })
    }

    render() {
        return (
            <div className={this.containerClassName()}>
                <input
                    type="text"
                    className={this.fieldClassName()}
                    name={this.props.name}
                    autoComplete="off"
                    value={this.state.cardNumber}
                    autoFocus="true"
                    onChange={(e)=> this.setCardNumber(e)}
                    onKeyPress={(e)=> this.handleCCNumberInput(e)}
                    placeholder="Enter card number"
                    style={this.styles[this.state.cardType]}
                    {...this.props} />
                <span className="form-control-message">{this.errorMessage()}</span>
            </div>
        );
    }

    setCardNumber = (e) => {
        var targetVal = e.target.value;

        var card = CreditCardResolver.resolve(targetVal);

        if (card == null) {
            this.setState({ cardType: null, icon: null });
        } else {
            this.setState({ cardType: card.type, icon: card.icon });
        }

        if (this.props.onCardChange) {
            this.props.onCardChange(targetVal, e);
        }

        if (!e.manual) {
            this.setValue(targetVal);
        }
        this.setState({cardNumber: targetVal});
    };

    handleCCNumberInput = (e) => {
        var target = e.currentTarget,
            targetVal = target.value,
            charCode = String.fromCharCode(e.which),
            charCodeLen = (targetVal.replace(/\D/g, "") + charCode).length,
            card = CreditCardResolver.resolve(targetVal + charCode),
            selectionLength = target.selectionEnd - target.selectionStart,
            maxLength = 16;

        if (targetVal.replace(/ /g, '').length >= maxLength
            && selectionLength == 0) {
            e.preventDefault();
            e.stopPropagation();

            return;
        }

        if (this.state.cardNumber && this.state.cardNumber.length >= 2 && card == null) {
            e.preventDefault();
            e.stopPropagation();

            return;
        }

        if (card && (maxLength = card.length), !/^\d+$/.test(charCode) || charCodeLen > maxLength) {
            return void e.preventDefault();
        }

        var cardTest = card && "amex" === card.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/;

        return cardTest.test(targetVal) ?
            (e.preventDefault(), void(target.value = targetVal + " " + charCode)) : void 0;
    };
}

module.exports = CreditCardField;