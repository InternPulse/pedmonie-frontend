import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { countriesData } from "../utils/countriesModule";
import flutterwaveLogo from "../assets/flutterwave_logo.svg";
import paypalLogo from "../assets/paypal_logo.svg";
import quicktellerLogo from "../assets/quickteller_logo.svg";
import monnifyLogo from "../assets/monnify_logo.svg";
import PaymentForm from "./payment-subcomponents/PaymentForm";

const Payment = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amountValue, setAmountValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const paymentMethodLogos = [
    { src: paypalLogo, name: "PayPal" },
    { src: flutterwaveLogo, name: "Flutterwave" },
    { src: quicktellerLogo, name: "Quickteller" },
    { src: monnifyLogo, name: "Monnify" },
  ];

  const countryOptions = countriesData.map((country) => ({
    value: country.code,
    label: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={country.flag} alt={country.name.common} width="20" height="15" />
        ({country.phoneCode})
      </div>
    ),
    phoneCode: country.phoneCode,
  }));

  const currencyOptions = countriesData
    .map((country) => ({
      value: country.currency?.code,
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={country.flag} alt={country.name.common} width="20" height="15" />
          {country.currency?.code}
        </div>
      ),
      currencyCode: country.currency?.code,
    }))
    .filter((currency) => currency.value);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setPhoneNumber(`${selectedOption.phoneCode} `);
  };

  const handleCurrencyChange = (selectedOption) => {
    setSelectedCurrency(selectedOption);
  };

  const handleAmountChange = (e) => {
    const amount = e.target.value;
    setAmountValue(amount || "0.00");
  };  

  const handlePaymentSelection = (name) => {
    setSelectedPayment(name);
  };

  return (
    <Container maxW="full" bg="gray.100" py={8} px={4}>
      <PaymentForm 
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        amountValue={amountValue}
        selectedCurrency={selectedCurrency}
        selectedPayment={selectedPayment}
        setSelectedPayment={setSelectedPayment}
        handleCountryChange={handleCountryChange}
        handleCurrencyChange={handleCurrencyChange}
        handleAmountChange={handleAmountChange}
        handlePaymentSelection={handlePaymentSelection}
        currencyOptions={currencyOptions}
        countryOptions={countryOptions}
        paymentMethodLogos={paymentMethodLogos}
      />
    </Container>
  );
};

export default Payment;
