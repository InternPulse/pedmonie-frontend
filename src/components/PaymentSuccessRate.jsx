import React, { useEffect, useRef } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PaymentSuccessRate = () => {
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
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            data: [90, 85, 92, 88, 95, 97],
            backgroundColor: "#B176E2",
            borderWidth: 1,
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        responsive: true,
        interaction: {
            mode: null,
          },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20,
              callback: function (value) {
                return `${value}%`; 
              },
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
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.raw}%`; 
              },
            },
          },
        },
      },
    });

    return () => {
      chartInstance.current.destroy();
    };
  }, []);

  return (
    <Box  w="526px" m="auto" mt="50px">
      <Heading color="#373D4D" as='h4' mb="10px" fontSize= '20px'>Payment Success Rate</Heading>
      <canvas ref={chartRef} />
    </Box>
  );
};

export default PaymentSuccessRate;