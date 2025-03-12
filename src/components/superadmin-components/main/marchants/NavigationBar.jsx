import { Flex, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

// Importing Components
import Profile from "./Profile";
import TransactionHistory from "./TransactionHistory";
import PayoutPreferences from "./PayoutPreferences";
import Security from "./Security";
import Notifications from "./Notification";

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const NavLink = ({ tab, children }) => (
    <Box onClick={() => setActiveTab(tab)} cursor="pointer">
      <Flex direction="column" align="center">
        <Text
          textAlign="center"
          color={activeTab === tab ? "#5EB070" : "#979EAC"}
          fontSize="14px"
          fontWeight={activeTab === tab ? "700" : "500"}
          fontFamily="Inter"
          lineHeight="20.3px"
        >
          {children}
        </Text>
        {activeTab === tab && <Box w="100%" h="2px" bg="#5EB070" mt="2px" />} 
      </Flex>
    </Box>
  );

  return (
    <Flex direction="column" align="center" bg="gray.100" minH="100vh">
      {/* Navigation Bar */}
      <Box w="1132px" mt="60px">
        <Flex w="full" h="40px" justify="center" align="center" gap="70px">
          <NavLink tab="profile">Profile</NavLink>
          <Flex w="611px" h="20px" justify="center" align="flex-start" gap="63px">
            <Flex w="320px" h="20px" justify="center" align="flex-start" gap="47px">
              <NavLink tab="transaction-history">Transaction History</NavLink>
              <NavLink tab="payout-preferences">Payout Preferences</NavLink>
            </Flex>
            <Flex w="228px" h="20px" justify="flex-start" align="flex-start" gap="82px">
              <NavLink tab="security">Security</NavLink>
              <NavLink tab="notifications">Notifications</NavLink>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      {/* Content Rendering */}
      <Box w="1132px" mt="20px" p="20px" border="1px solid #E2E8F0" borderRadius="8px" bg="white">
        {activeTab === "profile" && <Profile />}
        {activeTab === "transaction-history" && <TransactionHistory />}
        {activeTab === "payout-preferences" && <PayoutPreferences />}
        {activeTab === "security" && <Security />}
        {activeTab === "notifications" && <Notifications />}
      </Box>
      
    </Flex>
    
  );
};

export default NavigationBar;
