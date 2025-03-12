import { Box, Heading, Separator } from "@chakra-ui/react";
import RevenueLineChart from "./RevenueLineChart";

const RevenueGrowthChart = () => {
  return (
    <Box 
      bg="white" 
      p={6} 
      borderRadius="lg" 
      width="100%" 
     // maxW="900px" 
      h="full"
      mx="auto" 
      mt={5} 
      textAlign="center"
    >
      <Heading 
        size="lg" 
        mb={4} 
        color="teal.600"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Revenue Growth Chart
      </Heading>
      <Separator mb={5} borderColor="teal.300" />
      <RevenueLineChart />
    </Box>
  );
};

export default RevenueGrowthChart;
