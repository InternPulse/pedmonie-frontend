import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/pedmonie-logo.svg";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      bg="grey.800"
      color="green.800"
      p={6}
      gap={3}
    >
      <Image src={logo} alt="PedMonie Logo" mb={4} />
      <Heading fontSize="6xl" fontWeight="bold">404</Heading>
      <Text fontSize="2xl" mt={2}>Oops! The page you're looking for doesn't exist.</Text>
      <Button
        mt={6}
        colorScheme="whiteAlpha"
        size="lg"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Box>
  );
}

export default NotFound;
