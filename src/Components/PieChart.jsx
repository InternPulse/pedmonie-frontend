import React from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import pieData from '../data2.json'
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const label = Object.keys(pieData)
    const dataPie = Object.values(pieData)

const credit = pieData['Credit Card']
const bank = pieData['Bank Transfer']
const Crypto = pieData['Crypto']
const PayPal = pieData['PayPal']




    const data = {
        labels: "",
        datasets: [
          {
            data: dataPie,
            backgroundColor: ["rgba(64, 163, 124, 1)", "rgba(255, 180, 79, 1)", "rgba(240, 97, 226, 1)", "rgba(72, 161, 243, 1)"],
            hoverBackgroundColor: ["rgba(64, 163, 124, 1)", "rgba(255, 180, 79, 1)", "rgba(240, 97, 226, 1)", "rgba(72, 161, 243, 1)"],
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      };


  return (
   <Box w={{base:"", md:"", lg:"460px"}}  h={{base:"", md:"", lg:"298px"}} p={'20px'} gap={'10px'}>

        

   <Box w={{base:"", md:"", lg:"420px"}} h={{base:"", md:"", lg:"244px"}} p={'20px'}>

   <Text w={'420px'} h={'24px'} fontWeight={'500'} fontSize={'20px'} lineHeight={'24.2px'} color={'rgba(55, 61, 77, 1)'}>Transation Breakdown</Text>

   <Flex w={{base:"", md:"", lg:"420px"}} mt={'10px'} h={{base:"", md:"", lg:"200px"}} direction={'row'} align={'center'} justifyContent={'space-between'}>

<Box  w={{base:"", md:"", lg:"200px"}}  h={{base:"", md:"", lg:"200px"}}>
<Pie data={data} options={options} />
</Box>

<Flex direction={'column'} gap={'16px'} justifyContent={'center'} w={{base:"", md:"", lg:"208px"}} h={{base:"", md:"", lg:"199px"}} py={'16px'}>

<Flex w={{base:"", md:"", lg:"208px"}} h={{base:"", md:"", lg:"24px"}} direction={'row'} align={'center'} justifyContent={'space-between'}>
<Flex direction={"row"} align={'center'} gap={'5px'} w={'111px'} height={'24px'}>
    <Text w={"24px"} h={"24px"} bg={"rgba(64, 163, 124, 1)"} rounded={'full'}></Text>
    <Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(77, 78, 80, 1)'}>Credit Card</Text>
</Flex>
    <Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(49, 52, 49, 1)'}>{credit}%</Text>
</Flex>

<Flex w={{base:"", md:"", lg:"208px"}} h={{base:"", md:"", lg:"24px"}} direction={'row'} align={'center'} justifyContent={'space-between'}>
<Flex direction={"row"} gap={'5px'} align={'center'} w={'128px'} height={'24px'}>
    <Text w={"24px"} h={"24px"} bg={"rgba(240, 97, 226, 1)"} rounded={'full'}></Text>
    <Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(77, 78, 80, 1)'}>Bank Transfer</Text>
</Flex>
<Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(49, 52, 49, 1)'}>{bank}%</Text>
</Flex>

<Flex w={{base:"", md:"", lg:"208px"}} h={{base:"", md:"", lg:"24px"}} direction={'row'} align={'center'} justifyContent={'space-between'}>
<Flex direction={"row"} gap={'5px'} align={'center'} w={'128px'} height={'24px'}>
    <Text w={"24px"} h={"24px"} bg={"rgba(255, 180, 79, 1)"} rounded={'full'}></Text>
    <Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(77, 78, 80, 1)'}>PayPal</Text>
</Flex>
<Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(49, 52, 49, 1)'}>{PayPal}%</Text>
</Flex>

<Flex w={{base:"", md:"", lg:"208px"}} h={{base:"", md:"", lg:"24px"}} direction={'row'} align={'center'} justifyContent={'space-between'}>
<Flex direction={"row"} gap={'5px'} align={'center'} w={'140px'} height={'24px'}>
    <Text w={"24px"} h={"24px"} bg={"rgba(72, 161, 243, 1)"} rounded={'full'}></Text>
    <Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(77, 78, 80, 1)'}>Cryptocurrency</Text>
</Flex>
<Text fontWeight={'400'} fontSize={'15px'} lineHeight={'12px'} color={'rgba(49, 52, 49, 1)'}>{Crypto}%</Text>
</Flex>
</Flex>

</Flex>
   </Box>
   </Box>
    
  )
}

export default PieChart
