import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Sidebar from "../SidebarSection/Sidebar";
import Main from "../Main";

export default function MainLayout({ children }) {
  const [closeSidebar, setCloseSidebar] = useState(true);
  return (
    <Box
      as="main"
      display="flex"
      direction="row"
      bg="#F8F8F8"
      w={["", "", "", "62em", "80em", "96em"]}
      h="dvh"
      m="auto"
    >
      {closeSidebar && (
        <Sidebar
          closeSidebar={closeSidebar}
          setCloseSidebar={setCloseSidebar}
        />
      )}

      <Main closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar}>
        {children}
      </Main>
    </Box>
  );
}
