import { Box, Heading, Icon, Image, Text } from "@chakra-ui/react";
import Header from "../Header";
import SearchInput from "../SearchInput";
import CardIcon from "/src/assets/card.svg?react";
import NotificationIcon from "/src/assets/direct-notification.svg?react";
import pedmonieLogo from "/src/assets/pedmonieLogo.svg?react";
import UserProfile from "../UserProfile";

function Container({ children }) {
  return (
    <Box
      as="section"
      h="dvh"
      flex="1"
      display="flex"
      flexDirection="column"
      px={{ base: "20px", xl: "50px" }}
      py="40px"
      gap="30px"
      overflowY="auto"
      css={{
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Header
        h={{ xl: "60px" }}
        display="flex"
        flexDirection={{
          base: "column-reverse",
          md: "column-reverse",
          xl: "row",
        }}
        gap={{ base: "10px", md: "10px" }}
        alignItems={{ xl: "center" }}
        justifyContent="space-between"
      >
        <Heading
          as="h4"
          w={{ base: "fit-content" }}
          // hideBelow="lg"
          fontWeight="bold"
          fontSize={{ base: "20px", xl: "32px" }}
          lineHeight="38.73px"
          textAlign="left"
          color="black"
        >
          Merchant Dashboard
        </Heading>
        <SearchInput />
        <Box
          w={{
            base: "full",
            sm: "full",
            md: "full",
            lg: "fit-content",
            xl: "fit-content",
          }}
          h="50px"
          display="flex"
          flexDirection="row"
          justifyContent={{ base: "space-between" }}
          alignSelf={{ sm: "end", md: "end" }}
          alignItems="center"
        >
          <Box alignItems="center" hideFrom="lg">
            <Image
              src="/src/assets/pedmonieLogo.svg?react"
              w="40px"
              h="40px"
              cursor="pointer"
              alt="logo"
              loading="lazy"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gap="50px"
            justifySelf="right"
          >
            <Box
              display="flex"
              flexDirection="row"
              gap="8"
              my="2"
              mr={{ xl: "52px" }}
            >
              <Icon
                as={NotificationIcon}
                bg="#EAEFEB"
                rounded="full"
                alignSelf="center"
                boxSize="8"
                p="2"
                m="auto"
                cursor="pointer"
              />

              <Icon
                as={CardIcon}
                bg="#EAEFEB"
                rounded="full"
                alignSelf="center"
                boxSize="8"
                p="2"
                m="auto"
                cursor="pointer"
              />
            </Box>
            <UserProfile />
          </Box>
        </Box>
      </Header>
      {children}
    </Box>
  );
}

export default Container;
