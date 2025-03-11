import { Box } from "@chakra-ui/react";
import SupportInputs from "./Inputs";
import SupportChat from "./SupportChat";

const SupportArticle = () => {
  return (
    <Box display="flex" gap={1} width="full">
      <SupportInputs></SupportInputs>
      <SupportChat></SupportChat>
    </Box>
  );
};

export default SupportArticle;
