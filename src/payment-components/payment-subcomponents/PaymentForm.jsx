import {
    Box,
    Button,
    Flex,
    Input,
    Stack,
    Text,
    Image,
    Spinner
  } from "@chakra-ui/react";
import { InputGroup } from "../../components/ui/input-group";
import Select from "react-select";
import { LuUser as UserIcon, LuMail as MailIcon } from "react-icons/lu";
import pedmonieLogo from "../../assets/pedmonie-logo.svg";
import securedByPedmonieLogo from "../../assets/secured_by_pedmonie.svg";

const PaymentForm = ({
        amountValue,   
        selectedCurrency,   
        selectedPayment,
        handlePaymentSelection,
        paymentMethods,
        email,
        setEmail,
        err,
        loading,
        initiatePayment,
        amount,
        userName,
        setUserName,
        setErr
}) => {

    return (
        <>
            <Box maxW="lg" mx="auto" bg="white" borderRadius="md" overflow="hidden" boxShadow="sm" p={6}>
        <Flex justify="space-between" align="center" mb={6}>
          <Image src={pedmonieLogo} w="150px" alt="PEDMONIE LOGO" />
         <Text fontWeight="bold">{`${selectedCurrency?.currencyCode || ""} ${amountValue || "0.00"}`}</Text>
        </Flex>

        <Stack as="form" onSubmit={(e) => { e.preventDefault(); initiatePayment(); }} spacing={5}>
          <Box>
            <Text fontWeight="bold">Name</Text>
            <InputGroup flex="1" width="full" startElement={<UserIcon size={18} />}>
              <Input 
               placeholder="Name"
               value={userName}
               onChange={(e) => setUserName(e.target.value)} 
              />
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="bold">Email Address</Text>
            <InputGroup flex="1" width="full" startElement={<MailIcon size={18} />}>
            <Input 
              placeholder="Email Address"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="bold">Currency</Text>
            <Flex gap={2}>
              <Box flex={1}>
                <Select 
                  options={[selectedCurrency]} 
                  value={selectedCurrency} 
                  isDisabled={true}
                />
              </Box>
              <Input 
                type="text"  
                placeholder="Currency Name"
                flex={2} 
                value={selectedCurrency?.currencyCode || ""}
                readOnly 
              />
            </Flex>
          </Box>

          <Box>
            <Text fontWeight="bold">Amount</Text>
            <Flex gap={2}>
            <Input 
                type="number" 
                placeholder="0.00" 
                flex={2} 
                value={amount}
                readOnly
              />
            </Flex>
          </Box>

          <Text fontWeight="bold" textAlign="center" fontSize="sm" my={5}>
            Click on any of the payment options below to begin the process
          </Text>

          {err && (
            <Text color="red.500" fontSize="sm" textAlign="center" mt={2}>
              {err}
            </Text>
          )}

          <Text textAlign="center" fontSize="xs">Select Payment Option</Text>
          <Flex justify="center" gap={4} wrap="wrap">
            {paymentMethods.map((logo, index) => (
              <Button 
                key={index} 
                p={2} 
                bg={selectedPayment === logo.name ? "gray.300" : "white"} 
                borderWidth="2px" 
                borderColor={selectedPayment === logo.name ? "blue.500" : "gray.200"} 
                boxShadow="sm" 
                _hover={{ boxShadow: "md", transform: "scale(1.05)" }}
                onClick={() => handlePaymentSelection(logo.name)}
              >
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  w="50px" 
                  h="30px" 
                  objectFit="contain" 
                />
              </Button>
            ))}
          </Flex>
          
          <Button 
            type="submit"
            bg="gray.200" 
            color="gray.700" 
            size="lg" 
            borderRadius="md" 
            _hover={{ bg: "gray.300" }} 
            fontWeight="normal" 
            py={6}
            isDisabled={loading}
          >
            <Flex align="center" gap={2}>
              {`Pay ${selectedCurrency?.currencyCode || ""} ${amountValue || "0.00"}`}
              {loading && <Spinner size="sm" color="gray.700" />}
            </Flex>
          </Button>

          <Flex justify="center" align="center" mt={2}>
            <Image src={securedByPedmonieLogo} alt="Secure Pedmonie" boxSize="50%" />
          </Flex>
        </Stack>
      </Box>
        </>
    );
};

export default PaymentForm
