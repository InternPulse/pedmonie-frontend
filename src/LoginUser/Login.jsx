import { useState } from "react";
import { Box, Button, Input, Heading, VStack, Text } from "@chakra-ui/react";
import { djangoAPI } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await djangoAPI.post("/api/v1/token/", {
        email,
        password,
      });

      if (response.data.access) {
        localStorage.setItem("authToken", response.data.access);
        djangoAPI.defaults.headers[
          "Authorization"
        ] = `Bearer ${response.data.access}`;

        navigate("/merchant");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.detail ||
          "Login failed. Try again."
      );
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <Box
        p={8}
        maxWidth="400px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <Heading mb={6} textAlign="center" color="black">
          Login
        </Heading>
        {error && (
          <Text color="red.500" textAlign="center">
            {error}
          </Text>
        )}
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold" color="black">
              Email
            </Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              color="black"
              placeholder="Enter your email"
            />

            <Text fontWeight="bold" color="black">
              Password
            </Text>
            <Input
              type="password"
              value={password}
              color="black"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />

            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
            <Text
              textAlign="center"
              color="blue.500"
              fontSize="sm"
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Forgot password?
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
