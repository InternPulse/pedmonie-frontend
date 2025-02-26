// import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box } from "@chakra-ui/react";

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
    legend: {
      display: false, // Hide default legend
    },
  },
};

const legendItems = [
  { label: "62% New", color: "#497AF9" },
  { label: "13% Returning", color: "#789DFB" },
  { label: "23% Inactive", color: "#E5E5E5" },
];

const Customers = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {/* Custom Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {legendItems.map((item, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "20px",
                height: "12px",
                backgroundColor: item.color,
                borderRadius: "5px",
              }}
            ></div>
            <span style={{ fontSize: "14px", color: "#333" }}>{item.label}</span>
          </div>
        ))}
      </div>
       {/* Doughnut Chart */}
      <Box style={{ width: "100px", height: "100px" }}>
        <Doughnut data={data} options={options} />
      </Box>
    </div>
  );
};

export default Customers;
