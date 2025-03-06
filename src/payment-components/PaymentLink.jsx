import { Box, VStack, HStack, Text, Button, Flex, Image, Icon } from "@chakra-ui/react";
import Email from "./paymentLinkAssets/email.png";
import WhatsApp from "./paymentLinkAssets/whatsapp.png";
import Chat from "./paymentLinkAssets/sms.png";
import { ClipboardButton, ClipboardRoot } from "../components/ui/clipboard";
import { FcCheckmark as successIcon } from "react-icons/fc";
import { useEffect, useState } from "react";
import "./style/animation.css";
import { Link, useNavigate } from "react-router-dom";

const PaymentLink = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const paymentLink = "httmquiweoharr@!g5678";
  const fromPath = "/create-payment-link";

  const handleGoBack = (fromPath) => {
    if (!fromPath) {
      throw new Error("Path to get payment-link is missing.");
    } else {
      navigate(fromPath);
    }
  }

  // setting success mark animation delay
  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <Flex w="100vw" h="100vh" bg="gray.100" justify="center" align="center" p={4}>
      <Box
        w={{ base: "90%", sm: "80%", md: "500px" }}
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        p={6}
        textAlign="center"
      >
        {/* Success Icon */}
        <Icon as={successIcon} boxSize={16} className={show ? "scale-in" : ""} />

        <Text fontSize={{ base: "18px", md: "22px" }} fontWeight="bold" color="gray.700" mt={4}>
          Payment link generated!
        </Text>

              {/* Payment Link and Copy Button */}
        <HStack
          mt={4}
          p={2}
          border="2px solid"
          borderColor="yellow.400"
          borderRadius="md"
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="center"
          w="full"
          bg="gray.50"
          flexWrap="wrap"
          spacing={{ base: 2, md: 4 }}
        >
          <Text
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            color="gray.800"
            isTruncated
            maxW={{ base: "100%", md: "70%" }}
            textAlign={{ base: "center", md: "left" }}
          >
            {paymentLink}
          </Text>
          <ClipboardRoot value={paymentLink} timeout={1000}>
            <ClipboardButton
              bg="yellow.500"
              color="white"
              borderRadius="md"
              px={3}
              py={1}
              fontSize="14px"
              fontWeight="bold"
              _hover={{ bg: "yellow.600" }}
              _active={{ bg: "yellow.700" }}
            >
              Copy
            </ClipboardButton>
          </ClipboardRoot>
        </HStack>

        {/* Share Options */}
        <Text fontSize="16px" fontWeight="500" color="gray.600" mt={6}>
          Share the link via:
        </Text>
        <HStack spacing={6} gap={8} justify="center" mt={2}>
          <Link to={""}><Image src={Email} alt="Email" boxSize="32px" /></Link>
         <Link to={""}> <Image src={WhatsApp} alt="WhatsApp" boxSize="32px" /></Link>
          <Link to={""}><Image src={Chat} alt="Chat" boxSize="32px" /></Link>
        </HStack>

        {/* Action Buttons */}
        <VStack spacing={4} mt={8} w="full">
          <Button
            w="full"
            bg="#2E5C38"
            color="white"
            fontSize="18px"
            fontWeight="500"
            borderRadius="md"
            _hover={{ bg: "#244a2d" }}
            onClick={() => handleGoBack(fromPath)}
          >
            Back to payment links
          </Button>

          <Button
            w="full"
            color="#2E5C38"
            fontSize="18px"
            fontWeight="500"
            borderRadius="md"
            variant="outline"
            borderColor="#2E5C38"
            _hover={{ bg: "green.50" }}
          >
            View QR code
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default PaymentLink;

