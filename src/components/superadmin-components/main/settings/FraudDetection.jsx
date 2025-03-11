import {Box, Text, Flex, Switch, Input, NativeSelect, Button} from '@chakra-ui/react'
import {InputGroup} from '../../../ui/input-group'
import { LuPencil } from "react-icons/lu";
import { useState } from 'react';


const FraudDetectionSet = () => {
   const [currentPage, setCurrentPage] = useState(1)

  return (
   <Box bg={'white'} border={'CCCCCC'} borderRadius={"10px"} p={'20px'}>
   <Box><Text color={'#5F5C5C'} fontWeight={'bold'} fontSize={'20px'} textAlign={'center'} pb={'20px'}>Fraud Detection & Security</Text></Box>

    {currentPage === 1 && (
        <Flex direction={'column'} gapY={'10px'}>

        <Box><Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'} pb={'5px'}>Two Factor Authentication (2FA)</Text></Box>
     
     <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
        <Flex direction={'column'} gapY={'10px'}>
          <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Require Two Factor Authentication</Text>
          <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>Encryption of Stored Data</Text>
        </Flex>
     
        <Box>
        <Switch.Root defaultChecked={true}>
          <Switch.HiddenInput/>
          <Switch.Control _checked={{backgroundColor: '#2E5C38'}}/>
        </Switch.Root>
        </Box>
     </Flex>
     
     <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
        <Flex direction={'column'} gapY={'10px'}>
          <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Encrypted Stored Data</Text>
          <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>Firewall Protection</Text>
        </Flex>
     
        <Box>
        <Switch.Root defaultChecked={true}>
          <Switch.HiddenInput/>
          <Switch.Control _checked={{backgroundColor: '#2E5C38'}}/>
        </Switch.Root>
        </Box>
     </Flex>
     
     <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
        <Flex direction={'column'} gapY={'10px'}>
          <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Enable Firewall</Text>
        </Flex>
     
        <Box>
        <Switch.Root defaultChecked={true}>
          <Switch.HiddenInput/>
          <Switch.Control _checked={{backgroundColor: '#2E5C38'}}/>
        </Switch.Root>
        </Box>
     </Flex>
     
     <Box py={'10px'}>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Firewall Port Range</Text>
     
         <InputGroup endElement={<LuPencil/>} w={'100%'} mt={'10px'}>  
           <Input placeholder="80 - 102" borderColor={'#BBD2EC'} focusBorder px={"12px"} py={'8px'} borderRadius={'6px'} _focus={{borderColor: '#2E5C38'}}/>
     </InputGroup>
     </Box>
     
     <Box py={'10px'}>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Perform System BackUp</Text>
     
        <NativeSelect.Root>
        <NativeSelect.Field placeholder='Weekly' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>
     
     <Box py={'10px'}>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Check for System Anomaly</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='Hourly' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'}>
      {
        currentPage === 1 ? ( <><Box onClick={()=>setCurrentPage(1)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
          <Box onClick={()=>setCurrentPage(2)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
          <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
      }
     </Flex>

     <Flex direction={'column'} alignItems={'end'}><Button onClick={()=> setCurrentPage(2)} bg={'#2E5C38'} borderRadius={'8px'} w={'270px'} h={'25px'}><Text>Save Changes</Text></Button></Flex>
     
       </Flex>
    )}

    {currentPage === 2 && (
      <Flex direction={'column'} gapY={'20px'}>

       <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Login Attempts before Account Lockout</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='5' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Data Encryption Method</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='AES- Advanced Encryption Standard' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
     <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>Incoming Traffic</Text>
     <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
        <Flex direction={'column'} gapY={'10px'}>
          <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Allow Incoming Traffic</Text>
        </Flex>
     
        <Box>
        <Switch.Root defaultChecked={true}>
          <Switch.HiddenInput/>
          <Switch.Control _checked={{backgroundColor: '#2E5C38'}}/>
        </Switch.Root>
        </Box>
     </Flex>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Firewall Protocols</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='3 Selected (TCP, UDP, ICMP)' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Sheduled Time for System Backup</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='2.00 AM Everyday' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Generate Anomaly Report</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='Weekly' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'}>
      {
        currentPage === 2 ? ( <>
          <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
          <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
          <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
      }
     </Flex>

     <Flex direction={'column'} alignItems={'end'}><Button onClick={()=> setCurrentPage(3)} bg={'#2E5C38'} borderRadius={'8px'} w={'270px'} h={'25px'}><Text>Save Changes</Text></Button></Flex>
    </Flex>
    )}

    {currentPage === 3 && (
      <Flex direction={'column'} gapY={'20px'}>
        <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Password Policy</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option>Uppercase</option>
         <option>Lowercase</option>
         <option>Sentence case</option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Stored Data for how long</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='3 Months' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
     <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>Outgoing Traffic</Text>
     <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
        <Flex direction={'column'} gapY={'10px'}>
          <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Allow Outgoing Traffic</Text>
        </Flex>
     
        <Box>
        <Switch.Root defaultChecked={true}>
          <Switch.HiddenInput/>
          <Switch.Control _checked={{backgroundColor: '#2E5C38'}}/>
        </Switch.Root>
        </Box>
     </Flex>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Blocked IP Addresses</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='104 Blocked' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Number of Backups to keep</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='Last 3' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Box>
         <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Action for Suspicious User Activity</Text>
     
         <NativeSelect.Root>
        <NativeSelect.Field placeholder='Temporarily Block and Alert Admin' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
         <option></option>
       </NativeSelect.Field>
       <NativeSelect.Indicator/>
        </NativeSelect.Root>
     </Box>

     <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'}>
      {
        currentPage === 3 ? ( <>
          <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box> 
          <Box onClick={()=>setCurrentPage(2)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
          <Box onClick={()=>setCurrentPage(3)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
          </>) : ''
      }
     </Flex>

     <Flex direction={'column'} alignItems={'end'}><Button bg={'#2E5C38'} borderRadius={'8px'} w={'270px'} h={'25px'}><Text>Save Changes</Text></Button></Flex>
      </Flex>
    )}
  </Box>
  )
}

export default FraudDetectionSet