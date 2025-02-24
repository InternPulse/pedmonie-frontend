import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";

const TotalRevenueBarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null); 

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); 
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Available Balance",
            data: [15000, 18000, 20000, 14000, 17000, 16000],
            backgroundColor: "blue",
          },
          {
            label: "Money In",
            data: [16000, 17000, 19000, 13000, 17500, 15000], 
            backgroundColor: "green",
          },
          {
            label: "Money Out",
            data: [10000, 12000, 16000, 11000, 14000, 10500], 
            backgroundColor: "purple",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true,
               ticks : { stepSize: 5000 }
           }, 
        },
        plugins: {
          legend: { display: false },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Box w="757px" h="300px" bg="#FFFF">    
      <canvas ref={chartRef}></canvas>
    </Box>
  );
};

export default TotalRevenueBarChart;
