import { For, Stack, Table } from "@chakra-ui/react";

const SupportHistoryTable = () => {
  // Function to determine the color based on status
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "resolved":
        return "#1FCB4F";
      case "pending":
        return "#FFBD2E";
      case "in progress":
        return " #1984E6";
      default:
        return "#121212";
    }
  };

  return (
    <Stack
      gap={20}
      mt={6}
      bgColor="var(--Primary-green-50, rgba(234, 239, 235, 1))"
    >
      <For each={["lg"]}>
        {(size) => (
          <Table.Root
            key={size}
            size={size}
            solid
            variant="unstyled" // Removes default table styling
            sx={{ borderCollapse: "collapse" }}
          >
            <Table.Header
              color="rgba(30, 30, 30, 1)"
              fontSize="16px"
              fontWeight={500}
            >
              <Table.Row>
                <Table.ColumnHeader>Ticket ID</Table.ColumnHeader>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
                <Table.ColumnHeader>Issue</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Agent</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {items.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell
                    fontWeight={500}
                    fontSize="14px"
                    color="rgba(61, 61, 61, 1)"
                  >
                    {item.TicketId}
                  </Table.Cell>
                  <Table.Cell
                    fontWeight={500}
                    fontSize="14px"
                    color="rgba(61, 61, 61, 1)"
                  >
                    {item.Date}
                  </Table.Cell>
                  <Table.Cell
                    fontWeight={500}
                    fontSize="14px"
                    color="rgba(61, 61, 61, 1)"
                  >
                    {item.Issue}
                  </Table.Cell>
                  <Table.Cell
                    color={getStatusColor(item.Status)}
                    fontWeight={500}
                    fontSize="14px"
                  >
                    {item.Status}
                  </Table.Cell>
                  <Table.Cell
                    textAlign="end"
                    fontWeight={500}
                    fontSize="14px"
                    color="rgba(61, 61, 61, 1)"
                  >
                    {item.Agent}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        )}
      </For>
    </Stack>
  );
};

const items = [
  {
    id: 1,
    TicketId: "#236571AB",
    Date: "07/02/2025",
    Issue: "Account suspension",
    Status: "In progress",
    Agent: "Kunle Christian",
  },
  {
    id: 2,
    TicketId: "#273187FE",
    Date: "05/02/2025",
    Issue: "Unauthorized access",
    Status: "Pending",
    Agent: "Adimola Ajayi",
  },
  {
    id: 3,
    TicketId: "#217428BC",
    Date: "15/01/2025",
    Issue: "Error messages",
    Status: "Resolved",
    Agent: "Joy Abiodun",
  },
  {
    id: 4,
    TicketId: "#222142DA",
    Date: "03/01/2025",
    Issue: "Refund request",
    Status: "Pending",
    Agent: "Akin Damilola",
  },
];

export default SupportHistoryTable;
