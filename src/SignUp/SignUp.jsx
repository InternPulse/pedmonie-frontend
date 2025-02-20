import { Flex } from '@chakra-ui/react'
import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'

const Signup = () => {
  return (
    <Flex w="1440px" h="1024px">
      <Leftside />
      <Rightside />
    </Flex>
  )
}
export default Signup
