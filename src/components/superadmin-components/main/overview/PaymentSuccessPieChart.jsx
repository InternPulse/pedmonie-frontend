import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Box, Flex, Heading, List, Separator, Text } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

const PaymentSuccessPieChart = () => {
  // Payment data
  const paymentData = [
    { label: "Successful Payment", value: 40, color: "#4CAF50" },
    { label: "Failed Payment", value: 30, color: "#E53935" },
    { label: "Pending Transaction", value: 20, color: "#7B1FA2" },
    { label: "Reserved Payment", value: 5, color: "#FF9800" },
    { label: "Chargebacks", value: 5, color: "#1E88E5" },
  ];

  // Extracting data for chart
  const data = {
    labels: paymentData.map((d) => d.label),
    datasets: [
      {
        data: paymentData.map((d) => d.value),
        backgroundColor: paymentData.map((d) => d.color),
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
  };

  return (
    <Box bg="white" p={5} borderRadius="lg" boxShadow="lg" maxW="900px" mx="auto" mt={5}>
      <Heading size="md" color="teal.600" mb={4} fontWeight="bold" textAlign="center" textTransform="uppercase">
        Payment Success Distribution
      </Heading>

      <Separator mb={5} borderColor="teal.300" /> 

      <Flex justify="space-between" align="center" flexWrap="wrap">
              {/* Pie Chart */}
            <Box 
            w={{ base: "100%", md: "50%" }} 
            h="320px" 
            pr={{ base: 2, md: 5 }} 
            display="flex" 
            justifyContent="center" 
            alignItems="center"
            bg="white" 
            borderRadius="lg" 
            boxShadow="lg"
            p={4}
            >
            <Pie data={data} options={options} />
            </Box>

            <List.Root
            spacing={2}
            flex="1"
            pl={{ base: 0, md: 5 }} 
            textAlign={{ base: "center", md: "left" }} 
            >
            {paymentData.map((item, index) => (
                <List.Item
                key={index}
                display="flex"
                alignItems="center"
                justifyContent={{ base: "center", md: "flex-start" }} 
                py={1.5}
                >
                {/* Bullet with matching Pie Chart color */}
                <Box
                    w={3.5}
                    h={3.5}
                    bg={item.color}
                    borderRadius="full"
                    display="inline-block"
                    mr={3}
                    boxShadow="md"
                />
                <Text fontSize="md" fontWeight="semibold" color="gray.700">
                    {item.label}: <Text as="span" color={item.color}>{item.value}%</Text>
                </Text>
                </List.Item>
            ))}
            </List.Root>

      </Flex>
    </Box>
  );
};

export default PaymentSuccessPieChart;
