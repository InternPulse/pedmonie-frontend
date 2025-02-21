import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import esvg from "../svgs/esvg.svg";
import cartoon from "../svgs/cartoon.svg";
import dots from "../svgs/dots.svg";
import lg from "../svgs/lg.svg";

const Leftside = () => {
  return (
    <>
      <Box w="753px" h="1024px">
        <Box w="753px" h="1024px" bg="#103C29">
          {/* HEADING TEXT */}
          <Text
            as="p"
            textAlign="center"
            pt="109px"
            color="#ffffff"
            isTruncated
          >
            Powering businesses with seamless digital payments
          </Text>

          {/* ELLIPSE CONTAINER */}
          <Box
            textAlign="center"
            alignItems="center"
            pt="50px"
            position="relative"
            w="518px"
            h="634px"
            mx="auto"
          >
            {/* Background SVG */}
            <Image src={esvg} w="518px" h="634px" />

            {/* CARTOON IMAGE INSIDE */}
            <Image
              src={cartoon}
              w="397px"
              h="314px"
              position="absolute"
              top="60%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          </Box>

          {/* STATIC DOTS FOR SLIDER */}
        </Box>
      </Box>
    </>
  );
};

export default Leftside;
