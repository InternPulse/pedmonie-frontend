
import {Box,Flex } from "@chakra-ui/react"
import Balance from "./Balance"
 
const BalanceSide =()=> {
 
  return (
    <> 
   <Box>
   <Flex gap='20' mb={10}>
   <Balance/>
    <Balance/>
   </Flex>
 
   <Flex gap={20}>
   <Balance/>
   <Balance/>
   </Flex>
   </Box>

    </>
  )
}

export default BalanceSide
