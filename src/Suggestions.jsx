function Suggestions() {
  // Replace with dynamic suggestions
  const tips = [
    "Turn off Machine X after 5 PM",
    "Set standby mode during idle hours",
    "Regularly maintain sensors for accuracy",
  ];
  return (
    <div className="suggestions-card">
      <h3>Energy Saving Tips</h3>
      <ul>
        {tips.map(tip => <li key={tip}>{tip}</li>)}
      </ul>
    </div>
  );
}
export default Suggestions;
