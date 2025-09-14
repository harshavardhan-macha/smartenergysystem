function HistoricalLogs() {
  // Static sample
  const logs = [
    { time: "09:00", usage: "2.0 kWh" },
    { time: "10:00", usage: "2.5 kWh" },
    { time: "11:00", usage: "2.2 kWh" },
  ];
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
