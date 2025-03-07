import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Select,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
} from "@chakra-ui/react";

import { MoreVertical,   ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    SearchIcon } from "lucide-react";

// Sample transaction data
const transactions = [
  { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
  { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
  { id: "456789356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Wise - 5466xxxx", type: "Savings", amount: 8000, status: "Completed" },
  // ... add more data as needed
];

const TransactionHistory = () => {
  // Local state
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [statusFilter, setStatusFilter] = useState("All");
  const itemsPerPage = 5;

  // Filter transactions based on active tab
  const filteredTransactions = transactions.filter((txn) => {
    if (activeTabIndex === 1) return txn.amount > 0;
    if (activeTabIndex === 2) return txn.amount < 0;
    return true;
  });

  const totalEntries = filteredTransactions.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = 5;
    // Always show first page
    buttons.push(
      <Button
        key={1}
        size="sm"
        variant={currentPage === 1 ? "solid" : "outline"}
        colorScheme={currentPage === 1 ? "blue" : "gray"}
        mx={1}
        onClick={() => handlePageChange(1)}
      >
        1
      </Button>
    );
    let startPage = Math.max(2, currentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxButtonsToShow - 3);
    if (endPage === totalPages - 1) {
      startPage = Math.max(2, endPage - (maxButtonsToShow - 3));
    }
    if (startPage > 2) {
      buttons.push(<Text key="ellipsis-1" mx={1}>...</Text>);
    }
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <Button
          key={i}
          size="sm"
          variant={currentPage === i ? "solid" : "outline"}
          colorScheme={currentPage === i ? "blue" : "gray"}
          mx={1}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Button>
      );
    }
    if (endPage < totalPages - 1) {
      buttons.push(<Text key="ellipsis-2" mx={1}>...</Text>);
    }
    if (totalPages > 1) {
      buttons.push(
        <Button
          key={totalPages}
          size="sm"
          variant={currentPage === totalPages ? "solid" : "outline"}
          colorScheme={currentPage === totalPages ? "blue" : "gray"}
          mx={1}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </Button>
      );
    }
    return buttons;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "Pending":
        return "yellow";
      case "Cancelled":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <Box p={5} bg="white" borderRadius="lg" shadow="sm" w="full">
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="xl" fontWeight="medium">Transaction</Text>
        <Flex align="center" gap={2}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#718096" />
            </InputLeftElement>
            <Input placeholder="Search" w={{ base: "150px", md: "200px" }} border="none" _focusVisible={{ outline: "none" }} />
          </InputGroup>
          <Select
            w={{ base: "120px", md: "150px" }}
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            borderRadius="md"
            icon={<ChevronDownIcon boxSize={4} />}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </Select>
        </Flex>
      </Flex>

      {/* Main Navigation Tabs */}
      <Box border="1px solid #E2E8F0" borderRadius="lg" w="full" mb={4}>
        <Tabs variant="unstyled" onChange={(index) => { setActiveTabIndex(index); setCurrentPage(1); }}>
          <TabList borderBottom="1px solid #E2E8F0" px={4}>
            {["All", "Money In", "Money Out"].map((tab) => (
              <Tab
                key={tab}
                fontWeight="medium"
                color="gray.500"
                mx={4}
                pb={2}
                _selected={{ color: "black", borderBottom: "3px solid #F0BC2B", fontWeight: "semibold" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            <TabPanel p={4}>
              {/* Desktop Table */}
              <TableContainer display={{ base: "none", md: "block" }}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Ref ID</Th>
                      <Th>Transaction Date</Th>
                      <Th>From</Th>
                      <Th>Type</Th>
                      <Th isNumeric>Amount</Th>
                      <Th>Status</Th>
                      <Th>Actions</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {currentItems.map((txn, index) => (
                      <Tr key={index}>
                        <Td>{txn.id}</Td>
                        <Td>{txn.date}</Td>
                        <Td>{txn.from}</Td>
                        <Td>{txn.type}</Td>
                        <Td isNumeric color={txn.amount < 0 ? "red.500" : "green.500"}>
                          {txn.amount < 0 ? "-" : "+"}${Math.abs(txn.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Td>
                        <Td>
                          <Text color={`${getStatusColor(txn.status)}.500`}>{txn.status}</Text>
                        </Td>
                        <Td>
                          <IconButton aria-label="More options" icon={<MoreVertical size={16} />} variant="ghost" size="sm" />
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>

              {/* Mobile View */}
              <Box display={{ base: "block", md: "none" }}>
                {currentItems.map((txn, index) => (
                  <Box key={index} py={3} borderBottom="1px solid" borderColor="gray.200">
                    <Flex justify="space-between">
                      <Box>
                        <Text fontWeight="medium">{txn.from}</Text>
                        <Text fontSize="sm" color="gray.500">{txn.type}</Text>
                        <Text fontSize="sm" color="gray.500">{txn.date}</Text>
                      </Box>
                      <Box textAlign="right">
                        <Text fontWeight="medium" color={txn.amount < 0 ? "red.500" : "green.500"}>
                          {txn.amount < 0 ? "-" : "+"}${Math.abs(txn.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Text>
                        <Text fontSize="sm" color={`${getStatusColor(txn.status)}.500`}>{txn.status}</Text>
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Box>
            </TabPanel>
            <TabPanel p={4}>
              {/* Repeat table/grid for "Money In" transactions */}
              <Text>Money In transactions view (to be implemented)</Text>
            </TabPanel>
            <TabPanel p={4}>
              {/* Repeat table/grid for "Money Out" transactions */}
              <Text>Money Out transactions view (to be implemented)</Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {/* Pagination */}
      <Flex justify="space-between" align="center" p={4}>
        <Text fontSize="sm" color="gray.500">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalEntries)} of {totalEntries} entries
        </Text>
        <Flex align="center">
          <IconButton
            icon={<ChevronLeftIcon boxSize={4} />}
            variant="outline"
            size="sm"
            mr={2}
            isDisabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            aria-label="Previous page"
          />
          {renderPaginationButtons()}
          <IconButton
            icon={<ChevronRightIcon boxSize={4} />}
            variant="outline"
            size="sm"
            ml={2}
            isDisabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            aria-label="Next page"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default TransactionHistory;
