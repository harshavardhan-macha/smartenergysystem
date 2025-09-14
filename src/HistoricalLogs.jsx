import React, { useState, useEffect } from "react";


function HistoricalLogs() {
  const [logs, setLogs] = useState([
    { time: "09:00", usage: "2.0 kWh" },
    { time: "10:00", usage: "2.5 kWh" },
    { time: "11:00", usage: "2.2 kWh" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // generate a fake usage value
      const newUsage = (1.5 + Math.random() * 2).toFixed(2) + " kWh";

      // get current time (HH:mm format)
      const now = new Date();
      const newTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      // add new log
      setLogs((prevLogs) => {
        const updated = [...prevLogs, { time: newTime, usage: newUsage }];
        // keep only last 10 logs
        return updated.slice(-10);
      });
    }, 3000); // new entry every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="historical-logs">
      <h3>Usage Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, idx) => (
            <tr key={idx}>
              <td>{log.time}</td>
              <td>{log.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoricalLogs;
