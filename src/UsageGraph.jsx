import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function UsageGraph() {
  const data = {
    labels: ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM"],
    datasets: [
      {
        label: "Energy (kWh)",
        data: [2, 2.5, 2.2, 2.7, 2.5],
        backgroundColor: "rgba(54,162,235,0.2)",
        borderColor: "#36a2eb",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };
  return (
  <div className="usage-graph">
      <h3>Historical Usage</h3>
      <Line data={data} />
    </div>
  );
}
export default UsageGraph;
