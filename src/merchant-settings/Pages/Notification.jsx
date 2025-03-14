import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
// import UserInput from "./forms-component/UserInput";
import SaveButton from "../Forms-component/save-button";
import KycBox from "../Forms-component/KycBox";
import Toggler from "../Forms-component/toggler";

const Notification = () => {
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
          <Box py="40px">
            <Heading>Notification</Heading>
          </Box>

          <Box>
            {/* <Flex w="970px" justify="space-between">
              <Box>
                <UserInput label="Testing" type="tel" w="382.99px" />
                <UserInput label="Testing" type="tel" w="382.99px" mt="27px" />
                <UserInput label="Testing" type="tel" w="382.99px" mt="27px" />
              </Box>

              <Box>
                <UserInput label="Testing" type="tel" w="382.99px" />
                <UserInput label="Testing" type="tel" w="382.99px" mt="27px" />
                <UserInput label="Testing" type="tel" w="382.99px" mt="27px" />
              </Box>
            </Flex> */}
            <Flex w="970px" justify="space-between" mb="30px">
              <KycBox 
              title="Transaction Alerts (SMS / Email)"
              description="Toggle to disable Transaction Alerts"
              icon={<Toggler/>}
              />
              <KycBox 
                title="Payout Notification"
              description="Toggle to disable Payout Notification"
              icon={<Toggler/>}
              />
            </Flex>

            <Flex w="970px" justify="space-between" mb="30px">
              <KycBox
              title="Subscription Renewal Reminder"
              description="Toggle to disable Subscription reminder"
              icon={<Toggler/>}
              />
              <KycBox 
              title="Failed Payment Alerts"
              description="Toggle to disable Failed Payment alerts"
              icon={<Toggler/>}
              />
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

export default Notification;
