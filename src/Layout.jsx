import {Box, Flex } from "@chakra-ui/react";

import BalanceSide from "./custom-components/balanceside";
import DetailsSide from "./custom-components/detailsside";

const Layout = () => {
  return (
    <>
      <Box bg="#F5F5F5" h="100vh">
        <Flex gap={14}>
          <BalanceSide />
          <DetailsSide />
        </Flex>
      </Box>
    </>
  );
};

export default Layout;
