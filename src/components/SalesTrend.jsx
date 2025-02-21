import React, { useEffect, useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Chart, LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(LineController, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesTrend = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); 
    }

    const context = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(context, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [2500, 4000, 5000, 4500, 6000, 7000],
            borderColor: "#B176E2",
            borderWidth: 2,
            tension: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 12000,
            ticks: {
              stepSize: 2000,
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Monthly Sales Data",
            font: { size: 16 },
          },
        },
      },      
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, []);

  return (
    <Box w="526px" m="auto" mt="50px" bg="#FFFFFF">
       <Heading color="#373D4D" as='h4' mb="10px" fontSize= '20px'>Sales Trend</Heading>
      <canvas ref={chartRef} />
    </Box>
  );
};

export default SalesTrend;

