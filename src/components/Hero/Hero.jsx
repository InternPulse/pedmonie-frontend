import { Box, Flex, Icon, Image, Span, Text } from "@chakra-ui/react";
import smallCircles from "../../assets/images/smallCircles.svg";
import paymentImage from "../../assets/images/paymentImage.svg?url";
import globe from "../../assets/images/globe.svg?url";
import CustomButton from "../CustomButton";
import { useNavigate } from "react-router";

function Hero() {
  const navigate = useNavigate();
  return (
    <Box
      w="full"
      display="flex"
      flexDirection={{ base: "column-reverse", xl: "row" }}
      pt={{ base: "40px", xl: "80px" }}
      gapX="84px"
      px={{ base: "15px", md: "43px", xl: "95px" }}
      // bgImage={{ base: "none", md: "none", xl: `url(${smallCircles})` }}
      // bgRepeat="no-repeat"
      // backgroundPosition="right"
      // bgSize="55%"
    >
      <Box
        w={{ base: "full", xl: "650px" }}
        display="flex"
        flexDirection="column"
        gapY="20px"
      >
        <Box
          display="flex"
          flexDirection="column"
          gapY="20px"
          // border="1px solid red"
        >
          <Box
            w="211px"
            h="48px"
            display={{ base: "none", xl: "flex" }}
            bg="#E5F3E8"
            px="16px"
            py="16px"
            spaceX="20px"
            alignItems="center"
            rounded="full"
            hideBelow="md"
          >
            <Image src={globe} alt="globe-icon" w="24px" />
            <Text color="#292D32" fontWeight="semibold">
              Payment Solution
            </Text>
          </Box>

          <Text
            w={{ base: "250px", md: "full", xl: "450px" }}
            px={{ base: "22px", md: "0", xl: "0" }}
            fontWeight={{ base: "normal", xl: "semibold" }}
            fontFamily="Satoshi, sans-serif"
            fontSize={{ base: "32px", md: "48px", xl: "40px" }}
            textAlign={{ base: "center", md: "center", xl: "left" }}
            alignSelf={{ base: "center", xl: "self-start" }}
            color="black"
          >
            Effortless Payments for Your <Span color="#4E995E">Business</Span>
          </Text>

          <Text
            w={{ base: "full", md: "full", xl: "65%" }}
            textAlign={{ base: "center", md: "center", xl: "left" }}
            fontWeight="medium"
            fontSize={{ sm: "24px", md: "24px", xl: "20px" }}
            color="blackAlpha.600"
            // border="1px solid #000"
          >
            Accept all forms of payments seamlessly&ndash;online, in-store, and
            on-the-go
          </Text>
        </Box>

        <Box
          maxW="534"
          display="flex"
          flexDirection="row"
          gap="20px"
          alignSelf={{ base: "center", md: "center", xl: "self-start" }}
          // border="1px solid #000"
        >
          <CustomButton
            bg="#2E5C38"
            color="white"
            px="4"
            rounded="full"
            onClick={() => navigate("/signin")}
          >
            Get Started Today
          </CustomButton>
          <CustomButton
            px={8}
            color="#2E5C38"
            rounded="full"
            border="1px solid #2E5C38"
          >
            Learn More
          </CustomButton>
        </Box>
      </Box>

      <Box
        w="full"
        maxW={{ xl: "730px" }}
        ml={{ base: "", md: "", xl: "40px" }}
        px={{ base: "", md: "40px", xl: "0" }}
        pb={{ md: "40px" }}
        display={{ base: "none", md: "block", xl: "block" }}
      >
        <Image
          src={paymentImage}
          alt="payment-image"
          w="full"
          maxW={{ xl: "730px" }}
          objectFit="contain"
        />
      </Box>
    </Box>
  );
}

export default Hero;
