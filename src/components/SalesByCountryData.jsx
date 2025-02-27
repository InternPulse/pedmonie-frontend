import { Box, Flex } from "@chakra-ui/react";
import SalesByCountry from './SalesByCountry'

const data = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/800px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png",
    totalSales: "30k",
    country: "United States",
    salesPercentage: 24.5,
    isIncrease: false,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1920px-Flag_of_Nigeria.svg.png",
    totalSales: "90k",
    country: "Nigeria",
    salesPercentage: 87.5,
    isIncrease: true,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/1920px-Flag_of_Qatar.svg.png",
    totalSales: "230k",
    country: "Qatar",
    salesPercentage: 18.9,
    isIncrease: false,
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    totalSales: "530k",
    country: "UAE",
    salesPercentage: 72.1,
    isIncrease: true,
  },
];

const displaySalesByCountry = data.map(item => (
    <SalesByCountry key={data.country} logo={item.logo} totalSales={item.totalSales} country={item.country} salesPercentage={item.salesPercentage} isIncrease={item.isIncrease} />
  ))



function SalesByCountryData() {

  return (
    <>
    <Box bg="white" width="96"pb='2'>
      <Flex justify={"space-between"} py="4" px="2" fontWeight={"medium"}>
        <Box color="gray.800">Sales by Country</Box>
        <Box color={"gray.800"}>Sales</Box>
      </Flex>

      {displaySalesByCountry}
    </Box>
    </>
  )
}

export default SalesByCountryData;