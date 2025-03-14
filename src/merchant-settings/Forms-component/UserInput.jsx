import {} from "@chakra-ui/react";
import { Field, Input } from "@chakra-ui/react";

const UserInput = ({label,placeholder,type,mb,w,mt}) => {
  return (
    <>
       <Field.Root mt={mt}>
          <Field.Label>{label}</Field.Label>
          <Input
            type={type}
            placeholder={placeholder}
            _placeholder={{ color: "#3B3C3F" }}      
            border="1px solid #9BBCA3"
            w={w}
            h="47.28px"
            focusRingColor="#9BBCA3" 
            mb={mb}
           />
        </Field.Root>
    </>
  );
};

export default UserInput;
