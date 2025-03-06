import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Flex, VStack, HStack, Text } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["62% New", "13% Returning", "23% Inactive"],
  datasets: [
    {
      data: [62, 13, 23],
      backgroundColor: ["#497AF9", "#789DFB", "#E5E5E5"],
      hoverBackgroundColor: ["#497AF9", "#789DFB", "#E5E5E5"],
      borderColor: ["#497AF9", "#789DFB", "#E5E5E5"],
      borderWidth: 2,
      spacing: 8,
      hoverOffset: 4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // Hide default legend
  },
};

// Custom Legend Data
const legendItems = [
  { label: "62% New", color: "#497AF9" },
  { label: "13% Returning", color: "#789DFB" },
  { label: "23% Inactive", color: "#E5E5E5" },
];

const Customers = () => {
  return (
    <Flex 
      align="center"
      justify="space-between"
      w="full"
    >
      {/* Custom Legend */}
      <VStack align="start" spacing={3}>
        {legendItems.map((item, index) => (
          <HStack key={index} spacing={2} align="center">
            <Box w="20px" h="12px" bg={item.color} borderRadius="5px" />
            <Text fontSize="9.75px" color="#333">
              {item.label}
            </Text>
          </HStack>
        ))}
      </VStack>

      {/* Doughnut Chart */}
      <Box w="118px" h="118px">
        <Doughnut data={data} options={options} />
      </Box>
    </Flex>
  );
};

export default Customers;
