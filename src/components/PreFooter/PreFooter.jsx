import { Text, Box, Flex, Image, Button } from "@chakra-ui/react";

const SubFooter = () => {
  return (
    <>
      <Box h={["530px", "530px", "250px", "200px"]} bg="#2E5C38">
        <Flex
          justify={["", "", "left", "center"]}
          alignItems={["", "", "left", "center"]}
          gap={["", "", "0px", "50px"]}
          direction={["column", "", "column", "row"]}
        >
          {/*for the mobile version*/}
          <Box>
            <Text
              fontSize="40px"
              color="#FFFFFFCC"
              fontWeight="500"
              py="20px"
              textAlign="Center"
              display={["block", "block", "none", "none"]}
            >
              Still have questions?
            </Text>
            <Text
              color="white"
              fontSize="25px"
              textAlign="Center"
              pb="30px"
              display={["block", "block", "none", "none"]}
            >
              Cant find the answer you are looking far? Please chat with our
              friendly team.
            </Text>
          </Box>

          <Box>
            <Flex
              justify="center"
              alignItems="center"
              gap="50px"
              mt="20px"
              direction={["", "", ""]}
            >
              <Box>
                <Image src="/public/woman.svg" h="150px" />
              </Box>

              <Box>
                <Text
                  fontSize="20px"
                  color="white"
                  fontWeight="500"
                  pb="10px"
                  display={["none", "none", "block", "block"]}
                >
                  Still have questions?
                </Text>
                <Text
                  color="white"
                  fontSize="15px"
                  display={["none", "none", "block", "block"]}
                >
                  Cant find the answer you are looking far? Please chat with our
                  friendly team.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box>
            <Flex
              justify={["center", "center", "none", "none"]}
              alignItems={["center", "center", "none", "none"]}
            >
              <Button
                color="white"
                fontSize={["20px", "", "", "15px"]}
                bg="none"
                border="1px solid white"
                borderRadius="30px"
                fontWeight={["500px", "500px", "", "200"]}
                w={["230px", "230px", "150px", "150px"]}
                mt={["50px", "50px", "auto", "auto"]}
                p={["30px", "30px", "auto", "auto"]}
              >
                Get In Touch
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default SubFooter;
