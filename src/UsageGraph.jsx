import React, { useState, useEffect } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  Title,
  Tooltip,
  Legend
);

function UsageGraph() {
  const [dataPoints, setDataPoints] = useState([2, 2.5, 2.2, 2.7, 2.5]);
  const [labels, setLabels] = useState(["9 AM", "10 AM", "11 AM", "12 PM", "1 PM"]);

  const HIGH_THRESHOLD = 2.8; // anything above this is "high consumption"

  useEffect(() => {
    const interval = setInterval(() => {
      const newPoint = parseFloat((Math.random() * 1 + 2).toFixed(2)); // random 2-3
      const newLabel = `${labels.length + 9} AM`;

      setDataPoints(prev => {
        const updated = [...prev, newPoint];
        if (updated.length > 10) updated.shift();
        return updated;
      });

      setLabels(prev => {
        const updated = [...prev, newLabel];
        if (updated.length > 10) updated.shift();
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [labels]);

  // Dynamic colors based on value
  const borderColors = dataPoints.map(value =>
    value >= HIGH_THRESHOLD ? 'red' : '#36a2eb'
  );

  const backgroundColors = dataPoints.map(value =>
    value >= HIGH_THRESHOLD ? 'rgba(255,0,0,0.2)' : 'rgba(54,162,235,0.2)'
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Energy (kWh)",
        data: dataPoints,
        borderColor: borderColors,
        backgroundColor: backgroundColors,
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
