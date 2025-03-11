import { Link as ReactRouter, useLocation } from "react-router";
import { Link as ChakraLink, Icon, Text } from "@chakra-ui/react";

function CustomLink({ children, to, icon, navGreen, navGrey, ...props }) {
  const location = useLocation();
  const isActive = location.pathname;
  return (
    <ChakraLink
      w="full"
      as={children !== "Logout" && ReactRouter}
      to={to}
      bg={isActive === to ? navGreen : ""}
      textDecoration="none"
      color={isActive === to ? "white" : navGrey}
      _focus={{ outline: "none", boxShadow: "none" }}
      _focusVisible={{ outline: "none", boxShadow: "none" }}
      _hover={{ bg: isActive !== to ? navGreen : "", color: "white" }}
      {...props}
    >
      {icon && (
        <Icon
          as={icon}
          w="24px"
          h="24px"
          color="currentColor"
          sx={{ stroke: "currentColor" }}
        />
      )}
      <Text fontWeight="normal" fontSize="16px" lineHeight="19.36px">
        {children}
      </Text>
    </ChakraLink>
  );
}

export default CustomLink;
