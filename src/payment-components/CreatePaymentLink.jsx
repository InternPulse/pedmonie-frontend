import {
    Flex,
    Text,
    Button,
    ButtonGroup,
    Box,
    Icon,
    Textarea,
    Fieldset,
    Input,
    CloseButton
  } from "@chakra-ui/react";
  import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
  } from "../components/ui/file-upload";
  import { Field } from "../components/ui/field";
  import { FaLongArrowAltLeft as GoBackIcon } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import { countriesData } from "../utils/countriesModule";
  import { useState } from "react";
  import Select from "react-select";
  import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
  } from "../components/ui/dialog";
  import LinkSuccessMsg from "./LinkSuccessMsg"; // Import the LinkSuccessMsg component
  
  const CreatePaymentLink = () => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState("");
  
    // Description field counter and handler
    const [description, setDescription] = useState("");
    const [isLimitReached, setIsLimitReached] = useState(false);
    const MAX_CHAR_COUNT = 180;
  
    const handleDescriptionChange = (e) => {
      const inputText = e.target.value;
  
      if (inputText.length <= MAX_CHAR_COUNT) {
        setDescription(inputText);
        setIsLimitReached(false);
      } else {
        setIsLimitReached(true);
      }
    };
  
    // Formatting the currencies to be used in Select from react-select
    const currencyOptions = countriesData
      .map((country) => ({
        value: country.currency?.code,
        label: `${country.currency?.code}`,
      }))
      .filter((currency) => currency.value);
  
    // Formatting the countries to be used in Select from react-select
    const options = countriesData.map((country) => ({
      value: country.code,
      label: (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={country.flag} alt={country.name.common} width="20" height="15" />
          ({country.phoneCode})
        </div>
      ),
      phoneCode: country.phoneCode,
    }));
  
    const handleCountryChange = (selectedOption) => {
      setSelectedCountry(selectedOption);
      setPhoneNumber(`${selectedOption.phoneCode} `);
    };
  
    return (
      <Flex
        as="main"
        flexDir={{ base: "column", lg: "row" }}
        minH="100vh"
        width="100%"
        align="center"
        justify="center"
        bg="gray.100"
        p={{ base: 4, lg: 6 }}
      >
        {/* Container for the two sections */}
        <Flex
          w="full"
          maxW={{ base: "100%", lg: "90%", xl: "1200px" }}
          flexDirection={{ base: "column", lg: "row" }}
          bg="white"
          p={{ base: 2, lg: 4 }}
          borderRadius="lg"
          boxShadow="lg"
        >
          {/* Left Section - Link form */}
          <Flex
            flex={1}
            direction="column"
            align="center"
            justify="center"
            bgColor="white"
            p={{ base: 4, lg: 6 }}
          >
            <Link to={`${""}`}>
              <Flex
                as="span"
                align="start"
                gap={{ base: 1, md: 2 }}
                color="inherit"
                _hover={{ color: "green.800" }}
              >
                <Icon boxSize={{ base: 4, md: 5, lg: 6 }}>
                  <GoBackIcon />
                </Icon>
                <Text fontWeight="600" fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                  Create Payment Link
                </Text>
              </Flex>
            </Link>
  
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
                    <Field label="Name">
                      <Input name="name" type="text" placeholder="Value" />
                    </Field>
  
                    <Field label="Description">
                      <Textarea
                        placeholder="Enter description..."
                        value={description}
                        onChange={handleDescriptionChange}
                        resize="none"
                      />
                    </Field>
  
                    {/* Character Counter & Warning Message */}
                    <Box position="relative" width="100%">
                      <Flex justifyContent="space-between" mt={1} px={2} color="gray.600">
                        <Text fontSize="sm" color={isLimitReached ? "red.500" : "transparent"}>
                          Maximum character limit reached!
                        </Text>
                        <Text fontSize="sm">
                          {description.length}/{MAX_CHAR_COUNT}
                        </Text>
                      </Flex>
                    </Box>
  
                    <Field label="Amount">
                      <Flex w="100%" gap={2}>
                        <Box flex={1}>
                          <Select options={currencyOptions} placeholder="Currency" />
                        </Box>
                        <Input name="amount" placeholder="0.00" type="number" flex={2} />
                      </Flex>
                      <Text mt={1} mb={1}>
                        You can leave empty to allow customers to enter desired amount
                      </Text>
                    </Field>
  
                    <Text mt={2} mb={1}>
                      Where should we send your payment notification?
                    </Text>
  
                    <Field label="Phone number">
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
  
                    <Field label="Email Address">
                      <Input name="email" type="email" placeholder="abby@example.com" />
                    </Field>
                  </Fieldset.Content>
  
                  {/* Create and Cancel Buttons */}
                  <Box textAlign="center" mt={6}>
                    <DialogRoot>
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
                        >
                          Create Link
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogBody>
                          <LinkSuccessMsg />
                        </DialogBody>
                        <DialogFooter>
                          <DialogCloseTrigger asChild>
                            <CloseButton />
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
  
          {/* Right Section - Upload files */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            flex={1}
            bgColor="white"
            p={{ base: 4, lg: 6 }}
            gap={8}
          >
            <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
              <FileUploadDropzone
                label={
                  <>
                    <Text fontSize={{ base: "xs", lg: "sm", xl: "md" }}>
                      Drag your image from your computer here or click to upload{" "}
                    </Text>
                  </>
                }
              />
              <FileUploadList />
            </FileUploadRoot>
          </Flex>
        </Flex>
      </Flex>
    );
  };
  
  export default CreatePaymentLink;