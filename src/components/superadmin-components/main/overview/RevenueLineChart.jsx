import React from "react";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler // Enables gradient fill
} from "chart.js";
import { Box } from "@chakra-ui/react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const RevenueLineChart = () => {
  const years = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const revenueGrowth = [15, 87, 12, 6, 10, 15, 70, 90, 14, 11, 13, 58];

  const revenueData = {
    labels: years,
    datasets: [
      {
        label: "Revenue Growth (%)",
        data: revenueGrowth,
        borderColor: "#4CAF50",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, "rgba(76, 175, 80, 0.1)");
          gradient.addColorStop(0.5, "rgba(76, 175, 80, 0.2)");
          gradient.addColorStop(1, "rgba(76, 175, 80, 0.5)");
          return gradient;
        },
        tension: 0.4, // Smooth curve
        pointRadius: 6, 
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#fff",
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
            weight: "bold",
          },
        },
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleFont: { size: 14 },
        bodyFont: { size: 12 },
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#555",
          font: { size: 13, weight: "bold" },
        },
        title: {
          display: true,
          text: "Month",
          color: "#444",
          font: { size: 14, weight: "bold" },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.3)", 
        },
        ticks: {
          color: "#555",
          font: { size: 13, weight: "bold" },
        },
        title: {
          display: true,
          text: "Growth (%)",
          color: "#444",
          font: { size: 14, weight: "bold" },
        },
      },
    },
  };

  return (
    <Box 
      bg="white" 
      p={5} 
      borderRadius="lg"
     // boxShadow="lg" 
      width="100%" 
      maxW="100%" 
      h="400px"
      mx="auto" 
      mt={3}
    >
      <Line data={revenueData} options={options} />
    </Box>
  );
};

export default RevenueLineChart;

