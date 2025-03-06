import {
    Flex,
    Text,
    Button,
    Box,
    Icon,
    Textarea,
    Fieldset,
    Input,
    CloseButton
  } from "@chakra-ui/react";
  import { Field } from "../../components/ui/field";
  import { FaLongArrowAltLeft as GoBackIcon } from "react-icons/fa";
  import { Link } from "react-router-dom";
  import Select from "react-select";
  import {
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogRoot,
    DialogTrigger,
  } from "../../components/ui/dialog";
import LinkSuccessMsg from "../LinkSuccessMsg";
import { useNavigate } from "react-router-dom"; 

const CreateLinkForm = ({
    handleCountryChange,
    isLimitReached,
    description,
    handleDescriptionChange,
    MAX_CHAR_COUNT,
    currencyOptions,
    options,
    selectedCountry,
    phoneNumber,
}) => {

    const navigate = useNavigate(); 
  
     //navigation to go back to select payment type
     const fromPath = "/"
     const handleGoBack = (fromPath) => {
       if (!fromPath) {
         throw new Error("Path to get the previous page is missing.");
       } else {
         navigate(fromPath);
       }
     }
   
  return (
    <>
    {/* Left Section - Link form */}
    <Flex
            flex={1}
            direction="column"
            align="center"
            justify="center"
            bgColor="white"
            p={{ base: 4, lg: 6 }}
          >
           <Box w="full" pb="4">
              <Flex
                as="span"
                align="start"
                gap={{ base: 1, md: 2 }}
                color="inherit"
                _hover={{ color: "green.800" }}
              >
                <Button
                fontWeight="600" 
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                bg="transparent"
                border="none"
                color="inherit"
                onClick={()=>handleGoBack(fromPath)}
                >      
                <GoBackIcon />
                   Back to Payment Types
                </Button>
              </Flex>
           </Box>
  
            <Flex
              direction="column"
              align="center"
              justify="center"
              w="full"
              bg="transparent"
              p={4}
              borderRadius="md"
              boxShadow="sm"
              gapY={8}
            >
              <Box w="full" maxW="lg">
                <Fieldset.Root size="lg" w="full">
                  <Fieldset.Content>
                    <Field label="Name">
                      <Input name="name" type="text" placeholder="Value" />
                    </Field>
  
                    <Field label="Description">
                      <Textarea
                        placeholder="Enter description..."
                        value={description}
                        onChange={handleDescriptionChange}
                        resize="none"
                      />
                    </Field>
  
                    {/* Character Counter & Warning Message */}
                    <Box position="relative" width="100%">
                      <Flex justifyContent="space-between" mt={1} px={2} color="gray.600">
                        <Text fontSize="sm" color={isLimitReached ? "red.500" : "transparent"}>
                          Maximum character limit reached!
                        </Text>
                        <Text fontSize="sm">
                          {description.length}/{MAX_CHAR_COUNT}
                        </Text>
                      </Flex>
                    </Box>
  
                    <Field label="Amount">
                      <Flex w="100%" gap={2}>
                        <Box flex={1}>
                          <Select options={currencyOptions} placeholder="Currency" />
                        </Box>
                        <Input name="amount" placeholder="0.00" type="number" flex={2} />
                      </Flex>
                      <Text mt={1} mb={1}>
                        You can leave empty to allow customers to enter desired amount
                      </Text>
                    </Field>
  
                    <Text mt={2} mb={1}>
                      Where should we send your payment notification?
                    </Text>
  
                    <Field label="Phone number">
                      <Flex w="100%" gap={2}>
                        <Box flex={1}>
                          <Select
                            options={options}
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            getOptionLabel={(e) => e.label}
                          />
                        </Box>
                        <Input
                          name="phone-number"
                          type="tel"
                          placeholder="+234 916 8746 416"
                          flex={2}
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </Flex>
                    </Field>
  
                    <Field label="Email Address">
                      <Input name="email" type="email" placeholder="abby@example.com" />
                    </Field>
                  </Fieldset.Content>
  
                  {/* Create and Cancel Buttons */}
                  <Box textAlign="center" mt={6}>
                    <DialogRoot>
                      <DialogTrigger asChild>
                        <Button
                          w={{ base: "40%", sm: "48%", md: "45%", lg: "40%" }}
                          bgColor="white"
                          pl={4}
                          pr={4}
                          color="green.800"
                          border="solid 1px"
                          borderColor="green.800"
                          _hover={{ bgColor: "green.800", color: "white" }}
                          mr={4}
                        >
                          Create Link
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogBody>
                          <LinkSuccessMsg />
                        </DialogBody>
                        <DialogFooter>
                          <DialogCloseTrigger asChild>
                            <CloseButton />
                          </DialogCloseTrigger>
                        </DialogFooter>
                      </DialogContent>
                    </DialogRoot>
                    <Button
                      w={{ base: "40%", sm: "48%", md: "45%", lg: "40%" }}
                      bgColor="white"
                      pl={4}
                      pr={4}
                      color="green.800"
                      border="solid 1px"
                      borderColor="green.800"
                      _hover={{ bgColor: "green.800", color: "white" }}
                    >
                      Cancel
                    </Button>
                  </Box>
                </Fieldset.Root>
              </Box>
            </Flex>
          </Flex>
    </>
  )
}

export default CreateLinkForm