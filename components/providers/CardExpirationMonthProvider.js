'use strict';

class CardExpirationMonthProviderApi {
    constructor() {
        this.months = [];

        for (var i = 1; i < 13; i++) {
            this.months.push({
                value: (i<10? '0' + i: ''+i)
            });
        }
    }

    getMonths() {
        return this.months;
    }

}

var CardExpirationMonthProvider = new CardExpirationMonthProviderApi();

module.exports = CardExpirationMonthProvider;