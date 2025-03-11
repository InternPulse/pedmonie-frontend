import { useState } from 'react'
import { Box, Button, Input, Heading, VStack, Text } from '@chakra-ui/react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Logging in with:', { email, password })
  }

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
        <Heading mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Text fontWeight="bold">Email</Text>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />

            <Text fontWeight="bold">Password</Text>
            <Input
              type="password"
              value={password}
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
              _hover={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              Forgot password?
            </Text>
          </VStack>
        </form>
      </Box>
    </Box>
  )
}

export default Login
