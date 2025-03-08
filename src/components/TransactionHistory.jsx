"use client"

import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  IconButton
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Search, ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";

// Import your custom select components
import { SelectRoot, SelectTrigger, SelectValueText, SelectContent, SelectItem } from "@/components/ui/select";

// Sample transaction data
const transactions = [
  { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
  { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
  { id: "456789356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Wise - 5466xxxx", type: "Savings", amount: 8000, status: "Completed" },
  { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
  { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
  { id: "456788356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Wise - 5466xxxx", type: "Savings", amount: 8000, status: "Completed" },
  { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
  { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
  { id: "456789356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Wise - 5466xxxx", type: "Savings", amount: 8000, status: "Completed" },
  { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
  { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
  { id: "456788356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },

];

// Create a collection for sort options
const sortOptions = [
  { label: "Newest", value: "Newest" },
  { label: "Oldest", value: "Oldest" }
];

// Create a collection for status filter options
const statusCollection = [
  { label: "All", value: "All" },
  { label: "Pending", value: "Pending" },
  { label: "Completed", value: "Completed" },
  { label: "Cancelled", value: "Cancelled" }
];

const TransactionHistory = () => {
  const [activeTopTab, setActiveTopTab] = useState("Transaction History");
  const [activeSubTab, setActiveSubTab] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  let filteredTransactions = transactions.filter((txn) => {
    if (activeSubTab === "Money In") return txn.amount > 0;
    if (activeSubTab === "Money Out") return txn.amount < 0;
    return true;
  });

  if (statusFilter !== "All") {
    filteredTransactions = filteredTransactions.filter((txn) => txn.status === statusFilter);
  }

  const totalEntries = filteredTransactions.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page < 1) return; // Prevent going below page 1
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxButtonsToShow = totalPages;

    // Ensure currentPage doesn't exceed totalPages
    const safeCurrentPage = Math.min(currentPage, totalPages);

    // Always show current page
    buttons.push(
      <Button
        key={1}
        size="sm"
        bg="green.600"
        colorScheme="green"
        px={1}
        onClick={() => handlePageChange(1)}
      >
        {safeCurrentPage}
      </Button>
    );

    // Add "of" in between
    buttons.push(
      <Text key="of-text" mx={1} fontWeight="bold" color="gray.500">
        of
      </Text>
    );

    let startPage = Math.max(2, safeCurrentPage - Math.floor(maxButtonsToShow / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxButtonsToShow - 3);

    if (endPage === totalPages - 1) {
      startPage = Math.max(2, endPage - (maxButtonsToShow - 3));
    }

    if (startPage > 2) {
      buttons.push(<Text key="ellipsis-1" mx={1}>...</Text>);
    }

    if (endPage < totalPages - 1) {
      buttons.push(<Text key="ellipsis-2" mx={1}>...</Text>);
    }

    if (totalPages > 1) {
      buttons.push(
        <Button
          key={totalPages}
          size="sm"
          bg={safeCurrentPage === totalPages ? "green.600" : "white"}
          colorScheme="green"
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
        return "green.500";
      case "Pending":
        return "yellow.500";
      case "Cancelled":
        return "red.500";
      default:
        return "gray.500";
    }
  };

  return (
    <Box bg="white" p={5} borderRadius="lg" shadow="sm" w="full" maxW="1200px" mx="auto">
      <Flex justify="space-between" align="center" mb={4} px={4}>
        <Text fontSize="xl" fontWeight="medium" color="gray.800">
          Transaction
        </Text>

        <HStack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents='none' h='full' p="14px">
              <Search size={16} color="#718096" />
            </InputLeftElement>
            <Input
              type="search"
              placeholder="Search transactions"
              borderRadius="lg"
              _focus={{ borderColor: "blue.500" }}
              bg="gray.300"
              color="gray.800"
              pl="40px"
              pr="10px"
              py="10px"
              _placeholder={{ color: 'gray.500' }}
              borderColor="gray.300"
            />
          </InputGroup>
          {/* Sort Select */}

          <Box position="relative" width="120px">
            <SelectRoot
              value={statusFilter}
              onValueChange={(val) => {
                setStatusFilter(val)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger
                borderColor="gray.300"
                borderRadius="md"
                width="100%"
                color="gray.800"   
              >
                <SelectValueText placeholder="Sort by:" />
              </SelectTrigger>
              {/* <SelectContent>
                {sortOptions.map((options) => (
                  <SelectItem key={options.value} options={options.value}>
                    <SelectValueText>{options.label}</SelectValueText>
                  </SelectItem>
                ))}
              </SelectContent> */}
            </SelectRoot>
          </Box>
        </HStack>
      </Flex>

<Box borderRadius="lg" shadow="sm" w="full" maxW="1200px" mx="auto" p={4}>
      <Flex borderBottom="1px solid #E2E8F0" mb={5} px={4}>
        {["Profile", "Transaction History"].map((tab) => (
          <Box
            key={tab}
            mx={4}
            pb={2}
            px={20}
            cursor="pointer"
            fontWeight={activeTopTab === tab ? "semibold" : "normal"}
            color={activeTopTab === tab ? "black" : "gray.500"}
            borderBottom={activeTopTab === tab ? "3px solid green" : "none"}
            onClick={() => {
              setActiveTopTab(tab);
              setCurrentPage(1);
            }}
          >
            {tab}
          </Box>
        ))}
      </Flex>

      {activeTopTab === "Transaction History" && (
        <Box>
          <Flex
            justify="space-between"
            align="center"
            px={4}
            py={2}
            borderBottom="1px solid #E2E8F0"
          >
            <HStack spacing={6}>
              {["All", "Money In", "Money Out"].map((subTab) => (
                <Box
                  key={subTab}
                  position="relative"
                  cursor="pointer"
                  fontWeight={activeSubTab === subTab ? "semibold" : "normal"}
                  color={activeSubTab === subTab ? "black" : "gray.500"}
                  pb={2}
                  px={4}
                  onClick={() => {
                    setActiveSubTab(subTab);
                    setCurrentPage(1);
                  }}
                >
                  {subTab}
                  {activeSubTab === subTab && (
                    <Box
                      position="absolute"
                      bottom="-2px"
                      left="0"
                      right="0"
                      height="3px"
                      bg="green"
                      borderRadius="2px"
                    />
                  )}
                </Box>
              ))}
            </HStack>

            <HStack spacing={2}>
              <Text fontSize="sm" color="gray.500">
                Status:
              </Text>
              <Box position="relative" width="120px">
                <SelectRoot
                  value={statusFilter}
                  onValueChange={(val) => {
                    setStatusFilter(val);
                    setCurrentPage(1);
                  }}
                >
                  <SelectTrigger
                  borderColor="gray.300"
                  borderRadius="md"
                  width="100%"
                  color="gray.800"
                  >
                    <SelectValueText placeholder="All" />
                  </SelectTrigger>
                  {/* <SelectContent>
                    {statusCollection.map((item) => (
                      <SelectItem item={item.value} key={item.value}>
                        <SelectValueText>{item.label}</SelectValueText>
                      </SelectItem>
                    ))}
                  </SelectContent> */}
                </SelectRoot>
              </Box>
            </HStack>
          </Flex>

          <Box overflowX="auto" p={4} bg="white">
            <Box as="table" width="100%" borderCollapse="collapse">
              <Box as="thead" bg="gray.50">
                <Box as="tr">
                  <Box as="th" py={2} px={2} textAlign="left" color="gray.800" fontSize="sm">
                    Ref ID
                  </Box>
                  <Box as="th" py={2} px={2} textAlign="left" color="gray.800" fontSize="sm">
                    Transaction Date
                  </Box>
                  <Box as="th" py={2} px={2} textAlign="left" color="gray.800" fontSize="sm">
                    From
                  </Box>
                  <Box as="th" py={2} px={2} textAlign="left" color="gray.800" fontSize="sm">
                    Type
                  </Box>
                  <Box as="th" py={2} px={2} textAlign="right" color="gray.800" fontSize="sm">
                    Amount
                  </Box>
                  <Box as="th" py={2} px={2} textAlign="left" color="gray.800" fontSize="sm">
                    Status
                  </Box>
                  <Box as="th" py={2} px={2} textAlign="center" color="gray.800" fontSize="sm">
                    Actions
                  </Box>
                </Box>
              </Box>
              <Box as="tbody">
                {currentItems.map((txn, index) => (
                  <Box
                    as="tr"
                    key={index}
                    borderBottom="1px solid"
                    borderColor="gray.100"
                    _hover={{ bg: "gray.50" }}
                    color="gray.600"
                  >
                    <Box as="td" py={3} px={2} fontSize="sm">
                      {txn.id}
                    </Box>
                    <Box as="td" py={3} px={2} fontSize="sm">
                      {txn.date}
                    </Box>
                    <Box as="td" py={3} px={2} fontSize="sm">
                      {txn.from}
                    </Box>
                    <Box as="td" py={3} px={2} fontSize="sm">
                      {txn.type}
                    </Box>
                    <Box
                      as="td"
                      py={3}
                      px={2}
                      fontSize="sm"
                      textAlign="right"
                      color={txn.amount < 0 ? "red.500" : "green.500"}
                      fontWeight="medium"
                    >
                      {txn.amount < 0 ? "-" : "+"}$
                      {Math.abs(txn.amount).toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                      })}
                    </Box>
                    <Box as="td" py={3} px={2} fontSize="sm">
                      <Text color={getStatusColor(txn.status)}>
                        {txn.status}
                      </Text>
                    </Box>
                    <Box as="td" py={3} px={8} textAlign="end">
                      <Box as={EllipsisVertical}  color="gray.800"
                        size="16"
                        aria-label="More options" />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          <Flex justify="space-between" align="center" p={4} >
            <Text fontSize="sm" color="gray.400">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalEntries)} of {totalEntries} entries
            </Text>

            <Flex align="center" gap={2} color="gray.800">
              <Box as={ChevronLeft} size="16px"
                color="gray.400"
                cursor="pointer"
                mr={2}
                isDisabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous page"
              />

              {renderPaginationButtons()}
              <Box as={ChevronRight} size="16px"
                color="gray.400"
                cursor="pointer"
                mr={2}
                isDisabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Previous page"
              />
            </Flex>
          </Flex>
        </Box>
      )}
      </Box>
    </Box>
  );
};

export default TransactionHistory;