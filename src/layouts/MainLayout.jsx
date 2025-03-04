import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

function MainLayout({ children }) {
  return (
    <Box
      bg="white"
      w={["", "", "", "62em", "80em", "96em"]}
      h="dvh"
      display="flex"
      flexDirection="column"
      m="auto"
    >
      <Header />
      {children}
    </Box>
  );
}

export default MainLayout;
