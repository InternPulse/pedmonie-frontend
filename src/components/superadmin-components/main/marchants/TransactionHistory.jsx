import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const transactions = [
  { id: "TXN12345", date: "2025-01-02, 03:15pm", amount: "$500.00", merchant: "Store A", customer: "John Doe", method: "Credit Card", status: "Completed" },
  { id: "TXN12346", date: "2025-01-02, 03:15pm", amount: "$500.00", merchant: "Store B", customer: "John Doe", method: "PayPal", status: "Completed" },
  { id: "TXN12347", date: "2025-01-02, 03:15pm", amount: "$500.00", merchant: "Store C", customer: "John Doe", method: "Credit Card", status: "Pending" },
  { id: "TXN12348", date: "2025-01-02, 03:15pm", amount: "$500.00", merchant: "Store D", customer: "John Doe", method: "Bank Transfer", status: "Failed" },
  { id: "TXN12349", date: "2025-01-02, 03:15pm", amount: "$500.00", merchant: "Store E", customer: "John Doe", method: "Bank Transfer", status: "Failed" }
];

const TransactionHistory = () => {
  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.100" p={5}>
      
      {/* Filter Bar */}
      <Flex w="1132px" h="56px" px="20px" borderRadius="6.95px" justify="space-between" align="center" bg="white">
        {/* Left Section */}
        <Flex align="center" gap="20px">
          <Flex direction="column" align="center" gap="15px">
            <Text color="#7A00A3" fontSize="14px" fontWeight="700">All</Text>
            <Box w="55px" h="2px" bg="#7A00A3" borderTopRadius="8px" />
          </Flex>
          <Text color="#737375" fontSize="14px" fontWeight="500">Money In</Text>
          <Text color="#737375" fontSize="14px" fontWeight="500">Money Out</Text>
        </Flex>

        {/* Right Section */}
        <Flex align="center" gap="10px">
          <Text color="#737375" fontSize="14px" fontWeight="500">Status:</Text>
          <Flex align="center" gap="10px">
            <Text color="#737375" fontSize="14px" fontWeight="500">All</Text>
            <Box w="10px" h="5px" bg="#7A00A3" />
          </Flex>
        </Flex>
      </Flex>

      {/* Transaction Table */}
      <Box w="1132px" bg="white" borderRadius="6px" mt={5} overflow="hidden">
        
        {/* Header */}
        <Flex bg="#FAFAFA" py={3} px={4} fontWeight="500" color="#737375" justify="space-between">
          <Text w="14%" textAlign="center">Transaction ID</Text>
          <Text w="14%" textAlign="center">Date</Text>
          <Text w="14%" textAlign="center">Amount</Text>
          <Text w="14%" textAlign="center">Merchant</Text>
          <Text w="14%" textAlign="center">Customer</Text>
          <Text w="14%" textAlign="center">Method</Text>
          <Text w="14%" textAlign="center">Status</Text>
        </Flex>

        {/* Rows */}
        {transactions.map((txn, index) => (
          <Flex key={index} py={3} px={4} borderBottom="1px solid #F5F5F5" justify="space-between" align="center">
            <Text w="14%" textAlign="center" color="#121212">{txn.id}</Text>
            <Text w="14%" textAlign="center" color="#121212">{txn.date}</Text>
            <Text w="14%" textAlign="center" fontWeight="600" color="#121212">{txn.amount}</Text>
            <Text w="14%" textAlign="center" color="#121212">{txn.merchant}</Text>
            <Text w="14%" textAlign="center" color="#121212">{txn.customer}</Text>
            <Text w="14%" textAlign="center" color="#121212">{txn.method}</Text>
            <Box w="14%" textAlign="center" p={2} borderRadius="3px" bg={
              txn.status === "Completed" ? "rgba(31, 203, 79, 0.1)" :
              txn.status === "Pending" ? "rgba(255, 157, 24, 0.1)" : "rgba(240, 0, 0, 0.1)"
            }>
              <Text color={
                txn.status === "Completed" ? "#1FCB4F" :
                txn.status === "Pending" ? "#FF9D18" : "#F00000"
              } fontWeight="500">
                {txn.status}
              </Text>
            </Box>
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

      

    </Flex>
  );
}

export default TransactionHistory;
