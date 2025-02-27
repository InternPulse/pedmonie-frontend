import { Container, Box, Flex, Text, VStack } from "@chakra-ui/react";
import Customers from "../components/Customers";
import UsersPerMin from "../components/UsersPerMin";
import TotalRevenue from "../components/TotalRevenue";
import TotalRevenueBarChart from "../components/TotalRevenueBarChart";
import SalesByCountryData from "@/components/SalesByCountryData";

const Analytics = () => {
  return (
    <VStack spacing={8} align="stretch" p={6}> 
      {/* Top Section: Total Revenue and Bar Chart */}
      <Flex justify="center" align="center" gap={6} wrap="wrap">
        <TotalRevenue />
        <TotalRevenueBarChart />
      </Flex>

      {/* Bottom Section: Three Main Containers */}
      <Flex justify="space-between" wrap="wrap" gap={6} flex={1}>
        {/* Customers Section */}
        <Box 
          textAlign="left" 
          border="1px solid #EFF0F6" 
          borderRadius="md" 
          m={4}
          p={4} 
          flex="1"
          minW="300px"
          w="200px"
          height='200px'
        >
          <Text fontSize="lg" fontWeight="bold">Customers</Text>
          <Text fontSize="2xl" fontWeight="bold">4,209</Text>
          <Customers />
        </Box>

        {/* Users Per Minute & Sales By Country */}
        <Container 
          textAlign="left"  
          m={4} 
          flex="2"
          minW="350px"
        >
          <Text fontSize="lg" fontWeight="bold">Users in the last 30 minutes</Text>
          <Text fontSize="2xl" fontWeight="bold">16.5k</Text>
          <UsersPerMin />
          <SalesByCountryData />
        </Container>

        {/* Top Customers Section */}
        <Box 
          border="1px solid #EFF0F6" 
          borderRadius="md" 
          flex="1"
          minW="300px"
          ml='auto'
          textAlign="left" 
          display="flex" 
          flexDirection="column" 
          alignItems="start"
          w="300px"
          position="relative" 
          zIndex={10}
          height='300px'
          gap='4'
          p={4}
        >
          <Text fontSize="lg" fontWeight="bold">Top Customers</Text>
          <VStack spacing={2} align='start'>
            <Text>Jerome Bell</Text>
            <Text>Albert Flores</Text>
            <Text>Cameron Williamson</Text>
            <Text>Bessie Cooper</Text>
            <Text>Savannah Nguyen</Text>
            <Text>Kathryn Murphy</Text>
          </VStack>
        </Box>
      </Flex>
    </VStack>
  );
};

export default Analytics;
