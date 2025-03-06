import { Heading, Image } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouter, useNavigate } from "react-router";
import hamburgerIcon from "../assets/images/hamburger.svg?url";
import pedmonieLogo from "../assets/images/pedmonieLogo.svg?url";
import CustomButton from "./CustomButton";
import { headerRoutes } from "../sections/header-section/route";
function Drawer() {
  const navigate = useNavigate();
  return (
    <DrawerRoot placement="top">
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Image
          src={hamburgerIcon}
          w="32px"
          h="32px"
          alt="hamburger-icon"
          cursor="pointer"
          color="black"
          hideFrom="xl"
        />
      </DrawerTrigger>
      <DrawerContent
        bg="white"
        roundedBottomLeft="20px"
        roundedBottomRight="20px"
      >
        <DrawerHeader
          display="flex"
          flexDirection="row"
          alignItems="center"
          gapX="10px"
        >
          <Image
            src={pedmonieLogo}
            w="40px"
            h="40px"
            alt="pedmonie-logo"
            cursor="pointer"
            onClick={() => navigate("/")}
          />
          <DrawerTitle>
            <Heading as="h4" color="black" fontSize="20px" fontWeight="bold">
              PEDMONIE
            </Heading>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody
          color="#737375"
          display="flex"
          flexDirection="column"
          alignItems={{ base: "center", md: "left" }}
        >
          {headerRoutes.map(({ name, path }) => (
            <ChakraLink
              key={name}
              as={ReactRouter}
              id={name}
              to={path}
              w={{ base: "110px", md: "full" }}
              px="8px"
              py="8px"
              mb={{ md: "32px" }}
              fontWeight="medium"
              fontSize={{ base: "14px", md: "24px" }}
              lineHeight="30px"
              color="blackAlpha.700"
              textDecoration="none"
              _focus={{ outline: "none", boxShadow: "none" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            >
              {name}
            </ChakraLink>
          ))}
        </DrawerBody>
        <DrawerFooter
          display="flex"
          flexDirection="column"
          spaceY="10px"
          alignItems="center"
        >
          <CustomButton
            minW={{ base: "full", md: "774px" }}
            h={{ base: "60px", md: "80px" }}
            p="8px"
            fontWeight="medium"
            fontSize={{ base: "14px", md: "32px" }}
            lineHeight="30px"
            rounded="full"
            color="#2E5C38"
            border="1px solid #2E5C38"
          >
            Log In
          </CustomButton>
          <CustomButton
            minW={{ base: "full", md: "774px" }}
            h={{ base: "60px", md: "80px" }}
            px="8px"
            py="8px"
            bg="#2E5C38"
            fontWeight="medium"
            fontSize={{ base: "14px", md: "32px" }}
            lineHeight="30px"
            rounded="full"
            color="white"
          >
            Sign Up
          </CustomButton>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}

export default Drawer;
