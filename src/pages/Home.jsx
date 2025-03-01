import { Box } from "@chakra-ui/react";
import Summary from "../components/SummarySection/Summary";
import SalesTrend from "../components/ChartsSection/SalesTrend";
import PaymentSuccessRate from "../components/ChartsSection/PaymentSuccessRate";
import QuickActions from "../components/HomeSection/QuickActions";
import CombineCharts from "../components/ChartsSection/CombineCharts";
import Recent from "../components/HomeSection/Recent";
import OverviewHeader from "../components/HomeSection/OverviewHeader";

export default function Home() {
  return (
    <>
      <OverviewHeader />
      <Summary />
      <CombineCharts />
      <Box
        w="full"
        display="flex"
        gap="20px"
        flexDirection={{ base: "column", md: "column", xl: "row" }}
      >
        <Recent />
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row", xl: "column" }}
          gap="30px"
        >
          <SalesTrend />
          <PaymentSuccessRate />
        </Box>
      </Box>
      <QuickActions />
    </>
  );
}
