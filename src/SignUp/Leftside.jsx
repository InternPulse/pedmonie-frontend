import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import esvg from "../svgs/esvg.svg";
import cartoon from "../svgs/cartoon.svg";
import dots from "../svgs/dots.svg";
import lg from "../svgs/lg.svg";

const Leftside = () => {
  return (
    <>
      <Box
        w="50%"
        bg="#103C29"
        pb="45px"
        h="-moz-max-content"
        width={{ lg: "50%", md: "100%" }}
      >
        {/* HEADING TEXT */}
        <Text as="p" textAlign="center" pt="99px" color="#ffffff" isTruncated>
          Powering businesses with seamless digital payments
        </Text>

        {/* ELLIPSE CONTAINER */}
        <Box
          textAlign="center"
          alignItems="center"
          pt="50px"
          position="relative"
          w="100%"
        >
          {/* Background SVG */}
          <Image src={esvg} w="82%" ml="8%" />

          {/* CARTOON IMAGE INSIDE */}
          <Image
            src={cartoon}
            w="65%"
            position="absolute"
            top="55%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        </Box>

        {/* STATIC DOTS FOR SLIDER */}
      </Box>
    </>
  );
};

export default Leftside;
