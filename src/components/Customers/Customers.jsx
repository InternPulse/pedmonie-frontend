import { Box, VStack, Text } from "@chakra-ui/react";
import TestimonialCarousel from "./TestimonialCarousel";
import Steps from "../Steps/Steps";
const Customers = () => {
  return (
    <>
      <Box>
        <Steps />
        <VStack alignItems="center" mt="36px">
          <Text textStyle="3xl">Words of praises from others</Text>
          <Text textStyle="3xl">about our presence</Text>
        </VStack>
        {/* <Customers/> */}
        {/* <Cards/> */}
        <TestimonialCarousel />
      </Box>
    </>
  );
};
export default Customers;
