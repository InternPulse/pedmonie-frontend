import { Flex } from "@chakra-ui/react"
import OverviewHeader from "../../components/OverviewHeader"
import OverviewSectionOne from "../../components/superadmin-components/main/overview/OverviewSectionOne"
import OverviewSectionThree from "../../components/superadmin-components/main/overview/OverviewSectionThree"
import OverviewSectionTwo from "../../components/superadmin-components/main/overview/OverviewSectionTwo"

const Overview = () => {
  return (
    <>
        <OverviewHeader />
        <Flex>
           <OverviewSectionOne />
        </Flex>

        <Flex>
            <OverviewSectionTwo />
        </Flex>

        <Flex>
            <OverviewSectionThree />
        </Flex>
  
    </>
  )
}

export default Overview
