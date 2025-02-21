import { Flex } from "@chakra-ui/react";
import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const CombinedCharts = () => {
  return (
    <Flex
      w="full"
      direction={{ base: "column", lg: "row" }}
      align={"center"}
      justifyContent="space-between"
      // px="2rem"
    >
      <LineChart />
      <PieChart />
    </Flex>
  );
};

export default CombinedCharts;
