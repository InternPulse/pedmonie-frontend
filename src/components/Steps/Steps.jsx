import { Flex, Text, Box, Button } from "@chakra-ui/react"
import img1 from '../../assets/images/arrow-down.png'

const data=[
    {'id': 1,
        "heading": 'Sign Up ',
        'text': 'Create an account and customize your payment preferences.'
    },
    {'id':2,
      "heading": 'Generate Payment Links',
      'text': 'Easily create and share secure payment links with customers.'
  },
  {'id': 3,
    "heading": 'Accept Payments',
    'text': 'Customers can pay via card, bank transfer, USSD, or mobile wallets..'
},
{'id':4,
  "heading":"Track & Manage Transactions",
  "text":"Get real-time updates and insights on your payments"

}
  ]

const Steps = () => {
    
  return (
    <Flex style={{backgroundColor:'#2E5C38', color:'#FFFFFF'}} direction='column' alignItems='center' padding={10}>
        <Text fontWeight='600' textAlign='center' fontSize='3rem'>Seamless Payments in Just a Few Steps</Text> 
        
        <Flex  className="or-bx" justifyContent='center' gap='10px' margin='70px' width='auto'>
         
        {data.map(item =>{
        return  <Flex direction='column' flex='0 1 400px'  position='relative' alignItems='center' gap='10px' padding='7px'>
            
              <Box fontSize='3rem' border='solid  #FFFFFF99 2px' borderRadius='50%' width='80px' textAlign='center' className="numBox" >{item.id}</Box>
              <div className="hline"></div>
              
            
          
            <Text fontSize='1.87rem' textAlign='center'>{item.heading}</Text>
           
            <Text fontSize='1.3rem'  textAlign='center' fontWeight='200'>{item.text}</Text>
        </Flex> 
       
      })}
            
      </Flex>
       <Button className="btn" fontSize='15px' >Create a Free Account <img src={img1} alt="" /></Button>
    
     
    </Flex>
  )
}

export default Steps