import { Text, Box, Flex, Heading, Image } from "@chakra-ui/react";

const Balance = () => {
  return (
    <>
     
        <Box>
          <Box
            Box
            bg="white"
            w="300px"
            h="115px"
            px="16x"
            py="18px"
            borderRadius={8}
          >
            <Flex alignItems="Center" justifyContent="Center" gap="80px">
              <Box>
                <Text color="#575656" fontWeight={600} fontSize='14px' mb="4">
                  Available Balance
                </Text>
                <Heading as="h1" color="#373D4D" fontSize={28}>
                  $46,000
                </Heading>
              </Box>

              <Box bg="#ECECFF" p={5} borderRadius={87}>
                <Image src="/images/dollar-circle.svg" alt="dollar-circle" />
              </Box>
            </Flex>
          </Box>
          <Box bg='#34C759' w='292px' border='2px' p='1px' ml='4px'></Box>
        </Box>
      
    </>
  );
};

export default Balance;
