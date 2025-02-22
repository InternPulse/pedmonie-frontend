import React from "react";
import { Flex } from "@chakra-ui/react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const CombinedCharts = () => {
  return (
    <Flex
      w="full"
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "30px" }}
      justifyContent="space-between"
      // px="2rem"
    >
      <LineChart />
      <PieChart />
    </Flex>
  );
};

export default CombinedCharts;
