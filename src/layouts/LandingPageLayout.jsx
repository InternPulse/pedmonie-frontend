import { Box } from "@chakra-ui/react";
import Header from "../components/landingPage/Header";
import { Outlet } from "react-router";

function LandingPageLayout() {
  return (
    <Box
      bg="white"
      w={["", "", "", "62em", "80em", "96em"]}
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
      <Outlet />
    </Box>
  );
}

export default LandingPageLayout;
