import { Box, Flex, Heading, Text, Image, Center } from "@chakra-ui/react";
import UserInput from "../Forms-component/UserInput";
import SaveButton from "../Forms-component/save-button";
import ApiButton from "../Forms-component/api-button";
import ApiKeyTable from "../mycomponent/api-key-table";
// import ApiKeyTable from "./mycomponent/api-key-table";
const ApiWebhooks = () => {
  return (
    <>
      <Box
        border="1px solid #E4E7EC"
        borderRadius="10px"
        w="1078.66px"
        mt="12px"
        pb="20px"
      >
        <Box direction="column" ml="50px" mt="25px">
          <Box mt="15px">
            <Heading fontWeight="bold">API & Webhooks</Heading>

            <Text fontWeight="bold" mt="10px" mb="15px">
              Manage APIs:
            </Text>
          </Box>

          <Box w="970px">
            {/* <Flex justifyItems="center" alignItems="center" w="500px"> 
                 
                </Flex> */}

            {/* Creating API key */}
            <Box display="flex" alignContent="center" gap="50px">
              <Box>
                <UserInput
                  label="Create New API Key"
                  type="tel"
                  w="382.99px"
                  placeholder="Name your API Key"
                />
              </Box>

              <Box pt="30px">
                <ApiButton />
              </Box>
            </Box>

            {/* API Table */}
            <Box mt="15px">
              <Text mb="2px">All API Keys</Text>
              <ApiKeyTable/>
            </Box>

            {/* WebHooks */}
            <Box mt="15px">
              <Heading mb="15px">Set Webhook:</Heading>

              <Flex justify="space-between">
                <UserInput
                  label="Create New API Key"
                  type="tel"
                  w="382.99px"
                  placeholder="Name your API Key"
                />

                <UserInput
                  label="Create New API Key"
                  type="tel"
                  w="382.99px"
                  placeholder="Name your API Key"
                />
              </Flex>
            </Box>
          </Box>
        </Box>

        <Flex justify="right" mt="30px" w="1020px">
          <SaveButton />
        </Flex>
      </Box>
    </>
  );
};

export default ApiWebhooks;
