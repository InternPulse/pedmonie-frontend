import React from "react";
import {
  Box,
  Flex,
  Text,
  Link,
  SimpleGrid,
  VStack,
  Button,
  Icon,
  Image,
  Container,
} from "@chakra-ui/react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Pedmonie work?",
    answer:
      "Pedmonie allows businesses to accept payments seamlessly through multiple methods, including cards, bank transfers, USSD, and mobile wallets. Simply sign up, integrate with your platform, or generate a payment link to start receiving payments.",
  },
  {
    question: "Is Pedmonie secure?",
    answer: "Yes, Pedmonie follows industry security standards.",
  },
  {
    question: "What types of payments can I accept?",
    answer:
      "You can accept credit/debit cards, bank transfers, USSD, and mobile wallets.",
  },
  {
    question: "Do I need a website to use Pedmonie?",
    answer: "No, you can use Pedmonie via payment links without a website.",
  },
  {
    question: "Can I integrate Pedmonie with my website or app?",
    answer: "Absolutely. Pedmonie provides APIs and SDKs for easy integration.",
  },
];

export default function Faqs() {
  return (
    <Box bg="gray.50" px={{ base: 4, md: "95px" }}>
      {/* FAQ Polygon Section */}
      <Box
        position="relative"
        maxW={{ base: "full", md: "full" }} // Full width on mobile, 800px on desktop
        mx="auto"
        mt={{ base: 4, md: 10 }}
        overflow="hidden"
        clipPath="polygon(5% 0%, 95% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)"
        /*
          If you want to remove the polygon on mobile, uncomment below:
          clipPath={{ 
            base: "none", 
            md: "polygon(5% 0%, 95% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)" 
          }}
        */
        bg="gray.100"
        p={{ base: 4, md: 6 }}
        borderRadius="lg"
      >
        <Container maxW="container.md" px={{ base: 0, md: 4 }}>
          {/* FAQ Title */}
          <VStack spacing={2} textAlign="center" mb={{ base: 4, md: 6 }}>
            <Text
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
              color="black"
            >
              Frequently Asked Questions (FAQs)
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.600"
            >
              Everything You Need to Know About Pedmonie
            </Text>
          </VStack>

          {/* Accordion without lines */}
          <Box bg="white" p={{ base: 4, md: 6 }} borderRadius="lg">
            <AccordionRoot type="single" collapsible>
              <VStack spacing={4} align="stretch">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    style={{ border: "none" }}
                  >
                    <AccordionItemTrigger>
                      <Text
                        fontWeight="medium"
                        fontSize={{ base: "md", md: "md" }}
                        py={2}
                        color="black"
                      >
                        {faq.question}
                      </Text>
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text
                        fontSize={{ base: "sm", md: "sm" }}
                        color="black"
                        mt={2}
                      >
                        {faq.answer}
                      </Text>
                    </AccordionItemContent>
                  </AccordionItem>
                ))}
              </VStack>
            </AccordionRoot>
          </Box>
        </Container>
      </Box>
      <Box
  bg="#2E5C38"
  color="white"
  py={6}
  px={4}
  textAlign="center"
  mt={10}
  backgroundImage="url('/small_circular_lines.png')"
  backgroundPosition="right"
  backgroundRepeat="no-repeat"
  backgroundSize="contain"
>
  <Flex
    align="center"
    justify="center"
    direction={{ base: "column", lg: "row" }} // Vertical on mobile and tablet, horizontal on desktop
    gap={{ base: 6, lg: 10 }} // Consistent spacing for column, adjusted for row
    maxW="1100px"
    mx="auto"
  >
    <Image
      src="https://www.idcrypt.global/_next/static/chunks/images/business-header-457a884bda4cb7ff394467beb7c80005.webp"
      alt="Support Avatar"
      borderRadius="full"
      boxSize={{ base: "120px", lg: "180px" }} // Same size on mobile and tablet, larger on desktop
    />
    <Box
      maxW="500px"
      textAlign={{ base: "center", lg: "left" }} // Centered on mobile and tablet, left on desktop
    >
      <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
        Still have questions?
      </Text>
      <Text fontSize={{ base: "sm", md: "md" }}>
        Can't find the answer you're looking for? Please chat with our friendly team.
      </Text>
    </Box>
    <Button
      colorScheme="whiteAlpha"
      variant="outline"
      rounded="full"
      size="md"
      _hover={{ bg: "white", color: "teal.600" }}
      mt={{ base: 4, lg: 0 }} // Space above button on mobile and tablet, none on desktop
    >
      Get in Touch
    </Button>
  </Flex>
