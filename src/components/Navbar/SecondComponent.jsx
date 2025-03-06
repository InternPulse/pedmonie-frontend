import {
  Box,
  Image,
  Flex,
  HStack,
  Text,
  Container,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react'

import flutterwave from '../../assets/icons/flutterwave.svg'
import opay from '../../assets/icons/opay.svg'
import paystack from '../../assets/icons/paystack.svg'
import trivago from '../../assets/icons/trivago.svg'

import nbg from '../../assets/images/nbg.svg'

const SecondComponent = () => {
  // RESPONSIVE FONTS FOR THE STATS
  const statsFontSize = useBreakpointValue({
    base: '4xl',
    sm: '3xl',
    md: '5xl',
    lg: '6xl',
  })

  return (
    <Box width="100%">
      {/* PATNERS SECTION */}
      <Container maxW="container.xl" py={{ base: 6, md: 10 }}>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
          width="full"
          gap={{ base: 6, sm: 4 }}
        >
          <Text
            fontSize={{ base: 'md', md: 'lg', sm: 'sm' }}
            fontWeight="medium"
            color="gray.600"
            whiteSpace="nowrap"
          >
            We proudly partner with over 1,000+ businesses
          </Text>

          {/* LOGOS */}
          <HStack
            spacing={{ base: 4, md: 6, lg: 8 }}
            justify={{ base: 'center', sm: 'flex-end' }}
            flexWrap="wrap"
          >
            <Image
              src={flutterwave}
              alt="Flutterwave"
              h={{ base: '20px', md: '30px' }}
            />
            <Image src={opay} alt="Opay" h={{ base: '20px', md: '30px' }} />
            <Image
              src={paystack}
              alt="Paystack"
              h={{ base: '20px', md: '30px' }}
            />
            <Image
              src={trivago}
              alt="Trivago"
              h={{ base: '20px', md: '30px' }}
            />
          </HStack>
        </Flex>
      </Container>

      {/* STAT SECTION */}
      <Box
        position="relative"
        mt={6}
        mb={10}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100%"
        minH={{ base: '200px', md: '250px', lg: '300px' }}
      >
        <Image
          src={nbg}
          alt="Background"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          zIndex="-1"
        />

        <SimpleGrid
          columns={3}
          width={{ base: '90%', md: '80%', lg: '70%' }}
          textAlign="center"
          color="white"
          spacing={{ base: 4, md: 8 }}
        >
          {/* FIRST STAT */}
          <Box>
            <Text fontSize={statsFontSize} fontWeight="bold" mb={1}>
              100k+
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Payments daily</Text>
          </Box>

          {/* SECOND STAT */}
          <Box>
            <Text fontSize={statsFontSize} fontWeight="bold" mb={1}>
              5M+
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>API calls</Text>
          </Box>

          {/* THIRD STAT */}
          <Box>
            <Text fontSize={statsFontSize} fontWeight="bold" mb={1}>
              6
            </Text>
            <Text fontSize={{ base: 'sm', md: 'md' }}>Payment Options</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default SecondComponent
