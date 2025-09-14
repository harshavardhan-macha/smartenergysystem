import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const EnergyUsageCard = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [appliedRange, setAppliedRange] = useState(null);

  // sample data (replace with API/IoT sensor data)
  const sampleData = [
    { date: "2025-09-01", usage: 40 },
    { date: "2025-09-02", usage: 50 },
    { date: "2025-09-03", usage: 35 },
    { date: "2025-09-04", usage: 80 },
    { date: "2025-09-05", usage: 60 },
    { date: "2025-09-06", usage: 30 },
    { date: "2025-09-07", usage: 55 },
    { date: "2025-09-08", usage: 40 }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppliedRange({ startDate, endDate });
  };

  // filter data based on applied range
  const filteredData =
    appliedRange && (appliedRange.startDate || appliedRange.endDate)
      ? sampleData.filter((entry) => {
          const entryDate = new Date(entry.date);
          const start = appliedRange.startDate
            ? new Date(appliedRange.startDate)
            : null;
          const end = appliedRange.endDate
            ? new Date(appliedRange.endDate)
            : null;
          return (!start || entryDate >= start) && (!end || entryDate <= end);
        })
      : [];

  return (
    <div className="filter-container">
      {/* Filter Form */}
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="date-group">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="date-group">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button type="submit" className="apply-btn">
          Apply Filter
        </button>
      </form>

      {/* Chart shows only after Apply Filter */}
      {appliedRange && (
        <div className="chart-card">
          <h4>
            Energy Usage from{" "}
            {appliedRange.startDate || "N/A"} to{" "}
            {appliedRange.endDate || "N/A"}
          </h4>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <Line type="monotone" dataKey="usage" stroke="#2563eb" strokeWidth={2} />
              <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default EnergyUsageCard;
