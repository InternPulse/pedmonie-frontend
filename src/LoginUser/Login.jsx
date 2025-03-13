import { useState } from "react";
import {
  Box,
  Button,
  Input,
  Heading,
  Stack,
  Text,
  Field,
  Fieldset,
  Image,
  Flex,
} from "@chakra-ui/react";
import { djangoAPI } from "../../config/apiConfig";
import { useNavigate } from "react-router-dom";
import logo from "../assets/pedmonie-logo.svg";
import { jwtDecode } from "jwt-decode";

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

        const decodedToken = jwtDecode(response.data.access);

        if (decodedToken.role === "superadmin") {
          navigate("/admin");
        } else if (decodedToken.role === "merchant") {
          navigate("/merchant");
        }

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
    <Flex height="100vh" width="100vw" bgGradient="linear(to-r, green.500, green.700)">
     
      {/* Left Section - Branding */}
      <Box 
        flex={1} 
        display={{base: "none", md: "flex"}} 
        alignItems="center" 
        justifyContent="center" 
        flexDirection="column" 
        color="white" 
        bg="linear(to-b, green.500, green.800)"
      >
        <Image src={logo} alt="PedMonie Logo" mb={4} />
        <Heading fontSize="4xl" fontWeight="bold">PedMonie</Heading>
        <Text fontSize="lg" mt={2}>Seamless Finance at Your Fingertips</Text>
      </Box>

      {/* Right Section - Login Form */}
      <Box flex={1} display="flex" justifyContent="center" alignItems="center" bg="white" borderRadius={12} boxShadow="2xl" p={8} maxW="450px" m={4}>
        <Box width="full">
          <Heading mb={6} color="green.800" textAlign="center">
            Welcome Back
          </Heading>
          {error && <Text color="red.500" textAlign="center">{error}</Text>}
          <form onSubmit={handleSubmit}>
            <Fieldset.Root size="lg">
              <Stack spacing={5}>
                <Fieldset.Legend>Login to your account</Fieldset.Legend>
                <Field.Root>
                  <Field.Label>Email</Field.Label>
                  <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Password</Field.Label>
                  <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                </Field.Root>
                <Button type="submit" bg="green.800" color="white" _hover={{ bg: "green.00" }}>
                  Login
                </Button>
                <Text fontSize="sm" color="green.800" textAlign="center" _hover={{ textDecoration: "underline", cursor: "pointer" }}>
                  Forgot password?
                </Text>
              </Stack>
            </Fieldset.Root>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;


/* import { useState } from "react";
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
 */