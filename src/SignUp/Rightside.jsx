import { Text, Flex, Image, Box } from "@chakra-ui/react";
import React from "react";
import lg from "../svgs/lg.svg";

import Demos from "./Datas";

const Rightside = () => {
  return (
    <Box
      w="50%"
      bg="white"
      width={{ lg: "50%", md: "100%" }}
      pl={{ lg: "40px", md: "0px" }}
      pr={{ lg: "40px", md: "0px" }}
      pt={{ lg: "120px", md: "60px" }}
    >
      <Flex w="100%" flexDirection="column">
        {/* LOGO */}
        <Image
          src={lg}
          w="150px"
          alignSelf="center"
          justifyContent="center"
          mg="0 auto"
        />

        {/* HEADING */}
        <Text fontSize="24px" fontWeight="bold" textAlign="left" mt="40px">
          Create account
        </Text>
        <Text fontSize="14px" color="gray.500" mb="20px">
          For business, organizations or companies
        </Text>
        <Demos pt="35px"></Demos>
      </Flex>
    </Box>
  );
};

export default Rightside;
