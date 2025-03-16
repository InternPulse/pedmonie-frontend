
import { Box, VStack, Text } from "@chakra-ui/react";
import TestimonialCarousel from "./TestimonialCarousel";
import Steps from "../Steps/Steps";

const Customers = () => {
  return (
    <Box w="full" py={{ base: 6, md: 10 }} px={{ base: 4, md: 8, lg: 16 }}>
      {/* Steps Component */}
      <Steps />

      {/* Headings */}
      <VStack
        alignItems="center"
        mt={{ base: 6, md: 10 }}
        color="black"
        fontWeight="semibold"
        spacing={0} // Ensures headings are close, like two lines
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          lineHeight="shorter"
        >
          Words of praises from others
        </Text>
        <Text
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          textAlign="center"
          lineHeight="shorter"
        >
          about our presence
        </Text>
      </VStack>

      {/* Carousel */}
      <TestimonialCarousel />
    </Box>
  );
};

export default Customers;
