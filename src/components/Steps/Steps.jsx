
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import img1 from "../../assets/images/arrow-down.png";

const data = [
  {
    id: 1,
    heading: "Sign Up",
    text: "Create an account and customize your payment preferences.",
  },
  {
    id: 2,
    heading: "Generate Payment Links",
    text: "Easily create and share secure payment links with customers.",
  },
  {
    id: 3,
    heading: "Accept Payments",
    text: "Customers can pay via card, bank transfer, USSD, or mobile wallets..",
  },
  {
    id: 4,
    heading: "Track & Manage Transactions",
    text: "Get real-time updates and insights on your payments",
  },
];

const Steps = () => {
  return (
    <Flex
      bg="#2E5C38"
      color="#FFFFFF"
      direction="column"
      align="center"
      px={{ base: 4, md: 10 }}
      py={{ base: 10, md: 10 }}
    >
      <Text
        fontWeight="600"
        textAlign="center"
        fontSize={{ base: "2rem", md: "3rem" }}
      >
        Seamless Payments in Just a Few Steps
      </Text>

      <Flex
        className="or-bx"
        direction={{ base: "column", md: "row" }} // Stack vertically on mobile, row on desktop
        justify="center"
        gap="10px"
        my={{ base: 6, md: 10 }}
        width="100%"
      >
        {data.map((item) => (
          <Flex
            key={item.id}
            direction="column"
            align="center"
            gap="10px"
            p="7px"
            width={{ base: "100%", md: "0 1 400px" }}
          >
            <Box
              fontSize={{ base: "2rem", md: "3rem" }}
              border="2px solid #FFFFFF99"
              borderRadius="50%"
              width={{ base: "60px", md: "80px" }}
              height={{ base: "60px", md: "80px" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              className="numBox"
            >
              {item.id}
            </Box>
            {/* Horizontal line element – ensure your CSS handles its styling */}
            <div className="hline" />
            <Text
              fontSize={{ base: "1.2rem", md: "1.87rem" }}
              textAlign="center"
            >
              {item.heading}
            </Text>
            <Text
              fontSize={{ base: "1rem", md: "1.3rem" }}
              textAlign="center"
              fontWeight="200"
            >
              {item.text}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Button
        className="btn"
        fontSize={{ base: "14px", md: "15px" }}
        width={{ base: "90%", md: "auto" }}
      >
        Create a Free Account <img src={img1} alt="button" />
      </Button>
    </Flex>
  );
};

export default Steps;
