import React from 'react'
import { Box, Flex } from "@chakra-ui/react";
import SalesByCountry from './components/SalesByCountry'

const data = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    totalSales: "30k",
    country: "United States",
    salesPercentage: 24.5,
    isIncrease: false,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    totalSales: "30k",
    country: "United States",
    salesPercentage: 24.5,
    isIncrease: false,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    totalSales: "30k",
    country: "United States",
    salesPercentage: 24.5,
    isIncrease: false,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    totalSales: "30k",
    country: "United States",
    salesPercentage: 24.5,
    isIncrease: false,
  },
];

const displaySalesByCountry = data.map(item => (
    <SalesByCountry key={data.country} logo={item.logo} totalSales={item.totalSales} country={item.country} salesPercentage={item.salesPercentage} isIncrease={item.isIncrease} />
  ))

function App() {
  return (
    <Box bg="white" width="80">
      <Flex justify={"space-between"} py="4" px="2" fontWeight={"medium"}>
        <Box color="gray.800">Sales by Country</Box>
        <Box color={"gray.800"}>Sales</Box>
      </Flex>

      {displaySalesByCountry}
    </Box>
  );
}

export default App