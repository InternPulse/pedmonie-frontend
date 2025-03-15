import {
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Flex,
  Image,
  Icon,
} from "@chakra-ui/react";
import Email from "./paymentLinkAssets/email.png";
import WhatsApp from "./paymentLinkAssets/whatsapp.png";
import Chat from "./paymentLinkAssets/sms.png";
import { ClipboardButton, ClipboardRoot } from "../components/ui/clipboard";
import { FcCheckmark as successIcon } from "react-icons/fc";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style/animation.css";

const PaymentLink = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const paymentLink = location.state?.paymentUrl;

  let shortUrl = "";

  if (paymentLink) {
    const startIndex = paymentLink.indexOf("?") + 1;

    if (startIndex !== -1) {
      const sURL = paymentLink.slice(startIndex, startIndex + 25) + "...";
      shortUrl = sURL;
    }
  }

  // const shortUrl = paymentLink.slice(indexOf(paymentLink.indexOf("?")));

  // const paymentLink = "httmquiweoharr@!g5678";
  const fromPath = "/merchant/create-payment-link";

  const handleGoBack = () => navigate(fromPath);

  // setting success mark animation delay
  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <Flex w="full" bg="gray.100" justify="center" align="center" p={4}>
      <Box
        w="50%"
        bg="white"
        borderRadius="lg"
        boxShadow="xl"
        p={6}
        textAlign="center"
      >
        {/* Success Icon */}
        <Icon
          as={successIcon}
          color="green.800"
          boxSize={12}
          className={show ? "scale-in" : ""}
        />

        <Text
          fontSize={{ base: "14px", md: "18px" }}
          fontWeight="bold"
          color="gray.700"
          mt={4}
        >
          Payment link generated!
        </Text>

        {/* Payment Link and Copy Button */}
        <HStack
          mt={4}
          p={3}
          border="2px solid"
          borderColor="yellow.400"
          borderRadius="md"
          bg="gray.50"
          justify="space-between"
          align="center"
          // flexWrap="wrap"
        >
          <Text
            w="full"
            fontSize="16px"
            fontStyle="italic"
            fontWeight="400"
            color="gray.800"
            isTruncated
            maxW="70%"
            textAlign="left"
          >
            {shortUrl}
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
        <HStack spacing={6} justify="center" mt={2}>
          <Link to="">
            <Image src={Email} alt="Email" boxSize="32px" />
          </Link>
          <Link to="">
            <Image src={WhatsApp} alt="WhatsApp" boxSize="32px" />
          </Link>
          <Link to="">
            <Image src={Chat} alt="Chat" boxSize="32px" />
          </Link>
        </HStack>

        {/* Action Buttons */}
        <VStack spacing={4} mt={8} w="full">
          <Button
            w="50%"
            bg="white"
            color="green.800"
            border="2px solid"
            fontSize="18px"
            fontWeight="500"
            borderRadius="md"
            _hover={{
              bg: "green.800",
              color: "white",
              border: "2px solid",
              borderColor: "green.800",
            }}
            onClick={handleGoBack}
          >
            Back to payment links
          </Button>

          <Button
            w="50%"
            bg="white"
            color="green.800"
            border="2px solid"
            fontSize="18px"
            fontWeight="500"
            borderRadius="md"
            _hover={{
              bg: "green.800",
              color: "white",
              border: "2px solid",
              borderColor: "green.800",
            }}
          >
            View QR code
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default PaymentLink;
