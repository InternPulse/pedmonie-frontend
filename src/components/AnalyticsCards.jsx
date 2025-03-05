import {
  Box,
  Heading,
  Flex,
  Button,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import Cards from "./Cards";
import { FaFileExport } from "react-icons/fa";

const AnalyticsCards = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Heading mb={4} color="black">
        Analytics
      </Heading>
      {/* Date Range & Buttons */}
      <Flex justify="space-between" align="center" mb={6}>
        <Button backgroundColor="#F5F5F5" color="#737375">
          Sep 9, 2024 - Sep 15, 2024
        </Button>
        <Flex gap={2}>
          <Button backgroundColor="#F5F5F5" color="#737375">
            Export CSV <FaFileExport />
          </Button>
          <Button backgroundColor="#F5F5F5" color="#737375">
            Download <FaDownload />
          </Button>
        </Flex>
      </Flex>
      <Box
        height="2px"
        borderBottom="2px solid"
        borderColor="#8491A5"
        mb="30px"
      ></Box>{" "}
      {/*horiontal rule*/}
      {/* Analytics Cards */}
      <Box
        display="flex"
        flexDirection="row"
        w="full"
        gap={{ md: "52px" }}
        justifyContent={{ md: "space-between", xl: "left" }}
      >
        <Flex w="716px" gap={4} height="271px" justifyContent="space-between">
          <Box display="flex" flexDirection="column" gap={4}>
            <Cards
              title="Available"
              subtitle="$46,000"
              dividerColor="#34C759"
            />
            <Cards title="Money In" subtitle="$46,000" dividerColor="#007AFF" />
          </Box>
          <Box display="flex" flexDirection="column" gap={4}>
            <Cards
              title="Total Sales"
              subtitle="$46,000"
              dividerColor="#00C7BE"
            />
            <Cards
              title="Money Out"
              subtitle="$46,000"
              dividerColor="#AF52DE"
            />
          </Box>
        </Flex>
        <VStack
          display="flex"
          w={{ base: "", md: "363px", xl: "256px" }}
          align="start"
          spacing={3}
        >
          <Heading color="#09244B">Details</Heading>
          <HStack w="full" display="flex" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="medium" color="#8491A5">
              Available Bal
            </Text>
            <Text
              fontWeight="bold"
              fontSize="12px"
              color="#09244B"
              marginLeft="50px"
            >
              4,324.32
            </Text>
          </HStack>
          <HStack w="full" display="flex" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="medium" color="#8491A5">
              Money In
            </Text>
            <Text
              fontWeight="bold"
              fontSize="12px"
              color="#09244B"
              marginLeft="70px"
            >
              4,834.32
            </Text>
          </HStack>
          <HStack w="full" display="flex" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="medium" color="#8491A5">
              Money Out
            </Text>
            <Text
              fontWeight="bold"
              fontSize="12px"
              color="#09244B"
              marginLeft="58px"
            >
              2,623.28
            </Text>
          </HStack>
          <HStack w="full" display="flex" justifyContent="space-between">
            <Text fontSize="12px" fontWeight="medium" color="#8491A5">
              Customers
            </Text>
            <Text
              fontWeight="bold"
              fontSize="12px"
              color="#09244B"
              textAlign="right"
            >
              23
            </Text>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};
export default AnalyticsCards;
