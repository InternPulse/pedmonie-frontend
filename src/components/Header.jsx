import { Flex } from "@chakra-ui/react";

function Header({ children, ...props }) {
  return (
    <Flex as="header" w="full" h="60px" direction="row" {...props}>
      {children}
    </Flex>
  );
}

export default Header;
