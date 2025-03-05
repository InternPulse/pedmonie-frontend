import { Box, Flex, Image, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Img1 from '../../assets/images/Img1.png'
import Img2 from '../../assets/images/Img2.png'
import Img3 from '../../assets/images/Img3.png'



const ApiDocs = () => {
  return (
    <Box w='100%' h='auto'>

        {/*Desktop View */}
       <Box
         display={{base: 'none', md: 'none' , lg: 'block'}}
       >
       <Flex 
        direction={'row'}
        alignItems={'start'}
        gap={'60px'}
       
        >
            <Box position={'relative'} w='748px' h='590px'>
                <Image 
                src={Img1} 
                position={'absolute'}
                top='0'
                left='0'
                right='0'
                bottom='0'
                
                />
            </Box>

            <VStack w='625px' h='520px' alignItems={'start'} justifyContent={'start'} gapY={'50px'}>
                
                <VStack
                gapY={'20px'}
                >
                    <Text fontWeight={'semibold'} fontSize={'48px'} letterSpacing={'3%'} textAlign={'left'} lineHeight={'72px'} fontFamily={''}>Well documented and ready-to-use APIs for developers</Text>

                    <Text fontWeight={'normal'} fontSize={'24px'} lineHeight={'28px'} letterSpacing={'-2%'} opacity={'60%'} textAlign={'left'} w='589px' h='84px'>We have done the core payment integrations and abstractions so your team can easily integrate with our APIs and access multiple payment functionlities</Text>
                </VStack>
                

                <Button
                   borderRadius={'80px'}
                    bg={'#2E5C38'}
                    alignContent={'center'}
                    w='360px'
                    h='80px'
                >
                    <Text
                    color={'#FFFFFF'}
                    textAlign='left'
                    fontSize={'20px'}
                    letterSpacing={'2%'}
                    lineHeight={'30px'}
                    >Read the API documentation</Text>
                </Button>
            </VStack>
        </Flex>
       </Box>

         {/*Tablet View */}
         <Box display={{base: 'none', md: 'block' , lg: 'none'}}>

            <Flex direction={'column'} gapY={'35px'} alignItems={'center'}>

                <Box w='100%' h='auto'>    
                  <Image
                        src={Img2}
                        objectFit={'cover'}
                        w='100%'
                        h='auto'
                    /> 
                </Box>
                

                

                    <VStack  gapY={'20px'}>
                        <Text fontWeight={'semibold'} fontSize={'32px'} letterSpacing={'3%'} textAlign={'center'} lineHeight={'50px'} fontFamily={''}>Well documented and ready-to-use APIs for developers</Text>

                        <Text fontWeight={'semibold'} fontSize={'24px'} letterSpacing={'-2%'} textAlign={'center'} lineHeight={'28px'} opacity={'60%'} fontFamily={''}>We have done the core payment integrations and abstractions so your team can easily integrate with our APIs and access multiple payment functionlities</Text>
                    </VStack>

                    <Button 
                    borderRadius={'80px'}
                    bg={'#2E5C38'}
                    alignContent={'center'}
                    w='360px'
                    h='80px'>
                        <Text
                        color={'#FFFFFF'}
                        textAlign='left'
                        fontSize={'20px'}
                        letterSpacing={'2%'}
                        lineHeight={'30px'}
                        >Read the API documentation</Text>
                    </Button>

                
                
            </Flex>

         </Box>

        {/* Mobile View */}

        <Box display={{base: 'block', md: 'none' , lg: 'none'}}>

            <Flex direction={'column'} alignItems={'center'} gapY={'35px'}>
                <Box>
                    <Text fontWeight={'semibold'} fontSize={'24px'} letterSpacing={'2%'} textAlign={'center'} lineHeight={'38px'} fontFamily={''}>
                    Well documented and ready-to-use APIs for developers
                    </Text>
                </Box>

                <Box w='100%' h='auto'> 
                  <Image
                        src={Img3}
                        objectFit={'cover'}
                        objectPosition={'center'}
                        w='100%'
                        h='auto'
                    />  
                </Box>

                <Box>
                    <Text fontWeight={'semibold'} fontSize={'20px'} letterSpacing={'-2%'} textAlign={'center'} lineHeight={'24px'} opacity={'60%'} fontFamily={''}>
                    We have done the core payment integrations and abstractions so your team can easily integrate with our APIs and access multiple payment functionlities
                    </Text>
                </Box>

                <Button 
                    borderRadius={'60px'}
                    bg={'#2E5C38'}
                    alignContent={'center'}
                    w='351px'
                    h='50px'
                    >
                   <Text
                        color={'#FFFFFF'}
                        textAlign='left'
                        fontSize={'16px'}
                        letterSpacing={'2%'}
                        lineHeight={'30px'}
                        >Read the API documentation</Text> 
                </Button>

            </Flex>

           
         </Box>

    </Box>
  )
}

export default ApiDocs
