import { Switch, Box, Text, Flex } from "@chakra-ui/react";
import React from 'react'

const SwitchProp = ({text, subtext}) => {
  return (
     <Box>
                   <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>{text}</Text>
                   <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
                      <Flex direction={'column'} gapY={'10px'}>
                        <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>{subtext}</Text>
                      </Flex>
                   
                      <Box>
                      <Switch.Root defaultChecked={true}>
                        <Switch.HiddenInput/>
                        <Switch.Control _checked={{backgroundColor: '#2E5C38'}}/>
                      </Switch.Root>
                      </Box>
                   </Flex>
              </Box>
  )
}

export default SwitchProp
