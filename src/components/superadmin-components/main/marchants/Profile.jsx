import React from "react";
import { Box, Flex, Text, Image, Button, VStack, Link } from "@chakra-ui/react";
import StatsCard from "./StatsCard";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCity, FaMapPin, FaBirthdayCake, FaBuilding, FaArrowDown } from "react-icons/fa"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import NavigationBar from "./NavigationBar";
import Ellipse from "../../../../assets/Ellipse86.png";
import Graph from "../../../../assets/Graph.png";




const chartData = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {

      data: [15000, 22000, 18000, 24000, 20000, 28000],
      backgroundColor: "#3B82F6",
    },
    {

      data: [18000, 19000, 25000, 23000, 26000, 30000],
      backgroundColor: "#22C55E",
    },
    {

      data: [12000, 14000, 16000, 18000, 15000, 20000],
      backgroundColor: "#EAB308",
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};





const activities = [
  { name: "Jane Cooper", action: "Last login on", date: "Jul 13, 2024", time: "5:36PM" },
  { name: "Jane Cooper", action: "Created account on", date: "Jul 13, 2024", time: "5:36PM" },
  { name: "Jane Cooper", action: "Withdraw on", date: "Jul 13, 2024", time: "5:36PM" },
];


const Profile = () => {
  return (
    <Box w="100vw" h="200vh" bg="gray.100" >
      
      <Flex w="1132px" gap="30px" p="20px">
        {/* Profile Section */}
        <Box w="284px" display="flex" flexDirection="column" gap="21px">
          <Flex align="center" gap="8px">
            <Image
              w="102px"
              h="102px"
              src={Ellipse}
              bg="gray.300"
              borderRadius="full"
            />
            <Box w="135px" display="flex" flexDirection="column" gap="8px">
              <Text fontSize="22px" fontWeight="500" color="#505050">
                Jane Cooper
              </Text>
              <Text fontSize="16px" fontWeight="400" color="#919191">
                #ERD243546
              </Text>
            </Box>
          </Flex>

          {/* About Section */}
          <Box display="flex" flexDirection="column" gap="28px">
            <Box display="flex" flexDirection="column" gap="8px">
              <Text fontSize="16px" fontWeight="600" color="#333333">
                About
              </Text>
              <Box display="flex" flexDirection="column" gap="5px">
                <Flex align="center" gap="11px">
                  <FaPhone size={14} color="#A7A7A7" />
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Phone:
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="#676767">
                    +234-8154-363
                  </Text>
                </Flex>
                <Flex align="center" gap="11px">
                  <FaEnvelope size={14} color="#A7A7A7" />
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Email:
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="#676767">
                    Janecooper@gmail.com
                  </Text>
                </Flex>
              </Box>
            </Box>

            {/* Custom Border Line */}
            <Box w="255px" h="1px" bg="#CCCCCC" />

            {/* Address Section */}
            <Box display="flex" flexDirection="column" gap="8px">
              <Text fontSize="16px" fontWeight="600" color="#333333">
                Address
              </Text>
              <Box display="flex" flexDirection="column" gap="16px">
                <Flex align="center" gap="11px">
                  <FaMapMarkerAlt size={14} color="#A7A7A7" />
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Address:
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="#676767">
                    390 Market Street, Suite 200
                  </Text>
                </Flex>
                <Flex align="center" gap="11px">
                  <FaCity size={14} color="#A7A7A7" />
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    City state:
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="#676767">
                    Lagos, Nigeria
                  </Text>
                </Flex>
                <Flex align="center" gap="11px">
                  <FaMapPin size={14} color="#A7A7A7" />
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Postcode:
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="#676767">
                    94000
                  </Text>
                </Flex>
              </Box>
            </Box>
            {/* Custom Border Line */}
            <Box w="255px" h="1px" bg="#CCCCCC" />

            <Box display="flex" flexDirection="column" gap="8px">
              {/* Employee Details Title */}
              <Text fontSize="16px" fontWeight="600" color="#333333">
                Employee Details
              </Text>

              {/* Employee Information */}
              <Box display="flex" flexDirection="column" gap="16px">
                {/* Date of Birth */}
                <Flex align="center" gap="11px">
                  <FaBirthdayCake size={14} color="#A7A7A7" /> {/* Birthday Icon */}
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Date of birth:
                  </Text>
                  <Text fontSize="14px" fontWeight="500" color="#676767">
                    April 06, 1989
                  </Text>
                </Flex>

                {/* Business Name */}
                <Flex align="center" gap="11px">
                  <FaBuilding size={14} color="#A7A7A7" /> {/* Business Icon */}
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Business Name:
                  </Text>
                  <Text fontSize="12px" fontWeight="500" color="#676767">
                    Gold World Movers
                  </Text>
                </Flex>

                {/* Business Address */}
                <Flex align="center" gap="11px">
                  <FaMapMarkerAlt size={14} color="#A7A7A7" /> {/* Location Icon */}
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    Business Address:
                  </Text>
                  <Text fontSize="12px" fontWeight="500" color="#676767">
                    House 17, King’s Road, Orimoguje, Lagos State
                  </Text>
                </Flex>

              </Box>
              <Box display="flex" flexDirection="column" gap="8px" mt="50px">
                {/* Account Status Title */}
                <Text fontSize="16px" fontWeight="600" color="#333333">
                  Account Status
                </Text>

                {/* Status Indicator */}
                <Flex align="center" gap="11px">
                  <Text
                    fontSize="12px"
                    fontWeight="500"
                    color="#26C929"
                    fontFamily="Roboto"
                    letterSpacing="0.5px"
                    lineHeight="16px"
                  >
                    Verified
                  </Text>
                </Flex>
              </Box>
              {/* Custom Border Line */}
              <Box w="255px" h="1px" bg="#CCCCCC" mt="40px" />
            </Box>
          </Box>
        </Box>
        <Box
          w="1px" // Thin vertical line
          h="1026.03px" // Height of the divider
          bg="#CCCCCC" // Color of the divider
        />

        {/* Merchant Growth Section */}
        <Box w="300px" display="flex" flexDirection="column" gap="20px">
          <Text fontSize="16px" fontWeight="500" color="#333333" maxW="130px">
            Merchant Growth Metrics
          </Text>

          {/* Stats Card */}
          <Flex gap="60px" >
            <StatsCard title="Available Balance" amount="$46,000" bgColor="#ECECFF" />
            <StatsCard title="Total Sales" amount="$46,000" bgColor="#F8D7DA" />

          </Flex>
          <Flex gap="60px" mt="40px">
            <StatsCard title="Money In" amount="$46,000" bgColor="#D1E8FF" />
            <StatsCard title="Money Out" amount="$46,000" bgColor="#ECECFF" />
          </Flex>

          <Box
            width="236.21px"
            height="176.34px"
            bg="white"
            borderRadius="5.21px"
            p={4}
            boxShadow="md"
          >
            <Text fontSize="11.71px" fontWeight="500" color="#09244B" mb={2}>
              Details
            </Text>
            <VStack align="stretch" spacing={3}>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="7.81px" fontWeight="500" color="#8491A5">
                  Available Bal
                </Text>
                <Text fontSize="7.81px" fontWeight="700" color="#09244B" textAlign="right">
                  4,324.32
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="7.81px" fontWeight="500" color="#8491A5">
                  Money In
                </Text>
                <Text fontSize="7.81px" fontWeight="700" color="#09244B" textAlign="right">
                  4,834.32 - 4,932.53
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="7.81px" fontWeight="500" color="#8491A5">
                  Money Out
                </Text>
                <Text fontSize="7.81px" fontWeight="700" color="#09244B" textAlign="right">
                  2,623.28 - 3,823.74
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="7.81px" fontWeight="500" color="#8491A5">
                  Customers
                </Text>
                <Text fontSize="7.81px" fontWeight="700" color="#09244B" textAlign="right">
                  $23.7 T USD
                </Text>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Text fontSize="7.81px" fontWeight="500" color="#8491A5">
                  P/E Ratio
                </Text>
                <Text fontSize="7.81px" fontWeight="700" color="#09244B" textAlign="right">
                  82.73
                </Text>
              </Box>
            </VStack>
          </Box>




          <Box w="736px" h="207px" bg="white" borderRadius="2.33px" p="16px" boxShadow="md">
            <Flex w="100%" gap="20px">
              {/* Revenue Overview Section */}
              <Box w="209.17px" display="inline-flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
                {/* Revenue Details */}
                <Flex p="11.65px" flexDirection="column" gap="6.99px" w="full">
                  <Text color="#475569" fontSize="9.32px" fontWeight="600" fontFamily="Archivo" lineHeight="16.31px">
                    Total Revenue:
                  </Text>
                  <Text color="#1E293B" fontSize="20.98px" fontWeight="600" fontFamily="Archivo" lineHeight="25.64px">
                    $9,542.00
                  </Text>
                  <Text color="#475569" fontSize="8.16px" fontWeight="400" fontFamily="Archivo" lineHeight="13.65px">
                    From Jan 20, 2022 to July, 2022
                  </Text>
                </Flex>

                {/* Graph Indicator */}
                <Flex h="50.69px" px="11.65px" alignItems="center" gap="8.74px" w="full">
                  <Flex flex="1" h="50.11px" flexDirection="column" align="center">
                    {/* Profile Image */}
                    <Image src={Graph} alt="Profile Image" boxSize="50px" borderRadius="full" />

                    {/* Border Box (Optional) */}
                    <Box flex="1" border="0.58px solid #22C55E" w="full" />
                  </Flex>
                  <Flex w="39.04px" h="10.49px" px="4.66px" bg="#F87171" borderRadius="2.33px" alignItems="center" gap="6.99px">
                    <FaArrowDown color="white" size="9.32px" />
                    <Text color="white" fontSize="6.99px" fontWeight="700" fontFamily="Archivo" lineHeight="9.32px">
                      16.3%
                    </Text>
                  </Flex>
                </Flex>

                {/* Indicators */}
                <Flex w="full" justifyContent="flex-start" alignItems="flex-start">
                  <Flex pt="11.65px" px="11.65px" alignItems="center" gap="4.66px">
                    <Box w="6.99px" h="6.99px" bg="#BBF7D0" borderRadius="full" position="relative">
                      <Box w="3.5px" h="3.5px" bg="#22C55E" borderRadius="full" position="absolute" top="1.75px" left="1.75px" />
                    </Box>
                    <Text color="#1E293B" fontSize="9.32px" fontWeight="400" fontFamily="Archivo" lineHeight="13.98px">
                      3,526.56
                    </Text>
                  </Flex>
                  <Flex pt="11.65px" px="11.65px" alignItems="center" gap="4.66px">
                    <Box w="6.99px" h="6.99px" bg="#FECACA" borderRadius="full" position="relative">
                      <Box w="3.5px" h="3.5px" bg="#EF4444" borderRadius="full" position="absolute" top="1.75px" left="1.75px" />
                    </Box>
                    <Text color="#1E293B" fontSize="9.32px" fontWeight="400" fontFamily="Archivo" lineHeight="13.98px">
                      3,526.56
                    </Text>
                  </Flex>
                </Flex>

                {/* Labels */}
                <Flex w="full" pb="11.65px" justifyContent="flex-start">
                  <Flex px="23.31px" alignItems="center" gap="4.66px">
                    <Text color="#475569" fontSize="8.16px" fontWeight="400" fontFamily="Archivo" lineHeight="11.65px">
                      Net Profit
                    </Text>
                  </Flex>
                  <Flex px="27.38px" alignItems="center" gap="4.66px">
                    <Text color="#475569" fontSize="8.16px" fontWeight="400" fontFamily="Archivo" lineHeight="11.65px">
                      Net Revenue
                    </Text>
                  </Flex>
                </Flex>
              </Box>

              {/* Chart Section */}
              <Box w="60%" h="180px">
                <Bar data={chartData} options={chartOptions} />
              </Box>
            </Flex>

          </Box>




          <Box w="317px" h="190px" display="flex" flexDirection="column" gap="15px">
            {/* Section Title */}
            <Text fontSize="16px" fontWeight="500" color="#333333">
              Activity
            </Text>

            {/* Activity List */}
            <Box display="flex" flexDirection="column" gap="16px">
              {activities.map((activity, index) => (
                <Box key={index} display="flex" flexDirection="column" gap="4px">
                  <Flex align="center" gap="14px">
                    <Text fontSize="14px" fontWeight="500" color="#505050">
                      {activity.name}
                    </Text>
                    <Flex align="center" gap="4px">
                      <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                        {activity.action}{" "}
                      </Text>
                      <Text fontSize="14px" fontWeight="500" color="#222222">
                        {activity.date}
                      </Text>
                    </Flex>
                  </Flex>
                  <Text fontSize="14px" fontWeight="400" color="#A7A7A7">
                    {activity.time}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box w="830px" borderBottom="1px solid #CCCCCC" mt="60px" />
          <Button w="263px" px="30px" ml="400px" py="10px" bg="#FB2323" color="white" fontSize="18px" fontWeight="500" textTransform="capitalize" borderRadius="8px" _hover={{ bg: "#D92020" }} // Slightly darker red on hover
          >
            Suspend Account
          </Button>
        </Box>

      </Flex>

    </Box>
  )
}

export default Profile