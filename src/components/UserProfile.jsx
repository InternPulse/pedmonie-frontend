import { Box, Image, Text } from "@chakra-ui/react";
import userImage from "../assets/userImage.svg";

function UserProfile() {
  return (
    <Box display="flex" flexDirection="row" alignItems="center" gap="4">
      <Image
        w="50px"
        src={userImage}
        alt="profile-image"
        cursor="pointer"
        loading="lazy"
      />
      <Text
        fontWeight="medium"
        fontSize="16px"
        lineHeight="24.2px"
        color="black"
      >
        John Doe
      </Text>
    </Box>
  );
}

export default UserProfile;
