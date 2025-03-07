import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  IconButton,
  Input,
  Table,
} from "@chakra-ui/react";
import { InputGroup } from "../ui/input-group";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";
import { LuCopy, LuSearch } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PaymentOverlay from "./PaymentOverlay";

const Payment = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Sample data
  const paymentData = [
    {
      pageName: "Social",
      amount: "1000 CAD",
      linkType: "Single charge",
      dateCreated: "18 hours ago",
    },
    {
      pageName: "Fosted crown",
      amount: "1000 EUR",
      linkType: "Subscription",
      dateCreated: "Dec 23rd, 2023 4:00",
    },
    {
      pageName: "Event Registration",
      amount: "500 USD",
      linkType: "Single charge",
      dateCreated: "2 days ago",
    },
    {
      pageName: "Product Launch",
      amount: "750 CAD",
      linkType: "Subscription",
      dateCreated: "3 days ago",
    },
    {
      pageName: "Webinar Sign-up",
      amount: "300 EUR",
      linkType: "Single charge",
      dateCreated: "5 days ago",
    },
    {
      pageName: "Online Course",
      amount: "200 USD",
      linkType: "Subscription",
      dateCreated: "1 week ago",
    },
    {
      pageName: "Donation",
      amount: "150 CAD",
      linkType: "Single charge",
      dateCreated: "1 week ago",
    },
    {
      pageName: "Membership Fee",
      amount: "120 EUR",
      linkType: "Subscription",
      dateCreated: "2 weeks ago",
    },
    {
      pageName: "Conference Ticket",
      amount: "400 USD",
      linkType: "Single charge",
      dateCreated: "3 weeks ago",
    },
    {
      pageName: "Workshop Registration",
      amount: "350 CAD",
      linkType: "Single charge",
      dateCreated: "4 weeks ago",
    },
    {
      pageName: "E-book Purchase",
      amount: "25 USD",
      linkType: "Single charge",
      dateCreated: "1 month ago",
    },
    {
      pageName: "Monthly Subscription",
      amount: "30 EUR",
      linkType: "Subscription",
      dateCreated: "1 month ago",
    },
    {
      pageName: "Annual Subscription",
      amount: "300 CAD",
      linkType: "Subscription",
      dateCreated: "2 months ago",
    },
    {
      pageName: "Merchandise Sale",
      amount: "100 USD",
      linkType: "Single charge",
      dateCreated: "2 months ago",
    },
    {
      pageName: "Service Fee",
      amount: "200 CAD",
      linkType: "Single charge",
      dateCreated: "3 months ago",
    },
    {
      pageName: "Consultation Fee",
      amount: "150 EUR",
      linkType: "Single charge",
      dateCreated: "3 months ago",
    },
    {
      pageName: "Online Class",
      amount: "80 USD",
      linkType: "Subscription",
      dateCreated: "4 months ago",
    },
    {
      pageName: "Fitness Program",
      amount: "200 CAD",
      linkType: "Subscription",
      dateCreated: "5 months ago",
    },
    {
      pageName: "Cooking Class",
      amount: "60 EUR",
      linkType: "Single charge",
      dateCreated: "6 months ago",
    },
    {
      pageName: "Art Workshop",
      amount: "90 USD",
      linkType: "Single charge",
      dateCreated: "7 months ago",
    },
    {
      pageName: "Photography Course",
      amount: "120 CAD",
      linkType: "Subscription",
      dateCreated: "8 months ago",
    },
    {
      pageName: "Language Course",
      amount: "150 EUR",
      linkType: "Subscription",
      dateCreated: "9 months ago",
    },
  ];

  // Calculate total pages
  const totalPages = Math.ceil(paymentData.length / itemsPerPage);

  // Get current items
  const currentItems = paymentData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate current range
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, paymentData.length);

  return (
    <Box w="100%" h="100vh" bg="#F8F8F8" overflow="hidden">
      <Flex direction={{ base: "column", md: "row" }} h="full">
        {/* Sidebar (commented out for now) */}
        {/* <Sidebar /> */}

        {/* Main Content */}
        <Box
          flex={1}
          p={4}
          overflowY="auto"
          css={{
            scrollbarWidth: "2px",
            "&::-webkit-scrollbar": {
              width: "2px",
              display: "block",
            }, // Chrome, Safari
            "&::-webkit-scrollbar-track": {
              width: "2px",
              background: "gray.200",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "green",
              borderRadius: "8px",
              width: "2px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "green.700",
              width: "2px",
            },
          }}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            mb={4}
          >
            <Text
              color="#313431"
              fontSize={{ base: "18px", md: "20px" }}
              fontFamily="Inter"
              fontWeight="500"
              wordBreak="break-word"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            >
              Payment
            </Text>

            {/* Search and Action Buttons */}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              align="center"
            >
              <Box
                w={{ base: "100%", md: "216px" }}
                h="40px"
                bg="white"
                border="1px solid #CCCCCC"
                borderRadius="8px"
                px="4"
                overflow="hidden"
              >
                <InputGroup startElement={<LuSearch color="#292D32" />}>
                  <Input
                    placeholder="Search"
                    fontSize="14px"
                    fontWeight="400"
                    fontFamily="Inter"
                    color="#A7A7A7"
                    border="none"
                    // _focus={{ boxShadow: "none" }}
                  />
                </InputGroup>
              </Box>
              <Flex
                h="40px"
                w={{ base: "100%", md: "180px" }}
                bg="white"
                border="1px solid #CCCCCC"
                borderRadius="8px"
                px="3"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                gap={2}
              >
                <Text
                  fontSize="12px"
                  fontWeight="400"
                  color="#A7A7A7"
                  whiteSpace="nowrap"
                >
                  Sort by:
                </Text>
                <SelectRoot
                  fontSize="12px"
                  fontWeight="600"
                  color="#3D3D3D"
                  // icon={<ChevronDownIcon />}
                  _focus={{ boxShadow: "none" }}
                >
                  <SelectTrigger>
                    <SelectValueText color="#3D3D3D" placeholder="Newest" />
                  </SelectTrigger>
                  <SelectContent bg="white" color="#575757">
                    <SelectItem item="Newest">Newest</SelectItem>
                    <SelectItem item="Oldest">Oldest</SelectItem>
                  </SelectContent>
                </SelectRoot>
              </Flex>
            </Flex>
          </Flex>
          <Box borderRadius="md" overflow="hidden" width="100%" align="center">
            {/* Top buttons */}
            <Box align="right">
              <Flex align="center" justify="space-between" py={8}>
                <Text fontSize="14px" color="#637381">
                  {paymentData.length} Payment links
                </Text>
                <Flex gap={4}>
                  <PaymentOverlay />
                </Flex>
              </Flex>
            </Box>
            {/* Table */}
            <Table.Root variant="simple" size="sm">
              <Table.Header bg="#EAEFEB">
                <Table.Row>
                  <Table.ColumnHeader color="#424141">
                    Page name
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="#424141">
                    Amount
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="#424141">
                    Link type
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="#424141">
                    Payment link
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="#424141">
                    Date created
                  </Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {currentItems.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell color="#424141">{item.pageName}</Table.Cell>
                    <Table.Cell color="#424141">{item.amount}</Table.Cell>
                    <Table.Cell color="#424141">{item.linkType}</Table.Cell>
                    <Table.Cell color="#424141">
                      <Flex align="center">
                        <Button variant="link" color="#F5C724" size="sm">
                          Copy link
                        </Button>
                        <IconButton
                          size="sm"
                          variant="outline"
                          color="#424141"
                          aria-label="Copy link"
                          border="none"
                          onClick={() => {
                            navigator.clipboard.writeText(item.linkType); // Copy linkType as a placeholder
                          }}
                        >
                          <LuCopy />
                        </IconButton>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell color="#424141">{item.dateCreated}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Box>
          {/* Pagination Carousel */}
          <Flex align="right" justify="space-between" mt={4} gap={1}>
            <Box>
              <Text
                w="auto"
                color="#B5B7C0"
                fontSize="14px"
                fontFamily="Inter"
                fontWeight="500"
                wordBreak="break-word"
              >
                Showing {startItem} to {endItem} of {paymentData.length} entries
              </Text>
            </Box>
            <Flex alignItems="center" gap={2}>
              <IconButton
                size="sm"
                bg="#F5F5F5"
                border="1px solid #EEEEEE"
                borderRadius="4px"
                variant="outline"
                onClick={() => setCurrentPage(1)} // Navigate to first page
                isDisabled={currentPage === 1}
                color="#292D32"
              >
                <FaChevronLeft />
              </IconButton>
              <Flex gap={2}>
                {[...Array(totalPages)].map((_, index) => (
                  <Button
                    key={index}
                    size="sm"
                    w="26px"
                    h="28px"
                    border="1px solid"
                    borderRadius="4px"
                    fontSize="12px"
                    fontWeight="500"
                    variant={currentPage === index + 1 ? "solid" : "outline"}
                    bg={currentPage === index + 1 ? "green" : "white"}
                    onClick={() => setCurrentPage(index + 1)}
                    color="#424141"
                  >
                    {index + 1}
                  </Button>
                ))}
              </Flex>
              <Text fontSize="12px" fontWeight="500" color="black" mx={2}>
                ...
              </Text>
              <Button
                size="sm"
                bg="#F5F5F5"
                border="1px solid #EEEEEE"
                borderRadius="4px"
                variant="outline"
                onClick={() => setCurrentPage(totalPages)} // Navigate to last page
                isDisabled={currentPage === totalPages}
                color="#424141"
              >
                {totalPages}
              </Button>
              <IconButton
                size="sm"
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                isDisabled={currentPage === totalPages}
                color="#292D32"
                _hover={{ bg: "green" }}
                _
              >
                <FaChevronRight />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Payment;
