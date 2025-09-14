function EnergyUsageCard() {
  // Replace with actual real-time data fetching
  const energyData = { machine: "CNC Machine", usage: "2.5 kWh", lastUpdated: "Just now" };
  return (
    <div className="usage-card">
      <h3>{energyData.machine}</h3>
      <p>Current Usage: <b>{energyData.usage}</b></p>
      <small>Last updated: {energyData.lastUpdated}</small>
    </div>
  );
}
export default EnergyUsageCard;
