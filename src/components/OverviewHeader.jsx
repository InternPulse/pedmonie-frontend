import { Box, Heading, Icon } from "@chakra-ui/react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import UserProfile from "./UserProfile";
import CardIcon from "/src/assets/card.svg?react";
import NotificationIcon from "/src/assets/direct-notification.svg?react";
import pedLogo from "/src/assets/pedLogo.svg?react";

function OverviewHeader() {
  return (
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
        fontWeight="bold"
        fontSize={{ base: "10px", xl: "20px" }}
        lineHeight="38.73px"
        textAlign="left"
        color="purple.700"
      >
        Super Admin Dashboard
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
          {pedLogo && (
            <Icon
              as={pedLogo}
              w="40px"
              h="40px"
              cursor="pointer"
              visibility="visible"
            />
          )}
        </Box>
        <Box display="flex" flexDirection="row" gap="50px" justifySelf="right">
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
  );
}

export default OverviewHeader;
