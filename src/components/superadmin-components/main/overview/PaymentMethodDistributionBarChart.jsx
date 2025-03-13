import { Bar } from "react-chartjs-2";
import { Box, Heading, Separator } from "@chakra-ui/react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const PaymentMethodDistributionBarChart = () => {
  const distributionData = [50, 30, 70, 20];

  const data = {
    labels: ["Mobile Money", "Card", "Transfer", "Bitcoin"],
    datasets: [
      {
        label: "Transactions (in thousands)",
        data: distributionData,
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    indexAxis: "y", //this makes the bars horizontal
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
          color: "fg.default",
        },
        grid: {
          color: "border.default",
        },
      },
      y: {
        ticks: {
          color: "fg.default",
          font: {
            weight: "bold",
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
      },
      datalabels: {
        anchor: "end", //this position text at the end of the bar
        align: "end", // this align text to the right
        color: "black",
        font: {
          weight: "bold",
        },
        formatter: (value) => `${value}k`, // this format numbers with "k" for thousands
      },
    },
  };

  return (
    <Box
      bg="white"
      p={5}
      borderRadius="lg"
      w={{ base: "100%", md: "600px" }}
      h="350px"
      mx="auto"
      mt={1}
    >
      {/*   <Heading size="md" color="teal.600" mb={4} fontWeight="bold" textAlign="center" textTransform="uppercase">
        Payment Method Distribution
      </Heading>
      <Separator mb={5} borderColor="teal.300" /> */}
      <Box h="250px">
        <Heading
          size="sm"
          color="grey.200"
          mb={4}
          fontWeight="bold"
          textAlign="start"
        >
          Payment Method Distribution
        </Heading>

        <Bar data={data} options={options} />
      </Box>
    </Box>
  );
};

export default PaymentMethodDistributionBarChart;
