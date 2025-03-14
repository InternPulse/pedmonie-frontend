import { useState } from "react";
import { Box } from "@chakra-ui/react";
// import { ColorSwatchMix } from "@chakra-ui/react"

// const toggleValue = []

const Toggler = () => {
  const [isToggle, SetIsToggle] = useState(true);

  return (
    <>
      <Box>
        <Box
          onClick={() => SetIsToggle(!isToggle)}
          bg="#2E5C38"
          w="41px"
          h="5"
          p="1px"
          rounded="full"
        >
          <Box bg="white" w="5" h="5" borderRadius="full"></Box>
        </Box>
      </Box>
    </>
  );
};

export default Toggler;
