import { Box, Heading, Separator } from "@chakra-ui/react";
import RevenueLineChart from "./RevenueLineChart";

const RevenueGrowthChart = () => {
  return (
    <Box 
      width="100%"  
      h="full"
      mx="auto" 
    >
    {/*   <Heading 
        size="lg" 
        mb={4} 
        color="teal.600"
        fontWeight="bold"
        textTransform="uppercase"
      >
        Revenue Growth Chart
      </Heading> 
      <Separator mb={5} borderColor="teal.300" />
      */}
      <RevenueLineChart />
    </Box>
  );
};

export default RevenueGrowthChart;
