import { Box, Spinner } from "@chakra-ui/react";

function Loading() {
  return (
    <Box display="flex" h="dvh">
      <Spinner color="teal.500" size="lg" m="auto" />
    </Box>
  );
}

export default Loading;
