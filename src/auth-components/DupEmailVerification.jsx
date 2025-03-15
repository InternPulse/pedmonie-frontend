import { 
  Flex, 
  Text, 
  Button, 
  Box,  
  Icon,  
  Field, 
  Input, 
  defineStyle
} from "@chakra-ui/react";
import {  FaLongArrowAltRight as SkipArrowIcon } from "react-icons/fa";
import { RiErrorWarningLine as WarningIcon} from "react-icons/ri";
import { CiMail as EmailIcon } from "react-icons/ci";
import { InputGroup } from "../components/ui/input-group";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const EmailVerification = () => {

  const {paths, getPathDataById} = useAuth();

  const navigate = useNavigate();
  const { path: bankVerPath } = getPathDataById(2);
  const { pageIndex: emailVerIndex } = getPathDataById(1);

  const handleNextPage = () => {
      navigate(bankVerPath);
  }
  
  const floatingStyles = defineStyle({
    pos: "absolute",
    bg: "bg",
    px: "0.5",
    top: "-3",
    insetStart: "2",
    fontWeight: "normal",
    pointerEvents: "none",
    transition: "position",
    _peerPlaceholderShown: {
      color: "fg.muted",
      top: "2.5",
      insetStart: "3",
      bg: "transparent"
    },  
    _peerFocusVisible: {
        color: "fg",
        top: "-3",
        insetStart: "2",
        bg: "gray.50"
        },
  });

return (
    
 <Flex
 as="main"
 flexDir={{ base: "column", lg: "row" }}
 h="auto"
 minH="100vh"
 width="100%"
 align="center"
 justify="center"
 bg="gray.100"
 p={6}
 >
   {/* Container for the two sections */}
   <Flex
      w="full"
      h="100vh"
      flexDirection={{ base: "column", lg: "row" }}
      bg="white"
      p={3}
      borderRadius="lg"
      boxShadow="lg"
   >
     {/* Left Section Description side */}
     <Flex flex={1} direction="column" align="center" justify="center" bgColor="gray.200" h="full" p={6}>

         <Text
         fontWeight="600" 
         fontSize={{base: "sm", lg: "md"}}
         lineHeight="sm" 
         letterSpacing="0%"
         color="gray.500"
         pt={4}
         pb={4}
         >{emailVerIndex} of {paths.length} - Email Verification</Text>

         <Flex
         spacing={8} 
         direction="column"
         align="center" 
         justify="center"
         w="full" 
         h="full"
         bg="transparent" 
         p={4} 
         borderRadius="md"
         boxShadow="sm"
         gapY={16}
         >

         <Box>
           <Text  fontSize="md" textAlign="left" color='gray.600'>Please confirm the validity of your email address</Text>
         </Box>

         <Box display="flex" alignItems="center" gap={2} w="full">
          <Icon 
            color="orange.500" 
            boxSize={{ base: "16px", md: "20px", lg: "24px" }} 
          >
            <WarningIcon />
          </Icon>
          <Text 
            as="p"
            fontSize={{ base: "2xs", md: "sm", lg: "md" }} 
            textAlign="left"
            color='gray.400'
          >
            We require your email for security reasons and also for essential technical communication.
          </Text>
        </Box>

         </Flex>

  </Flex>

     {/* Right Section - Form and action side */}
     <Flex direction="column" flex={2} bgColor="white" h="full" p={6} gap={8}>
             <Box display="flex" flexDir="column" alignItems="end" color="gray.500" pt={4} pb={4}>
                 <Flex alignItems="center" gap={2} cursor="pointer" _hover={{color: "green.800"}}>
                   
                  <Button 
                    as="span"  
                    align="center" 
                    gap={{ base: 1, md: 2 }} 
                    color="inherit" 
                    bg="transparent"
                    border="none"
                    _hover={{ color: "green.800" }} 
                    onClick={handleNextPage}
                  >
                    <Text 
                      fontWeight="600" 
                      fontSize={{ base: "sm", md: "md", lg: "lg" }} 
                      lineHeight="sm" 
                    >
                      Skip process for now
                    </Text>
                    <Icon 
                      as={SkipArrowIcon} 
                      boxSize={{ base: "4", md: "5", lg: "6" }}
                    />
                  </Button>

                 </Flex>
             </Box>

             <Flex flexDir={{base: "row", lg: "column"}} justify="center"  >
            
                 <Flex flexDir={"column"} justify={"center"} align={"center"} gapY={8}>          
                
                     <Flex direction="column">         
                      <Text as="h1" fontSize={{base:"sm", lg: "md"}} color="gray.800" textAlign={{base: "center", lg: "left"}} fontWeight="bold" pb={4} mb={2}>Check your email for a verification link</Text>  
                        
                {/* CAC number verification*/}                
                <Box as="div" display="flex" alignItems="center" gap={4} w="full">
                <InputGroup flex="1" startElement={ <EmailIcon /> }>
                <Field.Root>
                    <Box pos="relative" w="full">
                    <Input 
                        className="peer" 
                        placeholder=" "  
                        bg="gray.100"
                        color="gray.800"
                        border="none"
                        borderRadius="md"
                        h="3rem" 
                        pl={8}
                        pr={3}
                        _focus={{
                        bg: "gray.100",
                        outline: "none",
                        border: "none"
                        }}
                    />
                    
                    <Field.Label css={floatingStyles}>
                        <Text fontSize={{base: "xs", lg: "sm"}} pl={4}>Check your email address</Text>
                    </Field.Label>
                    </Box>
                </Field.Root>
                </InputGroup>
                </Box>

                <Box>
                  <Text as="p" fontSize={{base: "xs", lg: "sm"}} textAlign="left" pt={3}>Didn't receive the email? Please check your spam folder or try to reset your email.</Text>
                </Box>
                
             </Flex>

                {/* previous and next button */}     
              <Box textAlign="center">
                  <Box display="inline-block">
                      <Button 
                      w={{ base: "4rem", sm: "7rem", md: "9.5rem", lg: "11rem" }} 
                      bgColor="white" 
                      color="green.800" 
                      border="solid 1px" 
                      borderColor="green.800" 
                      _hover={{ bgColor: "green.800", color: "white" }} 
                      mr={4}
                      fontSize={{base: "2xs", lg: "sm"}}
                      >
                      Resend Email
                      </Button>

                     <Button 
                      w={{ base: "4rem", sm: "7rem", md: "9.5rem", lg: "11rem" }} 
                      bgColor="white" 
                      color="green.800" 
                      border="solid 1px" 
                      borderColor="green.800" 
                      _hover={{ bgColor: "green.800", color: "white" }}
                      fontSize={{base: "2xs", lg: "sm"}}
                      onClick={handleNextPage}
                      >
                      Next
                      </Button>
                     
                  </Box>
              </Box>

        </Flex>

         </Flex>
     </Flex>
   </Flex>
 </Flex>
);
};

export default EmailVerification;


