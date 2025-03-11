import { Box, VStack, Text } from "@chakra-ui/react";
import TestimonialCarousel from "./TestimonialCarousel";
import Steps from "../Steps/Steps";
const Customers = () => {
  return (
    <>
      <Box>
        <Steps />
        <VStack
          alignItems="center"
          mt="36px"
          color="black"
          fontWeight="semibold"
        >
          <Text fontSize="48px">Words of praises from others</Text>
          <Text fontSize="48px">about our presence</Text>
        </VStack>
        {/* <Customers/> */}
        {/* <Cards/> */}
        <TestimonialCarousel />
      </Box>
    </>
  );
};
export default Customers;
