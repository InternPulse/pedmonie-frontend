import { Box, Heading, Text, Grid } from "@chakra-ui/react";

const DetailsSide = () => {
  return (
    <>
      <Box h="271px" w="363">
        <Box px="10px" py="10px">
          <Heading fontSize="18px" py="2">
            Details
          </Heading>

          <Grid templateColumns="1fr 0.20fr" gap="20px">
            <Box>
              <Text fontWeight="500" color="#8491A5" fontSize="12px" pb="12px">
                Available Bal
              </Text>
              <Text fontWeight="500" color="#8491A5" fontSize="12px" pb="12px">
                Money In
              </Text>
              <Text fontWeight="500" color="#8491A5" fontSize="12px" pb="12px">
                Money Out
              </Text>
              <Text fontWeight="500" color="#8491A5" fontSize="12px" pb="12px">
                Customers
              </Text>
            </Box>

            <Box>
              <Text fontWeight={700} color="#09244B" fontSize="12px" pb="12px">
                4,324.32
              </Text>
              <Text fontWeight={700} color="#09244B" fontSize="12px" pb="12px">
                4,834.32{" "}
              </Text>
              <Text fontWeight={700} color="#09244B" fontSize="12px" pb="12px">
                2,623.28{" "}
              </Text>
              <Text fontWeight={700} color="#09244B" fontSize="12px" pb="12px">
                23
              </Text>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default DetailsSide;
