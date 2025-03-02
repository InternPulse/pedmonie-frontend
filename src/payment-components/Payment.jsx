import { Box, Button, Container, Flex, Input, Stack, Text } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../components/ui/select"

const Payment = () => {
  return (
    <Container maxW="full" bg="gray.100" py={8} px={4}>
      <Box 
        maxW="md" 
        mx="auto" 
        bg="white" 
        borderRadius="md" 
        overflow="hidden"
        boxShadow="sm"
        p={6}
      >
        <Flex justify="space-between" align="center" mb={6}>
          <Flex align="center">
            <Box as="span" color="green.500" mr={1} fontSize="sm">
              ▶
            </Box>
            <Text fontWeight="bold" color="black" fontSize="sm">PEDMONIE</Text>
            <Text ml={1} color="gray.500" fontSize="sm">
              Design
            </Text>
          </Flex>
          <Text color="black" fontWeight="bold">N20,000</Text>
        </Flex>

        <Stack spacing={5}>
          <Box>
            <Text color="black" fontSize="sm" mb={1}>Name</Text>
            <Input 
              placeholder="Florence Akai" 
              bg="gray.50" 
              border="none" 
              borderRadius="md" 
              size="md"
              fontSize="sm"
              color="gray.800"
              _placeholder={{ color: "gray.800" }}
            />
          </Box>

          <Box>
            <Text color="black" fontSize="sm" mb={1}>Email Address</Text>
            <Input 
              placeholder="Florence Akai" 
              bg="gray.50" 
              border="none" 
              borderRadius="md" 
              size="md"
              fontSize="sm"
              color="gray.800"
              _placeholder={{ color: "gray.800" }}
            />
          </Box>

          <Box>
            <Text color="black" fontSize="sm" mb={1}>Amount</Text>
            <Flex>
              <SelectRoot color="black" defaultValue="NGN">
                <SelectTrigger className="bg-gray-50 border-none rounded-l-md h-10 text-sm" maxW="250px">
                  <Flex align="center">
                    <Text mr={1} fontSize="xs">NGN</Text>
                    <Box as="span">🇳🇬</Box>
                  </Flex>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NGN">NGN 🇳🇬</SelectItem>
                  <SelectItem value="USD">USD 🇺🇸</SelectItem>
                  <SelectItem value="EUR">EUR 🇪🇺</SelectItem>
                  <SelectItem value="GBP">GBP 🇬🇧</SelectItem>
                </SelectContent>
              </SelectRoot>
              <Box 
              px={4}
       borderWidth="1px"
       borderColor="border.disabled"
       color="fg.disabled"
       minW="200px"
       borderRadius="md"
      textAlign="center"
      justifyContent="center"
    >
      <Text fontSize="sm" color="gray.800">20,000</Text>
    </Box>
            </Flex>
          </Box>

          <Box>
            <Text color="black" fontSize="sm" mb={1}>Phone number</Text>
            <Flex>
              <SelectRoot color="black" defaultValue="+234">
                <SelectTrigger className="bg-gray-50 border-none rounded-l-md h-10 text-sm" maxW="250px" >
                  <Flex align="center">
                    <Text fontSize="xs">+234</Text>
                    <Box as="span" ml={1}>🇳🇬</Box>
                  </Flex>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+234">+234 🇳🇬</SelectItem>
                  <SelectItem value="+1">+1 🇺🇸</SelectItem>
                  <SelectItem value="+44">+44 🇬🇧</SelectItem>
                  <SelectItem value="+33">+33 🇫🇷</SelectItem>
                  <SelectItem value="+49">+49 🇩🇪</SelectItem>
                  <SelectItem value="+86">+86 🇨🇳</SelectItem>
                  <SelectItem value="+91">+91 🇮🇳</SelectItem>
                  <SelectItem value="+27">+27 🇿🇦</SelectItem>
                  <SelectItem value="+254">+254 🇰🇪</SelectItem>
                  <SelectItem value="+971">+971 🇦🇪</SelectItem>
                </SelectContent>
              </SelectRoot>
              <Box 
   px={4}
  borderWidth="1px"
  borderColor="border.disabled"
  color="fg.disabled"
  minW="200px"
  borderRadius="md"
  textAlign="center"
      justifyContent="center"
>
  <Text fontSize="sm" color="gray.800">+234 8154 6789</Text>
</Box>
            </Flex>
          </Box>

          <Box textAlign="center" my={5}>
            <Text fontWeight="bold" color="black" fontSize="sm" mb={1}>
              Click on any of the payment options below to begin the process
            </Text>
            <Text  mt={8} fontSize="xs" color="gray.500">
              Select Payment Option
            </Text>
          </Box>

          <Flex justify="space-between" gap={2} mb={4}>
            <Box 
              border="1px" 
              borderColor="gray.200" 
              borderRadius="md" 
              p={2} 
              flex={1}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="40px"
              cursor="pointer"
              _hover={{ borderColor: "gray.300" }}
            >
              <Text fontSize="xs" color="gray.600">Bank</Text>
            </Box>

            <Box 
              p={2} 
              flex={1}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="40px"
              cursor="pointer"
            >
              <Text color="blue.500" fontWeight="bold" fontSize="sm">
                PayPal
              </Text>
            </Box>

            <Box 
              p={2} 
              flex={1}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="40px"
              cursor="pointer"
            >
              <Text color="green.500" fontSize="xs">
                Transfer
              </Text>
            </Box>

            <Box 
              p={2} 
              flex={1}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="40px"
              cursor="pointer"
            >
              <Text color="purple.500" fontSize="xs">
                Card
              </Text>
            </Box>
          </Flex>

          <Button 
            bg="gray.200" 
            color="gray.700" 
            size="lg" 
            borderRadius="md" 
            _hover={{ bg: "gray.300" }}
            fontWeight="normal"
            py={6}
          >
            Pay NGN 20,000
          </Button>

          <Box textAlign="center" mt={2}>
            <Flex justify="center" align="center">
              <Box as="span" mr={2}>
                🔒
              </Box>
              <Text fontSize="xs" color="gray.500">
                SECURED BY PEDMONIE
              </Text>
            </Flex>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default Payment