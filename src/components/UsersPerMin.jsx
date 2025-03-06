import { Bar } from "react-chartjs-2";
import { Box, Text } from "@chakra-ui/react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UsersPerMin = () => {
  const labels = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);
  const data = {
    labels,
    datasets: [
      {
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) + 1),
        backgroundColor: "#0F60FF",
        borderColor: "#0F60FF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents height from shrinking
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        display: false,
        categoryPercentage: 0.8, // Increases width per category
        barPercentage: 1.5, // Makes bars wider
      },
      y: { display: false },
    },
    elements: {
      bar: {
        barThickness: 40, // Ensures bars are wide
      },
    },
  };

  return (
    <Box h="35px" w={{base: "280px", sm: "404px"}}>
      <Text color="#8B909A" fontSize="14px">Users per minute</Text>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default UsersPerMin;
