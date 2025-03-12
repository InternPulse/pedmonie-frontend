import { Box, Table, Text } from "@chakra-ui/react"

import data from './../../../../../others/payout_history.json'

const PayoutHistory = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green.500";
      case "Pending":
        return "orange.500";
      case "Cancelled":
        return "#E14640";
      default:
        return "gray.500"; // Default color
    }
  };
  return (
    <Box marginBottom={{base:'4', lg:'4'}}>
      <Text textStyle="xl" fontWeight='bold' marginBottom={2}>Payout History</Text>
      <Table.Root fontSize={{base:'13px', md:'15px', lg:'12px'}} size={{base:'xs', lg:'sm'}} variant={"outline"} height={{base:'20rem'}} >
      <Table.Header >
        <Table.Row >
          <Table.ColumnHeader display={{base:'none', md:'none', lg:'inline-flex'}}>Business ID</Table.ColumnHeader>
          <Table.ColumnHeader display={{base:'none', md:'inline-flex'}}>Date</Table.ColumnHeader>
          <Table.ColumnHeader px={5}>To</Table.ColumnHeader>
          <Table.ColumnHeader display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>Type</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
          <Table.ColumnHeader  display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>Status</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            <Table.Cell   marginTop={3} display={{base:'none', md:'none', lg:'inline-flex'}} textAlign={{lg:'center'}} >{item.business_id}</Table.Cell>
            <Table.Cell   marginTop={3} display={{base:'none', md:'inline-flex'}} >{item.transaction_date}</Table.Cell>
            <Table.Cell px={5} >{item.to}</Table.Cell>
            <Table.Cell   marginTop={3} display={{base:'none', md:'inline-flex', lg:'inline-flex'}}>{item.type}</Table.Cell>
            <Table.Cell >{item.amount}</Table.Cell>
            <Table.Cell   marginTop={3} display={{base:'none', md:'inline-flex', lg:'inline-flex'}}  color={getStatusColor(item.status)} backgroundColor=' rgba(255, 189, 46, 0.04);'>{item.status}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
    </Box>
  )
}

export default PayoutHistory