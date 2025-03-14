import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
 
import SaveButton from "../Forms-component/save-button";
import PhoneNumber from "../Forms-component/phone-number";
import UserInput from "../Forms-component/UserInput";

const BusinessProfile = () => {
  return (
    <>
      <Box
        border="1px solid #E4E7EC"
        borderRadius="10px"
        w="1078.66px"
        mt="12px"
        pb="20px"
      >
        <Box direction="column" ml="50px">
          <Box>
            <Flex
              justify="space-between"
              alignItems="center"
              w="970px"
              mt="50px"
              direction={["column", "column", "row", "row"]}
            >
              <Heading>Business Profile</Heading>

              <Box mr="0px">
                <Image
                  src="https://example.com/image.jpg"
                  alt="Description of the image"
                />

                <Text>Edit Business Logo</Text>
              </Box>
            </Flex>
          </Box>

          <Box  >
            <Flex w="970px" justify="space-between" direction={["column", "column", "row", "row"]}>
              <Box>
                <UserInput
                 label="Business Name"
                  type="tel" 
                  w="382.99px"
                  placeholder="Input Name"
                  />
                <UserInput label="Email" type="text" w="382.99px" mt="27px" placeholder="Input Email"/>
                <UserInput label="Address" type="text" w="382.99px" mt="27px" placeholder="Input Address" />
              </Box>

              <Box>
                <UserInput label="Business Type" type="text" w="382.99px" placeholder="Type"/>
                <PhoneNumber />
                <UserInput label="Date Registered" type="text" w="382.99px" mt="27px" placeholder="12-01-2025"/>
              </Box>
            </Flex>
          </Box>
        </Box>


 
        <Flex justify="right" mt="18px" w="1020px" direction={["column", "column", "row", "row"]}>
          <SaveButton />
        </Flex>
      </Box>
    </>
  );
};

export default BusinessProfile;
