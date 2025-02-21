import { Box } from "@chakra-ui/react";
import RequestPayoutButton from "../RequestPayoutButton";
import ViewCustomersButton from "../ViewCustomersButton";
import ViewTransactionButton from "../ViewTransactionsButton";
function QuickActions() {
  return (
    <Box w="646px" display="flex" flexDirection="row" gap="6.5px">
      <ViewTransactionButton />
      <RequestPayoutButton />
      <ViewCustomersButton />
    </Box>
  );
}

export default QuickActions;
