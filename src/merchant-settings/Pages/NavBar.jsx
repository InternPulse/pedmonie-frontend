import { Box, Flex, Text, Heading, Input, Field } from "@chakra-ui/react";
import { useState } from "react";
import Navpages from "../mycomponent/nav-pages";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
  const [business, setBusiness] = useState(false);
  const [payPref, setPayPref] = useState(true);
  const [security, setSecurity] = useState(false); //
  const [api, setAPI] = useState(false);
  const [notification, setNotification] = useState(false);
  const [isBold, setisBold] = useState(false);
  const [isGreen, setIsGreen] = useState(false);

  return (
    <>
      <Box w="1078.66px" bg="#F9FAFB" textAlign="center" h="140px" px="3px">
        {/* navbar header */}


        <Flex mb="20px" justifyContent="space-between" alignItems="center"  direction={["column", "column", "row", "row"]}>
          <Box pt="20px">
            <Heading fontWeight="bold" textAlign="left" mb="5px">
              System Settings
            </Heading>
            <Text color="#475367" fontSize="15px">
              Setup and edit system settings and preferences
            </Text>
          </Box>

          <Box>
            <Flex
              justify="center"
              alignItems="center"
              border="1px solid grey"
              pl="3px"
              rounded="md"
            >
              <IoMdSearch size="25px" />
              <Input
                outline="none"
                border="none"
                type="text"
                placeholder="Search Settings"
                w="300px"
              />
            </Flex>
          </Box>
        </Flex>



        <Box borderBottom="1.5px solid #C8CCD3">
          {/* Left side*/}
          <Flex w="820px" justifyItems="center" alignItems="center" direction={["column", "column", "row", "row"]}>
            <Navpages
              title="Business Profile"
              path="business-profile"
              state={business}
              isBold={isBold}
              isGreen={isGreen}
              onClick={() => {
                if (business === false) {
                  setBusiness(true);
                  setIsGreen(true);
                  setisBold(true);
                  setPayPref(false);
                  setSecurity(false);
                  setAPI(false);
                  setNotification(false);
                }
              }}
            />

            <Navpages
              title="Payout Prefrence"
              path="/"
              state={payPref}
              onClick={() => {
                if (payPref === false) {
                  setPayPref(true);
                  setBusiness(false);
                  setSecurity(false);
                  setAPI(false);
                  setNotification(false);
                }
              }}
            />

            <Navpages
              title="Security"
              path="security"
              state={security}
              isBold={isBold}
              isGreen={isGreen}
              onClick={() => {
                if (security === false) {
                  setPayPref(false);
                  setBusiness(false);
                  setSecurity(true);
                  setAPI(false);
                  setNotification(false);
                }
              }}
            />

            <Navpages
              title="API & Webhooks"
              path="api&webhooks"
              state={api}
              isBold={isBold}
              isGreen={isGreen}
              onClick={() => {
                if (api === false) {
                  setPayPref(false);
                  setBusiness(false);
                  setSecurity(false);
                  setAPI(true);
                  setNotification(false);
                }
              }}
            />

            <Navpages
              title="Notification"
              path="notification"
              state={notification}
              isBold={isBold}
              isGreen={isGreen}
              onClick={() => {
                if (notification === false) {
                  setPayPref(false);
                  setBusiness(false);
                  setSecurity(false);
                  setAPI(false);
                  setNotification(true);
                }
              }}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
