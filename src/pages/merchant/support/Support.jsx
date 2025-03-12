import { Box } from "@chakra-ui/react";
import { FaAlignJustify } from "react-icons/fa";
import SupportTab from "./Tab";

const Support = () => {
  return (
    <Box w="full">
      <Box pt={3} pl={4} pb={3}>
        <FaAlignJustify />
      </Box>
      <Box>
        <SupportTab></SupportTab>
      </Box>
    </Box>
  );
};

export default Support;
