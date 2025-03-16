import {
  Box,
  Button,
  Card,
  Heading,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import WhatsIncluded from "./Hidden";

const Cards = () => {
  return (
    <Stack width="90%" margin="0 auto" pt={10} pb={10}>
      <Box>
        <Card.Root
          // Make the top border thicker and solid
          borderTop="10px solid"
          borderTopColor="yellow"
          size="lg"
          display="flex"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          gap="5%"
          bgColor="rgba(255, 255, 255, 1)"
        >
          <Box w={{ base: "100%", md: "45%", lg: "45%" }}>
            <Card.Header>
              <Heading size="md" color="#1e1e1e" textAlign={{ base: "center" }}>
                Tier One
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
              <Box
                display="flex"
                flexDirection={{ base: "column", md: "row", lg: "row" }}
                gap={2}
                pb={26}
              >
                <Box
                  fontSize={{ lg: "2xl", md: "xl" }}
                  color="black"
                  textAlign={{ base: "center" }}
                >
                  Free
                </Box>
                <Box
                  fontSize="sm"
                  pt={4}
                  fontWeight="100"
                  color="rgba(0, 0, 0, 0.4)"
                  textAlign={{ base: "center" }}
                >
                  pay per transaction
                </Box>
              </Box>
              <Separator pt={26} />
              <Text
                fontSize={{ lg: "xl", md: "xs", sm: "xs" }}
                textAlign={{ base: "center" }}
              >
                Best for Small Businesses
              </Text>
              <Button
                w={{ lg: "40%", md: "60%" }}
                bgColor="white"
                color="black"
                borderColor="black"
                borderRadius={20}
                mt={39}
              >
                Get Started <RiArrowRightLine />
              </Button>
            </Card.Body>
          </Box>
          <Box w={{ base: "100%", md: "50%", lg: "50%" }} pb={{ base: "20px" }}>
            <Card.Header>
              <Heading
                size="md"
                textAlign={{ base: "center" }}
                display={{ base: "none", md: "block", lg: "block" }}
              >
                What's included
              </Heading>
            </Card.Header>
            <Card.Body
              color="fg.muted"
              as="ul"
              listStyleType="circle"
              fontSize={{ lg: "sm", md: "xs", sm: "xs" }}
              display={{ base: "none", md: "block", lg: "block" }}
            >
              <li>Accept payments via cards, bank transfers, and USSD</li>
              <li>Secure transactions with fraud protection</li>
              <li>Access to real-time transaction reports</li>
            </Card.Body>
            <WhatsIncluded />
          </Box>
        </Card.Root>
      </Box>

      <Card.Root
        borderTop="10px solid"
        borderTopColor="rgba(141, 239, 136, 1)"
        size="lg"
        bgColor="rgba(255, 255, 255, 1)"
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        gap="5%"
      >
        <Box w={{ base: "100%", md: "45%", lg: "45%" }}>
          <Card.Header>
            <Heading size="md" textAlign={{ base: "center" }}>
              Tier Two
            </Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            <Box
              display="flex"
              flexDirection={{ base: "column", md: "row", lg: "row" }}
              gap={2}
              pb={26}
            >
              <Box
                fontSize={{ lg: "2xl", md: "xl" }}
                color="black"
                textAlign={{ base: "center" }}
              >
                #50,000
              </Box>
              <Box
                fontSize="sm"
                pt={4}
                color="rgba(0, 0, 0, 0.4)"
                textAlign={{ base: "center" }}
              >
                per month
              </Box>
            </Box>
            <Separator pt={26} />
            <Text
              fontSize={{ lg: "xl", md: "xs", sm: "xs" }}
              textAlign={{ base: "center" }}
            >
              Best for Growing Businesses
            </Text>
            <Button
              w={{ lg: "40%", md: "60%" }}
              bgColor="white"
              color="black"
              borderColor="black"
              borderRadius={20}
              mt={39}
            >
              Get Started <RiArrowRightLine />
            </Button>
          </Card.Body>
        </Box>
        <Box w={{ base: "100%", md: "50%", lg: "50%" }} pb={{ base: "20px" }}>
          <Card.Header>
            <Heading
              size="md"
              textAlign={{ base: "center" }}
              display={{ base: "none", md: "block", lg: "block" }}
            >
              What's included
            </Heading>
          </Card.Header>
          <Card.Body
            color="fg.muted"
            as="ul"
            listStyleType="circle"
            fontSize={{ lg: "sm", md: "xs", sm: "xs" }}
            display={{ base: "none", md: "block", lg: "block" }}
          >
            <li>Everything in Basic, plus.</li>
            <li>Lower transaction fees for higher volumes</li>
            <li>Automated payouts for faster access to funds</li>
            <li>Customizable payment pages</li>
            <li>Priority customer support</li>
          </Card.Body>
          <WhatsIncluded />
        </Box>
      </Card.Root>

      <Card.Root
        borderTop="10px solid"
        borderTopColor="blue"
        size="lg"
        bgColor="rgba(255, 255, 255, 1)"
        display="flex"
        flexDirection={{ base: "column", md: "row", lg: "row" }}
        gap="5%"
      >
        <Box w={{ base: "100%", md: "45%", lg: "45%" }}>
          <Card.Header>
            <Heading size="md" textAlign={{ base: "center" }}>
              Tier Three
            </Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            <Box pb={26}>
              <Box
                fontSize={{ lg: "2xl", md: "xl" }}
                color="black"
                textAlign={{ base: "center" }}
              >
                Custom
              </Box>
            </Box>
            <Separator pt={26} />
            <Text
              fontSize={{ lg: "xl", md: "xs", sm: "xs" }}
              textAlign={{ base: "center" }}
            >
              Best for Large-Scale Businesses
            </Text>
            <Button
              w={{ lg: "40%", md: "60%" }}
              bgColor="white"
              color="black"
              borderColor="black"
              borderRadius={20}
              mt={39}
            >
              Contact US <RiArrowRightLine />
            </Button>
          </Card.Body>
        </Box>
        <Box w={{ base: "100%", md: "50%", lg: "50%" }} pb={{ base: "20px" }}>
          <Card.Header>
            <Heading
              size="md"
              display={{ base: "none", md: "block", lg: "block" }}
            >
              What's included
            </Heading>
          </Card.Header>
          <Card.Body
            color="fg.muted"
            as="ul"
            listStyleType="circle"
            fontSize={{ lg: "sm", md: "xs", sm: "xs" }}
            display={{ base: "none", md: "block", lg: "block" }}
          >
            <li>Everything in Pro, plus:</li>
            <li>Dedicated account manager</li>
            <li>Advanced API access for custom integrations</li>
            <li>Multi-currency support for global payments</li>
            <li>Tailored pricing based on business needs</li>
          </Card.Body>
          <WhatsIncluded />
        </Box>
      </Card.Root>
    </Stack>
  );
};

export default Cards;
