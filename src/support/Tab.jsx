"use client";

import { Tabs } from "@chakra-ui/react";
import { useState } from "react";
import SupportArticle from "./Article";
import SupportTicket from "./Ticket";

const SupportTab = () => {
  const [value, setValue] = useState("first");

  return (
    <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)} pl={4}>
      <Tabs.List>
        <Tabs.Trigger
          value="first"
          color="gray.500"
          _selected={{
            color: " var(--Primary-green-default, #2E5C38)",
            fontWeight: "bold",
          }}
          sx={{ _hover: { color: "gray.700" } }} // Optional hover effect
        >
          Article
        </Tabs.Trigger>
        <Tabs.Trigger
          value="second"
          color="gray.500"
          _selected={{
            color: " var(--Primary-green-default, #2E5C38)",
            fontWeight: "bold",
          }}
          sx={{ _hover: { color: "gray.700" } }}
        >
          Support Ticket
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="first">
        <SupportArticle></SupportArticle>
      </Tabs.Content>
      <Tabs.Content value="second">
        <SupportTicket></SupportTicket>
      </Tabs.Content>
    </Tabs.Root>
  );
};
export default SupportTab;
