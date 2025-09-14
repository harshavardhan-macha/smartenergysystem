import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import EnergyUsageCard from "./EnergyUsageCard";
import UsageGraph from "./UsageGraph";
import Suggestions from "./Suggestions";
import HistoricalLogs from "./HistoricalLogs";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="cards-row">
          <EnergyUsageCard />
          <Suggestions />
        </div>
        <div className="lower-row">
          <UsageGraph />
          <HistoricalLogs />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
