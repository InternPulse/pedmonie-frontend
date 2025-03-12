import PaymentMethodDistribution from "./PaymentMethodDistribution"
import Transaction from "../../../../assets/transaction_component.svg"
import { Box, Flex, Image } from "@chakra-ui/react"


const OverviewSectionThree = () => {
  return (
    <>
      <Flex direction={{base:"column", lg:"row"}} gap="1rem">
          <Flex flex={1} w="350px" bg="white">
              <Image src={Transaction} alt="Transaction" height="350px" />
          </Flex>
          <Flex flex={2}>
              <PaymentMethodDistribution />
          </Flex>
      </Flex>

    </>
  )
}

export default OverviewSectionThree