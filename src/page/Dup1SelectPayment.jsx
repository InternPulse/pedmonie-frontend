import { useState } from "react";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import Payment from "../components/Payment";
import SinglePayment from "../assets/SinglePayment.svg";
import RecurringPayment from "../assets/RecurringPayment.svg";
import PaymentLink from "../assets/PaymentLink.svg";
import Cancel from "../assets/Cancel.svg";

function SelectPayment() {
  const [selected, setSelected] = useState(""); // Keeps track of the selected payment type

  return (
    <Box bg="#F5F5F5" minH="100vh" pt="50px" pb="100px">
      <Box borderBottom="2px solid" borderColor="#DDDDDD" h="55px" px="47px">
        <Image src={Cancel} alt="Payment Option" w="32px" cursor="pointer" />
      </Box>
      <Box>
        <Text
          color="#333333"
          fontWeight="medium"
          textAlign="center"
          pt="89px"
          pb="71px"
          fontSize={["14px", "20px", "26px", "32px"]}
        >
          Select a payment type to continue
        </Text>

        <Flex
          wrap="wrap"
          maxW="858px"
          gap="20px"
          m="auto"
          justify="space-between"
        >
          <Payment
            value="single"
            selectedValue={selected}
            onChange={setSelected}
            imageSrc={SinglePayment}
            text1="Single Payment"
            text2="Make a direct payment to clients or customers, modify the currency as needed."
          />
          <Payment
            value="recurring"
            selectedValue={selected}
            onChange={setSelected}
            imageSrc={RecurringPayment}
            text1="Recurring Payment"
            text2="For recurring payments or single payments, create a link in your preferred currency."
          />
          <Payment
            value="link"
            selectedValue={selected}
            onChange={setSelected}
            imageSrc={PaymentLink}
            text1="Create Payment Link"
            text2="Generate and receive your link for your charity cause to be sent to merchants and clients."
          />
        </Flex>
      </Box>
      <Button
        h="42px"
        w="282px"
        bg="#2E5C38"
        color="white"
        mx="auto"
        mt="69px"
        borderRadius="8px"
        _hover={{ bg: "#24502E" }} 
        _active={{ bg: "#1E4525" }} 
        display="block" 
      >
        Proceed to generate link
      </Button>
    </Box>
  );
}

export default SelectPayment;
