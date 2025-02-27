import React from "react";
import { Box, VStack, Text, Button, Flex, IconButton } from "@chakra-ui/react";
import { X } from "lucide-react";
import successImage from "./successMessageAssets/success.jpg";

const PaymentSuccessMessage = ({ onClose }) => {
  return (
    <Box w="100vw" h="100vh" bg="white" overflow="hidden" position="relative">
      <Flex h="full" align="center" justify="center">
        {/* Close button */}
        <IconButton
          size={20}
          icon={<X size={20} />}
          position="absolute"
          right="500px"
          top="180px"
          zIndex={2}
          rounded="full"
          bg="white"
          color="black"
          _hover={{ bg: "gray.100" }}
          onClick={onClose}
          aria-label="Close modal"
          border="3px solid black"
        />

        <Box position="relative" maxW="md" w="full" mx={4}>
          <VStack
            bg="white"
            pt={8}
            pb={10}
            px={6}
            borderRadius="xl"
            spacing={6}
            align="center"
          >
            {/* Success Image */}
            <Box w="150px" h="150px">
              <img
                src={successImage}
                alt="Success illustration"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <VStack spacing={3} textAlign="center">
              <Text
                fontSize="xl"
                fontWeight="600"
                color="#333"
                lineHeight="1.2"
              >
                Payment link created!
              </Text>
              <Text fontSize="sm" color="#666" maxW="sm" lineHeight="1.5">
                Your payment link has been created successfully. You can now
                share it as a direct link or copy to your customers for easy
                payments.
              </Text>
            </VStack>

            <Button
              w="200px"
              bg="#2E5C38"
              color="white"
              _hover={{ bg: "#244a2d" }}
              py={6}
              fontSize="sm"
              fontWeight="500"
            >
              Get Payment Link
            </Button>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default PaymentSuccessMessage;
