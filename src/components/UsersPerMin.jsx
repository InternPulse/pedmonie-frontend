import { Bar } from "react-chartjs-2";
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
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Users per Minute",
        align: "start",
      },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  return <Bar data={data} options={options} />;
};

export default UsersPerMin;
