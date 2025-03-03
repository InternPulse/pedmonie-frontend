import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import CheckIcon from "../assets/CheckIcon.svg"

function Payment({ value, selectedValue, onChange, imageSrc, text1, text2 }) {
  const isSelected = selectedValue === value;

  return (
    <Box
      border="2px solid"
      pt="57px"
      pb="35px"
      px="28px"
      borderColor="#DDDDDD"
      w="270px"
      h="319px"
      m="auto"
      bg="#FFFFFF"
      position="relative"
      cursor="pointer"
      onClick={() => onChange(value)}
      _hover={{
        borderColor: "#7AC77D" ,
        transform: "scale(1.05)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Flex
        w="24px"
        h="24px"
        rounded="50%"
        border="2px solid"
        borderColor={isSelected ? "#9BE69D" : "#D9D9D9"}
        position="absolute"
        top="20px"
        right="20px"
        justifyContent="center"
        alignItems="center"
        bg={isSelected ? "#9BE69D" : "transparent"}
      >
       <Image src={CheckIcon} alt="Check Icon" w="16px" h="12px" opacity={isSelected ? 1 : 0} transition="opacity 0.3s ease-in-out" />
      </Flex>
      <Image src={imageSrc} alt="Payment Option" w="80px" m="auto" />
      <Text textAlign="center" color="#333333" fontWeight="bold" fontSize="20px" mt="24px">
        {text1}
      </Text>
      <Text textAlign="center" color="#333333" fontSize="14px" mt="12px" lineHeight="22px">
        {text2}
      </Text>
    </Box>
  );
}

export default Payment;

