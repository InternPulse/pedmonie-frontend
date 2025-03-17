import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";
import Header from "../components/landingPage/Header";

function LandingPageLayout() {
  return (
    <Box
      bg="white"
      h="dvh"
      overflowY="auto"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
      display="flex"
      flexDirection="column"
      m="auto"
    >
      <Header />
      <Box w={{ base: "full", xl: ["", "", "", "", "80em", "96em"] }} m="auto">
        <Outlet />
      </Box>
    </Box>
  );
}

export default LandingPageLayout;
