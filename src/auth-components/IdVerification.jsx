import { 
    Flex, 
    Text, 
    Button, 
    Box, 
    List, 
    Icon, 
    createListCollection 
} from "@chakra-ui/react";
import {
   SelectContent,
   SelectItem,
   SelectLabel,
   SelectRoot,
   SelectTrigger,
   SelectValueText,
 } from "../components/ui/select";
 import {
  FileUploadDropzone,
  FileUploadList,
  FileUploadRoot,
} from "../components/ui/file-upload";
import { LuCircleCheck as ListIcon } from "react-icons/lu";
import {  FaLongArrowAltRight as SkipArrowIcon } from "react-icons/fa";
import {users} from "../../fake-data/user-data";
import countriesData from "world-countries";
import { Link } from "react-router-dom";

const IdVerification = ({ paths, getPathDataById }) => {
    const { path: bussVerPath } = getPathDataById(4);
    const { path: bankVerPath } = getPathDataById(2);
    const { pageIndex: idVerIndex } = getPathDataById(3);
    
   /* Items for select array id section */
   const docTypes = createListCollection({
       items: [
         { label: "Local Passport", value: "local-passport" },
         { label: "International Passport", value: "international-passport" },
         { label: "Driving License", value: "driving-license" },
         { label: "National ID Card", value: "national-id" },
         { label: "Voter ID Card", value: "voter-id" },
       ],
     });

      /* Items for select id issued country */
     const countryNames = countriesData.map((country) => ({
        label: country.name.common, 
        value: country.name.common.toLowerCase().replace(/\s+/g, "-"), 
      }));
      
      const countryList = createListCollection({
        items: countryNames, 
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
       {/* Left Section - Instruction/Description side */}
       <Flex flex={1} direction="column" align="center" justify="center" bgColor="gray.200" h="full" p={6}>

           <Text
           fontWeight="600" 
           fontSize="md" 
           lineHeight="sm" 
           letterSpacing="0%"
           color="gray.500"
           pt={4}
           pb={4}
           >{idVerIndex} of {paths.length} - Identity verification</Text>

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
               <Box as="div" pt={5}>
               <Text fontSize="md" fontWeight="bold" mb={4} color="gray.800">The document must verify the following details:</Text>
               <Text fontSize="sm" color="gray.600" as="p">Full Name: <Box as="span" color="gray.800" fontWeight="bold">{users[0].fullName}</Box></Text>
               <Text fontSize="sm" color="gray.600">Date of Birth: <Box as="span" color="gray.800" fontWeight="bold">{users[0].dateOfBirth}</Box></Text>
               <Text fontSize="sm" color="gray.600">
               Made a mistake? <Box as="span" color="gray.800" fontWeight="bold" cursor="pointer" _hover={{color: "blue.500"}}>Edit your details.</Box>
               </Text>
           </Box>

           <Box as="div" pt={5}>
               <Text fontSize="md" fontWeight="bold" mb={4} color="gray.800">Image Requirements</Text>
               <List.Root gap="2" variant="plain" align="center">
                   <List.Item fontSize="xs" color="gray.600">
                   <List.Indicator asChild color="green.800">
                       <ListIcon />
                   </List.Indicator>
                   <Text ps={2}>File size must not exceed 10MB.</Text>
                   </List.Item>
                   <List.Item fontSize="xs" color="gray.600">
                   <List.Indicator asChild color="green.800">
                       <ListIcon />
                   </List.Indicator>
                   <Text ps={2}>The document must be clear, colorful, and easily readable.</Text>
                   </List.Item>
                   <List.Item fontSize="xs" color="gray.600">
                   <List.Indicator asChild color="green.800">
                       <ListIcon />
                   </List.Indicator>
                   <Text ps={2}>Accepted formats: JPEG, JPG, and PNG.</Text>
                   </List.Item>
               </List.Root>
               </Box>
           </Box>
           </Flex>
       </Flex>

       {/* Right Section - Form and action side */}
       <Flex direction="column" flex={2} bgColor="white" h="full" p={6} gap={8}>
               <Box display="flex" flexDir="column" alignItems="end" color="gray.500" pt={4} pb={4}>
                   <Flex alignItems="center" gap={2} cursor="pointer" _hover={{color: "green.800"}}>
                                 
                    <Link to={`${bussVerPath}`}>
                    <Flex 
                        as="span"  
                        align="center" 
                        gap={{ base: 1, md: 2 }} 
                        color="inherit" 
                        _hover={{ color: "green.800" }} 
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
                    </Flex>
                    </Link>

                   </Flex>
               </Box>

               <Flex flexDir={{base: "row", lg: "column"}} justify="center"  >
              
                   <Flex flexDir={"column"} justify={"center"} align={"center"} gapY={8}>          
                  
                       <Flex direction="column">         
                        <Text as="h1" fontSize={{base:"sm", lg: "md"}} color="gray.800" textAlign={{base: "center", lg: "left"}} fontWeight="bold" pb={4}>Verify your identy</Text>  
                           {/* ID type and countries selection */}
                           <Box as="div" display="flex" alignItems="center" gap={4}>
                                   {/* ID doc type */}
                               <SelectRoot 
                               collection={docTypes} 
                               size="sm" 
                               w={{base: "10rem", lg: "20rem"}}
                               variant="subtle"
                               >
                                   <SelectLabel fontSize={{base: "xs", lg: "sm"}}>Select ID Type</SelectLabel>
                                   <SelectTrigger>
                                       <SelectValueText pl={3} pr={3} placeholder="Select document type" />
                                   </SelectTrigger>
                                   <SelectContent>
                                       {docTypes.items.map((id) => (
                                       <SelectItem item={id} key={id.value} p={3} _hover={{bgColor: "green.800", color: "white"}}>
                                           {id.label}
                                       </SelectItem>
                                       ))}
                                   </SelectContent>
                               </SelectRoot>

                               {/* ID issued countries */}
                              <SelectRoot 
                               collection={countryList} 
                               size="sm" 
                               w={{base: "10rem", md: "15rem", lg: "20rem"}}
                               variant="subtle"
                               >
                                   <SelectLabel fontSize={{base: "xs", lg: "sm"}}>Select ID Issued Country</SelectLabel>
                                   <SelectTrigger>
                                       <SelectValueText pl={3} pr={3} placeholder="Government issued country" />
                                   </SelectTrigger>
                                   <SelectContent>
                                       {countryList.items.map((id) => (
                                       <SelectItem item={id} key={id.value} p={3} _hover={{bgColor: "green.800", color: "white"}}>
                                           {id.label}
                                       </SelectItem>
                                       ))}
                                   </SelectContent>
                               </SelectRoot>
                           </Box>
                       </Flex>

                        {/* Drag and drop area for doc */}
                   <FileUploadRoot maxW="xl" alignItems="stretch" maxFiles={10}>
                    <FileUploadDropzone
                        label={
                            <Text fontSize={{base: "xs", lg: "sm", xl: "md"}}>
                                Drag file here to upload or <Box as="span" fontWeight="bold" cursor="pointer" _hover={{color: "green.800"}}>choose file</Box>
                            </Text>
                        }
                    />
                    <FileUploadList />
                    </FileUploadRoot>

                   {/* previous and next button */}     
              <Box textAlign="center">
                  <Box display="inline-block">
                      <Link to={`${bankVerPath}`}>
                      <Button 
                      w={{ base: "4rem", sm: "7rem", md: "9.5rem", lg: "11rem" }} 
                      bgColor="white" 
                      color="green.800" 
                      border="solid 1px" 
                      borderColor="green.800" 
                      _hover={{ bgColor: "green.800", color: "white" }} 
                      mr={4}
                      >
                      Previous
                      </Button>
                      </Link>

                     <Link to={`${bussVerPath}`}>
                     <Button 
                      w={{ base: "4rem", sm: "7rem", md: "9.5rem", lg: "11rem" }} 
                      bgColor="white" 
                      color="green.800" 
                      border="solid 1px" 
                      borderColor="green.800" 
                      _hover={{ bgColor: "green.800", color: "white" }}
                      fontSize={{base: "2xs", lg: "sm"}}
                      >
                      Next
                      </Button>
                      </Link>
                  </Box>
              </Box>

          </Flex>

               </Flex>
       </Flex>
     </Flex>
   </Flex>
 );
};

export default IdVerification;



