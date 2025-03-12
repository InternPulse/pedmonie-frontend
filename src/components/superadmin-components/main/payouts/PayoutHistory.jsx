import { Box, Table, Text } from "@chakra-ui/react"

import data from './../../../../../others/payout_history.json'

const PayoutHistory = () => {

  return (
    <Box>
      <Text textStyle="xl" fontWeight='bold' marginBottom={2}>Payout History</Text>
      <Table.Root fontSize={{base:'13px', md:'15px', lg:'18px'}} size={{base:'xs'}} variant={"outline"} height={{base:'20rem'}}>
      <Table.Header>
        <Table.Row >
          <Table.ColumnHeader display={{base:'none', md:'none', lg:'inline-flex'}} minWidth='140px'>Business ID</Table.ColumnHeader>
          <Table.ColumnHeader display={{base:'none', md:'inline-flex', lg:'inline-flex'}}minWidth='80px'>Date</Table.ColumnHeader>
          <Table.ColumnHeader >To</Table.ColumnHeader>
          <Table.ColumnHeader display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader  display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell display={{base:'none', md:'none', lg:'inline-flex'}} minWidth='140px'>{item.business_id}</Table.Cell>
            <Table.Cell display={{base:'none', md:'inline-flex', lg:'inline-flex'}} minWidth='80px'>{item.transaction_date}</Table.Cell>
            <Table.Cell >{item.to}</Table.Cell>
            <Table.Cell  display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>{item.type}</Table.Cell>
            <Table.Cell >{item.amount}</Table.Cell>
            <Table.Cell  display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>{item.status}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Box>
  )
}

export default PayoutHistory