import { Box, Text } from "@chakra-ui/react";

const StatsCard = ({ title, amount, bgColor }) => {
  return (
    <Box
      minW="195px" // Keeps width fixed
      h="75px"
      bg="white"
      boxShadow="lg"
      borderRadius="5px"
      p="10px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexShrink={0} // Prevents resizing
    >
      <Box>
        <Text fontSize="9px" fontWeight="600" color="#575656">
          {title}
        </Text>
        <Text fontSize="18px" fontWeight="600" color="#373D4D">
          {amount}
        </Text>
      </Box>
      <Box w="39px" h="39px" bg={bgColor || "#ECECFF"} borderRadius="full"></Box>
    </Box>
  );
};

export default StatsCard;
