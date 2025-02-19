import { Flex, Text, Heading, Input, Button, VStack, Image, Box, List, Icon, NativeSelect, createListCollection
 } from "@chakra-ui/react";
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "../components/ui/select";
import { LuCircleCheck as ListIcon } from "react-icons/lu";
import {  FaLongArrowAltRight as SkipArrowIcon } from "react-icons/fa";
import {users} from "../../fake-data/user-data";

const IdVerification = () => {
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
            >Identity verification</Text>

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
        <Flex direction="column" flex={2} bgColor="white" h="full" p={6}>
                <Box display="flex" flexDir="column" alignItems="end" color="gray.500" pt={4} pb={4}>
                    <Flex alignItems="center" gap={2} cursor="pointer" _hover={{color: "blue.500"}}>
                        <Text
                        fontWeight="600" 
                        fontSize="md" 
                        lineHeight="sm" 
                        letterSpacing="0%"
                        color="inherit"
                        >Skip process for now </Text>
                        <Icon color="inherit" size="md">
                            <SkipArrowIcon />
                        </Icon>
                    </Flex>
                </Box>

                <Flex flexDir={{base: "row", lg: "column"}} alignItems="center" justify="center">
                    <Flex>
                        <Text as="h1" fontSize="sm" color="gray.800" textAlign="left">Verify your identy</Text>
                        
                        {/* ID type and region selection */}
                        <Flex>
                            <Box>
                                    {/* ID doc type */}
                                <SelectRoot 
                                collection={docTypes} 
                                size="sm" 
                                w="200px"
                                variant="subtle"
                                >
                                    <SelectLabel>Select ID Type</SelectLabel>
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

                                {/* ID issued Region */}
                               {/*  <SelectRoot 
                                collection={docTypes} 
                                size="sm" 
                                w="200px"
                                variant="subtle"
                                >
                                    <SelectLabel>Select ID Type</SelectLabel>
                                    <SelectTrigger>
                                        <SelectValueText pl={3} pr={3} placeholder="Government issued country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {idTypes.items.map((id) => (
                                        <SelectItem item={id} key={id.value} p={3} _hover={{bgColor: "green.800", color: "white"}}>
                                            {id.label}
                                        </SelectItem>
                                        ))}
                                    </SelectContent>
                                </SelectRoot>

   */}                          </Box>
                        </Flex>
                    </Flex>
                </Flex>

        </Flex>

      </Flex>
    </Flex>
  );
};

export default IdVerification;



