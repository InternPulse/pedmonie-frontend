import React, { useState } from "react";
import { Outlet } from "react-router";
import { Box, Icon } from "@chakra-ui/react";
import Sidebar from "../SidebarSection/SuperAdminSidebar/Sidebar";
import SidebarLeft from "/src/assets/sidebar-left.svg?react";
import Main from "./Main";
import ProtectedRoute from "../ProtectedRoutes";
import { jwtDecode } from "jwt-decode";

export default function SuperAdminLayout() {
  const [closeSidebar, setCloseSidebar] = useState(true);
  const isAuthenticated = localStorage.getItem("authToken");

  return (
    <Box
      as="main"
      position="relative"
      display="flex"
      direction="row"
      bg="#F8F8F8"
      w={["", "", "", "", "80em", "96em"]}
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
        position="absolute"
        onClick={() => setCloseSidebar(!closeSidebar)}
        display={!isAuthenticated ? "none" : "block"}
        // display={}
      />

      <Main closeSidebar={closeSidebar} setCloseSidebar={setCloseSidebar}>
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Outlet />
        </ProtectedRoute>
      </Main>
    </Box>
  );
}
