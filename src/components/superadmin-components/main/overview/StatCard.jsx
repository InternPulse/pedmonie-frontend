import { Grid, Box, Heading, Text, CardRoot, Image, Flex } from "@chakra-ui/react";

const StatCard = ({ title, value, badge, rateIcon, rateValue, rateText }) => {
  return (
    <CardRoot 
      p={4} 
      bg="white"  
      width="100%"  
    >
      <Flex gap={3} align="center" justify="center"> 
        <Box>
          <Heading size={{ base: "sm", md: "md" }}>{title}</Heading>
          <Text color="gray.500" fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
            {value}
          </Text>
        </Box>
        <Image src={badge} alt={title} boxSize={{ base: "25px", md: "40px" }} />
      </Flex>

      <Flex gap={3} align="center" justify="flex-start" mt={3}> 
        <Image src={rateIcon} alt="Rate Indicator" boxSize={{ base: "15px", md: "20px" }} />
        <Text fontSize="md">{`${rateValue}%`}</Text>
        <Text color="gray.500">{rateText}</Text>
      </Flex>
    </CardRoot>
  );
};

export default StatCard;
