class StripeUtilsApi {
    constructor() {

    }

    createToken(paymentInfo) {
        var obj = {
            number: paymentInfo.CardNumber,
            cvc: paymentInfo.CardCode,
            exp_month: paymentInfo.ExpMonth,
            exp_year: paymentInfo.ExpYear,
            name: paymentInfo.Name,
            address_line1: paymentInfo.AddressLine1,
            address_line2: paymentInfo.AddressLine2,
            address_city: paymentInfo.City,
            address_state: paymentInfo.State,
            address_zip: paymentInfo.Zip,
            address_country: "US",
            metadata: {
                'phone': paymentInfo.PhoneNumber
            }
        };

        return new Promise(function(resolve, reject){
            Stripe.card.createToken(obj, (status, response) => {
                if (status === 200) {
                    return resolve(response);
                } else {
                    return reject(response);
                }
            });
        });
    }
}

var StripeUtils = new StripeUtilsApi();

module.exports = StripeUtils;