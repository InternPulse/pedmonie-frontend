import React, { useState } from "react";
import { Outlet } from "react-router";
import { Box, Icon } from "@chakra-ui/react";
import Sidebar from "../SidebarSection/Sidebar";
import SidebarLeft from "/src/assets/sidebar-left.svg?react";
import Main from "../Main";

export default function MainLayout() {
  const [closeSidebar, setCloseSidebar] = useState(true);

  return (
    <Box
      as="main"
      position="relative"
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
      <Icon
        as={SidebarLeft}
        w="32px"
        top={closeSidebar ? "34px" : "15px"}
        left={closeSidebar ? "225px" : "45px"}
        cursor="pointer"
        position="fixed"
        onClick={() => setCloseSidebar(!closeSidebar)}
        // display={}
      />

      <Main closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar}>
        <Outlet />
        {/* {children} */}
      </Main>
    </Box>
  );
}
