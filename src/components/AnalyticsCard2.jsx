import { Container, Box, Flex, Text, VStack } from "@chakra-ui/react";
import Customers from "../components/Customers";
import UsersPerMin from "../components/UsersPerMin";
import TotalRevenue from "../components/TotalRevenue";
import TotalRevenueBarChart from "../components/TotalRevenueBarChart";
import SalesByCountryData from "@/components/SalesByCountryData";
import TransactionStatus from "@/components/TransactionStatus";
import AnalyticsCards from "../components/AnalyticsCards";

const AnalyticsCard2 = () => {
  return (
    <Box bg="white" minW="300px">
      <Flex justify="space-between" wrap="wrap" mt="100px" direction={{ base: "column", xl: "row" }} gap={{ base: "30px", md: "50px" }}>
        <TotalRevenue />
        <TotalRevenueBarChart />
      </Flex>
      <Flex justify="space-between" mt="40px" wrap="wrap">
        <Box textAlign="left" border="1px solid #EFF0F6" borderRadius="md" p={4} w="260px" height="200px">
          <Text fontSize="lg" fontWeight="bold">
            Customers
          </Text>
          <Text fontSize="2xl" fontWeight="bold">4,209</Text>
          <Customers />
        </Box>
        <Container textAlign="left" h="400px" w={{ base: "300px", sm: "500px" }}>
          <Text fontSize="lg" fontWeight="bold">
            Users in the last 30 minutes
          </Text>
          <Text fontSize="2xl" fontWeight="bold">16.5k</Text>
          <UsersPerMin />
          {/* <SalesByCountryData /> */}
        </Container>
        <Box
          border="1px solid #EFF0F6"
          borderRadius="md"
          p={4}
          w={{ base: "100%", sm: "300px" }}
          minW="280px"
          height="auto"
        >
          <Text fontSize="lg" fontWeight="bold">
            Top Customers
          </Text>
          <VStack spacing={2} align="start">
            <Text>Jerome Bell</Text>
            <Text>Albert Flores</Text>
            <Text>Cameron Williamson</Text>
            <Text>Bessie Cooper</Text>
            <Text>Savannah Nguyen</Text>
            <Text>Kathryn Murphy</Text>
          </VStack>
        </Box>
      </Flex>

      <TransactionStatus/>
    </Box>
  );
};

export default AnalyticsCard2;
