import { Box } from "@chakra-ui/react";
import Container from "../components/HomeSection/Container";
import CombinedCharts from "../components/ChartsSection/CombinedCharts";
import Summary from "../components/SummarySection/Summary";
import SalesTrend from "../components/ChartsSection/SalesTrend";
import PaymentSuccessRate from "../components/ChartsSection/PaymentSuccessRate";
import QuickActions from "../components/ChartsSection/QuickActions";

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
