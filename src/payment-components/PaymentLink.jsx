import React from "react";
import { Box, VStack, HStack, Text, Button, Flex, Image } from "@chakra-ui/react";



import Email from "./paymentLinkAssets/email.png";
import WhatsApp from "./paymentLinkAssets/whatsapp.png";
import Chat from "./paymentLinkAssets/sms.png";

const PaymentLink = () => {
  const paymentLink = "httmquiweoharr@g5678";

  const handleCopy = () => {
    navigator.clipboard.writeText(paymentLink);
    alert("Link copied!");
  };

  return (
    <Flex  w="100vw"  h="100vh"  bg="gray.100"  justifyContent="center"  alignItems="center"  p={{ base: 4, md: 0 }} >
  <Box  w={{ base: "90%", sm: "80%", md: "557px" }}  h="auto"   bg="gray.200"  display="flex"  flexDirection="column"
         justifyContent="center" alignItems="center" p={4} borderRadius="md" boxShadow="md"
  >
    {/* Top Section */}
    <VStack spacing={{ base: "24px", md: "48px" }} align="center" justifyContent="center" w="full">
      <Box>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="60" fill="white" />
          <path d="M50 15L22.5 42.5L10 30" stroke="#04A20B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Box>

      <VStack spacing="12px" align="stretch">
        <Text textAlign="center" color="#333" fontSize={{ base: "16px", md: "20px" }} fontWeight="700" lineHeight="28px" mt={{ base: "16px", md: "30px" }}>
          Payment link generated!
        </Text>

        <HStack spacing="8px" justifyContent="center" mt={{ base: "12px", md: "20px" }} flexWrap="wrap">
          <Box  h="42px"  px={{ base: "16px", md: "30px" }}  py="10px"  border="2px solid #F8D96C"  display="flex"
             justifyContent="center"  alignItems="center"  w={{ base: "100%", md: "auto" }}
          >
            <Text fontSize="16px" fontStyle="italic" fontWeight="400" textTransform="capitalize" color="#333">
              {paymentLink}
            </Text>
          </Box>

          <Button  h="42px"  px={{ base: "16px", md: "30px" }}  py="10px"  border="1px solid rgba(51, 51, 51, 0.4)"
                   display="flex"  justifyContent="center"  alignItems="center"  gap="10px"  bg="transparent"  onClick={handleCopy}
                    w={{ base: "100%", md: "auto" }} >
            <Text fontSize="16px" fontWeight="500" textTransform="capitalize" color="#333">
              Copy link
            </Text>
            <Box>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path
                    d="M15 6.75H8.25C7.42157 6.75 6.75 7.42157 6.75 8.25V15C6.75 15.8284 7.42157 16.5 8.25 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V8.25C16.5 7.42157 15.8284 6.75 15 6.75Z"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.75 11.25H3C2.60218 11.25 2.22064 11.092 1.93934 10.8107C1.65804 10.5294 1.5 10.1478 1.5 9.75V3C1.5 2.60218 1.65804 2.22064 1.93934 1.93934C2.22064 1.65804 2.60218 1.5 3 1.5H9.75C10.1478 1.5 10.5294 1.65804 10.8107 1.93934C11.092 2.22064 11.25 2.60218 11.25 3V3.75"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Box>
          </Button>
        </HStack>
      </VStack>

      {/* Middle Section */}
      <VStack spacing="12px" justifyContent="center" w="full">
        <Text textAlign="center" color="#505050" fontSize={{ base: "16px", md: "18px" }} fontWeight="500" lineHeight="20px" mt={{ base: "24px", md: "40px" }}>
          Share the link via:
        </Text>
        <HStack spacing={4} justify="center" mt={{ base: "12px", md: "20px" }}>
          <Image src={Email} alt="Email" boxSize="24px" />
          <Image src={WhatsApp} alt="WhatsApp" boxSize="24px" />
          <Image src={Chat} alt="Chat" boxSize="24px" />
        </HStack>
      </VStack>

      {/* Bottom Section - Buttons */}
      <VStack spacing="12px" w="full" mt={{ base: "30px", md: "60px" }}>
        <Button
          w={{ base: "100%", md: "302px" }}
          bg="#2E5C38"
          color="white"
          fontSize="18px"
          fontWeight="500"
          textTransform="capitalize"
          borderRadius="8px"
          _hover={{ bg: "#244a2d" }}
        >
          Back to payment links
        </Button>

        <Button
          w={{ base: "100%", md: "302px" }}
          color="#2E5C38"
          fontSize="18px"
          fontWeight="500"
          textTransform="capitalize"
          borderRadius="8px"
          variant="outline"
          borderColor="#2E5C38"
          _hover={{ bg: "green.50" }}
        >
          View QR code
        </Button>
      </VStack>
    </VStack>
  </Box>
</Flex>

  );
};

export default PaymentLink;
