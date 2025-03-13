"use client"

import React from "react";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  VStack,
  Text,
  createListCollection,
} from "@chakra-ui/react";

import { Switch } from "@chakra-ui/react";
// Import the new custom select components
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../../../ui/select";

// Create collections for each select field
const systemLanguageOptions = createListCollection({
  items: [
    { label: "English", value: "English" },
    { label: "French", value: "French" },
    { label: "Spanish", value: "Spanish" },
  ],
});

const dashboardThemeOptions = createListCollection({
  items: [
    { label: "Light Theme", value: "Light Theme" },
    { label: "Dark Theme", value: "Dark Theme" },
  ],
});

const dashboardLayoutOptions = createListCollection({
  items: [
    { label: "Default - Spacious", value: "Default - Spacious" },
    { label: "Compact", value: "Compact" },
  ],
});

const timeZoneOptions = createListCollection({
  items: [
    { label: "GMT - Greenwich Mean Time", value: "GMT - Greenwich Mean Time" },
    { label: "WAT - West African Time", value: "WAT - West African Time" },
    { label: "EST - Eastern Standard Time", value: "EST - Eastern Standard Time" },
  ],
});

const currencyOptions = createListCollection({
  items: [
    { label: "USD ($)", value: "USD ($)" },
    { label: "EUR (€)", value: "EUR (€)" },
    { label: "NGN (₦)", value: "NGN (₦)" },
  ],
});

const systemFontOptions = createListCollection({
  items: [
    { label: "Inter", value: "Inter" },
    { label: "Roboto", value: "Roboto" },
    { label: "Poppins", value: "Poppins" },
  ],
});

const dateTimeFormatOptions = createListCollection({
  items: [
    { label: "DD/MM/YYYY", value: "DD/MM/YYYY" },
    { label: "MM/DD/YYYY", value: "MM/DD/YYYY" },
    { label: "YYYY-MM-DD", value: "YYYY-MM-DD" },
  ],
});

const ReaclTimeAlert = () => {
  return (
    <Container maxW="container.xl" py={8} css={{ bg: "#F5F6F6" }}>
      {/* Title and Search */}
      <Box mb={6}>
        <Heading as="h1" size="lg" color="#1F2525" fontWeight="bold">
          System Settings
        </Heading>
        <Text color="#67737E" fontSize="sm" mt={1}>
          Setup and edit system settings and preferences
        </Text>
        <Input
          placeholder="Search Settings"
          mt={4}
          borderColor="#E5E7EB"
          fontSize="sm"
          color="#1F2525"
          _placeholder={{ color: "#67737E" }}
        />
      </Box>

      {/* Tabs */}
      <HStack
        spacing={8}
        borderBottom="1px solid #E5E7EB"
        pb={2}
        mb={6}
        fontSize="sm"
        fontWeight="medium"
      >
        <Box
          color="#166534"
          pb={2}
          position="relative"
          _hover={{ cursor: "pointer" }}
          css={{
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "#166534",
            },
          }}
        >
          Platform Configuration
        </Box>
        <Box color="#67737E" _hover={{ color: "#1F2525", cursor: "pointer" }}>
          User Management
        </Box>
        <Box color="#67737E" _hover={{ color: "#1F2525", cursor: "pointer" }}>
          Fraud Detection & Security
        </Box>
        <Box color="#67737E" _hover={{ color: "#1F2525", cursor: "pointer" }}>
          System Logs & Maintenance
        </Box>
      </HStack>

      {/* Configuration Panel */}
      <Box bg="white" p={6} rounded="lg" boxShadow="sm">
        <Heading as="h2" size="md" mb={6} color="#1F2525" fontWeight="bold">
          Platform Configuration
        </Heading>

        <VStack spacing={6} align="stretch">
          <HStack spacing={8} align="flex-start">
            {/* Left Column */}
            <VStack spacing={4} flex="1" align="stretch">
              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  System Language
                </Text>
                <SelectRoot
                  collection={systemLanguageOptions}
                  defaultValue="English"
                >
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Language"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {systemLanguageOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  Default Dashboard Theme
                </Text>
                <SelectRoot
                  collection={dashboardThemeOptions}
                  defaultValue="Light Theme"
                >
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Theme"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {dashboardThemeOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  Default Dashboard Layout
                </Text>
                <SelectRoot
                  collection={dashboardLayoutOptions}
                  defaultValue="Default - Spacious"
                >
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Layout"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {dashboardLayoutOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  Notifications
                </Text>
                <HStack align="center">
                  <Switch.Root
                    defaultChecked
                    css={{
                      "--switch-track-bg": "#E5E7EB",
                      "--switch-track-bg-checked": "green",
                      "--switch-thumb-bg": "green",
                      width: "44px",
                      height: "24px",
                      borderRadius: "12px",
                      position: "relative",
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "2px",
                    }}
                  >
                    <Switch.HiddenInput />
                    <Switch.Control
                      css={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        transition: "transform 0.2s",
                      }}
                    />
                  </Switch.Root>
                  <Text
                    ml={3}
                    fontWeight="medium"
                    color="#67737E"
                    fontSize="sm"
                  >
                    Allow system notifications
                  </Text>
                </HStack>
              </Box>
            </VStack>

            {/* Right Column */}
            <VStack spacing={4} flex="1" align="stretch">
              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  Time Zone
                </Text>
                <SelectRoot
                  collection={timeZoneOptions}
                  defaultValue="WAT - West African Time"
                >
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Time Zone"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {timeZoneOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  Currency
                </Text>
                <SelectRoot
                  collection={currencyOptions}
                  defaultValue="USD ($)"
                >
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Currency"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {currencyOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  System Font
                </Text>
                <SelectRoot collection={systemFontOptions} defaultValue="Inter">
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Font"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {systemFontOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>

              <Box>
                <Text fontWeight="medium" color="#67737E" fontSize="sm" mb={2}>
                  Date and Time Format
                </Text>
                <SelectRoot
                  collection={dateTimeFormatOptions}
                  defaultValue="DD/MM/YYYY"
                >
                  <SelectTrigger>
                    <SelectValueText
                      placeholder="Select Format"
                      color="#67737E"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {dateTimeFormatOptions.items.map((item) => (
                      <SelectItem key={item.value} item={item}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              </Box>
            </VStack>
          </HStack>

          {/* Save Button */}
          <Box textAlign="right">
            <Button
              bg="#166534"
              color="white"
              px={6}
              py={2}
              fontSize="sm"
              fontWeight="medium"
              textTransform="uppercase"
              _hover={{ bg: "#145a2e" }}
            >
              Save Changes
            </Button>
          </Box>
        </VStack>
      </Box>
    </Container>
  );
};

export default ReaclTimeAlert;