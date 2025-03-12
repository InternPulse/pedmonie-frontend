import {
  Box,
  Image,
  Flex,
  HStack,
  Text,
  Container,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";
import flutterwave from "../../assets/icons/flutterwave.svg";
import opay from "../../assets/icons/opay.svg";
import paystack from "../../assets/icons/paystack.svg";
import trivago from "../../assets/icons/trivago.svg";
import statsBg from "../../assets/images/statsBg.svg";

const PartnersStat = () => {
  // RESPONSIVE FONTS FOR THE STATS
  const statsFontSize = useBreakpointValue({
    base: "4xl",
    sm: "3xl",
    md: "5xl",
    lg: "6xl",
  });

  return (
    <Box>
      {/* PATNERS SECTION */}
      <Container
        maxW="container.xl"
        px={{ base: 6, md: 10, xl: 24 }}
        py={{ base: 6, md: 10 }}
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align="center"
          width="full"
          gap={{ base: 6, md: 4 }}
        >
          <Text
            fontSize={{ base: "md", md: "sm", sm: "sm", xl: "md" }}
            fontWeight="medium"
            color="gray.600"
            whiteSpace="nowrap"
          >
            We proudly partner with over 1,000+ businesses
          </Text>

          {/* LOGOS */}
          <HStack
            w="fit-content"
            display="flex"
            spacing={{ base: 4, md: 6, xl: 8 }}
            gap={{ base: 4, md: 6, xl: 8 }}
            // justify={{ base: "center", md: "flex-start", xl: "flex-end" }}
            // flexWrap="wrap"
          >
            <Image
              src={flutterwave}
              alt="Flutterwave"
              h={{ base: "20px", md: "20px", xl: "20px" }}
            />
            <Image
              src={opay}
              alt="Opay"
              h={{ base: "20px", md: "20px", xl: "30px" }}
            />
            <Image
              src={paystack}
              alt="Paystack"
              h={{ base: "10px", md: "20px", xl: "25px" }}
            />
            <Image
              src={trivago}
              alt="Trivago"
              h={{ base: "20px", md: "20px", xl: "25px" }}
            />
          </HStack>
        </Flex>
      </Container>

      {/* STAT SECTION */}
      <Box
        width="100%"
        bgImage={{ base: "none", md: `url(${statsBg})`, xl: `url(${statsBg})` }}
        bgRepeat="no-repeat"
        backgroundPosition="center"
        bgSize="80%"
        mb={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH={{ base: "200px", md: "250px", lg: "300px" }}
      >
        <SimpleGrid
          px={{ base: "10px" }}
          py={{ base: "20px" }}
          bg={{ base: "#2E5C38", md: "none", xl: "none" }}
          columns={3}
          width={{ base: "full", md: "80%", lg: "70%" }}
          textAlign="center"
          color="white"
          spacing={{ base: 4, md: 8 }}
        >
          {/* FIRST STAT */}
          <Box>
            <Text fontSize={statsFontSize} fontWeight="bold" mb={1}>
              100k+
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>Payments daily</Text>
          </Box>
          {/* SECOND STAT */}
          <Box>
            <Text fontSize={statsFontSize} fontWeight="bold" mb={1}>
              5M+
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>API calls</Text>
          </Box>
          {/* THIRD STAT */}
          <Box>
            <Text fontSize={statsFontSize} fontWeight="bold" mb={1}>
              6
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }}>Payment Options</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default PartnersStat;
