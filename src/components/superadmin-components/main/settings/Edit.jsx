import React from 'react'
import { Box, Text, Flex, HStack, Icon } from '@chakra-ui/react'


const Edit = ({text, subtext, icon, icontext, showicon = true}) => {
  return (
    <Flex direction={'row'} alignItems={'start'} justifyContent={'space-between'}>
      <Flex direction={'column'}>
        <Text fontSize={'15px'} fontWeight={'bold'} color={'#5F5C5C'}>{text}</Text>
        <Text fontSize={'14px'} fontWeight={'normal'} color={'#353B45'}>{subtext}</Text>
      </Flex>
      <HStack color={'#2E5C38'} fontSize={'15px'} fontWeight={'bold'}><Text>{icontext}</Text> {showicon && (<Icon as={icon}/>)}</HStack>
    </Flex>
  )
}

export default Edit