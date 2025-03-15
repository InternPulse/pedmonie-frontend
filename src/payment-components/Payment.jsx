
import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { countriesData } from "../utils/countriesModule";
import flutterwaveLogo from "../assets/flutterwave_logo.svg";
import paypalLogo from "../assets/paypal_logo.svg";
import monnifyLogo from "../assets/monnify_logo.svg";
import paystackLogo from "../assets/paystackLogoBlack.svg";
import stripeLogo from "../assets/stripeLogo.svg";
import PaymentForm from "./payment-subcomponents/PaymentForm";
import { useLocation, useNavigate, useParams } from "react-router";
import axios from "axios";
import paymentUrls from "@/utils/paymentUrls";
import generatePaymentPayload from "@/utils/generatePaymentPayload";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  // this auto clears error after 30 seconds
  useEffect(() => {
    if (err) {
      const timer = setTimeout(() => {
        setErr("");
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [err]);

  //form data from url query
  const dataQuery = useQuery();
  const merchantIdFromQuery = dataQuery.get("merchantId");
  const { merchantIdFromParam } = useParams();

  const merchantId = merchantIdFromParam || merchantIdFromQuery || paymentUrls.merchantId || "";
  const amount = dataQuery.get("amount") || "45000";
  const currencyFromQuery = dataQuery.get("currency") || "NGN";

  const paymentMethods = [
    { name: "PayPal", src: paypalLogo, url: paymentUrls.paypalPaymentURL },
    { name: "Flutterwave", src: flutterwaveLogo, url: paymentUrls.flutterwavePaymentURL },
    { name: "Paystack", src: paystackLogo, url: paymentUrls.paystackPaymentURL },
    { name: "Stripe", src: stripeLogo, url: paymentUrls.stripePaymentURL },
    { name: "Monnify", src: monnifyLogo, url: paymentUrls.monifyPaymentURL },
  ];

  // this find the matching currency in countriesData
  const currentCurrency = currencyFromQuery
  ? countriesData.find(
      (country) => country.currency?.code?.toLowerCase() === currencyFromQuery.toLowerCase()
    )
  : null;

  const selectedCurrency = currentCurrency
  ? {
      value: currentCurrency.currency.code, 
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={currentCurrency.flag} alt={currentCurrency.name.common} width="20" height="15" />
          {currentCurrency.currency.code}
        </div>
      ),
      currencyCode: currentCurrency.currency.code,
      name: currentCurrency.currency.name
    }
  : null;
 
  const handlePaymentSelection = (name) => {
    setSelectedPayment(name);
  };

  const initiatePayment = async () => {
    if (!selectedPayment || !amount || !email || !selectedCurrency) {
      setErr("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setErr("");

    const paymentUrl = paymentMethods.find((method) => method.name === selectedPayment)?.url;
   
    if (!paymentUrl) {
      setErr("Invalid payment method selected.");
      setLoading(false);
      return;
    }
      //testing
    console.log("Payment URL", paymentUrl)

    const payload = generatePaymentPayload({
      selectedPayment,
      amount,
      email,
      currency: selectedCurrency?.value,
      merchantId,
    });

    //testing
    console.log("Payload Data", payload);
    console.log("Payload Data", payload, "Type of payload is:", typeof payload);

    const dynamicPaymentUrl = Object.keys(payload).includes("merchantId") 
    ? paymentUrl 
    : `${paymentUrl}?merchantId=${merchantId}`;

    try {
   /*    const res = await axios.post(paymentUrl, new URLSearchParams(payload), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }); */

      const res = await axios.post(dynamicPaymentUrl, payload, {
        headers: { "Content-Type": "application/json" },
      });

      //testing
      console.log("Response Data", res.data)
      

      if (res.data?.url) {
        window.location.href = res.data.url;
      } else {
        setErr("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setErr(error.response?.data?.message || "Internal server error. Please try again.");
      } else {
        setErr("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxW="full" bg="gray.100" py={8} px={4}>
      <PaymentForm
        amountValue={amount}
        selectedCurrency={selectedCurrency}
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
        handlePaymentSelection={handlePaymentSelection}
        paymentMethods={paymentMethods}
        email={email}
        setEmail={setEmail}
        err={err}
        loading={loading}
        initiatePayment={initiatePayment}
        amount={amount}
        userName={userName}
        setUserName={setUserName}
      />
    </Container>
  );
};

export default Payment;
