'use strict';

class CardTypeProviderApi {
    constructor() {
        this.types = [
            {
                name: "American Express",
                value: "AMEX"
            },
            {
                name: "Discover",
                value: "DISC"
            },
            {
                name: "MasterCard",
                value: "MC"
            },
            {
                name: "Visa",
                value: "VISA"
            }
        ];
    }

    getTypes() {
        return this.types;
    }

}

var CardTypeProvider = new CardTypeProviderApi();

module.exports = CardTypeProvider;