'use strict';

class CardExpirationYearProviderApi {
    constructor() {
        this.years = [];

        for (var i = 2015; i < 2025; i++) {
            this.years.push({
                value: i
            });
        }
    }

    getYears() {
        return this.years;
    }

}

var CardExpirationYearProvider = new CardExpirationYearProviderApi();

module.exports = CardExpirationYearProvider;