import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import UserInput from "../Forms-component/UserInput";
import SaveButton from "../Forms-component/save-button";
import { Field } from "@chakra-ui/react";
import KycBox from "../Forms-component/KycBox";
import Toggler from "../Forms-component/toggler";
import { PasswordInput } from "../password-input";

const Security = () => {
  return (
    <>
      <Box
        border="1px solid #E4E7EC"
        borderRadius="10px"
        w="1078.66px"
        mt="12px"
        pb="20px"
      >
        <Box ml="50px">
          <Box mt="15px">
            <Heading fontWeight="bold">Security</Heading>

            <Text fontWeight="bold" mt="10px" mb="15px">
              Password Management:
            </Text>
          </Box>

          <Box>
               
                <Flex>
                {/* Business Name */}
                <UserInput
                  label="Business Name"
                  type="tel"
                  w="382.99px"
                  placeholder="Input Name"
                />

              {/*New Passowrd & Confirm Password*/}
    
                <Field.Root mt="27px">
                  <Field.Label>New Passowrd</Field.Label>
                  <PasswordInput
                    type="passowrd"
                    placeholder="**************"
                    size="lg"
                        w="382.99px"
                  />
                </Field.Root>
                </Flex>


                <Flex>  
                {/* Current Password */}
                <Field.Root mt="27px">
                  <Field.Label>Current Password</Field.Label>
                  <PasswordInput
                    type="passowrd"
                    placeholder="**************"
                    size="lg"
                  />
                </Field.Root>
                  {/* Confirm Password */}
                  <Field.Root mt="27px">
                  <Field.Label>Confirm Password</Field.Label>
                  <PasswordInput
                    type="passowrd"
                    placeholder="**************"
                    size="lg"
                  />
                </Field.Root>
                </Flex>
               
          </Box>

        {/* Kyc Section */}
        <Box mt="25px">
        
        <Flex w="970px" justify="space-between" mb="25px">
          <KycBox
          title="Two Factor Authentication (2FA):"
          description="Toggle to enable Two Factor Authentication"
          icon={<Toggler/>}
          />
          <KycBox
            title="Encryption of Stored Data:"
            description="Toggle to encrypt stored data"
            icon={<Toggler/>}
          />
        </Flex>

        <Flex w="970px" justify="space-between" alignItems="center">
          <KycBox
          title="Know Your Customer (KYC)"
          description="KYC status: Verified"
          icon={<Toggler/>}
          />
          <Box>
          <UserInput
          type="number"
          label="Tax Identification Number:"
          placeholder="0000-0000-0000"
          w="382.99px"
          />
          </Box>
          
        </Flex>
        </Box>

        </Box>

        <Flex justify="right" mt="30px" w="1020px">
          <SaveButton />
        </Flex>
      </Box>
    </>
  );
};

export default Security;
