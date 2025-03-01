import React from "react";
import { Box, Text, Stack, Badge, SimpleGrid, Icon } from "@chakra-ui/react";
import { FiBell } from "react-icons/fi"; // For the notification bell icon

const Recent = () => {
  // Sample data for transactions, matching the image exactly
  const transactions = [
    { id: "TXN001", amount: "$200", status: "Pending" },
    { id: "TXN002", amount: "$150", status: "Pending" },
    { id: "TXN003", amount: "$150", status: "Pending" },
    { id: "TXN004", amount: "$150", status: "Completed" },
    { id: "TXN005", amount: "$150", status: "Completed" },
    { id: "TXN006", amount: "$150", status: "Failed" },
    { id: "TXN007", amount: "$150", status: "Failed" },
    { id: "TXN008", amount: "$150", status: "Completed" },
  ];

  // Sample data for top products, matching the image exactly
  const topProducts = [
    { name: "Product A", sales: "2000 Sales" },
    { name: "Product B", sales: "1500 Sales" },
    { name: "Product C", sales: "1000 Sales" },
  ];

  // Sample data for notifications, matching the image exactly
  const notifications = [
    {
      title: "New payout request received",
      dateTime: "2 hours ago",
    },
    {
      title: "Subscription renewal due",
      dateTime: "2 days ago",
    },
    {
      title: "Subscription renewal due",
      dateTime: "2 days ago",
    },
  ];

  // Status badge styles for transactions
  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return {
          bg: "#fff3cd",
          color: "#856404",
          border: "1px solid #ffeeba",
          fontWeight: "normal",
          justifyContent: "center",
          fontSize: "12px",
          p: "2px 8px",
          borderRadius: "4px",
        };
      case "Completed":
        return {
          bg: "#d4edda",
          color: "#155724",
          border: "1px solid #c3e6cb",
          fontWeight: "normal",
          justifyContent: "center",
          fontSize: "12px",
          p: "2px 8px",
          borderRadius: "4px",
        };
      case "Failed":
        return {
          bg: "#f8d7da",
          color: "#721c24",
          border: "1px solid #f5c6cb",
          fontWeight: "normal",
          justifyContent: "center",
          fontSize: "12px",
          p: "2px 8px",
          borderRadius: "4px",
        };
      default:
        return { bg: "gray.100", color: "gray.800" };
    }
  };

  return (
    <Box w="full" bg="#f5f5f5" fontFamily="">
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing="32px"
        w="full"
        maxW="1200px"
        mx="auto"
        gap="20px"
      >
        {/* Recent Transactions */}
        <Box
          bg="white"
          p="24px"
          borderRadius="8px"
          boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
          w="full"
        >
          <Text
            fontSize="20px"
            fontWeight="medium"
            mb="16px"
            color="#333"
            lineHeight="24px"
          >
            Recent Transactions
          </Text>
          <Stack spacing="8px">
            {/* Header Row */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py="8px"
              // px="16px"
            >
              <Text
                fontSize="12px"
                color="#666"
                fontWeight="bold"
                lineHeight="16px"
                width="33.33%"
              >
                ID
              </Text>
              <Text
                fontSize="12px"
                color="#666"
                fontWeight="bold"
                lineHeight="16px"
                width="33.33%"
                // textAlign="right"
              >
                Amount
              </Text>
              <Text
                fontSize="12px"
                color="#666"
                fontWeight="bold"
                lineHeight="16px"
                width="33.33%"
                textAlign="right"
              >
                Status
              </Text>
            </Box>
            {/* Transaction Rows */}
            {transactions.map((txn, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py="12px"
                // px="16px"
                _hover={{ bg: "#f8f9fa" }}
                transition="background 0.2s"
                borderBottom={
                  index < transactions.length - 1 ? "1px solid #e9ecef" : "none"
                }
              >
                <Text
                  fontSize="12px"
                  color="#666"
                  fontWeight="normal"
                  lineHeight="16px"
                  // width="33.33%"
                >
                  {txn.id}
                </Text>
                <Text
                  fontSize="12px"
                  color="#666"
                  fontWeight="normal"
                  lineHeight="16px"
                  // width="33.33%"
                  textAlign="center"
                >
                  {txn.amount}
                </Text>
                <Box
                  w="73px"
                  display="flex"
                  textAlign="center"
                  alignItems="center"
                  alignSelf="end"
                >
                  <Badge w="full" {...getStatusBadge(txn.status)}>
                    {txn.status}
                  </Badge>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Top 3 Selling Products & Notifications */}
        <Stack spacing="32px" w="full" gap="30px">
          {/* Top 3 Selling Products */}
          <Box
            bg="white"
            p="24px"
            borderRadius="8px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
            w="full"
          >
            <Text
              fontSize="20px"
              fontWeight="medium"
              mb="16px"
              color="#333"
              lineHeight="24px"
            >
              Top 3 Selling Products
            </Text>
            <Stack spacing="12px" mb="20px">
              {topProducts.map((product, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  py="8px"
                  px="16px"
                  _hover={{ bg: "#f8f9fa" }}
                  transition="background 0.2s"
                  borderBottom={
                    index < topProducts.length - 1
                      ? "1px solid #e9ecef"
                      : "none"
                  }
                >
                  <Text
                    fontSize="14px"
                    color="#666"
                    fontWeight="normal"
                    lineHeight="20px"
                  >
                    {product.name}
                  </Text>
                  <Text
                    fontSize="12px"
                    color="#B5B5B5"
                    fontWeight="medium"
                    lineHeight="20px"
                    textAlign="right"
                  >
                    {product.sales}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Notifications */}
          <Box
            bg="white"
            p="24px"
            borderRadius="8px"
            boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
            w="full"
            h="full"
          >
            <Box display="flex" alignItems="center" mb="16px">
              <Icon
                as={FiBell}
                color="#f4a261"
                mr="12px"
                boxSize="20px"
                border="2px solid #f4a261"
                borderRadius="50%"
                p="2px"
              />
              <Text
                fontSize="20px"
                fontWeight="medium"
                color="#333"
                lineHeight="24px"
              >
                Notifications
              </Text>
            </Box>
            <Stack spacing="16px">
              {notifications.map(({ title, dateTime }, index) => (
                <Box
                  key={index}
                  display="flex"
                  flexDirection="column"
                  py="8px"
                  borderBottom={
                    index < notifications.length - 1
                      ? "1px solid #e9ecef"
                      : "none"
                  }
                >
                  <Text
                    fontSize="16px"
                    color="#666"
                    fontWeight="medium"
                    lineHeight="20px"
                    cursor="pointer"
                  >
                    {title}
                  </Text>
                  <Text
                    as="span"
                    fontSize="12px"
                    color="#B5B5B5"
                    fontWeight="medium"
                    cursor="pointer"
                  >
                    {dateTime}
                  </Text>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default Recent;
