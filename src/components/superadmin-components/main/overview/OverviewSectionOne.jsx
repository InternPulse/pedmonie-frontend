import { Grid } from "@chakra-ui/react";
import StatCard from "./StatCard";
import DollarBadge from "../../../../assets/dashboard-assets/overview/dollar-badge.svg";
import MarkBadge from "../../../../assets/dashboard-assets/overview/mark-badge.svg";
import WalletBadge from "../../../../assets/dashboard-assets/overview/wallet-badge.svg";
import ArrowUp from "../../../../assets/dashboard-assets/overview/arrow-up.svg";
import ArrowDown from "../../../../assets/dashboard-assets/overview/arrow-down.svg";
import Pending from "../../../../assets/dashboard-assets/overview/pending.svg";

const OverviewSectionOne = () => {

  const determineRateIcon = (rate) => (rate <= 5.0 ? ArrowDown : ArrowUp);

  const totalTransactions = 2070000;
  const transactionRate = 7.6;
  const successPayment = 90;
  const successPaymentRate = 8.5;
  const totalRevenue = 20000;
  const revenueRate = 4.6;
  const pendingPayout = 30000;
  const pendingPayoutRate = 5.6;
  const currencySymbol = "$";

  return (
    <Grid
      templateColumns={{
        base: "1fr", 
        md: "repeat(2, 1fr)", 
        lg: "repeat(4, 1fr)", 
      }}
      wrap="wrap" 
      gap={6} 
      p={4} 
    >

      <StatCard
        title="Total Transactions"
        value={totalTransactions}
        badge={DollarBadge}
        rateIcon={determineRateIcon(transactionRate)}
        rateValue={transactionRate}
        rateText="higher than last month"
      />
      
      <StatCard
        title="Payment Success Rate"
        value={`${successPayment}%`}
        badge={MarkBadge}
        rateIcon={determineRateIcon(successPaymentRate)}
        rateValue={successPaymentRate}
        rateText="higher than last month"
      />
         
      <StatCard
        title="Total Revenue"
        value={`${currencySymbol}${totalRevenue}`}
        badge={WalletBadge}
        rateIcon={determineRateIcon(revenueRate)}
        rateValue={revenueRate}
        rateText="higher than last month"
      />
    
      <StatCard
        title="Pending Payouts"
        value={`${currencySymbol}${pendingPayout}`}
        badge={Pending}
        rateIcon={determineRateIcon(pendingPayoutRate)}
        rateValue={pendingPayoutRate}
        rateText="higher than last month"
      />
     
    </Grid>
  );
};

export default OverviewSectionOne;
