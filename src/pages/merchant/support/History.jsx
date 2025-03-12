import {
  Avatar,
  Box,
  Button,
  Fieldset,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import SupportHistoryTable from "./Table";

import { LuPaperclip } from "react-icons/lu";
import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../../../components/ui/file-upload";

const SupportHistory = () => {
  return (
    <Box mt={6}>
      <Fieldset.Root>
        <Stack>
          <Fieldset.Legend
            color=" rgba(30, 30, 30, 1)"
            fontSize="25px"
            fontWeight={500}
          >
            Most recent support history
          </Fieldset.Legend>
          <Fieldset.HelperText
            color="rgba(61, 61, 61, 1)"
            fontSize="20px"
            fontWeight={400}
            pt={4}
          >
            Last 10 support history
          </Fieldset.HelperText>
        </Stack>
      </Fieldset.Root>
      <SupportHistoryTable></SupportHistoryTable>
      <Box>
        <Stack gap={0} mt={6} pb={4}>
          <Input
            placeholder="Write your post here..."
            color=" rgba(145, 145, 145, 1)"
            fontSize="14px"
            fontWeight={400}
          />
          <HStack gap={2} width="100%">
            <Input
              placeholder="jpg.,png., jpeg., pdf., svg"
              textAlign="end"
              width="78.7%"
              color=" rgba(145, 145, 145, 1)"
              fontSize="14px"
              fontWeight={400}
            />
            <HStack>
              <FileUploadRoot directory>
                <FileUploadTrigger asChild>
                  <Button variant="none" size="sm">
                    <LuPaperclip></LuPaperclip>
                  </Button>
                </FileUploadTrigger>
                <FileUploadList />
              </FileUploadRoot>
              <Button
                type="submit"
                bgColor=" var(--Primary-green-50, rgba(234, 239, 235, 1))"
                color="var(--Primary-green-default, rgba(46, 92, 56, 1))"
                width="40%"
              >
                Save draft
              </Button>
              <Button
                type="submit"
                bgColor="var(--Primary-green-default, rgba(46, 92, 56, 1))"
                color="white"
                width="40%"
              >
                Post
              </Button>
            </HStack>
          </HStack>
        </Stack>
      </Box>
      <Box width="100%" mt={4} pb={8}>
        <Flex gap={16} width="100%">
          <HStack gap={16} width="85%">
            <Box pb={14}>
              <Avatar.Root>
                <Avatar.Fallback name="Segun Adebayo" />
                <Avatar.Image src="https://bit.ly/sage-adebayo" />
              </Avatar.Root>
            </Box>
            <Box>
              <Text
                fontSize="16px"
                fontWeight={500}
                color="  rgba(30, 30, 30, 1);
"
              >
                Akin
              </Text>
              <Text
                fontSize="16px"
                fontWeight={400}
                color=" rgba(145, 145, 145, 1)"
              >
                If your refund has been approved, it will be credited back to
                your original payment method within 3 <br /> business days. If
                we need any additional information, we will reach out to you. If
                you have any further <br /> questions, feel free to reply to
                this message. We appreciate your patience.
              </Text>
            </Box>
          </HStack>
          <Text
            fontSize="16px"
            fontWeight={400}
            color=" rgba(145, 145, 145, 1)"
          >
            8 hours ago
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default SupportHistory;
