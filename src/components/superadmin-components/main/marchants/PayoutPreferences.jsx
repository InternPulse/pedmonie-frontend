import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const payoutData = [
  { id: "TXN12345", merchant: "Merchant C", reason: "Unauthorized Transaction", status: "Pending" },
  { id: "TXN12346", merchant: "Store B", reason: "Unauthorized Transaction", status: "Pending" },
  { id: "TXN12347", merchant: "Store C", reason: "Unauthorized Transaction", status: "Pending" },
  { id: "TXN12348", merchant: "Store D", reason: "Unauthorized Transaction", status: "Resolved" },
  { id: "TXN12349", merchant: "Store E", reason: "Unauthorized Transaction", status: "Cancelled" },
];

const PayoutPreferences = () => {
  return (
    <Box w="1105px" display="flex" flexDirection="column" gap="20px" bg="gray.100">
      {/* Header */}
      <Flex px="20px" justify="space-between" align="flex-start" >
        <Text fontSize="20px" fontWeight="600" color="black">Dispute and Chargebacks</Text>
        <Text fontSize="20px" fontWeight="400" color="#A7A7A7" textAlign="right">View all</Text>
      </Flex>

      {/* Table */}
      <Box w="full" bg="white" borderRadius="8px" overflow="hidden">
        <Flex bg="#FAFAFA" py={3} px={4} fontWeight="500" color="#737375" justify="space-between">
          <Text w="20%" textAlign="center">Transaction ID</Text>
          <Text w="20%" textAlign="center">Merchant</Text>
          <Text w="20%" textAlign="center">Reason</Text>
          <Text w="20%" textAlign="center">Status</Text>
          <Text w="20%" textAlign="center">Action</Text>
        </Flex>

        {payoutData.map((payout, index) => (
          <Flex key={index} py={4} px={4} borderBottom="1px solid #F5F5F5" justify="space-between" align="center">
            <Text w="20%" textAlign="center" color="#121212">{payout.id}</Text>
            <Text w="20%" textAlign="center" color="#121212">{payout.merchant}</Text>
            <Text w="20%" textAlign="center" color="#121212">{payout.reason}</Text>
            <Box w="20%" textAlign="center" p={2} borderRadius="3px" bg={
              payout.status === "Pending" ? "rgba(255, 157, 24, 0.1)" :
              payout.status === "Resolved" ? "rgba(28, 145, 253, 0.1)" : "rgba(240, 0, 0, 0.1)"
            }>
              <Text color={
                payout.status === "Pending" ? "#FF9D18" :
                payout.status === "Resolved" ? "#1C91FD" : "#F00000"
              } fontWeight="500">
                {payout.status}
              </Text>
            </Box>
            <Button w="20%" size="sm" bg="rgba(28, 145, 253, 0.04)" color="#1C91FD" borderRadius="3px">
              Review
            </Button>
          </Flex>
        ))}
      </Box>
      <Flex w="966.35px" justify="space-between" align="center" mt="20px">
      {/* Showing Data Info */}
      <Text w="253px" color="#B5B7C0" fontSize="14px" fontWeight="500">
        Showing data 1 to 8 of 256K entries
      </Text>

      {/* Pagination Controls */}
      <Flex w="282.57px" h="28px" align="center" gap={2}>
        {/* Previous Button */}
        <Button size="xs" bg="#F5F5F5" borderRadius="4px" border="1px solid #EEEEEE">
          <FaChevronLeft color="#292D32" />
        </Button>
        {/* Page Numbers */}
        {[1, 2, 3, 4, "...", 40].map((page, index) => (
          <Button
            key={index}
            size="xs"
            bg={page === 1 ? "#2E5C38" : "#F5F5F5"}
            color={page === 1 ? "white" : "#2E5C38"}
            borderRadius="4px"
            border="1px solid" 
            borderColor={page === 1 ? "#5932EA" : "#EEEEEE"}
          >
            {page}
          </Button>
        ))}
        {/* Next Button */}
        <Button size="xs" bg="#F5F5F5" borderRadius="4px" border="1px solid #EEEEEE">
          <FaChevronRight color="#292D32" />
        </Button>
      </Flex>
    </Flex>
    </Box>
  );
};

export default PayoutPreferences;
