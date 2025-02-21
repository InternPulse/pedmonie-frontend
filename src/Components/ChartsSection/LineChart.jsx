import React, { useState } from "react";
import { Box, Flex, Text, NativeSelect } from "@chakra-ui/react";
import { lineChartData } from "./data";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
  Ticks,
} from "chart.js";

Chart.register(
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const yearsArray = Object.keys(lineChartData);

  const [selectedYear, setSelcetedYear] = useState(yearsArray[0]);

  const dataList = lineChartData[selectedYear] || {};

  const labels = Object.keys(dataList);

  const values = Object.values(dataList);

  const data = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
        borderColor: "rgba(64, 163, 124, 1)",
        backgroundColor: "rgba(64, 163, 124, 0.2)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointBackgroundColor: "rgba(64, 163, 124, 1)",
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Sales Over Time",
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
        ticks: {
          maxTicksLimit: 5,
        },
      },
    },
  };

  return (
    <Box
      w={{ base: "", md: "", lg: "full" }}
      h={{ base: "", md: "", lg: "297px" }}
      bg={"rgba(255, 255, 255, 1)"}
    >
      <Flex
        direction={{ base: "", md: "", lg: "row" }}
        align={"center"}
        justifyContent={"space-between"}
        w={{ base: "", md: "", lg: "full" }}
        h={{ base: "", md: "", lg: "35px" }}
        mt={"20px"}
      >
        <Text
          fontFamily={""}
          fontSize={["", "", "20px"]}
          lineHeight={{ base: "", md: "", lg: "24.2px" }}
          fontWeight={{ base: "", md: "", lg: "500" }}
          color="#313431"
        >
          Revenue Growth Chart
        </Text>

        <Box
          w={{ base: "", md: "", lg: "105px" }}
          h={{ base: "", md: "", lg: "35px" }}
          borderRadius={"1px"}
          pt={"4px"}
          pr={"10px"}
          pb={"4px"}
          pl={"15px"}
          border={"1px"}
        >
          <NativeSelect.Root>
            <NativeSelect.Field
              placeholder={"Year" === 2020}
              onChange={(e) => setSelcetedYear(e.target.value)}
              value={selectedYear}
            >
              {yearsArray.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
        </Box>
      </Flex>

      <Box
        w={{ base: "", md: "", lg: "full" }}
        h={{ base: "", md: "", lg: "203px" }}
        mx={"auto"}
        mt={"16px"}
        borderRadius={"6.04"}
        overflow="hidden"
      >
        <Line data={data} options={options} />
      </Box>
    </Box>
  );
};

export default LineChart;
