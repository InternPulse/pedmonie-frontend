import { Box } from "@chakra-ui/react";

function Main({ closeSidebar, setCloseSidebar, children }) {
  return (
    <Box
      as="section"
      h="dvh"
      flex="1"
      display="flex"
      flexDirection="column"
      px={{ base: "20px", xl: "50px" }}
      py="40px"
      gap="30px"
      overflowY="auto"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      {children}
    </Box>
  );
}

export default Main;
