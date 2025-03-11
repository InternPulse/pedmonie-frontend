import { Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import CustomLink from "./CustomLink";
import pedmonieLogo from "/src/assets/pedmonieLogo.svg?react";
import SettingsIcon from "/src/assets/setting-2.svg?react";
import LogoutIcon from "/src/assets/logout.svg?react";
import SidebarLeft from "/src/assets/sidebar-left.svg?react";
import Nav from "./Nav";

function Sidebar({ closeSidebar }) {
  return (
    <Box
      as="aside"
      bg="white"
      width={closeSidebar ? "280px" : "0px"}
      px="6"
      py="6"
      gap="2.5"
      display={{ base: "none", md: "none", lg: "block" }}
      overflowY="auto"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" }, // Chrome, Safari
      }}
      borderLeft="sm"
      borderColor={{ lg: "black" }}
    >
      <Box display="flex" flexDirection="column" w="232px" gap="8">
        <Box
          w="full"
          h="14"
          borderBottom="sm"
          borderBottomColor="#e9e6e6"
          gap="5"
        >
          <HStack>
            <Box
              display="flex"
              direction="row"
              w="full"
              h="14"
              pb="4"
              justifyContent="space-between"
              justifyItems="center"
              alignItems="center"
            >
              <HStack>
                <Box boxSize="8">
                  <Icon as={pedmonieLogo} w="34px" cursor="pointer" />
                </Box>
                <Heading
                  as="h4"
                  color="#424141"
                  fontWeight="medium"
                  fontSize="20px"
                  // lineHeight="6"
                >
                  PEDMONIE
                </Heading>
              </HStack>
            </Box>
          </HStack>
        </Box>
        <Box
          w="full"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="27px"
        >
          <Box>
            <Text color="#637381" fontSize="12px" fontWeight="medium">
              GENERAL
            </Text>
            <Nav />
          </Box>
          <Box borderTop="sm" borderTopColor="#e9e6e6">
            <Text
              mt="4"
              color="#637381"
              fontSize="12px"
              lineHeight="14.52px"
              fontWeight="medium"
            >
              SETTINGS
            </Text>
            <CustomLink
              to="/settings"
              px="5"
              py="3"
              mt="4"
              borderRadius="8px"
              navGreen="#2E5C38"
              navGrey="#5F5C5C"
              icon={SettingsIcon}
            >
              Settings
            </CustomLink>
          </Box>
          <CustomLink
            to="/logout"
            px="5"
            py="3"
            borderRadius="8px"
            navGreen="#2E5C38"
            navGrey="#5F5C5C"
            icon={LogoutIcon}
          >
            Logout
          </CustomLink>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
