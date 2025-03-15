const generatePaymentPayload = ({
    selectedPayment,
    amount,
    email,
    currency,
    merchantId
}) => {
    const payload = {};

    switch (selectedPayment) {
        case "Paystack":
            payload.email = email;
            payload.amount = amount;
            payload.merchant_id = merchantId;
            payload.currency = currency;
            break;
        case "PayPal":
            payload.currency_code = currency = "USD";
            payload.value = amount;
            payload.merchant_id = merchantId;
            break;
        case "Flutterwave":
            payload.amount = amount;
            payload.customer_email = email;
            payload.currency = currency;
            break;
        case "Stripe":
            payload.amount = amount;
            payload.email = email;
            payload.currency = currency;
            payload.merchantId = merchantId;
            break;
        default:
            return {};
    }

    console.log("Generated Payload (Object):", payload);
    return payload;
};

export default generatePaymentPayload;

//SECOND ONE
/* const generatePaymentPayload = ({
    selectedPayment,
    amount,
    email,
    currency,
    merchantId
}) => {
    const payload = new URLSearchParams();

    switch (selectedPayment) {
        case "Paystack":
            payload.append("email", email);
            payload.append("amount", amount);
            payload.append("merchant_id", merchantId);
            payload.append("currency", currency);
            break;
        case "PayPal":
            payload.append("currency_code", currency = "USD");
            payload.append("value", amount);
            payload.append("merchant_id", merchantId);
            break;
        case "Flutterwave":
            payload.append("amount", amount);
            payload.append("customer_email", email);
            payload.append("currency", currency);
            break;
        case "Stripe":
            payload.append("amount", amount);
            payload.append("email", email);
            payload.append("currency", currency);
            payload.append("merchantId", merchantId);
            break;
            case "Monnify":
                payload.append("merchant_id", merchantId);
                payload.append("amount", amount);
                payload.append("currency", currency);
                break; 
        default:
            return null;
    }

    return payload;
};

export default generatePaymentPayload; 
*/


//FIRST OEN
/* const generatePaymentPayload = ({
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
             //case "Monnify":
              //  return {
              //      merchant_id: merchantId,
              //      amount,
              //      currency,
             //   }; 
        default:
            return {};
    }
};

export default generatePaymentPayload

 */