import { Button, Card, Image, Flex, Box } from "@chakra-ui/react";
import createLinkIcon from "../assets/payment-section/linkOkMsgIcon.svg";
import { useNavigate } from "react-router-dom";

const LinkSuccessMsg = () => {
  const navigate = useNavigate();
  const toPath = "/merchant/payment-link"

  const handleProceed = (toPath) => {
    if (!toPath) {
      throw new Error("Path to get payment-link is missing.");
    } else {
      navigate(toPath);
    }
  }

  return (
    <Card.Root
      maxW={{ base: "100%", sm: "400px", md: "450px" }}
      w="full"
      overflow="hidden"
      borderRadius="xl"
      bg="transparent"
      border="none"
    >
      {/* Icon */}
      <Flex justify="center" mt={8}>
        <Image
          src={createLinkIcon}
          alt="Get payment link"
          boxSize={{ base: "90px", md: "130px" }}
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
        <Flex w="full" align="center" justify="center">
          <Button
            bgColor="green.800"
            color="white"
            size={{ base: "md", md: "lg" }}
            _hover={{ bgColor: "green.900" }}
            _active={{ bgColor: "green.700" }}
            onClick={() => handleProceed(toPath)}
          >
            Get payment link
          </Button>
        </Flex>
      </Card.Footer>
    </Card.Root>
  );
};

export default LinkSuccessMsg;