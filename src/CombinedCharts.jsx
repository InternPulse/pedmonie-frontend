import React from 'react'
import LineChart from './Components/LineChart'
import PieChart from './Components/PieChart'
import { Box, Flex } from '@chakra-ui/react'

const CombinedCharts = () => {
  return (
   <Flex direction={'row'} align={'center'} justifyContent={'flex-end'} px={'2rem'}>
        <LineChart/>
        <PieChart/>
   </Flex>
  )
}

export default CombinedCharts
