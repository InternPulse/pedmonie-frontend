import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import myImage from "../assets/DownArrow.svg";

const TotalRevenue = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    gradient.addColorStop(0, "#22C55E"); // 100% (Top)
    gradient.addColorStop(1, "#69DE94"); // 0% (Bottom)
    
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Performance",
            data: [10, 25, 15, 40, 35, 50, 30, 20, 40, 35, 50, 30],
            borderColor: "#53D683",
            backgroundColor: gradient,
            pointRadius: 0,
            fill: true,
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { display: false }, 
            y: { display: false }, 
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
    <Box bg="#FFFF" w="300px">
      <Text as="h2" size="md" color="#475569">
        Total Revenue
      </Text>
      <Heading as="h1" fontSize="32px" mt="10px" color="#1E293B">
        {" "}
        $9,542.00
      </Heading>
      <Text as="p" fontSize="12.5px" mt="10px" color="#475569">
        From Jan 20,2022 to July,2022
      </Text>
      <Flex
        mt="20px"
        w="100%"
        h="200px"
        alignItems="center"
        justifyContent="center"
        gap="5px"
      >
        <Box w="239px" h="77px">
          <canvas ref={chartRef} ></canvas>
        </Box>
        <Flex
          bg="#F87171"
          w="65px"
          h="20px"
          borderRadius="5px"
          alignItems="center"
          justifyContent="center"
          gap="3px"
        >
          <Image src={myImage} alt="Down Arrow" width="8px" height="15px" />
          <Text fontSize="10px" color="#FFFFFF" textAlign="center">
            16.3%
          </Text>
        </Flex>
      </Flex>
      <Flex color="#1E293B" gap="15px" mt="10px">
        <Flex gap="5px">
            <Box h="10px" w="10px" bg="#22C55E" borderRadius="50%"></Box>
        <Box>
            <Text fontSize="14.33px">3,526.56</Text>
            <Text fontSize="12.5px">Net Profit</Text>
        </Box>
        </Flex>
        <Flex gap="5px">
            <Box h="10px" w="10px" bg="#F87171" borderRadius="50%"></Box>
        <Box>
            <Text fontSize="14.33px">3,526.56</Text>
            <Text fontSize="12.5px">Net Revenue</Text>
        </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TotalRevenue;
