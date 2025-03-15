const paymentUrls = {
    stripePaymentURL: import.meta.env.VITE_STRIPE_PAYMENT_URL,
    paypalPaymentURL: import.meta.env.VITE_PAYPAL_PAYMENT_URL,
    monifyPaymentURL: import.meta.env.VITE_MONIFY_PAYMENT_URL,
    paystackPaymentURL: import.meta.env.VITE_PAYSTACK_PAYMENT_URL,
    flutterwavePaymentURL: import.meta.env.VITE_FLUTTERWAVE_PAYMENT_URL,

    //demo merchant id
    merchantId: import.meta.env.VITE_MERCHANT_TESTING_ID,
    superadminId: import.meta.env.VITE_SUPERADMIN_TESTING_ID,


};

export default paymentUrls;