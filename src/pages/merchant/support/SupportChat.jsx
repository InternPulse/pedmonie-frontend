import { LuRefreshCw, LuSend } from "react-icons/lu";
import { InputGroup } from "../../../components/ui/input-group";
import { Avatar, Box, Flex, Input } from "@chakra-ui/react";
const SupportChat = () => {
  return (
    <Box>
      <Box
        justifyContent=" space-between"
        pt=" 24px"
        pr="16px"
        pb="24px"
        pl="16px"
        borderRadius="8px"
        borderWidth="2px"
        bgColor="var(--Primary-green-50, rgba(234, 239, 235, 1))"
        borderColor=" 2px solid rgba(221, 221, 221, 1)"
      >
        <Flex gap={2}>
          {" "}
          <Avatar.Root>
            <Avatar.Fallback name="Segun Adebayo" />
            <Avatar.Image src="https://bit.ly/sage-adebayo" />
          </Avatar.Root>
          <Box
            fontSize="14px"
            fontWeight="400"
            color="rgba(61, 61, 61, 1);
"
          >
            Hi there!👋 Welcome to our support <br /> chat. I'm your virtual
            assistant, here <br /> to help with any questions you <br /> have.
            How can I assist you today?
          </Box>
        </Flex>
        <Box pt="65%">
          <InputGroup
            bgColor=" rgba(255, 255, 255, 1);
"
            flex="1"
            startElement={<LuRefreshCw />}
            endElement={<LuSend />}
          >
            <Input
              placeholder="Ask assistance anything..."
              textAlign="start"
              color=" rgba(145, 145, 145, 1)"
              fontWeight={400}
              fontSize="14px"
            />
          </InputGroup>
        </Box>
      </Box>
    </Box>
  );
};

export default SupportChat;
