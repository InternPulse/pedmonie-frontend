// import Profile from "../../components/superadmin-components/main/marchants/Profile"
// import TransactionHistory from "../../components/superadmin-components/main/marchants/TransactionHistory"
// import NavigationBar from "../../components/superadmin-components/main/marchants/NavigationBar"
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Table,
  NativeSelect,
  Image,
} from "@chakra-ui/react";
import GreenCheck from "./../../assets/GreenCheck.svg";
import RedCheck from "./../../assets/RedCheck.svg";

const Marchants = () => {
  const [statusFilter, setStatusFilter] = useState("Approved");

  const items = [
    {
      id: 1,
      name: "Jane Cooper",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Approved",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 2,
      name: "Coffee Maker",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Approved",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 3,
      name: "Desk Chair",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Approved",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 4,
      name: "Smartphone",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Approved",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 5,
      name: "Headphones",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Approved",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 6,
      name: "Jane Cooper",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Declined",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 7,
      name: "Coffee Maker",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Declined",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 8,
      name: "Desk Chair",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Declined",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 9,
      name: "Smartphone",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Declined",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 10,
      name: "Headphones",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Declined",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 11,
      name: "Jane Cooper",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Pending",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 12,
      name: "Coffee Maker",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Pending",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 13,
      name: "Desk Chair",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Pending",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 14,
      name: "Smartphone",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Pending",
      date: "1/28/17",
      action: "Send message",
    },
    {
      id: 15,
      name: "Headphones",
      BVN: "Validated",
      IDCard: "View File",
      utility: "View File",
      status: "Pending",
      date: "1/28/17",
      action: "Send message",
    },
  ];

  const filteredItems =
    statusFilter === "All"
      ? items
      : items.filter((item) => item.status === statusFilter);

  return (
    // <<<<<<< HEAD
    //     <NavigationBar />
    // =======
    <Box bg="#F5F5F5" w="100vw" minH="100vh" p={["20px", "40px"]}>
      <Flex
        gap="20px"
        flexDirection={["column", "column", "row"]}
        justifyContent="space-between"
      >
        <Box>
          <Text
            fontWeight="medium"
            fontSize={["20px", "24px", "28px", "32px"]}
            color="#575757"
          >
            Marchants
          </Text>
          <Text color="#B2B2B2" fontWeight="medium" fontSize="14px">
            Verification
          </Text>
        </Box>
        <Flex
          gap="20px"
          w={["90%", "380px"]}
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          alignItems="center"
        >
          <Input
            color="#000000"
            w="216px"
            h="40px"
            borderRadius="8px"
            placeholder="Search"
            variant="outline"
          />
          <Flex
            justifyContent="space-around"
            alignItems="center"
            w="150px"
            h="40px"
            border="1px solid #3D3D3D"
            borderRadius="8px"
          >
            <Text fontSize="14px" color="#A7A7A7">
              Sort by
            </Text>
            <NativeSelect.Root w="90px" variant="plain" bg="none">
              <NativeSelect.Field h="20px" color="#3D3D3D" fontSize="12px">
                <option value="1">Newest</option>
                <option value="2">Oldest</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator color="#3D3D3D" />
            </NativeSelect.Root>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        wrap="wrap"
        gap="10px"
        fontSize="14px"
        mt={["40px", "60px", "80px"]}
        borderBottom="2px solid #E5E5E5"
      >
        <Text
          mr="50px"
          borderBottom={
            statusFilter === "Approved" ? "2px solid #5EB070" : "none"
          }
          color={statusFilter === "Approved" ? "#5EB070" : "#979EAC"}
          cursor="pointer"
          onClick={() => setStatusFilter("Approved")}
        >
          {" "}
          Approved verification
        </Text>
        <Text
          mr="50px"
          borderBottom={
            statusFilter === "Pending" ? "2px solid #5EB070" : "none"
          }
          color={statusFilter === "Pending" ? "#5EB070" : "#979EAC"}
          cursor="pointer"
          onClick={() => setStatusFilter("Pending")}
        >
          {" "}
          Pending verification
        </Text>
        <Text
          borderBottom={
            statusFilter === "Declined" ? "2px solid #5EB070" : "none"
          }
          color={statusFilter === "Declined" ? "#5EB070" : "#979EAC"}
          cursor="pointer"
          onClick={() => setStatusFilter("Declined")}
        >
          Declined verification
        </Text>
      </Flex>
      <Table.Root mt="40px">
        <Table.Header>
          <Table.Row bg="#F5F5F5">
            <Table.ColumnHeader border="none" color="#000000">
              Customer Name
            </Table.ColumnHeader>
            <Table.ColumnHeader
              border="none"
              display={{ base: "none", md: "table-cell" }}
              color="#000000"
            >
              BVN
            </Table.ColumnHeader>
            <Table.ColumnHeader
              border="none"
              display={{ base: "none", md: "table-cell" }}
              color="#000000"
            >
              Identity Card
            </Table.ColumnHeader>
            <Table.ColumnHeader
              border="none"
              display={{ base: "none", md: "table-cell" }}
              color="#000000"
            >
              Utility bill
            </Table.ColumnHeader>
            <Table.ColumnHeader border="none" color="#000000">
              Status
            </Table.ColumnHeader>
            <Table.ColumnHeader
              border="none"
              display={{ base: "none", md: "table-cell" }}
              color="#000000"
            >
              Submission Date
            </Table.ColumnHeader>
            <Table.ColumnHeader border="none" color="#000000">
              Action
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {filteredItems.map((item) => (
            <Table.Row bg="#FFFFFF" key={item.id}>
              <Table.Cell border="none" color="#000000">
                {item.name}
              </Table.Cell>
              <Table.Cell
                border="none"
                display={{ base: "none", md: "table-cell" }}
                color="#4B4EFC"
              >
                <Flex alignItems="center" gap="8px">
                  {item.BVN}{" "}
                  <Image
                    rounded="md"
                    src={GreenCheck}
                    w="14px"
                    h="14px"
                    alt="GreenCheck"
                  />
                </Flex>
              </Table.Cell>
              <Table.Cell
                border="none"
                display={{ base: "none", md: "table-cell" }}
                color="#4B4EFC"
              >
                <Flex alignItems="center" gap="8px">
                  {item.IDCard}{" "}
                  <Image
                    rounded="md"
                    src={RedCheck}
                    w="14px"
                    h="14px"
                    alt="RedCheck"
                  />
                </Flex>
              </Table.Cell>
              <Table.Cell
                border="none"
                display={{ base: "none", md: "table-cell" }}
                color="#4B4EFC"
              >
                <Flex alignItems="center" gap="8px">
                  {item.utility}{" "}
                  <Image
                    rounded="md"
                    src={GreenCheck}
                    w="14px"
                    h="14px"
                    alt="GreenCheck"
                  />
                </Flex>
              </Table.Cell>
              <Table.Cell
                border="none"
                color={
                  statusFilter === "Pending"
                    ? "#FA8C16"
                    : statusFilter === "Approved"
                    ? "rgb(143, 235, 159)"
                    : statusFilter === "Declined"
                    ? "#EF4444"
                    : "#00000"
                }
              >
                <Text
                  bg={
                    statusFilter === "Pending"
                      ? "rgb(243, 201, 155)"
                      : statusFilter === "Approved"
                      ? "rgb(208, 243, 213)"
                      : statusFilter === "Declined"
                      ? "rgb(243, 171, 171)"
                      : "#00000"
                  }
                  display="inline-block"
                  border="1px solid"
                  borderRadius="5px"
                >
                  {item.status}
                </Text>
              </Table.Cell>
              <Table.Cell
                border="none"
                display={{ base: "none", md: "table-cell" }}
                color="#000000"
              >
                {item.date}
              </Table.Cell>
              <Table.Cell border="none" color="#4B4EFC">
                {item.action}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default Marchants;
