import PropTypes from "prop-types"; // Import prop-types
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import Dollar from "../assets/dollar.svg";

const InfoCard = ({ title, subtitle, dividerColor }) => {
  return (
    <Box w="300px" height="116px">
      <Flex
        align="center"
        gap={3}
        p={4}
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        justify="space-between"
      >
        {/* Text Container */}
        <VStack align="start" spacing={0}>
          <Text fontSize="14px" color="#575656">
            {title}
          </Text>
          <Text fontSize="28px" color="gray.500">
            {subtitle}
          </Text>
        </VStack>

        {/* Image */}
        <Box
          w="50px"
          h="50px"
          borderRadius="full"
          overflow="hidden"
          bg="gray.200"
        >
          <Image src={Dollar} alt="icon" w="100%" h="100%" objectFit="cover" />
        </Box>
      </Flex>
      <Box
        height="2px"
        borderBottom="2px solid"
        borderColor={dividerColor}
      ></Box>
    </Box>
  );
};

// ✅ Define prop types
InfoCard.propTypes = {
  dividerColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // Title is required
  subtitle: PropTypes.string.isRequired, // Subtitle is required
};

export default InfoCard;
