import {Box, Flex, Text, NativeSelect, Button, Icon, Switch} from '@chakra-ui/react'
import { useState } from 'react'
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";


const SystemLogsAndManagement = () => {
  const [currentPage, setCurrentPage] = useState(1)
  

  return (
    <Box bg={'white'} border={'CCCCCC'} borderRadius={"10px"} p={'20px'}>

       <Box><Text color={'#5F5C5C'} fontWeight={'bold'} fontSize={'20px'} textAlign={'center'} pb={'20px'}>System Logs & Audits</Text></Box>

    {currentPage === 1 && (
      <Flex direction={'column'} gapY={'20px'}>

          <Flex direction={'column'} w={'100%'} gapY={'15px'}>
          <Flex direction={'row'} justifyContent={'space-between'} w={'100%'} h={'auto'} alignItems={'center'}>
            <Text fontSize={'15px'} fontWeight={'medium'} color={'#353B45'}>System Storage</Text>

            <Text textDecoration={'underline'} fontSize={'15px'} fontWeight={'semibold'} color={'#667185'}>View Details</Text>
          </Flex>

          <Flex direction={'row'} justifyContent={'space-between'} position={'relative'} w={'100%'} h={'21px'} borderRadius={'6px'} bg={'#EBEEF5'}>
            <Box position={'absolute'} bg={'#2E5C38'} w={'10%'} h={'21.59px'} borderRadius={'6px'}></Box>
            <Text position={'absolute'} right={'0'} color={'#353B45'} fontSize={'12px'} px={'5px'} fontWeight={'medium'}>120GB of 4TB Used</Text>
          </Flex>
          </Flex>

          <Flex direction={'column'} w={'100%'} gapY={'15px'}>
          <Flex direction={'row'} justifyContent={'space-between'} w={'100%'} h={'auto'} alignItems={'center'}>
            <Text fontSize={'15px'} fontWeight={'medium'} color={'#353B45'}>Energy Usage</Text>

            <Text textDecoration={'underline'} fontSize={'15px'} fontWeight={'semibold'} color={'#667185'}>View Details</Text>
          </Flex>

          <Flex direction={'row'} justifyContent={'space-between'} position={'relative'} w={'100%'} h={'21px'} borderRadius={'6px'} bg={'#EBEEF5'}>
            <Box position={'absolute'} bg={'#2E5C38'} w={'30%'} h={'21.59px'} borderRadius={'6px'}></Box>
            <Text position={'absolute'} right={'0'} color={'#353B45'} fontSize={'12px'} px={'5px'} fontWeight={'medium'}>30% Used</Text>
          </Flex>
          </Flex>

           <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Check for Updates</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Weekly' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator/>
                  </NativeSelect.Root>
            </Box>

            <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Perform BackUp of Logs</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Weekly' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator/>
                  </NativeSelect.Root>
            </Box>

            <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Sheduled Time to Backup Logs</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='2:00 AM Everyday' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator>
                    <IoTimeOutline />
                 </NativeSelect.Indicator>
                  </NativeSelect.Root>
            </Box>

            <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Generate & Upload System Report</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Daily' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
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

          <Flex direction={'column'} w={'100%'} gapY={'15px'}>
          <Flex direction={'row'} justifyContent={'space-between'} w={'100%'} h={'auto'} alignItems={'center'}>
            <Text fontSize={'15px'} fontWeight={'medium'} color={'#353B45'}>Disk Space</Text>

            <Text textDecoration={'underline'} fontSize={'15px'} fontWeight={'semibold'} color={'#667185'}>View Details</Text>
          </Flex>

          <Flex direction={'row'} justifyContent={'space-between'} position={'relative'} w={'100%'} h={'21px'} borderRadius={'6px'} bg={'#EBEEF5'}>
            <Box position={'absolute'} bg={'#2E5C38'} w={'10%'} h={'21.59px'} borderRadius={'6px'}></Box>
            <Text position={'absolute'} right={'0'} color={'#353B45'} fontSize={'12px'} px={'5px'} fontWeight={'medium'}>12GB of 128GB Used</Text>
          </Flex>
          </Flex>

          <Flex direction={'column'} w={'100%'} gapY={'15px'}>
          <Flex direction={'row'} justifyContent={'space-between'} w={'100%'} h={'auto'} alignItems={'center'}>
            <Text fontSize={'15px'} fontWeight={'medium'} color={'#353B45'}>Network Usage</Text>

            <Text textDecoration={'underline'} fontSize={'15px'} fontWeight={'semibold'} color={'#667185'}>View Details</Text>
          </Flex>

          <Flex direction={'row'} justifyContent={'space-between'} position={'relative'} w={'100%'} h={'21px'} borderRadius={'6px'} bg={'#EBEEF5'}>
            <Box position={'absolute'} bg={'#2E5C38'} w={'35%'} h={'21.59px'} borderRadius={'6px'}></Box>
            <Text position={'absolute'} right={'0'} color={'#353B45'} fontSize={'12px'} px={'5px'} fontWeight={'medium'}>35% Used</Text>
          </Flex>
          </Flex>

          <Box>
               <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>View Transaction Logs and Audits</Text>
               <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
                  <Flex direction={'column'} gapY={'10px'}>
                    <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Allow merchant to view payment logs</Text>
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
               <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>Backup User Logs</Text>
               <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
                  <Flex direction={'column'} gapY={'10px'}>
                    <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Enable Backup of logs</Text>
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
                 <Text color={'#353B45'} fontWeight={'normal'} fontSize={'15px'}>Show System Logs</Text>
                 <Flex borderTop={'1px solid #BBD2EC'} justifyContent={'space-between'} py={'5px'}>
                    <Flex direction={'column'} gapY={'10px'}>
                      <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Allow Admins to view logs</Text>
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
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>System Report Generation Time</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='2:00 AM Everyday' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator>
                 <CiCalendarDate />
                 </NativeSelect.Indicator>
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
        
        <Flex direction={'column'} w={'100%'} gapY={'15px'}>
          <Flex direction={'row'} justifyContent={'space-between'} w={'100%'} h={'auto'} alignItems={'center'}>
            <Text fontSize={'15px'} fontWeight={'medium'} color={'#353B45'}>Processor Usage</Text>

            <Text textDecoration={'underline'} fontSize={'15px'} fontWeight={'semibold'} color={'#667185'}>View Details</Text>
          </Flex>

          <Flex direction={'row'} justifyContent={'space-between'} position={'relative'} w={'100%'} h={'21px'} borderRadius={'6px'} bg={'#EBEEF5'}>
            <Box position={'absolute'} bg={'#2E5C38'} w={'20%'} h={'21.59px'} borderRadius={'6px'}></Box>
            <Text position={'absolute'} right={'0'} color={'#353B45'} fontSize={'12px'} px={'5px'} fontWeight={'medium'}>20% Used</Text>
          </Flex>
          </Flex>

          <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>System Update Frequency</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Weekly' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator/>
                  </NativeSelect.Root>
            </Box>

            <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Sheduled System Update Time</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Every Saturday, 1:00 AM CET' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator>
                 <CiCalendarDate />
                 </NativeSelect.Indicator>
                  </NativeSelect.Root>
            </Box>

            <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Sheduled Maintainance Frequency</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Daily' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator/>
                  </NativeSelect.Root>
            </Box>

            <Box>
                   <Text color={'#667185'} fontWeight={'normal'} fontSize={'14px'}>Sheduled Maintainance Time</Text>
               
                   <NativeSelect.Root>
                  <NativeSelect.Field placeholder='Every Saturday, 12:00 AM CET' color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
                   <option></option>
                 </NativeSelect.Field>
                 <NativeSelect.Indicator>
                 <CiCalendarDate />
                 </NativeSelect.Indicator>
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

export default SystemLogsAndManagement