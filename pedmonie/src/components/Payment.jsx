
import React from "react";
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    Divider,
    VStack,
    HStack,
    IconButton
} from "@chakra-ui/react";
import {
    ChevronDownIcon,
    DownloadIcon,
    AddIcon,
    ChevronLeftIcon,   // ✅ Add this
    ChevronRightIcon   // ✅ Add this
} from "@chakra-ui/icons";

import logo from "../assets/logo.png";
import toogle from "../assets/toogle.png";
import overview from "../assets/overview.png";
import Analytics from "../assets/Analytics.png";
import Transactions from "../assets/Transactions.png";
import Payments from "../assets/Payment.png";
import Subscription from "../assets/Subscription.png";
import Settings from "../assets/Settings.png";
import Logout from "../assets/Logout.png";
import Support from "../assets/Support.png";

const Payment = () => {
    return (
        <Box w="100vw" h="full" bg="#F8F8F8" p={5}>
            <Flex>
                {/* Sidebar */}
                <VStack w="280px" h="full" bg="white" p={5} spacing={5} align="start">
                    <Flex w="full" align="center" justify="space-between" pt="5">
                        {/* Logo and Text on the Left */}
                        <Flex align="center" gap={2}>
                            <Image src={logo} alt="Logo" boxSize="30px" w="34px" h="33.26px" />
                            <Text fontSize="20px" fontWeight="500" color="#424141">PEDMONIE</Text>
                        </Flex>

                        {/* Toggle Image Aligned to the Right */}
                        <Image src={toogle} alt="Toggle" boxSize="30px" w="32px" h="32px" />
                    </Flex>
                    <Divider borderColor="gray.300" />



                    <Text
                        w="232px"
                        color="#637381"
                        fontSize="12px"
                        fontFamily="Inter"
                        fontWeight="500"
                        textTransform="uppercase"
                        letterSpacing="0.24px"
                        wordBreak="break-word"
                        paddingTop="10"
                    >
                        General
                    </Text>

                    <Button
                        key="overview"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={overview} alt="Overview Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Overview
                        </Text>

                    </Button>
                    <Button
                        key="analytics"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={Analytics} alt="Analytics Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Analytics
                        </Text>

                    </Button>
                    <Button
                        key="transactions"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={Transactions} alt="Transactions Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text

                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Transactions
                        </Text>

                    </Button>
                    <Button
                        key="payment"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={Payments} alt="Payment Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Payment
                        </Text>

                    </Button>
                    <Button
                        key="subscription"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={Subscription} alt="Subscription Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Subscription
                        </Text>

                    </Button>
                    <Button
                        key="support"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={Support} alt="Support Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Support
                        </Text>

                    </Button>
                    <Divider borderColor="gray.300" pt="5" />


                    <Text
                        w="232px"
                        color="#637381"
                        fontSize="12px"
                        fontFamily="Inter"
                        fontWeight="500"
                        textTransform="uppercase"
                        letterSpacing="0.24px"
                        wordBreak="break-word"
                        paddingTop="10"
                    >
                        SETTINGS
                    </Text>

                    <Button
                        key="overview"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        leftIcon={<Image src={Settings} alt="Overview Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Settings
                        </Text>

                    </Button>

                    <Button
                        key="overview"
                        variant="ghost"
                        w="full"
                        justifyContent="flex-start"
                        pt="50"
                        leftIcon={<Image src={Logout} alt="Overview Icon" boxSize="30px" w="34px" h="33.26px" />}
                    >
                        <Text
                            color="#5F5C5C"
                            fontSize="16px"
                            fontFamily="Inter"
                            fontWeight="400"
                            wordBreak="break-word"
                        >
                            Logout
                        </Text>

                    </Button>

                </VStack>

                {/* Main Content */}
                <Box p={5} flex={1}>
                    <HStack w="full" spacing={4} justify="space-between">
                        {/* Left Section - Payment Title & Count */}
                        <VStack spacing={4} align="start" pb="20">
                            <Text
                                color="#313431"
                                fontSize="20px"
                                fontFamily="Inter"
                                fontWeight="500"
                                wordBreak="break-word"
                                textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                                w="84px"
                                h="24px"
                            >
                                Payment
                            </Text>
                            <Text fontSize="xl" fontWeight="bold">16 Payment Links</Text>
                        </VStack>

                        {/* Right Section - Buttons */}
                        <Flex gap={4}>
                            <Button leftIcon={<ChevronDownIcon />} colorScheme="gray">All Payment Links</Button>
                            <Button leftIcon={<DownloadIcon />} colorScheme="gray">Download Link</Button>
                            <Button leftIcon={<AddIcon />} colorScheme="green">New Payment Link</Button>
                        </Flex>
                    </HStack>

                    <Box mt={5} p={4} bg="gray.100" borderRadius="md">
                        <HStack spacing={4} fontWeight="bold" justify="space-between" w="full">
                            <Text flex="1" textAlign="left">Page Name</Text>
                            <Text flex="1" textAlign="left">Amount</Text>
                            <Text flex="1" textAlign="left">Link Type</Text>
                            <Text flex="1" textAlign="left">Payment Link</Text>
                            <Text flex="1" textAlign="left">Date Created</Text>
                        </HStack>
                    </Box>
                    {/* Example of a payment row */}
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Social</Text>
                        <Text flex="1" textAlign="left">1000 CAD</Text>
                        <Text flex="1" textAlign="left">Single Charge</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">18 hours ago</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Fosted crown</Text>
                        <Text flex="1" textAlign="left">1000 EUR</Text>
                        <Text flex="1" textAlign="left">Subscription</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">Dec 23rd, 2023 4:00</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Social</Text>
                        <Text flex="1" textAlign="left">1000 CAD</Text>
                        <Text flex="1" textAlign="left">Single Charge</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">18 hours ago</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Fosted crown</Text>
                        <Text flex="1" textAlign="left">1000 EUR</Text>
                        <Text flex="1" textAlign="left">Subscription</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">Dec 23rd, 2023 4:00</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Fosted crown</Text>
                        <Text flex="1" textAlign="left">1000 EUR</Text>
                        <Text flex="1" textAlign="left">Subscription</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">Dec 23rd, 2023 4:00</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Social</Text>
                        <Text flex="1" textAlign="left">1000 CAD</Text>
                        <Text flex="1" textAlign="left">Single Charge</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">18 hours ago</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Social</Text>
                        <Text flex="1" textAlign="left">1000 CAD</Text>
                        <Text flex="1" textAlign="left">Single Charge</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">18 hours ago</Text>
                    </HStack>
                    <HStack mt={3} spacing={4} p={3} borderBottom="1px" borderColor="gray.200" justify="space-between" w="full">
                        <Text flex="1" textAlign="left">Social</Text>
                        <Text flex="1" textAlign="left">1000 CAD</Text>
                        <Text flex="1" textAlign="left">Single Charge</Text>
                        <Button flex="1" textAlign="left" colorScheme="yellow" variant="link">Copy Link</Button>
                        <Text flex="1" textAlign="left">18 hours ago</Text>
                    </HStack>
                    <Flex w="full" justify="space-between" align="center" pt="20">
                        {/* Left: Showing Data Info */}
                        <Text color="#B5B7C0" fontSize="14px" fontFamily="Inter" fontWeight="500">
                            Showing data 1 to 8 of 256K entries
                        </Text>

                        {/* Right: Pagination Controls */}
                        <Flex align="center" gap={2} ml="auto">  {/* Ensures it aligns to the right */}
                            <IconButton
                                icon={<ChevronLeftIcon />}
                                aria-label="Previous Page"
                                bg="#F5F5F5"
                                border="1px solid #EEEEEE"
                                borderRadius="4px"
                                _hover={{ bg: "#E0E0E0" }}
                            />

                            {[1, 2, 3, 4, 40].map((num) => (
                                <Button
                                    key={num}
                                    w="26px"
                                    h="28px"
                                    p="6px"
                                    bg={num === 1 ? "#2E5C38" : "#F5F5F5"}
                                    borderRadius="4px"
                                    border="1px solid"
                                    borderColor={num === 1 ? "#5932EA" : "#EEEEEE"}
                                    color={num === 1 ? "white" : "#2E5C38"}
                                    fontSize="12px"
                                    fontWeight="500"
                                    fontFamily="Inter"
                                    lineHeight="12px"
                                    _hover={{ bg: num === 1 ? "#264B2D" : "#E0E0E0" }}
                                >
                                    {num}
                                </Button>
                            ))}

                            <Text fontSize="12px" fontWeight="500" fontFamily="Poppins">...</Text>

                            <IconButton
                                icon={<ChevronRightIcon />}
                                aria-label="Next Page"
                                bg="#F5F5F5"
                                border="1px solid #EEEEEE"
                                borderRadius="4px"
                                _hover={{ bg: "#E0E0E0" }}
                            />
                        </Flex>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
};

export default Payment;