</Box>

      <Box bg="gray.50" py={{ base: 10, md: 20 }} px={{ base: 5, md: 20 }}>
      <SimpleGrid 
  columns={{ base: 1, md: 2, lg: 4 }}  // Tablet: 2 cols, Desktop: 4 cols
  spacing={{ base: 10, md: 8, lg: 10 }}  // Balanced spacing for tablet
  mx="auto"
  textAlign={{ base: "center", md: "left" }}
>
          
        {/* Logo & Contact - Only for Desktop */}
        <VStack spacing={4} align="start" display={{ base: "none", md: "flex" }}>
          <Image 
            src="/pedmonie.png" 
            alt="Footer Logo" 
            boxSize="150px" 
            objectFit="contain" 
            margin="-55px"
          />
          <Link href="mailto:hello@pedmonie.com" color="gray.600">
            hello@pedmonie.com
          </Link>
          <Text color="gray.600">+234 856 600 0000</Text>
        </VStack>

        {/* Company */}
        <VStack spacing={4} align="start">
          <Text fontSize="md" fontWeight="bold" color="blackAlpha.950">
            Company
          </Text>
          <Link href="#" color="gray.600">Blog</Link>
          <Link href="#" color="gray.600">Career</Link>
          <Link href="#" color="gray.600">Pricing</Link>
        </VStack>

        {/* Resources */}
        <VStack spacing={4} align="start" mt={{ base: 6, md: 0 }}>
          <Text fontSize="md" fontWeight="bold" color="blackAlpha.950">
            Resources
          </Text>
          <Link href="#" color="gray.600">Documentation</Link>
          <Link href="#" color="gray.600">Papers</Link>
          <Link href="#" color="gray.600">Press Conferences</Link>
          <Link href="#" color="gray.600">Data Processing</Link>
        </VStack>

        {/* Legal */}
        <VStack spacing={4} align="start" mt={{ base: 6, md: 0 }}>
          <Text fontSize="md" fontWeight="bold" color="blackAlpha.950">
            Legal
          </Text>
          <Link href="#" color="gray.600">Terms of Service</Link>
          <Link href="#" color="gray.600">Privacy Policy</Link>
          <Link href="#" color="gray.600">Cookies Policy</Link>
          <Link href="#" color="gray.600">Data Processing</Link>
        </VStack>
      </SimpleGrid>

        {/* Mobile View */}
        <Flex direction="column" align="center" display={{ base: "flex", md: "none" }}>
        {/* Row for Logo & Contact and Social Icons */}
        <Flex direction="row" justify="space-between" w="100%" align="center">
          {/* Logo & Contact */}
          <VStack spacing={4} align="start">
            <Image
              src="/pedmonie.png"
              alt="Footer Logo"
              boxSize="100px"
              objectFit="contain"
            />
            <Link href="mailto:hello@pedmonie.com" color="gray.600">
              hello@pedmonie.com
            </Link>
            <Text color="gray.600">+234 856 600 0000</Text>
          </VStack>
          {/* Social Icons */}
          <Flex gap={4}>
            <Link href="#" color="gray.600">
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link href="#" color="gray.600">
              <Icon as={FaFacebookF} boxSize={5} />
            </Link>
            <Link href="#" color="gray.600">
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
          </Flex>
        </Flex>
        {/* Copyright */}
        <Text color="gray.500" fontSize="sm" mt={6}>
          © 2025, Pedmonie Inc.
        </Text>
      </Flex>

      {/* Desktop View: Keep original layout */}
      <Flex
        mt={10}
        pt={6}
        borderTop="2px solid"
        borderColor="gray.300"
        justify="space-between"
        align="center"
        flexDir={{ base: "column", md: "row" }}
        display={{ base: "none", md: "flex" }}
      >
        <Text color="gray.500" fontSize="sm">
          © 2025, Pedmonie Inc.
        </Text>
        <Flex gap={4}>
          <Link href="#" color="gray.600">
            <Icon as={FaTwitter} boxSize={5} />
          </Link>
          <Link href="#" color="gray.600">
            <Icon as={FaFacebookF} boxSize={5} />
          </Link>
          <Link href="#" color="gray.600">
            <Icon as={FaInstagram} boxSize={5} />
          </Link>
        </Flex>
      </Flex>
    </Box>
      

    </Box>
  );
}
