import { Collapsible } from "@chakra-ui/react";

export const WhatsIncluded = () => (
  <Collapsible.Root unmountOnExit>
    <Collapsible.Trigger
      size="md"
      display={{ base: "block" }}
      hideFrom="md"
      textAlign="center"
      justifyItems="center"
      margin="0 auto"
    >
      What's included
    </Collapsible.Trigger>
    <Collapsible.Content
      color="fg.muted"
      as="ul"
      listStyleType="circle"
      fontSize={{ lg: "sm", md: "xs", sm: "xs" }}
      pb={{ base: "20px" }}
    >
      <li>Everything in Basic, plus.</li>
      <li>Lower transaction fees for higher volumes</li>
      <li>Automated payouts for faster access to funds</li>
      <li> Customizable payment pages </li>
      <li>Priority customer support</li>
    </Collapsible.Content>
  </Collapsible.Root>
);
export default WhatsIncluded;
