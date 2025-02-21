import { Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
import lg from "../svgs/lg.svg";

import Demos from "./Datas";

const Rightside = () => {
  return (
    <Flex
      w="687px"
      h="1024px"
      bg="white"
      flexDirection="column"
      pt="120px"
      pl="40px"
      pr="40px"
    >
      {/* LOGO */}
      <Image
        src={lg}
        w="150px"
        alignSelf="center"
        justifyContent="center"
        mg="0 auto"
      />

      {/* HEADING */}
      <Text fontSize="24px" fontWeight="bold" textAlign="left" mt="20px">
        Create account
      </Text>
      <Text fontSize="14px" color="gray.500" mb="20px">
        For business, organizations or companies
      </Text>
      <Demos pt="35px"></Demos>
    </Flex>
  );
};

export default Rightside;
