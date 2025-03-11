import React from 'react'
import { Box, Text, NativeSelect } from '@chakra-ui/react'

const Selectprop = ({icon, text, holder}) => {
  return (
     <Box>
                       <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>{text}</Text>
                   
                       <NativeSelect.Root>
                      <NativeSelect.Field placeholder={holder} color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                       <option></option>
                     </NativeSelect.Field>
                     <NativeSelect.Indicator>
                     {icon}
                     </NativeSelect.Indicator>
                      </NativeSelect.Root>
                </Box>
  )
}

export default Selectprop
