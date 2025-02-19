import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Divider,
  VStack,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  ChevronDownIcon,
  DownloadIcon,
  AddIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
  CopyIcon,
} from "@chakra-ui/icons";

// Import your assets here
import Logo from "./transactionConfirmationAssets/logo.png"; // ✅ Define the logo path
import Toogle from "./transactionConfirmationAssets/toogle.png"; // ✅ Define the toggle path
import Overview from "./transactionConfirmationAssets/overview.png"; // ✅ Define the overview icon path
import Analytics from "./transactionConfirmationAssets/analytics.png"; // ✅ Define the analytics icon path
import Transactions from "./transactionConfirmationAssets/transactions.png"; // ✅ Define the transactions icon path
import Payments from "./transactionConfirmationAssets/payment.png"; // ✅ Define the payments icon path
import Subscription from "./transactionConfirmationAssets/subscription.png"; // ✅ Define the subscription icon path
import Support from "./transactionConfirmationAssets/support.png"; // ✅ Define the support icon path
import Settings from "./transactionConfirmationAssets/settings.png"; // ✅ Define the settings icon path
import Logout from "./transactionConfirmationAssets/logout.png"; // ✅ Define the logout icon path

const Payment = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
    <Box w="100vw" h="100vh" bg="#F8F8F8" overflow="hidden">
      <Flex h="full">
        {/* Sidebar */}
        <VStack
          w="233px"
          h="90vh"
          bg="white"
          p={3}
          spacing={2}
          align="start"
          borderRight="1px solid #EEEEEE"
        >
          <Flex w="full" align="center" justify="space-between" mb={2}>
            <Flex align="center" gap={2}>
              <Image src={Logo} alt="Logo" w="24px" h="24px" />
              <Text fontSize="16px" fontWeight="500" color="#424141">
                PEDMONIE
              </Text>
            </Flex>
            <Image src={Toogle} alt="Toggle" w="24px" h="24px" />
          </Flex>
          <Divider />

          {/* Menu Items */}
          <Text fontSize="xs" color="#637381" fontWeight="500" pt={2}>
            GENERAL
          </Text>

          {[
            { icon: Overview, text: "Overview" },
            { icon: Analytics, text: "Analytics" },
            { icon: Transactions, text: "Transactions" },
            { icon: Payments, text: "Payment", isActive: true },
            { icon: Subscription, text: "Subscription" },
            { icon: Support, text: "Support" },
          ].map((item) => (
            <Button
              key={item.text}
              variant="ghost"
              w="full"
              h="36px"
              justifyContent="flex-start"
              leftIcon={
                <Image
                  src={item.icon}
                  alt={`${item.text} Icon`}
                  w="20px"
                  h="20px"
                  filter="grayscale(100%) brightness(100) invert(1)"
                />
              }
              bg={item.isActive ? "#2E5C38" : "transparent"}
              _hover={{ bg: "#2E5C38", color: "#ffffff" }}
            >
              <Text
                fontSize="14px"
                color={item.isActive ? "#ffffff" : "#5F5C5C"}
              >
                {item.text}
              </Text>
            </Button>
          ))}

          <Divider mt={2} />
          <Text fontSize="xs" color="#424141" fontWeight="500" pt={2}>
            SETTINGS
          </Text>

          <Button
            variant="ghost"
            w="full"
            h="36px"
            justifyContent="flex-start"
            leftIcon={
              <Image
                src={Settings}
                alt="Settings Icon"
                w="20px"
                h="20px"
                filter="grayscale(100%) brightness(100) invert(1)"
              />
            }
          >
            <Text fontSize="14px" color="#5F5C5C">
              Settings
            </Text>
          </Button>

          <Button
            variant="ghost"
            w="full"
            h="36px"
            justifyContent="flex-start"
            leftIcon={
              <Image
                src={Logout}
                alt="Logout Icon"
                w="20px"
                h="20px"
                filter="grayscale(100%) brightness(100) invert(1)"
              />
            }
            mt="auto"
          >
            <Text fontSize="14px" color="#5F5C5C">
              Logout
            </Text>
          </Button>
        </VStack>

        {/* Main Content */}
        <Box flex={1} p={4} overflow="auto">
          <Flex justify="space-between" align="center" mb={4}>
            <VStack align="start" spacing={1}>
              <Text fontSize="18px" fontWeight="500" color="#313431">
                Payment
              </Text>
              <Text fontSize="14px" color="#637381">
                {paymentData.length} payment links
              </Text>
            </VStack>

            {/* Search and Action Buttons */}
            <Flex gap={4} align="center">
              <InputGroup w="250px" size="sm">
                <InputLeftElement>
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Search..."
                  bg="white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>

              {/* Dropdown Menu for Payment Links */}
              <Menu>
                <MenuButton
                  size="sm"
                  as={Button}
                  variant="outline"
                  leftIcon={<ChevronDownIcon />}
                  bg="#919191"
                  color="white"
                  px={4}
                  py={2}
                  borderRadius="0"
                >
                  {selectedOption}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setSelectedOption("Link Type 1")}>
                    Link Type 1
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedOption("Link Type 2")}>
                    Link Type 2
                  </MenuItem>
                  <MenuItem onClick={() => setSelectedOption("Link Type 3")}>
                    Link Type 3
                  </MenuItem>
                  {/* Add more menu items as needed */}
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          <Box borderRadius="md" overflow="hidden" width="95%" align="center">
            {/* Top buttons */}
            <Box align="right">
              <Flex align="center" justify="space-between" py={8}>
                <Text fontSize="14px" color="#637381">
                  {paymentData.length} Payment links
                </Text>

                <Flex gap={4}>
                  <Button
                    size="sm"
                    rightIcon={<ChevronDownIcon />}
                    variant="outline"
                    bg="#919191"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="0"
                  >
                    All Payment Link
                  </Button>
                  <Button
                    size="sm"
                    rightIcon={<DownloadIcon />}
                    variant="outline"
                    bg="#919191"
                    color="white"
                    px={4}
                    py={2}
                    borderRadius="0"
                  >
                    Download Link
                  </Button>
                  <Button
                    size="sm"
                    rightIcon={<AddIcon />}
                    colorScheme="green"
                    px={4}
                    py={2}
                    borderRadius="0"
                  >
                    New Payment Link
                  </Button>
                </Flex>
              </Flex>
            </Box>

            {/* Table */}
            <Table variant="simple" size="sm">
              <Thead bg="#EAEFEB">
                <Tr>
                  <Th color="#424141">Page name</Th>
                  <Th color="#424141">Amount</Th>
                  <Th color="#424141">Link type</Th>
                  <Th color="#424141">Payment link</Th>
                  <Th color="#424141">Date created</Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentItems.map((item, index) => (
                  <Tr key={index}>
                    <Td color="#424141">{item.pageName}</Td>
                    <Td color="#424141">{item.amount}</Td>
                    <Td color="#424141">{item.linkType}</Td>
                    <Td color="#424141">
                      <Flex align="center">
                        <Button variant="link" color="#F5C724" size="sm">
                          Copy link
                        </Button>
                        <IconButton
                          icon={<CopyIcon />}
                          size="sm"
                          variant="outline"
                          color="#424141"
                          aria-label="Copy link"
                          onClick={() => {
                            navigator.clipboard.writeText(item.linkType); // Copy linkType as a placeholder
                          }}
                        />
                      </Flex>
                    </Td>
                    <Td color="#424141">{item.dateCreated}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>

          {/* Pagination Carousel */}
          <Flex align="right" justify="space-between" mt={4} gap={1}>
            <Box>
              <Text color="#424141">
                Showing {startItem} to {endItem} of {paymentData.length} entries
              </Text>
            </Box>
            <Flex>
              <IconButton
                size="sm"
                icon={<ChevronLeftIcon />}
                variant="outline"
                onClick={() => setCurrentPage(1)} // Navigate to first page
                isDisabled={currentPage === 1}
                color="#424141"
              />
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  size="sm"
                  variant={currentPage === index + 1 ? "solid" : "outline"}
                  colorScheme={currentPage === index + 1 ? "green" : "gray"}
                  onClick={() => setCurrentPage(index + 1)}
                  color="#424141"
                >
                  {index + 1}
                </Button>
              ))}
              <Text color="#424141">...</Text>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setCurrentPage(totalPages)} // Navigate to last page
                isDisabled={currentPage === totalPages}
                color="#424141"
              >
                {totalPages}
              </Button>
              <IconButton
                size="sm"
                icon={<ChevronRightIcon />}
                variant="outline"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                isDisabled={currentPage === totalPages}
                color="#424141"
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Payment;
