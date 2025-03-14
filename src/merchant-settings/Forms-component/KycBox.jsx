import { Box, Heading, Text, Flex } from "@chakra-ui/react";
// import Toggler from "./toggler";


const KycBox = ({title, description, icon}) => {
  return (
    <>
      <Box w="382.99PX">
        <Heading color="#454D5A" fontWeight="bold">
          {title}
        </Heading>
        <Box border="1.1px solid #5F5C5C" my='5px'></Box>

        <Flex justify="space-between">
          <Text color="#5F5C5C">
            {description}
           </Text>
           <Box>{icon}</Box>
        </Flex>
      </Box>
    </>
  );
};

export default KycBox;
