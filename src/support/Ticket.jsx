import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../components/ui/file-upload";

import {
  Box,
  Flex,
  For,
  HStack,
  NativeSelect,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Button, Field, Fieldset, Input, Stack } from "@chakra-ui/react";
import { LuPaperclip } from "react-icons/lu";
import SupportHistory from "./History";

const SupportTicket = () => {
  return (
    <Box width="100%">
      <Text
        fontSize="20px"
        fontWeight={500}
        color="rgba(30, 30, 30, 1);
"
      >
        Submit a support ticket to report an issue or request assistance
      </Text>
      <Box
        gap="24px"
        padding="24px"
        borderRadius="8px"
        borderWidth="2px"
        mt="16px"
      >
        <Fieldset.Root size="lg" width="100%">
          <Stack>
            <Fieldset.Legend
              fontSize="20px"
              fontWeight={500}
              color="rgba(30, 30, 30, 1);
"
            >
              Create a new ticket
            </Fieldset.Legend>
            <Fieldset.HelperText
              color=" rgba(61, 61, 61, 1)"
              fontSize="18px"
              fontWeight="400"
            >
              Fill in all the information here, then click on submit button
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content>
            <HStack>
              <Field.Root>
                <Field.Label
                  color=" rgba(30, 30, 30, 1)"
                  fontSize="16px"
                  fontWeight={500}
                >
                  Your Name
                </Field.Label>
                <Input
                  placeholder="Full name"
                  color=" rgba(145, 145, 145, 1)"
                  fontSize="16px"
                  fontWeight="400"
                  fontFamily="serif"
                />
              </Field.Root>
              <Field.Root>
                <Field.Label
                  color=" rgba(30, 30, 30, 1)"
                  fontSize="16px"
                  fontWeight={500}
                >
                  Email
                </Field.Label>
                <Input
                  placeholder="Email address"
                  color=" rgba(145, 145, 145, 1)"
                  fontSize="14px"
                  fontWeight="400"
                />
              </Field.Root>
            </HStack>
            <HStack>
              <Field.Root>
                <Field.Label
                  color=" rgba(30, 30, 30, 1)"
                  fontSize="16px"
                  fontWeight={500}
                >
                  Select Issue
                </Field.Label>
                <NativeSelect.Root>
                  <NativeSelect.Field
                    name="Technical issue"
                    color=" rgba(145, 145, 145, 1)"
                    fontSize="14px"
                    fontWeight="400"
                  >
                    <For
                      each={[
                        "Technical issue",
                        "Fraud",
                        "Unsuccesful transaction",
                      ]}
                    >
                      {(item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>
              <Field.Root>
                <Textarea
                  autoresize
                  placeholder="Detailed description of your issue..."
                  color=" rgba(145, 145, 145, 1)"
                  fontSize="14px"
                  fontWeight="400"
                ></Textarea>
              </Field.Root>
            </HStack>
          </Fieldset.Content>
          <Flex justifyContent="left" width="20%">
            <FileUploadRoot directory>
              <FileUploadTrigger asChild>
                <Button variant="none" size="sm">
                  <LuPaperclip></LuPaperclip> Attach file
                </Button>
              </FileUploadTrigger>
              <FileUploadList />
            </FileUploadRoot>
            <Button
              type="submit"
              bgColor="var(--Primary-green-default, rgba(46, 92, 56, 1))"
              color="white"
            >
              Submit Ticket
            </Button>
          </Flex>
        </Fieldset.Root>
      </Box>
      <SupportHistory></SupportHistory>
    </Box>
  );
};
export default SupportTicket;
