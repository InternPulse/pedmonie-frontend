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
  { question: "Is Pedmonie secure?", answer: "Yes, Pedmonie follows industry security standards." },
  { question: "What types of payments can I accept?", answer: "You can accept credit/debit cards, bank transfers, USSD, and mobile wallets." },
  { question: "Do I need a website to use Pedmonie?", answer: "No, you can use Pedmonie via payment links without a website." },
  { question: "Can I integrate Pedmonie with my website or app?", answer: "Absolutely. Pedmonie provides APIs and SDKs for easy integration." },
];

export default function Faqs() {
  return (
    <Box bg="gray.50">
      {/* FAQ Polygon Section */}
      <Box
        position="relative"
        maxW="800px"
        mx="auto"
        mt={10}
        overflow="hidden"
        clipPath="polygon(5% 0%, 95% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)"
        bg="gray.100"
        p={6}
        borderRadius="lg"
       
      >
        <Container>
          {/* FAQ Title */}
          <VStack spacing={2} textAlign="center" mb={4}>
            <Text fontSize="2xl" fontWeight="bold" color="black">
              Frequently Asked Questions (FAQs)
            </Text>
            <Text fontSize="md" color="gray.600">
              Everything You Need to Know About Pedmonie
            </Text>
          </VStack>

          {/* Accordion without lines */}
          <Box bg="white" p={6} borderRadius="lg" >
            <AccordionRoot type="single" collapsible>
              <VStack spacing={4} align="stretch">
                {/* Ensures spacing without borders */}
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} style={{ border: "none" }}>
                    <AccordionItemTrigger>
                      <Text fontWeight="medium" fontSize="md" py={2} color="black">
                        {faq.question}
                      </Text>
                    </AccordionItemTrigger>
                    <AccordionItemContent>
                      <Text fontSize="sm" color="black" mt={2}>
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

      {/* Contact Section */}
      <Box bg="#2E5C38" color="white" py={6} px={4} textAlign="center" mt={10} height={200} backgroundImage="url('/small_circular_lines.png')"// Set your image path
  backgroundPosition="right" // Adjust position
  backgroundRepeat="no-repeat"
  backgroundSize="contain">
        <Flex align="center" justify="center" direction={{ base: "column", md: "row" }} gap={60}>
          <Image
            src="https://www.idcrypt.global/_next/static/chunks/images/business-header-457a884bda4cb7ff394467beb7c80005.webp"
            alt="Support Avatar"
            borderRadius="full"
            boxSize="150px"
          />
           <Box maxW="400px" textAlign="left">
            <Text fontSize="lg" fontWeight="bold">
              Still have questions?
            </Text>
            <Text fontSize="sm" >
              Can't find the answer you're looking for? Please chat with our friendly team.
            </Text>
          </Box>
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            
            rounded="full"
            size="md"
            _hover={{ bg: "white", color: "teal.600" }}
          >
            Get in Touch
          </Button>
        </Flex>
      </Box>

      {/* Footer */}
      <Box bg="gray.50" py={8} px={4}>
      <SimpleGrid
  columns={{ base: 1, md: 4 }}
  spacing={8}
  maxW="1200px"
  mx="auto"
  textAlign={{ base: "center", md: "left" }}
>
  {/* Logo & Contact */}
  <VStack spacing={3} align={{ base: "center", md: "start" }}>
    <Image
      src="/pedmonie.png" // Replace with actual path
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
  <VStack spacing={3} align={{ base: "center", md: "start" }}>
    <Text fontSize="md" fontWeight="bold" color="blackAlpha.950">
      Company
    </Text>
    <Link href="#" color="gray.600">Blog</Link>
    <Link href="#" color="gray.600">Career</Link>
    <Link href="#" color="gray.600">Pricing</Link>
  </VStack>

  {/* Resources */}
  <VStack spacing={3} align={{ base: "center", md: "start" }}>
    <Text fontSize="md" fontWeight="bold" color="blackAlpha.950">
      Resources
    </Text>
    <Link href="#" color="gray.600">Documentation</Link>
    <Link href="#" color="gray.600">Papers</Link>
    <Link href="#" color="gray.600">Press Conferences</Link>
    <Link href="#" color="gray.600">Data Processing</Link>
  </VStack>

  {/* Legal */}
  <VStack spacing={3} align={{ base: "center", md: "start" }}>
    <Text fontSize="md" fontWeight="bold" color="blackAlpha.950">
      Legal
    </Text>
    <Link href="#" color="gray.600">Terms of Service</Link>
    <Link href="#" color="gray.600">Privacy Policy</Link>
    <Link href="#" color="gray.600">Cookies Policy</Link>
    <Link href="#" color="gray.600">Data Processing</Link>
  </VStack>
</SimpleGrid>
        <Flex
          mt={8}
          pt={4}
          borderTop="1px solid"
          borderColor="gray.200"
          justify="space-between"
          align="center"
          maxW="1200px"
          mx="auto"
          direction={{ base: "column", md: "row" }}
          gap={4}
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
