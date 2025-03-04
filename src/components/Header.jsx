import { Box, Icon, Text } from "@chakra-ui/react";
import pedmonieLogo from "../../public/pedmonieLogo.svg";

function Header() {
  return (
    <Box as="header" border="sm" borderColor="black" py="24px" px="95px">
      <Icon as={pedmonieLogo} w="24" h="24" cursor="pointer" />
    </Box>
  );
}

export default Header;
