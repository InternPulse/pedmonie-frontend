import { Box } from "@chakra-ui/react";
import RequestPayoutButton from "../RequestPayoutButton";
import ViewCustomersButton from "../ViewCustomersButton";
import ViewTransactionButton from "../ViewTransactionsButton";
function QuickActions() {
  return (
    <Box
      w={{ xl: "646px" }}
      display="flex"
      flexDirection={{ base: "column", xl: "row" }}
      gap="6.5px"
    >
      <ViewTransactionButton />
      <RequestPayoutButton />
      <ViewCustomersButton />
    </Box>
  );
}

export default QuickActions;
