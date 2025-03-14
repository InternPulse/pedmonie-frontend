import { Box, Flex, Field, Image, Heading } from "@chakra-ui/react";
import UserInput from "../Forms-component/UserInput";
import Dropdown from "../Forms-component/drop-down";
import SaveButton from "../Forms-component/save-button";
 import PhoneNumber from "../Forms-component/phone-number";
import { PasswordInput } from "../password-input";
 // import { PasswordInput } from "./components/ui/password-input";
// import { Switch } from "./components/ui/switch";
// import ApiKeyTable from "./my-component/api-key-table";
// import KycBox from "./forms-component/KycBox";

const PayoutPrefence = () => {
  return (
    <>
      <Box
        border="1px solid #E4E7EC"
        borderRadius="10px"
        w="1078.66px"
        mt="12px"
        pb="20px"
      >
        <Box direction="column" ml="50px">
          <Box>
            <Heading py="30px">Payout Preference</Heading>
          </Box>

          <Box>
            {/* <Flex w="970px" justify="space-between">
              <Box>
                <UserInput
                 label="Business Name"
                  type="tel" 
                  w="382.99px"
                  placeholder="Input Name"
                  />
                <UserInput label="Email" type="tel" w="382.99px" mt="27px" placeholder="Input Email"/>
                <UserInput label="Address" type="tel" w="382.99px" mt="27px" placeholder="Input Address" />
              </Box>

              <Box>
                <UserInput label="Business Type" type="tel" w="382.99px" placeholder="Type"/>
                <PhoneNumber />
                <UserInput label="Date Registered" type="tel" w="382.99px" mt="27px" placeholder="12-01-2025"/>
              </Box>
            </Flex> */}

            <Flex w="970px" justify="space-between" mb="30px">
              <Dropdown 
              label="Payout Frequency"
              option1="Monthly"
              option2="Weekly"
              option3="Annualy"
              option4=""
              /> 


              <Dropdown 
              label="Payout Method"
              option1="Bank Transfer"
              option2="Mobile Money"
              option3="Flutter Wav"
              option4=""
              />
            </Flex>

            <Flex w="970px" justify="space-between" mb="30px">
              <Dropdown 
              label="Bank Name"
              option1="Zenith Bank"
              option2="Access Bank"
              option3="Opay"
              option4=""
              />
              <UserInput
              label="Account Number"
              placeholder="00000000000"
              type="number"
              w="382.99px"
              />
            </Flex>

            <Flex w="970px" justify="space-between" mb="30px">
               <PhoneNumber />
              <UserInput label="Next Due Date" type="text" w="382.99px" mt="27px" placeholder="12-01-2025"/>
            </Flex>
          </Box>
        </Box>

        <Flex justify="right" mt="18px" w="1020px">
          <SaveButton />
        </Flex>
      </Box>
    </>
  );
};

export default PayoutPrefence;

// import { Text, Box, Flex, Heading } from "@chakra-ui/react"

{
  /* <Box border="1px solid #E4E7EC" borderRadius="10px"   w="1078.66px" mt='12px'>

<Flex justify="center"> 
  <Box> 
<Flex  justify="space-between" alignItems="center" w="970px" mt="50px">
  <Heading>Business Profile</Heading>

  <Box mr="200px">
    <Text>Edit Business Logo</Text>
  </Box>
</Flex>
</Box>


<Box> 
<Flex w="970px">
<Box></Box>

<Box></Box>
</Flex>
</Box>
</Flex>
</Box> */
}
