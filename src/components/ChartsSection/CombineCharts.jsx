import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const CombineCharts = () => {
  const flexDirection = useBreakpointValue({
    base: "column",
    md: "column",
    xl: "row",
  });
  return (
    <Flex
      w="full"
      direction={flexDirection}
      gap={{ base: "30px", md: "30px", xl: "30px" }}
      // justifyContent="space-between"
      alignItems="center"
      // px="2rem"
    >
      <LineChart />
      <PieChart />
    </Flex>
  );
};

export default CombineCharts;
