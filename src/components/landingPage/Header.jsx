import {
  Box,
  Heading,
  Image,
  Link as ChakraLink,
  Stack,
  Alert,
  Button,
  Text,
} from "@chakra-ui/react";
import { headerRoutes } from "../../sections/header-section/route";
import { Link as ReactRouter, useNavigate } from "react-router";
import CustomButton from "../CustomButton";
import Drawer from "../Navbar/Drawer";
import pedmonieLogo from "../../assets/images/pedmonieLogo.svg?url";

import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function Header() {
  const [headerMsg, setHeaderMsg] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <Alert.Root
        bg="#E5F3E8"
        height="54px"
        color="black"
        alignItems="center"
        hidden={headerMsg ? false : true}
        pl={{ base: "", md: "50px", xl: "280px" }}
        hideBelow="md"
      >
        <Button bg="#4E995E" w="90px" h="40px" color="white" rounded="full">
          New
        </Button>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          spaceX={{ md: "80px", xl: "144px" }}
        >
          <Text w="full">
            With <Text as="strong">instant payment links</Text>, you can
            generate and share a secure payment link with your customers
          </Text>
          <IoMdClose
            ml={36}
            cursor="pointer"
            size="24px"
            onClick={() => setHeaderMsg(!headerMsg)}
          />
        </Box>
      </Alert.Root>
      <Box
        w="full"
        as="header"
        boxShadow="sm"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        py="14px"
        px={{ base: "18px", md: "20px", xl: "95px" }}
      >
        <Stack direction="row" gap="4" alignItems="center">
          <Image
            src={pedmonieLogo}
            w="40px"
            h="40px"
            alt="pedmonie-logo"
            cursor="pointer"
            onClick={() => navigate("/")}
          />

          <Heading as="h4" color="black" fontSize="20px" fontWeight="bold">
            PEDMONIE
          </Heading>
        </Stack>

        <Stack
          direction="row"
          spaceX="32px"
          alignItems="center"
          display={{ base: "none", md: "none", xl: "block" }}
        >
          {headerRoutes.map(({ name, path }) => (
            <ChakraLink
              key={name}
              as={ReactRouter}
              id={name}
              to={path}
              px="8px"
              py="8px"
              fontWeight="medium"
              fontSize="20px"
              lineHeight="30px"
              color="blackAlpha.700"
              textDecoration="none"
              _focus={{ outline: "none", boxShadow: "none" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            >
              {name}
            </ChakraLink>
          ))}
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spaceX="20px"
          display={{ base: "none", md: "none", xl: "block" }}
        >
          <CustomButton
            w="118px"
            h="40px"
            p="8px"
            fontWeight="normal"
            fontSize="18px"
            lineHeight="30px"
            rounded="full"
            color="#2E5C38"
            border="1px solid #2E5C38"
            onClick={() => navigate("/login")}
          >
            Log In
          </CustomButton>
          <CustomButton
            w="118px"
            h="40px"
            px="8px"
            py="8px"
            bg="#2E5C38"
            fontWeight="normal"
            fontSize="18px"
            lineHeight="30px"
            rounded="full"
            color="white"
            onClick={() => navigate("/signin")}
          >
            Sign Up
          </CustomButton>
        </Stack>

        <Drawer />
      </Box>
    </>
  );
}

export default Header;
