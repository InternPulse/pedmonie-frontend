import { Box, Link as ChakraLink, Icon, Stack, Text } from "@chakra-ui/react";
import { Link as ReactRouter, useLocation } from "react-router";
import { navRoutes } from "./routes";

function Nav() {
  const location = useLocation();

  return (
    <Stack as="nav" direction="column" mt="4" gap="1.5">
      {navRoutes.map((route) => {
        const isActive = location.pathname === route.path;

        return (
          <ChakraLink
            key={route.name}
            as={ReactRouter}
            to={route.path}
            textDecoration="none"
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          >
            <Box
              w="full"
              bg={isActive ? "#2E5C38" : ""}
              display="flex"
              direction="row"
              alignItems="center"
              borderRadius="8px"
              gap="10px"
              px="5"
              py="3"
              color={isActive ? "white" : "#5F5C5C"}
              _hover={{ bg: !isActive ? "#2E5C38" : "", color: "white" }}
            >
              {route.icon && (
                <Icon
                  as={route.icon}
                  w="24px"
                  h="24px"
                  color="currentColor"
                  sx={{ stroke: "currentColor" }}
                />
              )}
              <Text fontWeight="normal" fontSize="16px" lineHeight="19.36px">
                {route.name}
              </Text>
            </Box>
          </ChakraLink>
        );
      })}
    </Stack>
  );
}

export default Nav;
