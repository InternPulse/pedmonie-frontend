import SecondComponent from './SecondComponent'

const Nav = () => {
  return (
    <>
      <SecondComponent />
    </>
  )
}
export default Nav

// import { Box, Image, Flex, HStack, Text } from '@chakra-ui/react'
// import money from '../../assets/icons/5M.svg'
// import thousand from '../../assets/icons/100k.svg'
// import flutterwave from '../../assets/icons/flutterwave.svg'
// import opay from '../../assets/icons/opay.svg'
// import paystack from '../../assets/icons/paystack.svg'
// import trivago from '../../assets/icons/trivago.svg'
// import six from '../../assets/icons/six.svg'
// import nbg from '../../assets/images/nbg.svg'

// const SecondComponent = () => {
//   return (
//     <>
//       <Flex textAlign="center" py={20} direction="row">
//         {/* Partner Text */}
//         <Text fontSize="lg" fontWeight="medium" color="gray.600">
//           We proudly partner with over 1,000+ businesses
//         </Text>

//         {/* Logos Section */}
//         <HStack justify="center" spacing="10" mt="40">
//           <Image src={flutterwave} alt="Flutterwave" h="40px" />
//           <Image src={opay} alt="Opay" h="40px" />
//           <Image src={paystack} alt="Paystack" h="40px" />
//           <Image src={trivago} alt="Trivago" h="40px" />
//         </HStack>
//       </Flex>

//       <Flex height="100vh" justify="center" align="center" position="relative">
//         <Image src={nbg} maxW="80%" objectFit="contain" />

//         {/* 1ST SVG ICON INSIDE THE SHAPE */}
//         <Image
//           src={money}
//           w="10%"
//           position="absolute"
//           top="50%"
//           left="50%"
//           transform="translate(-50%, -50%)"
//         />
//         {/* TEXT FOR FIRST SVG ICON */}
//         <Text
//           position="absolute"
//           right="66%"
//           bottom="38%"
//           transform="translate(-50%, -50%)"
//           color="#ffffff"
//         >
//           Payments daily
//         </Text>

//         {/* 2ND SVG ICON INSIDE THE SHAPE */}
//         <Image
//           src={thousand}
//           w="15%"
//           position="absolute"
//           top="50%"
//           right="55%"
//           transform="translate(-50%, -50%)"
//         />
//         {/* TEXT FOR SECOND SVG ICON */}
//         <Text
//           position="absolute"
//           left="47%"
//           bottom="38%"
//           transform="translate(-50%, -50%)"
//           color="#ffffff"
//         >
//           API calls
//         </Text>

//         {/* 3RD SVG ICON INSIDE THE SHAPE */}
//         <Image
//           src={six}
//           w="15%"
//           position="absolute"
//           top="50%"
//           left="65%"
//           transform="translate(-50%, -50%)"
//         />
//         {/* TEXT FOR THIRD SVG ICON */}
//         <Text
//           position="absolute"
//           left="65%"
//           bottom="38%"
//           transform="translate(-50%, -50%)"
//           color="#ffffff"
//         >
//           Payments options
//         </Text>
//       </Flex>
//     </>
//   )
// }
// export default SecondComponent
