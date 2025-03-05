import { Flex, Text, Box } from "@chakra-ui/react"

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
    <div style={{backgroundColor:'#2E5C38', color:'#FFFFFF'}}>
        <Text fontWeight='600' textAlign='center' fontSize='3rem'>Seamless Payments in Just a Few Steps</Text> 
        
        <Flex border='solid orange' className="or-bx" justifyContent='center' gap='10px' margin='120px' width='auto'>
         
      {data.map(item =>{
        return  <Flex direction='column' border='solid blue' flex='0 1 400px' alignItems='center' gap='10px' padding='7px'>
            <Flex border='solid pink' width='100%' position='relative'>
            {/* <div className="hline"></div> */}
              <Box fontSize='3rem' border='solid  #FFFFFF99 2px' borderRadius='50%' width='100px' textAlign='center' style={{color:'rgba(255, 255, 255, 0.6'}}>{item.id}</Box>
              <div className="hline"></div>
              </Flex>
            
          
            <Text fontSize='1.87rem' textAlign='center'>{item.heading}</Text>
           
            <Text fontSize='1.5rem'  textAlign='center'>{item.text}</Text>
        </Flex> 
       
      })}
      </Flex>
       
    
     
    </div>
  )
}

export default Steps