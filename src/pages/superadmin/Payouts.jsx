import { Box, Heading, Text, Input, Field, Flex, Button} from "@chakra-ui/react"
import { IoMdSearch } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { InputGroup } from "../../components/ui/input-group"
import PayoutsDetails from "../../components/superadmin-components/main/payouts/PayoutsDetails";
import PayoutHistory from "../../components/superadmin-components/main/payouts/PayoutHistory";
import { useState } from "react";



const Payouts = () => {

  const [btnClick, setBtnClick]= useState(true)
  const [hBtn, setHBtn]= useState(false)
 function payBtn() {
  return (setBtnClick(true), setHBtn(false));
 }
 function htBtn() {
  return (setBtnClick(false), setHBtn(true));
 }

  return (
    <div>
      <Flex padding={{base: 5, lg:10}} margin={6}  direction='column' backgroundColor='#F9FAFB'>
        <Flex justifyContent='space-between' width='100%'>
        <Box>
            <Heading fontSize='24px'>Payout</Heading>
            <Text>Issue payouts to subscribed merchants</Text>
        </Box>
        <InputGroup display={ {base:'none', md:'block', lg:'inline-flex'}}
        
        startElement={<IoMdSearch />}
        endElement={<LuSettings2/>}
      >
        <Input placeholder="Search payouts" />
      </InputGroup>
     
      
      </Flex>
          <Flex width='100%' >
            <Button onClick={payBtn} backgroundColor='#F9FAFB' color={btnClick? '#5EB070' : '#979EAC'} size={{base:'xs', md:'sm', lg:'md'}}>Payouts Details</Button>
            <Button onClick={htBtn} backgroundColor='#F9FAFB' color={hBtn?  '#5EB070' : '#979EAC'}size={{base:'xs', md:'sm', lg:'md'}}>Payouts History</Button>
          </Flex>
          {/* <div style={{width:'10%', height:'5px', backgroundColor: btnClick? '#5EB070' : 'null', marginLeft:'20%'}}></div>
          <div style={{width:'10%', height:'5px', backgroundColor: btnClick? '#5EB070' : 'null', marginLeft:'34%'}}></div> */}
          <div style={{width:'100%', height:'3px', backgroundColor: '#979EAC'}}></div>
          <Box  padding={{base:'3', md:'15', lg:'20'}} backgroundColor='#FFFFFF' borderRadius='16px'>
            {btnClick && <PayoutsDetails/> }
            {hBtn && <PayoutHistory />}
           
            
            <Flex width='auto' justifyContent='center'>
            <Button style={{ backgroundColor:'#2E5C38'}}  width={{base:'10rem', md:'12rem', lg:'15rem'}} >Process Payout</Button>
            </Flex>
          </Box>
   </Flex>
     
      </div>
  )
}

export default Payouts;