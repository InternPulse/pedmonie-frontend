import { Table, Box, Flex, Text, Image } from "@chakra-ui/react";
import CaretDown from "../assets/CaretDown.svg"
import Dots from "../assets/Dots.svg"

const TransactionStatus = () => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "#1FCB4F";
      case "pending":
        return "#FFBD2E";
      case "cancelled":
        return "#E14640";
      default:
        return "#121212";
    }
  };
  return (
    <Box w="1133px" h="477px">
      <Flex justify="space-between" bg="white" color="#737375" h="56.07px" pt="20px" fontSize="13.89px" px="20px">
        <Flex gap="40px">
        <Text color="#7A00A3" borderBottom="4px solid" borderColor="#7A00A3" w="55.56px" textAlign="center">All</Text>
        <Text>Money In</Text>
        <Text>Money Out</Text>
        </Flex>
        <Flex align="center" gap="10px">
        <Text>Status: All</Text>
        <Image src={CaretDown} alt="Down Arrow" width="10.42px" height="5.21px" />
        </Flex>
      </Flex>
      <Table.Root interactive>
        <Table.Header  border="none">
          <Table.Row fontSize="13.89px" borderBottom="2px solid" bg="rgba(250, 250, 250, 0.81)" h="72.89px">
            <Table.ColumnHeader color="#737375">Ref ID</Table.ColumnHeader>
            <Table.ColumnHeader color="#737375">
              Transaction Date
            </Table.ColumnHeader>
            <Table.ColumnHeader color="#737375">From</Table.ColumnHeader>
            <Table.ColumnHeader color="#737375">Type</Table.ColumnHeader>
            <Table.ColumnHeader color="#737375">Amount</Table.ColumnHeader>
            <Table.ColumnHeader color="#737375">Status</Table.ColumnHeader>
            <Table.ColumnHeader color="#737375" textAlign="end">
              Action
            </Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row h="72.89px" borderBottom="2px solid" borderColor="#F5F5F5" _hover={{ bg: "gray.100" }} fontSize="13.89px" bg="#FFFFFF" key={item.id}>
              <Table.Cell  color="#121212">{item.RefID}</Table.Cell>
              <Table.Cell color="#121212">{item.Date}</Table.Cell>
              <Table.Cell color="#121212">{item.From}</Table.Cell>
              <Table.Cell color="#121212">{item.Type}</Table.Cell>
              <Table.Cell color="#121212">{item.Amount}</Table.Cell>
              <Table.Cell color={getStatusColor(item.Status)}>
                {item.Status}
              </Table.Cell>
              <Table.Cell color="#121212" textAlign="end" position="relative">
                <Image position="absolute" right="40px" src={Dots} alt="Down Arrow" width="3.47px" height="17.36px" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

const items = [
  {
    id: 1,
    RefID: "456789356",
    Date: "Sep 9, 2024, 04:30pm",
    From: "Darrell Steward",
    Type: "Transfer",
    Amount: "+$5,670.00",
    Status: "Pending",
  },
  {
    id: 2,
    RefID: "456789356",
    Date: "Sep 8, 2024, 03:13pm",
    From: "Arlene McCoy",
    Type: "Transfer",
    Amount: "+$15,000.00",
    Status: "Completed",
  },
  {
    id: 3,
    RefID: "456789356",
    Date: "Sep 7, 2024, 1:00pm",
    From: "Bessie Cooper",
    Type: "Card",
    Amount: "-$3,456.00",
    Status: "Cancelled",
  },
  {
    id: 4,
    RefID: "456789356",
    Date: "Sep 6, 2024, 07:00am",
    From: "kikikarisma@email.com",
    Type: "Link",
    Amount: "+$30,000.00",
    Status: "Pending",
  },
  {
    id: 5,
    RefID: "456789356",
    Date: "Sep 6, 2024, 02:00am",
    From: "Wise - 5466xxxx",
    Type: "Link",
    Amount: "+$8,000.00",
    Status: "Completed",
  },
];

export default TransactionStatus;
