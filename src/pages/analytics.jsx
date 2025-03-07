import { Container, Box, Flex, Text, VStack } from "@chakra-ui/react";
import Customers from "../components/Customers";
import UsersPerMin from "../components/UsersPerMin";
import TotalRevenue from "../components/TotalRevenue";
import TotalRevenueBarChart from "../components/TotalRevenueBarChart";
import SalesByCountryData from "../components/SalesByCountryData";
import TransactionStatus from "../components/TransactionStatus";
import AnalyticsCards from "../components/AnalyticsCards";
const Analytics = () => {
  return (
    <VStack bg="white" spacing={8} align="stretch" p={6}>
      <AnalyticsCards />
      {/* Top Section: Total Revenue and Bar Chart */}
      <Flex
        w="full"
        flexDirection="row"
        justify="center"
        align="center"
        gap={6}
        // wrap="wrap"
      >
        <TotalRevenue />
        <TotalRevenueBarChart />
      </Flex>

      {/* Bottom Section: Three Main Containers */}
      <Flex
        w="full"
        flexDirection="row"
        // justify="space-between"
        gap={6}
        flex={1}
        p="10px"
      >
        {/* Customers Section */}
        <Box
          textAlign="left"
          border="1px solid #EFF0F6"
          borderRadius="md"
          p={4}
          w="260px"
          height="222px"
        >
          <Text fontSize="lg" fontWeight="bold" color="#4D4D4D">
            Customers
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="#000">
            4,209
          </Text>
          <Customers />
        </Box>

        {/* Users Per Minute & Sales By Country */}
        <Container textAlign="left" w="454px">
          <Text fontSize="18px" fontWeight="semibold" mt="5" color="#4D4D4D">
            Users in the last 30 minutes
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="#000">
            16.5k
          </Text>
          <UsersPerMin />
          <SalesByCountryData />
        </Container>

        {/* Top Customers Section */}
        <Box
          border="1px solid #EFF0F6"
          borderRadius="md"
          textAlign="left"
          display="flex"
          flexDirection="column"
          alignItems="start"
          w="361px"
          height="300px"
          gap="4"
          p={4}
        >
          <Text fontSize="lg" fontWeight="bold" color="#606060">
            Top Customers
          </Text>
          <VStack spacing={2} align="start" color="#606060">
            <Text fontSize="14px">Jerome Bell</Text>
            <Text fontSize="14px">Albert Flores</Text>
            <Text fontSize="14px">Cameron Williamson</Text>
            <Text fontSize="14px">Bessie Cooper</Text>
            <Text fontSize="14px">Savannah Nguyen</Text>
            <Text fontSize="14px">Kathryn Murphy</Text>
          </VStack>
        </Box>
      </Flex>
      <TransactionStatus />
    </VStack>
  );
};

export default Analytics;
