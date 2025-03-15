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
  const merchantIdFromQuery = dataQuery.get("merchant_id");
  const { merchantIdFromParam } = useParams();

  const merchantId =
    merchantIdFromParam || merchantIdFromQuery || paymentUrls.merchantId || "";
  const amount = dataQuery.get("amount") || "45000";
  const currencyFromQuery = dataQuery.get("currency") || "NGN";

  const paymentMethods = [
    { name: "PayPal", src: paypalLogo, url: paymentUrls.paypalPaymentURL },
    {
      name: "Flutterwave",
      src: flutterwaveLogo,
      url: paymentUrls.flutterwavePaymentURL,
    },
    {
      name: "Paystack",
      src: paystackLogo,
      url: paymentUrls.paystackPaymentURL,
    },
    { name: "Stripe", src: stripeLogo, url: paymentUrls.stripePaymentURL },
    { name: "Monnify", src: monnifyLogo, url: paymentUrls.monifyPaymentURL },
  ];

  // this find the matching currency in countriesData
  const currentCurrency = currencyFromQuery
    ? countriesData.find(
        (country) =>
          country.currency?.code?.toLowerCase() ===
          currencyFromQuery.toLowerCase()
      )
    : null;

  const selectedCurrency = currentCurrency
    ? {
        value: currentCurrency.currency.code,
        label: (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img
              src={currentCurrency.flag}
              alt={currentCurrency.name.common}
              width="20"
              height="15"
            />
            {currentCurrency.currency.code}
          </div>
        ),
        currencyCode: currentCurrency.currency.code,
        name: currentCurrency.currency.name,
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

    const paymentUrl = paymentMethods.find(
      (method) => method.name === selectedPayment
    )?.url;

    if (!paymentUrl) {
      setErr("Invalid payment method selected.");
      setLoading(false);
      return;
    }

    const payload = generatePaymentPayload({
      selectedPayment,
      amount,
      email,
      currency: selectedCurrency?.value,
      merchantId,
    });

    try {
      const formData = new URLSearchParams();

      Object.entries(payload).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const res = await axios.post(paymentUrl, formData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (res.data?.data) {
        //this set redirection for paystack
        if (res.data?.data.authorization_url) {
          const checkOutUrl = res.data?.data?.authorization_url;
          window.location.href = checkOutUrl;
        }

        //this set redirection for paypal
        if (res.data?.data.links && Array.isArray(res.data?.data.links)) {
          const approvedUrl = res.data?.data?.links?.find(
            (link) => link.rel === "approve"
          )?.href;

          if (approvedUrl) {
            window.location.href = approvedUrl;
          }
        }
      } else {
        setErr("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setErr(
          error.response?.data?.message ||
            "Internal server error. Please try again."
        );
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
