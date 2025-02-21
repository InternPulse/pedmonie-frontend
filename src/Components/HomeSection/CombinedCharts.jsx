import React from "react";
import LineChart from "../LineChart";
import PieChart from "../PieChart";
import { Flex } from "@chakra-ui/react";

const CombinedCharts = () => {
  return (
    <Flex
      w="full"
      direction="row"
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
