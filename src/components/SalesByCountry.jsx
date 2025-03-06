// import React from 'react'
import PropTypes from "prop-types";
import { Image, Flex, VStack, Box, HStack, Text } from "@chakra-ui/react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";


function SalesByCountry({
  logo,
  totalSales,
  country,
  salesPercentage,
  isIncrease,
}) {
  return (
    <Flex px="2" mb="4" alignItems={"center"} justifyContent={"space-between"}>
      <Image src={logo} rounded={"full"} w="4"  h="4" />

      <VStack
        color="gray.800"
        fontSize="2xs"
        gap="-10"
        width={'16px'}
        alignItems={"flex-start"}
      >
        <Text fontWeight='bold'>{totalSales}</Text>
        <p>{country}</p>
      </VStack>

      <Box width="1/2" bg="gray.200" height="2" rounded="full">
        <Box
          width={`${salesPercentage}%`}
          rounded="full"
          bg="blue.600"
          height="2"
        ></Box>
      </Box>

      <HStack
        color={isIncrease ? "green" : "red"}
        fontSize="xs"
        fontWeight={"bold"}
      >
        {isIncrease ? <FaAngleUp /> : <FaAngleDown />}
        <p>{salesPercentage}%</p>
      </HStack>
    </Flex>
  );
}

SalesByCountry.propTypes = {
  logo: PropTypes.string.isRequired,
  totalSales: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  country: PropTypes.string.isRequired,
  salesPercentage: PropTypes.number.isRequired,
  isIncrease: PropTypes.bool.isRequired, 
};

export default SalesByCountry