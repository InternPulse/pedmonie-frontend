import { Flex, Box } from "@chakra-ui/react";
import RevenueGrowthChart from "./RevenueGrowthChart";
import PaymentSuccessRate from "./PaymentSuccessRate";

const OverviewSectionTwo = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} 
      justify="space-between"
      align="center"
      w="100%"
      px={{ base: 4, md: 8 }} 
      py={{ base: 6, md: 10 }} 
      gap={{ base: 6, md: 8 }} 
    >
      {/* Revenue Growth Chart */}
      <Box w={{ base: "100%", md: "55%" }} maxW="900px">
        <RevenueGrowthChart />
      </Box>

      {/* Payment Success Rate Chart */}
      <Box w={{ base: "100%", md: "40%" }} maxW="600px">
        <PaymentSuccessRate />
      </Box>
    </Flex>
  );
};

export default OverviewSectionTwo;
