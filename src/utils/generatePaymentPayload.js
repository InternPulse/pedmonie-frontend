const generatePaymentPayload = ({
    selectedPayment,
    amount,
    email,
    currency,
    merchantId
}) => {
    switch (selectedPayment) {
        case "Paystack":
            return {
                email,
                amount,
                merchant_id: merchantId,
                    currency,
            };
        case "PayPal":
            return {
                currency_code: currency,
                    value: amount,
                    merchant_id: merchantId,
            };
        case "Flutterwave":
            return {
                amount,
                customer_email: email,
                    currency,
            };
        case "Stripe":
            return {
                amount,
                email,
                currency,
                merchantId,
            };
            /* case "Monnify":
                return {
                    merchant_id: merchantId,
                    amount,
                    currency,
                }; */
        default:
            return {};
    }
};

export default generatePaymentPayload