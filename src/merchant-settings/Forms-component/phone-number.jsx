import { Field, NativeSelect, Flex,} from "@chakra-ui/react";
import UserInput from "./UserInput";
 
const PhoneNumber = () => {
  return (
    <>
      <Field.Root mt="20px">
      <Field.Label>Phone Number</Field.Label>

        <Flex justifyItems='center'  alignItems='center' gap='10px'>
 
          <NativeSelect.Root size="sm" width="80.3px" focusRingColor="#9BBCA3" >
            <NativeSelect.Field
              placeholder=""
              h="47.28px"
              width="74.3px"
              focusRingColor="#9BBCA3"
              border="1px solid #9BBCA3"
              color="#3B3C3F"
            >
              <option value="react">+234</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="svelte">Svelte</option>
            </NativeSelect.Field>
            <NativeSelect.Indicator color="#2E5C38" />
            
          </NativeSelect.Root>

          <UserInput
           type="tel"
           placeholder="000-000-000"
           mb="6px"
           w="299px"
           
           />
        </Flex>
      </Field.Root>
    </>
  );
};

 

export default PhoneNumber;
