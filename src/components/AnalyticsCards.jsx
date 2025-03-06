import { Box, Heading, Flex, Button, Text } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";
import Cards from "./Cards";
import { FaFileExport } from "react-icons/fa";

const AnalyticsCards = () => {
  return (
    <Box pt="50px" w="100%">
      <Heading fontWeight="bold" fontSize={["25px", "30px", "35px", "40px"]}>Analytics</Heading>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between" mt="40px" gap="30px">
        <Button backgroundColor="#F5F5F5" color="#737375" h="48px" w="262px">
          Sep 9, 2024 - Sep 15, 2024
        </Button>
        <Flex h="48px" w={{ base: "250px", sm: "300px"}} justify="space-between">
          <Button backgroundColor="#F5F5F5" color="#737375" h="48px" w={{base: "122px", sm: "142px"}}>
            Export CSV <FaFileExport />
          </Button>
          <Button backgroundColor="#F5F5F5" color="#737375" h="48px" w={{base: "122px", sm: "142px"}}>
            Download <FaDownload />
          </Button>
        </Flex>
      </Flex>
      <Box height='15px' borderBottom="2px solid" borderColor='#8491A5' mb='30px'></Box>
      <Flex direction={{ base: "column", xl: "row" }} gap={{ base: "50px", xl: "150px" }}>
        <Flex gap={{ base: "20px", md: "100px" }} direction={{ base: "column", md: "row" }}>
          <Flex direction="column" gap="20px">
            <Cards title="Available" subtitle="$46,000" dividerColor='#34C759' />
            <Cards title="Money In" subtitle="$46,000" dividerColor='#007AFF' />
          </Flex>
          <Flex direction="column" gap="20px">
            <Cards title="Total Sales" subtitle="$46,000" dividerColor='#00C7BE' />
            <Cards title="Money Out" subtitle="$46,000" dividerColor='#AF52DE' />
          </Flex>
        </Flex>
        <Box w={{base: "250px", sm: "300px"}}>
          <Heading>Details</Heading>
          <Flex w="full" gap="50px">
            <Text color='#8491A5'>Available Bal</Text>
            <Text fontWeight="bold" marginLeft='50px'>4,324.32</Text>
          </Flex>
          <Flex w="full" gap="50px">
            <Text color='#8491A5'>Money In</Text>
            <Text fontWeight="bold" marginLeft='70px'>4,834.32</Text>
          </Flex>
          <Flex w="full" gap="50px">
            <Text color='#8491A5'>Money Out</Text>
            <Text fontWeight="bold" marginLeft='58px'>2,623.28</Text>
          </Flex>
          <Flex w="full" gap="50px">
            <Text color='#8491A5'>Customers</Text>
            <Text fontWeight="bold" marginLeft='105px'>23</Text>
          </Flex>
        </Box>
      </Flex>

    </Box>
  );
};
export default AnalyticsCards;
