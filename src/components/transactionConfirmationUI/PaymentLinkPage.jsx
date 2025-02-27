import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { Check, Copy} from "lucide-react";

import Email from "./paymentLinkAssets/email.png"
import WhatsApp from "./paymentLinkAssets/whatsapp.png"
import Chat from "./paymentLinkAssets/sms.png"
import CheckIcon from "./paymentLinkAssets/check.png"

const PaymentLinkPage = () => {
  const [copied, setCopied] = React.useState(false);
    const paymentLink = "https://payment.link/xyz123";

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box w="100vw" h="100vh" bg="gray.50">

      {/* Main Content */}
      <Flex justify="center" pt={20}>
        <VStack
          bg="gray.100"
          p={8}
          borderRadius="md"
          spacing={6}
          align="center"
          maxW="md"
          w="full"
          mx={4}
        >
                  {/* Success Icon */}
            <img src={CheckIcon} alt="check" width="50px" />
         

          {/* Success Message */}
          <Text fontSize="md" fontWeight="500" color="gray.700">
            Payment link generated!
          </Text>

          {/* Payment Link */}
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              py="1.25rem"
              value={paymentLink}
              readOnly
              bg="gray.100"
              borderColor="yellow.300"
              color="gray.700"
              rounded={"0px"}
            />
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleCopy}
              leftIcon={copied ? <Check size={16} /> : <Copy size={16} />}
              fontSize="xs"
              bg="gray.100"
              ml="10px"
              _hover={{ bg: "green.500", color: "white" }}
              px="2.5rem"
              py="1.25rem"
              border="1px solid black"
                          color="gray.700" 
                          rounded={"0px"}
            >
              {copied ? "Copied" : "Copy Link"}
            </Button>
          </InputGroup>

          {/* Share Options */}
          <VStack spacing={2} w="full">
            <Text fontSize="sm" color="gray.600">
              Share this link via:
            </Text>
            <HStack spacing={2} justify="center">
              <img src={Email} alt="Email" width="20px" />
              <img src={WhatsApp} alt="WhatsApp" width="20px" />
              <img src={Chat} alt="chat" width="20px" />
            </HStack>
          </VStack>

          {/* Action Buttons */}
          <VStack spacing={2} w="full">
            <Button
              w="full"
              bg="#2E5C38"
              color="white"
              _hover={{ bg: "#244a2d" }}
            >
              Back To Payment Links
            </Button>
            <Button
              w="full"
              variant="outline"
              color="gray.600"
              borderColor="gray.300"
            >
              View QR Code
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default PaymentLinkPage;
