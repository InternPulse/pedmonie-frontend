import React from "react";
import { Box, Heading, Text, Flex, Image, Link } from "@chakra-ui/react";
import firstlogo from "../../public/firstlogo.svg";
import frame from "../../public/frame.svg";
import FreeTransaction from "../../public/FreeTransaction.svg";
import Vector from "../../public/Vector.svg";
const Features = () => {
  const data = [
    {
      logo: firstlogo,
      title: "Accept All Payment Methods",
      description:
        "Cards, bank transfers, USSD, and digital wallets—give your customers the flexibility they need.",
      link_adress: "#",
    },
    {
      logo: FreeTransaction,
      title: "Automated Payouts & Settlements",
      description:
        "Withdraw funds quickly and manage your cash flow without hassle.",
      link_adress: "#",
    },
    {
      logo: frame,
      title: "Fast & Secure Transactions",
      description:
        "Process payments in seconds with bank-level security to keep your business and customers safe.",
      link_adress: "#",
    },
  ];

  const thingsWeDo = data.map((item) => {
    return (
      <Box
        w="22rem"
        h={["21rem", "21rem", "31rem"]}
        py="4"
        key={item.logo}
        bg={["black", "black", "white"]}
        mb={["8", "8", undefined]}
        rounded={["2xl", "2xl", undefined]}
      >
        <Box mx="auto" w="7rem" h="7rem">
          <Image src={item.logo} mx="auto" pt="4" />
        </Box>
        <Text
          color={["white", "white", "black"]}
          fontWeight={"semibold"}
          fontSize={["1.5rem", "1.5rem", "1.9rem"]}
          textAlign={"center"}
          my="4"
        >
          {item.title}
        </Text>

        <Box w="18rem" mx="auto">
          <Text
            color={["white", "white", "gray.600"]}
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight="normal"
            textAlign={"center"}
          >
            {item.description}
          </Text>
        </Box>

        <Link
          textAlign={["left", "left", "center"]}
          // pl={["8", "8", undefined]}
          textDecoration={"underline"}
          display="block"
          pb={["8", "8", "4"]}
          pt={["4", "4", "8"]}
          color={["white", "white", "black"]}
          fontSize={"1.25rem"}
          letterSpacing={"-0.07rem"}
          href={item.link_adress}
        >
          Learn more
        </Link>
      </Box>
    );
  });
  return (
    <>
      <Box w="4/6" mx="auto" bg="white" py="8">
        <Heading
          fontSize={["1.75rem", "1.75rem", "2.5rem"]}
          letterSpacing="0.05rem"
          fontWeight={"semibold"}
          textAlign={"center"}
          color={"black"}
        >
          Powerful Features to Elevate Your Business
        </Heading>
        <Text
          color="gray.600"
          pt="4"
          letterSpacing="-0.8px"
          textAlign={"center"}
          fontSize={["0.875rem", "0.875rem", "1rem"]}
          fontWeight={"semibold"}
        >
          Effortless payments, real-time insights, and unmatched security—all in
          one place.
        </Text>
      </Box>

      <Flex
        w="5/6"
        mx="auto"
        py="8"
        bg="white"
        flexDirection={["column", "column", "row"]}
        alignItems={["center", "center", "flex-start"]}
      >
        {thingsWeDo}
      </Flex>

      {/* <Box display={['block', 'block', 'none']} style={{
          position: "absolute",
          top: "0",
        }}>
          <Image src={Vector} />
        </Box> */}
      {/* To avoid errors, we can position the design when the page is complete */}
    </>
  );
};

export default Features;
