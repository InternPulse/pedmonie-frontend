import { Box } from "@chakra-ui/react"
import TotalRevenue from "./components/TotalRevenue"
import TotalRevenueBarChart from "./components/TotalRevenueBarChart"
import TransactionStatus from "./components/TransactionStatus"
const App = () => {
  return (
      <Box>
        <TransactionStatus />
      </Box>
  )
}

export default App
