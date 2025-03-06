import PropTypes from "prop-types"; 
import { Box, Flex, VStack, Text, Image } from "@chakra-ui/react";
import Dollar from '../assets/dollar.svg'

const InfoCard = ({title, subtitle, dividerColor }) => {
  return (
    <Box width={{base: "220px", sm: "300px"}} height='116px'>
        <Flex align="center" gap={3} p={4} borderRadius="lg" boxShadow="md" bg="white" justify='space-between'>
      <VStack align="start" spacing={0}>
        <Text fontSize="14px">{title}</Text>
        <Text fontSize="28px" color="gray.500">{subtitle}</Text>
      </VStack>
      <Box w="50px" h="50px" borderRadius="full" overflow="hidden" bg="gray.200" >
        <Image src={Dollar} alt="icon" w="100%" h="100%" objectFit="cover" />
      </Box>
    </Flex>
    <Box height='2px'borderBottom="2px solid" borderColor={dividerColor}></Box>
    </Box>
  );
};

InfoCard.propTypes = {
  dividerColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, 
  subtitle: PropTypes.string.isRequired, 
};

export default InfoCard;
