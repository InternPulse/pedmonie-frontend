import { InputGroup } from "../components/ui/input-group";
import { Box, Field, Input } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import SupportFaq from "./Faq";

const SupportInputs = () => {
  return (
    <Box width="70%" pb={6}>
      <Field.Root>
        <Field.Label color="rgba(30, 30, 30, 1)" textStyle="lg">
          How can we help you?
        </Field.Label>
        <InputGroup width="75%" flex="1" startElement={<LuSearch />}>
          <Input
            placeholder="Type your question here"
            color=" rgba(145, 145, 145, 1);
            fontWeight={400}
"
          />
        </InputGroup>
      </Field.Root>
      <SupportFaq></SupportFaq>
    </Box>
  );
};
export default SupportInputs;
