import { Box, Image, Text } from "@chakra-ui/react";
import userImage from "../assets/userImage.svg";

function UserProfile() {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent={{ base: "end" }}
      alignSelf="center"
      gap="4"
      // border="sm"
      // borderColor="black"
    >
      <Box boxSize="50px">
        <Image
          w="50px"
          src={userImage}
          alt="profile-image"
          cursor="pointer"
          loading="lazy"
        />
      </Box>
      <Text
        fontWeight="medium"
        fontSize="16px"
        lineHeight="24.2px"
        color="black"
        hideBelow="md"
      >
        John Doe
      </Text>
    </Box>
  );
}

export default UserProfile;
