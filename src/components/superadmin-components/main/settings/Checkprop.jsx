import { Box, Checkbox, Flex, HStack, Icon, Text } from "@chakra-ui/react";
 import React from 'react'
 
 const Checkprop = ({label, subLabel, text1, text2, icon1, icon2, ShowIcon = true}) => {
   return (
    <Flex direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
       <Flex direction={'column'} gapY={'10px'}>
       <Checkbox.Root defaultChecked={true}>
      <Checkbox.HiddenInput />
      <Checkbox.Control style={{backgroundColor:"white", border:'2px solid #2E5C38', borderRadius:"6px"}} color={"#2E5C38"}/>
      <Checkbox.Label style={{color: '#667185', fontSize:"16px"}}>{label}</Checkbox.Label>
    </Checkbox.Root>
        <Text fontStyle={'italic'} fontSize={'14px'} color={'#7E8899'}>{subLabel}</Text>
       </Flex>

       <Flex direction={'column'} gapY={'10px'}>
       <HStack alignItems={'center'} textDecoration={'underline'} fontSize={'14px'} color={'#2E5C38'} fontWeight={'medium'}>{ShowIcon && (<>
            <Text>{text1}</Text> <Icon as={icon1}/>
        </>)}</HStack>

        <HStack alignItems={'center'} textDecoration={'underline'} fontSize={'14px'} color={'#2E5C38'} fontWeight={'medium'}><Text>{text2}</Text > <Icon as={icon2}/></HStack>

     
       </Flex>
    </Flex>
   )
 }
 
 export default Checkprop
 