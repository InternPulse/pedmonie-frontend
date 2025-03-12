// import React from 'react'
import { Box, Icon, VStack, Text, Image, Flex } from '@chakra-ui/react'
import { FaQuoteLeft } from "react-icons/fa";
import Ellipse from '../../assets/images/Ellipse 2046.svg'

function Cards() {
  return (
    <Box width='517px' height='400px'  boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)" backgroundColor='white' borderRadius='12px' pt='10' pl='7'>
        <VStack spacing={3} align="start">
        <Icon as={FaQuoteLeft} color="green.400" boxSize={6} />
        <Text fontSize="24px" color="black" pt='2' fontWeight='medium'>Pedmonie made it easier to collect</Text>
        <Text fontSize="24px" color="black" fontWeight='medium'>payments from my customers worldwide!</Text>
        <VStack align="center" spacing={1}>
           <Flex pt='16'>
           <Image src={Ellipse} alt='image' borderRadius="full" boxSize="40px" objectFit="cover" width='100' height='100'/>
           <Box ml='5'>
           <Text fontSize="24px" fontWeight="medium" color='black'>Marvin McKinney</Text>
           <Text fontSize="20px" color="gray.500">Ceo and Co-founder of XYZ Company</Text>
           </Box>
            </Flex> 
        </VStack>
      </VStack>
      
    </Box>
  )
}

export default Cards
