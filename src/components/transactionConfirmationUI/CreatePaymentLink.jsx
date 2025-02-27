import { Box, Divider, Text, Flex, VStack, Button, IconButton, Input, Textarea, Select } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FaCloudUploadAlt } from "react-icons/fa";

const CreatePaymentLink = () => (
    <Box w="100vw" h="100vh" bg="gray.100" color="gray.600" position="relative" minH="120vh">
        <Box w="100%" h="63px" position="relative">
            <Flex align="center" h="100%" px={6}>
                <IconButton icon={<ArrowBackIcon boxSize={6} />} aria-label="Back" variant="ghost" position="absolute" left={6} />
                <Text fontSize="24px" fontWeight="500" color="#333333" ml="70px">
                    Create payment link
                </Text>
            </Flex>
            <Divider borderColor="#DDDDDD" borderWidth="1px" position="absolute" bottom="0" />

            <Flex justify="center" p={6} bg="gray.100" gap={55}>
                {/* Form Section */}
                <Box w="525px" p={8} bg="white" borderRadius="lg" boxShadow="md" mt="40px">
                    <VStack spacing={6} align="stretch">
                        {/* Name Input */}
                        <Box>
                            <Text fontSize="16px" fontWeight="400">Name</Text>
                            <Input placeholder="Enter name" borderColor="#DDDDDD" borderRadius="8px" />
                        </Box>

                        {/* Description Textarea */}
                        <Box>
                            <Text fontSize="16px" fontWeight="400">Description</Text>
                            <Textarea placeholder="Enter description" borderColor="#D9D9D9" borderRadius="8px" rows={6} />
                            <Text fontSize="12px" color="#919191" textAlign="right">0 / 280</Text>
                        </Box>

                        {/* Amount Selection */}
                        <Box>
                            <Text fontSize="16px" fontWeight="400">Amount</Text>
                            <Flex gap={2}>
                                <Select w="128px" borderColor="#D9D9D9" borderRadius="8px">
                                    <option value="NGN">NGN</option>
                                </Select>
                                <Input placeholder="0.00" borderColor="#D9D9D9" borderRadius="8px" />
                            </Flex>
                            <Text fontSize="12px" color="#919191">You can leave empty to allow customers enter desired amount</Text>
                        </Box>

                        {/* Payment Notification */}
                        <Box>
                            <Text fontSize="14px" fontWeight="400">Where should we send your payment notification</Text>
                            <Text fontSize="16px" fontWeight="400">Phone number</Text>
                            <Flex gap={2}>
                                <Select w="130px" borderColor="#D9D9D9" borderRadius="8px">
                                    <option value="+234">+234</option>
                                </Select>
                                <Input placeholder="+234 000 000 0000" borderColor="#D9D9D9" borderRadius="8px" />
                            </Flex>
                        </Box>

                        {/* Email Address */}
                        <Box>
                            <Text fontSize="16px" fontWeight="400">Email address</Text>
                            <Input placeholder="example@gmail.com" borderColor="#DDDDDD" borderRadius="8px" />
                        </Box>

                        <Divider />

                        {/* Buttons */}
                        <Flex gap={4} justify="center">
                            <Button bg="#2E5C38" color="white" _hover={{ bg: "green.700" }} borderRadius="8px">
                                Create link
                            </Button>
                            <Button variant="outline" borderColor="#333333" color="#333333" borderRadius="8px">
                                Cancel
                            </Button>
                        </Flex>
                    </VStack>
                </Box>

                {/* Image Upload Section */}
                <Box
                    w="649px"
                    h="444px"
                    bg="rgba(221, 221, 221, 0.8)"
                    borderRadius="md"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    p={4}
                    mt="200px"
                >
                    {/* Upload Icon */}
                    <FaCloudUploadAlt size={88} color="#CCCCCC" />

                    {/* Upload Instruction */}
                    <Text w="288px"
                        textAlign="center"
                        color="#67B5FE"
                        fontSize="16px"
                        fontFamily="Inter"
                        fontWeight="500"
                        lineHeight="22.4px"
                        wordBreak="break-word">
                        Drag your image from your computer here or click to upload
                    </Text>

                    {/* Additional Info */}
                    <Text w="429px"
                        textAlign="center"
                        color="#505050"
                        fontSize="12px"
                        fontFamily="Inter"
                        fontWeight="400"
                        lineHeight="20px"
                        wordBreak="break-word">
                        This image will be displayed on social platforms where the link is shared
                    </Text>
                </Box>
            </Flex>
        </Box>
    </Box>
);

export default CreatePaymentLink;
