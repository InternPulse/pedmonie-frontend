import { Flex } from "@chakra-ui/react";
import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";

const Signup = () => {
  return (
    <Flex w="100%" h="-webkit-fit-content" display={{ lg: "flex", md: "grid" }}>
      <Leftside />
      <Rightside />
    </Flex>
  );
};
export default Signup;
