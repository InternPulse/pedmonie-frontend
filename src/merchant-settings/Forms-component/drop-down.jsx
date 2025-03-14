import { Field, NativeSelect } from "@chakra-ui/react";
import UserInput from "../Forms-component/UserInput";
// import {
//   NativeSelectField,
//   NativeSelectRoot,
// } from "@/components/ui/native-select";

const Dropdown = ({label, option1, option2, option3, option4}) => {
  return (
    <>
      <Field.Root>
        <Field.Label>{label}</Field.Label>
        <NativeSelect.Root size="sm" width="382.99px" focusRingColor="#9BBCA3">
          <NativeSelect.Field
            h="50px"
            focusRingColor="#9BBCA3"
            border="1px solid #9BBCA3"
            color="#3B3C3F"
          >
            <option value="react">{option1}</option>
            <option value="vue">{option2}</option>
            <option value="angular">{option3}</option>
            <option value="svelte">{option4}</option>
          </NativeSelect.Field>
          <NativeSelect.Indicator color="#2E5C38" />
        </NativeSelect.Root>
      </Field.Root>
    </>
  );
};

export default Dropdown;
