import { Box, Flex, Span, Text, Button, HStack, NativeSelect } from "@chakra-ui/react"
import { useState } from "react"
import SwitchProp from "./SwitchProp"
import Selectprop from "./Selectprop"
import { LuPencil } from "react-icons/lu";
import Edit from "./Edit";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import Checkprop from "./Checkprop";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineEyeInvisible } from "react-icons/ai";



const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <Box bg={'white'} border={'CCCCCC'} borderRadius={"10px"} p={'20px'}>


      <Box><Text color={'#5F5C5C'} fontWeight={'bold'} fontSize={'20px'} textAlign={'center'} pb={'20px'}>User Management</Text></Box>

    {currentPage === 1 && (
      <Flex direction={'column'}>
          
         <Flex direction={'column'} gapY={'20px'}>
         <SwitchProp 
            text={'Merchants uploading Business Logo'}
            subtext={'Allow Business Logo'}
          />

          <Selectprop
          text={'Limit of clientele for Merchants'}
          holder={'50 Clients'}
          />
          <Selectprop 
            text={'Size Limit for Business Logo (in kb)'}
            holder={'Default- 4096 Kb (4MB)'}
          />
         </Flex>

           <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'} borderBottom={'1px solid #C8CCD3'}>
                        {
                          currentPage === 1 ? ( <>
                          <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            
                            <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
                      }
           </Flex>

           <Flex direction={'column'} gapY={'20px'} pt={'20px'}>
            
           <Edit
            text={'Account Creation'}
            subtext={'Select/Edit Required fields for Merchants during Sign Up'}
            icon={IoIosAddCircleOutline}
            icontext={'Add New Field'}
           />

           <Flex direction={'column'} gapY={'10px'}>
           <Selectprop
            text={'Business Name'}
            holder={'Input Name'}
            icon={<LuPencil/>}
           />

            <Selectprop
            text={'Email Address'}
            holder={'Input Email'}
            icon={<LuPencil/>}
           />
           </Flex>

           </Flex>

           <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'} borderBottom={'1px solid #C8CCD3'}>
                        {
                          currentPage === 1 ? ( <>
                          <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            
                            <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
                      }
           </Flex>

           <Flex direction={'column'} gapY={'20px'} pt={'20px'}>
           <Edit
            text={'Account Termination'}
            subtext={'Terminante Merchant accounts'}
            icon={IoIosAddCircleOutline}
            icontext={''}
            showicon={false}
           />  

           <Selectprop
            text={<Text color={'#353B45'} fontSize={"15px"} fontWeight={'normal'}>Select Merchant account <Text as={Span} fontStyle={'italic'}>(multiple)</Text></Text>}
            holder={'Select account'}
           />

           <Selectprop
            text={'Merchant ID'}
            holder={'Auto fill'}
           />
           </Flex>

           
           <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'}>
                        {
                          currentPage === 1 ? ( <>
                          <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            
                            <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
                      }
           </Flex>

           <Flex direction={'column'} alignItems={'end'}><Button onClick={()=> setCurrentPage(2)} bg={'#2E5C38'} borderRadius={'8px'} w={'270px'} h={'25px'}><Text>Save Changes</Text></Button></Flex>  
      </Flex>
    )}

    {currentPage === 2 && (
      <Flex direction={'column'} >

        <Flex direction={'column'} gapY={'20px'}>
        <SwitchProp 
            text={'Merchants Sign Up'}
            subtext={'Allow new merchants to sign up'}
          />

          <SwitchProp 
            text={'Notification about software updates'}
            subtext={'Notify Merchants about software updates'}
          />

          <SwitchProp 
            text={'Notifications'}
            subtext={'Send notifications to users'}
          />
        </Flex>

        <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'} borderBottom={'1px solid #C8CCD3'}>
                        {
                          currentPage === 2 ? ( <>
                           <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                          <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
                      }
        </Flex>

        <Flex direction={'column'} gapY={'20px'} pt={'20px'}>
            
           <Edit
            text={'Account Creation'}
            subtext={'Select/Edit Required fields for Merchants during Sign Up'}
            icon={IoIosAddCircleOutline}
            icontext={'Add New Field'}
           />

           <Flex direction={'column'} gapY={'10px'}>
           <Selectprop
            text={'Business Type'}
            holder={'Text'}
            icon={<BsChevronDown/>}
           />

            <Flex direction={'column'} gapY={'10px'}>
              <Text fontSize={'14px'} color={'#353B45'} >Phone Number</Text>
            <HStack alignItems={'end'}>
            <Selectprop
            text={''}
            holder={'+234'}
            icon={<BsChevronDown fontSize={'14px'}/>}
           />

           <NativeSelect.Root>
             <NativeSelect.Field placeholder={'000-000-000'} color={"#98A2B3"} _focus={{borderColor: '#2E5C38'}} borderColor={'#BBD2EC'} borderRadius={"6px"}>
              <option></option>
              </NativeSelect.Field>
              </NativeSelect.Root>
            </HStack>
            </Flex>
           </Flex>
           </Flex>

           <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} borderBottom={'1px solid #C8CCD3'} py={'40px'}>
                        {
                          currentPage === 2 ? ( <>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                          <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                         <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box></>) : ''
                      }
           </Flex>

           <Flex direction={'column'} gapY={'20px'} pt={'20px'}>
           <Edit
            text={'Account Termination'}
            subtext={'Terminante Merchant accounts'}
            icon={IoIosAddCircleOutline}
            icontext={''}
            showicon={false}
           />  

           <Selectprop
            text={'Business Type'}
            holder={'Auto fill'}
           />

           <Selectprop
            text={'Email address'}
            holder={'Auto fill'}
           />
           </Flex>

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
      <Flex direction={'column'}>
        <Flex direction={'column'} gapY={'20px'}>
          <Selectprop
            text={'Response formant'}
            holder={'Text only'}
          />

          <Selectprop
            text={'Default Theme for Users'}
            holder={'Light Theme'}
          />

          <SwitchProp
          text={'Business Profile Edit'}
          subtext={'Allow users to edit their profile'}
          />
        </Flex>


        <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'} borderBottom={'1px solid #C8CCD3'}>
                        {
                          currentPage === 3 ? ( <>
                          <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            </>) : ''
                      }
        </Flex>

        <Flex direction={'column'} gapY={'20px'} pt={'20px'}>
            
           <Edit
            text={'Account Creation'}
            subtext={'Select/Edit Required fields for Merchants during Sign Up'}
            icon={IoIosAddCircleOutline}
            icontext={'Add New Field'}
           />

           <Selectprop
            text={'Address'}
            holder={'Default'}
           />

        <Checkprop
        label={'Required Field'}
        subLabel={'Click to check/uncheck'}
        text1={'Hide Field'}
        text2={'Delete Field'}
        icon2={RiDeleteBin6Line}
        icon1={AiOutlineEyeInvisible}
        />
          
        </Flex>

        <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'} borderBottom={'1px solid #C8CCD3'}>
                        {
                          currentPage === 3 ? ( <>
                          <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            </>) : ''
                      }
        </Flex>

        <Flex direction={'column'} gapY={'20px'} pt={'20px'}>

          <Edit
            text={'Account Termination'}
            subtext={'Terminate Merchant accounts'}
            icon={IoIosAddCircleOutline}
            icontext={''}
            showicon={false}
           />

           <Selectprop
            text={'Termination Date'}
            holder={'12-01-2025'}
           />

           <Checkprop
            label={'Terminate Account'}
            subLabel={'Click to check/uncheck'}
            text1={'Hide Field'}
            text2={'Delete Field'}
            icon2={RiDeleteBin6Line}
            icon1={AiOutlineEyeInvisible}
            ShowIcon={false}
           />

          <Flex direction={'row'} gapX={'5px'} alignItems={'center'} justifyContent={'center'} py={'40px'}>
                        {
                          currentPage === 3 ? ( <>
                          <Box onClick={()=>setCurrentPage(3)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(1)} bg={'#5F5C5C'} py={'3px'} px={'5px'} borderRadius={'5px'}></Box>
                            <Box onClick={()=>setCurrentPage(2)} bg={'#2E5C38'} py={'3px'} px={'10px'} borderRadius={'5px'}></Box>
                            </>) : ''
                      }
        </Flex>

        <Flex direction={'column'} alignItems={'end'}><Button bg={'#2E5C38'} borderRadius={'8px'} w={'270px'} h={'25px'}><Text>Save Changes</Text></Button></Flex>
        </Flex>

        
        
      </Flex>

      

      


    )}
      
    </Box>
  )
}

export default UserManagement