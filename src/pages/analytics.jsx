import { Container, Flex, Text, Box } from "@chakra-ui/react";
import Customers from "../components/Customers";
import UsersPerMin from "../components/UsersPerMin";
import TotalRevenue from "../components/TotalRevenue";
import TotalRevenueBarChart from "../components/TotalRevenueBarChart";

const Analytics = () => {
  return (
    <>


      <Box>
        <TotalRevenue />
        <TotalRevenueBarChart />
      </Box>

      <Flex>
        <Container textAlign={'left'} border="1px solid #606060" borderRadius="md">
          <Text>
            Customers
          </Text>
          <Text textStyle='xl'>
            4,209
          </Text>
          <Customers />
        </Container>
        <Container textAlign={'left'}>
          <Text>Users in the last 30 minutes</Text>
          <Text textStyle='2xl'>16.5k</Text>
          <UsersPerMin />
        </Container>
        <Container border="1px solid #606060" borderRadius="md" display="flex" flexDirection="column" justifyContent="center" alignItems="start" >
          <Text>Top Customers</Text>
          <Text>Jerome Bell</Text>
          <Text>Albert Flores</Text>
          <Text>Cameron Williamson</Text>
          <Text>Bessie Cooper</Text>
          <Text>Savannah Nguyen</Text>
          <Text>Kathryn Murphy</Text>
        </Container>
      </Flex>
    </>
  );
};

export default Analytics;
