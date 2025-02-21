import { Box } from "@chakra-ui/react";
import CombinedCharts from "../components/HomeSection/CombinedCharts";
import Container from "../components/HomeSection/Container";
import SalesTrend from "../components/SalesTrend";
import Summary from "../components/SummarySection/Summary";
import PaymentSuccessRate from "../components/PaymentSuccessRate";
import QuickActions from "../components/QuickActions";

export default function Home() {
  return (
    <Container>
      <Summary />
      <CombinedCharts />
      <Box w="full" display="flex" flexDirection="row">
        <Box w="full"></Box>
        <Box display="flex" flexDirection="column" gap="30px">
          <SalesTrend />
          <PaymentSuccessRate />
        </Box>
      </Box>
      <QuickActions />
    </Container>
  );
}
