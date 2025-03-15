import {
  Flex,
  Text,
  Button,
  Box,
  Textarea,
  Fieldset,
  Input,
  CloseButton,
} from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { FaLongArrowAltLeft as GoBackIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
import Select from "react-select";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogRoot,
  DialogTrigger,
} from "../../components/ui/dialog";
import LinkSuccessMsg from "../LinkSuccessMsg";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { timeFormatter } from "@/components/timeFormatter";

const CreateLinkForm = ({
  handleCountryChange,
  isLimitReached,
  description,
  handleDescriptionChange,
  MAX_CHAR_COUNT,
  currencyOptions,
  options,
  selectedCountry,
  phoneNumber,
  setPhoneNumber,
  paymentType,
}) => {
  const navigate = useNavigate();

  //navigation to go back to select payment type
  const fromPath = "/merchant/select-payment-type";
  const handleGoBack = (fromPath) => {
    if (!fromPath) {
      throw new Error("Path to get the previous page is missing.");
    } else {
      navigate(fromPath);
    }
  };
  const [paymentUrl, setPaymentUrl] = useState();
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [value, setValue] = useState("");
  const [amount, setAmount] = useState("");

  const getToken = localStorage.getItem("authToken");
  const merchantId = jwtDecode(getToken).merchant_id;
  const paymentId = uuidv4();
  const baseUrl = window.location.origin;
  const toPath = "/make-payment";
  const date = new Date().toISOString();
  const timeAdded = timeFormatter(date);

  const existingData = JSON.parse(localStorage?.getItem("paymentData")) || [];

  const handleCreateLink = (e) => {
    if (!value) {
      alert("Name cannot be empty");
      e.preventDefault();
      return;
    }

    const customUrl = `${baseUrl}${toPath}?merchant_id=${encodeURIComponent(
      merchantId
    )}&currency=${encodeURIComponent(
      selectedCurrency
    )}&amount=${encodeURIComponent(amount)}&payment_id=${encodeURIComponent(
      paymentId
    )}`;

    const newData = {
      name: value,
      amount: amount,
      currency: selectedCurrency,
      linkType: paymentType,
      url: customUrl,
      description: description,
      date: timeAdded,
      payment_id: paymentId,
    };

    existingData.push(newData);

    localStorage.setItem("paymentData", JSON.stringify(existingData));
    setPaymentUrl(customUrl);
  };

  return (
    <>
      {/* Left Section - Link form */}
      <Flex
        flex={2}
        direction="column"
        align="center"
        justify="center"
        bgColor="white"
        p={{ base: 4, lg: 6 }}
      >
        <Box w="full" pb="4">
          <Flex
            as="span"
            align="start"
            gap={{ base: 1, md: 2 }}
            color="inherit"
            _hover={{ color: "green.800" }}
          >
            <Button
              fontWeight="600"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              bg="transparent"
              border="none"
              color="inherit"
              onClick={() => handleGoBack(fromPath)}
            >
              <GoBackIcon color="#333333" />
              <Text
                fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
                color="#333333"
              >
                Back to Payment Types
              </Text>
            </Button>
          </Flex>
        </Box>

        <Flex
          direction="column"
          align="center"
          justify="center"
          w="full"
          bg="transparent"
          p={4}
          borderRadius="md"
          boxShadow="sm"
          gapY={8}
        >
          <Box w="full" maxW="lg">
            <Fieldset.Root size="lg" w="full">
              <Fieldset.Content>
                <Field label="Name" color="#333333">
                  <Input
                    name="name"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Value"
                    required
                  />
                </Field>

                <Field label="Description" color="#333333">
                  <Textarea
                    placeholder="Enter description..."
                    value={description}
                    onChange={handleDescriptionChange}
                    resize="none"
                  />
                </Field>

                {/* Character Counter & Warning Message */}
                <Box position="relative" width="100%">
                  <Flex
                    justifyContent="space-between"
                    mt={1}
                    px={2}
                    color="gray.600"
                  >
                    <Text
                      fontSize="sm"
                      color={isLimitReached ? "red.500" : "transparent"}
                    >
                      Maximum character limit reached!
                    </Text>
                    <Text fontSize="sm">
                      {description.length}/{MAX_CHAR_COUNT}
                    </Text>
                  </Flex>
                </Box>

                <Field label="Amount" color="#333333">
                  <Flex w="100%" gap={2}>
                    <Box flex={1}>
                      <Select
                        options={currencyOptions}
                        placeholder="Currency"
                        value={currencyOptions.find(
                          (option) => option.value === selectedCurrency
                        )}
                        onChange={(selectedOption) =>
                          setSelectedCurrency(selectedOption.value)
                        }
                      />
                    </Box>
                    <Input
                      name="amount"
                      placeholder="0.00"
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      flex={2}
                    />
                  </Flex>
                  <Text
                    mt={1}
                    mb={1}
                    fontSize="12px"
                    fontWeight="medium"
                    color="#919191"
                  >
                    You can leave empty to allow customers to enter desired
                    amount
                  </Text>
                </Field>

                <Text mt={2} mb={1} fontSize="14px" color="#333333">
                  Where should we send your payment notification?
                </Text>

                <Field label="Phone number" color="#333333">
                  <Flex w="100%" gap={2}>
                    <Box flex={1}>
                      <Select
                        options={options}
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        getOptionLabel={(e) => e.label}
                      />
                    </Box>
                    <Input
                      name="phone-number"
                      type="tel"
                      placeholder="+234 916 8746 416"
                      flex={2}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Flex>
                </Field>

                <Field label="Email Address" color="#333333">
                  <Input
                    name="email"
                    type="email"
                    placeholder="abby@example.com"
                  />
                </Field>
              </Fieldset.Content>

              {/* Create and Cancel Buttons */}
              <Box textAlign="center" mt={6}>
                <DialogRoot size="sm">
                  <DialogTrigger asChild>
                    <Button
                      w={{ base: "40%", sm: "48%", md: "45%", lg: "40%" }}
                      bgColor="white"
                      pl={4}
                      pr={4}
                      color="green.800"
                      border="solid 1px"
                      borderColor="green.800"
                      _hover={{ bgColor: "green.800", color: "white" }}
                      mr={4}
                      onClick={handleCreateLink}
                    >
                      Create Link
                    </Button>
                  </DialogTrigger>
                  <DialogContent bg="white">
                    <DialogBody>
                      {<LinkSuccessMsg paymentUrl={paymentUrl} />}
                    </DialogBody>
                    <DialogFooter>
                      <DialogCloseTrigger asChild>
                        {/* <CloseButton /> */}
                      </DialogCloseTrigger>
                    </DialogFooter>
                  </DialogContent>
                </DialogRoot>
                <Button
                  w={{ base: "40%", sm: "48%", md: "45%", lg: "40%" }}
                  bgColor="white"
                  pl={4}
                  pr={4}
                  color="green.800"
                  border="solid 1px"
                  borderColor="green.800"
                  _hover={{ bgColor: "green.800", color: "white" }}
                >
                  Cancel
                </Button>
              </Box>
            </Fieldset.Root>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default CreateLinkForm;
