import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'
import esvg from '../svgs/esvg.svg'
import cartoon from '../svgs/cartoon.svg'
import dots from '../svgs/dots.svg'

const Leftside = () => {
  return (
    <Box w={{ lg: '50%', md: '100%' }} bg="#103C29" pb="45px" h="max-content">
      {/* HEADING TEXT */}
      <Text
        as="p"
        textAlign="center"
        pt="99px"
        color="#ffffff"
        noOfLines={1}
        maxW="80%"
        mx="auto"
      >
        Powering businesses with seamless digital payments
      </Text>

      {/* ELLIPSE CONTAINER */}
      <Box textAlign="center" pt="50px" position="relative" w="100%">
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
      <Box textAlign="center" mt="20px">
        <Image src={dots} w="50px" mx="auto" />
      </Box>
    </Box>
  )
}

export default Leftside
