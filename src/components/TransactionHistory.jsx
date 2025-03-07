"use client"

import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  HStack,
  ButtonGroup,
  IconButton
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Search, ChevronLeft, ChevronRight, ChevronDown, MoreVertical } from "lucide-react";

// Import your custom select components
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValueText,
  SelectLabel
} from "@/components/ui/select";

// Import createListCollection from Chakra UI (or your helper module)
import { createListCollection } from "@chakra-ui/react";

// Sample transaction data
const transactions = [
  { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
  { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
  { id: "456789356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },
  { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Wise - 5466xxxx", type: "Savings", amount: 8000, status: "Completed" }
];

// Create a collection for sort options
const sortCollection = createListCollection({
  items: [
    { label: "Newest", value: "Newest" },
    { label: "Oldest", value: "Oldest" }
  ]
});

// Create a collection for status filter options
const statusCollection = createListCollection({
  items: [
    { label: "All", value: "All" },
    { label: "Pending", value: "Pending" },
    { label: "Completed", value: "Completed" },
    { label: "Cancelled", value: "Cancelled" }
  ]
});

const TransactionHistory = () => {
  // Top-level tabs and sub-tabs
  const [activeTopTab, setActiveTopTab] = useState("Transaction History");
  const [activeSubTab, setActiveSubTab] = useState("All");

  // Sort and filter state
  const [sortBy, setSortBy] = useState("Newest");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter transactions based on active sub-tab
  let filteredTransactions = transactions.filter((txn) => {
    if (activeSubTab === "Money In") return txn.amount > 0;
    if (activeSubTab === "Money Out") return txn.amount < 0;
    return true;
  });

  // Apply status filter
  if (statusFilter !== "All") {
    filteredTransactions = filteredTransactions.filter((txn) => txn.status === statusFilter);
  }

  const totalEntries = filteredTransactions.length;
  const totalPages = Math.ceil(totalEntries / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
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
      {/* Header Section */}
      <Flex justify="space-between" align="center" mb={4} px={4}>
        <Text fontSize="xl" fontWeight="medium" color="gray.800">
          Transaction
        </Text>
        <HStack spacing={4}>
          <InputGroup>
            <InputLeftElement>
              <Search size={16} color="#718096" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              w={{ base: "150px", md: "200px" }}
              border="1px solid"
              borderColor="gray.300"
              _focusVisible={{ outline: "none", borderColor: "blue.400" }}
              borderRadius="md"
            />
          </InputGroup>

          {/* Sort Select */}
          <Box position="relative" width={{ base: "120px", md: "150px" }}>
            <SelectRoot
              value={sortBy}
              onValueChange={(val) => setSortBy(val)}
              collection={sortCollection}
            >
              <SelectTrigger
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
                pl="2rem"
                width="100%"
              >
                <SelectValueText placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortCollection.items.map((item) => (
                  <SelectItem item={item} key={item.value}>
                    <SelectValueText>{item.label}</SelectValueText>
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Box>
        </HStack>
      </Flex>

      {/* Top Navigation (Manual Tabs for "Profile" / "Transaction History") */}
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
            borderBottom={activeTopTab === tab ? "3px solid #F0BC2B" : "none"}
            onClick={() => {
              setActiveTopTab(tab);
              setCurrentPage(1);
            }}
          >
            {tab}
          </Box>
        ))}
      </Flex>

      {/* Conditional Rendering for Tabs */}
      {activeTopTab === "Profile" && (
        <Box p={4}>
          <Text>Profile view (to be implemented)</Text>
        </Box>
      )}

      {activeTopTab === "Transaction History" && (
        <Box>
          {/* Sub-tabs */}
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
                      bg="#F0BC2B"
                      borderRadius="2px"
                    />
                  )}
                </Box>
              ))}
            </HStack>

            {/* Status Filter using custom select */}
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
                  collection={statusCollection}
                >
                  <SelectTrigger
                    border="1px solid"
                    borderColor="gray.300"
                    borderRadius="md"
                    pl="2rem"
                    width="100%"
                  >
                    <SelectValueText placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusCollection.items.map((item) => (
                      <SelectItem item={item} key={item.value}>
                        <SelectValueText>{item.label}</SelectValueText>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>
            </HStack>
          </Flex>

          {/* Table Section */}
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
                      <Text color={
                        txn.status === "Completed"
                          ? "green.500"
                          : txn.status === "Pending"
                            ? "yellow.500"
                            : txn.status === "Cancelled"
                              ? "red.500"
                              : "gray.500"
                      }>
                        {txn.status}
                      </Text>
                    </Box>
                    <Box as="td" py={3} px={2} textAlign="center">
                      <IconButton
                        icon={<MoreVertical size={16} />}
                        variant="ghost"
                        size="sm"
                        aria-label="More options"
                      />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Pagination */}
          <Flex justify="space-between" align="center" p={4} color="gray.800">
            <Text fontSize="sm" color="gray.800">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalEntries)} of {totalEntries} entries
            </Text>
            <Flex align="center">
              <IconButton
                icon={<ChevronLeft color="gray.800" size={16} />}
                variant="outline"
                size="sm"
                mr={2}
                isDisabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous page"
              />
              <Text mx={2} fontSize="sm" color="gray.800">
                Page {currentPage} of {totalPages}
              </Text>
              <IconButton
                icon={<ChevronRight size={16} color="gray.800" />}
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
      )}
    </Box>
  );
};

export default TransactionHistory;
