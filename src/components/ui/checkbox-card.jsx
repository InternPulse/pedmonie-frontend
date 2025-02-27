import { Box, Checkbox, Text, VStack } from "@chakra-ui/react";
import * as React from "react";

export const CheckboxCard = React.forwardRef(function CheckboxCard(props, ref) {
  const { inputProps, label, description, ...rest } = props;

  return (
    <Box
      as="label"
      display="flex"
      alignItems="center"
      p={4}
      cursor="pointer"
      _hover={{ bg: "gray.50" }}
      {...rest}
    >
      <Checkbox ref={ref} {...inputProps} />
      <VStack align="start" ml={3}>
        {label && <Text fontWeight="bold">{label}</Text>}
        {description && <Text fontSize="sm">{description}</Text>}
      </VStack>
    </Box>
  );
});
