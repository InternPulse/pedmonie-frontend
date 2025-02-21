import { Box, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { summary } from "./summaryData";

function Summary() {
  return (
    <Stack
      w="full"
      h="115px"
      direction={{ base: "column", lg: "row" }}
      justifyContent="space-between"
    >
      {summary.map((summary) => (
        <Box
          key={summary.title}
          w="full"
          bg="white"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="8px"
          px="4"
          py="6"
        >
          <Box w="full" display="flex" flexDirection="column" gap="6">
            <Text
              w="90px"
              h="32px"
              textAlign="left"
              fontWeight="normal"
              fontSize="16px"
              lineHeight="20px"
              color="#575656"
            >
              {summary.title}
            </Text>
            <Heading
              as="h4"
              textAlign="left"
              fontWeight="semibold"
              fontSize="28px"
              lineHeight="24px"
              color="#373D4D"
            >
              {summary.amount}
            </Heading>
          </Box>
          <Icon
            as={summary.icon}
            bg="#ECECFF"
            p="2"
            boxSize="10"
            rounded="full"
          />
        </Box>
      ))}
    </Stack>
  );
}

export default Summary;
