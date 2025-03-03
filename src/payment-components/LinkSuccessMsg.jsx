import { Button, Card, Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import createLinkIcon from "../assets/payment-section/linkOkMsgIcon.svg";

const LinkSuccessMsg = () => {
  return (
    <Card.Root
      maxW={{ base: "100%", sm: "400px", md: "450px" }}
      w="full"
      overflow="hidden"
      borderRadius="xl"
     // boxShadow="lg"
      bg="white"
    >
      {/* Icon */}
      <Flex justify="center" mt={8}>
        <Image
          src={createLinkIcon}
          alt="Get payment link"
          boxSize={{ base: "50px", md: "60px" }}
        />
      </Flex>

      {/* Card Body */}
      <Card.Body gap="2" p={{ base: 4, md: 6 }}>
        <Card.Title
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          textAlign="center"
          color="green.800"
          mb={4}
        >
          Payment link created!
        </Card.Title>
        <Card.Description
          fontSize={{ base: "sm", md: "md" }}
          color="gray.600"
          textAlign="center"
          lineHeight="tall"
        >
          Your payment link has been created successfully. You can now share it as a
          direct link or copy it for your customers for easy payments.
        </Card.Description>
      </Card.Body>

      {/* Card Footer */}
      <Card.Footer w="full" p={{ base: 4, md: 6 }}>
        <Flex align="center" justify="center">
          <Button
            bgColor="green.800"
            color="white"
            size={{ base: "md", md: "lg" }}
            _hover={{ bgColor: "green.900" }}
            _active={{ bgColor: "green.700" }}
          >
            Get payment link
          </Button>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
};

export default LinkSuccessMsg;