import { Text, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import lg from '../svgs/lg.svg'

const Rightside = () => {
  return (
    <Flex w="687px" h="1024px" bg="white" flexDirection="column" p="40px">
      {/* LOGO */}
      <Image src={lg} w="150px" alignSelf="center" justifyContent="center" />

      {/* HEADING */}
      <Text
        fontSize="24px"
        fontWeight="bold"
        textAlign="left"
        mt="20px"
        mr="-10"
      >
        Create account
      </Text>
      <Text fontSize="14px" color="gray.500" mb="20px">
        For business, organizations or companies
      </Text>
    </Flex>
  )
}

export default Rightside
