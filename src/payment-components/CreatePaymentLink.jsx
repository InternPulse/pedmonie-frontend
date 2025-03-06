import {
    Flex,
    Text,
  } from "@chakra-ui/react";
  import {
    FileUploadDropzone,
    FileUploadList,
    FileUploadRoot,
  } from "../components/ui/file-upload";
  import { countriesData } from "../utils/countriesModule";
  import { useState } from "react";
import CreateLinkForm from "./payment-subcomponents/CreateLinkForm"; 

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
           <CreateLinkForm 
           handleCountryChange={handleCountryChange}
           isLimitReached={isLimitReached}
           description={description}
           handleDescriptionChange={handleDescriptionChange}
           MAX_CHAR_COUNT={MAX_CHAR_COUNT}
           currencyOptions={currencyOptions}
           options={options}
           selectedCountry={selectedCountry}
           phoneNumber={phoneNumber}
           setPhoneNumber={setPhoneNumber}
           />

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
            <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={5}>
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