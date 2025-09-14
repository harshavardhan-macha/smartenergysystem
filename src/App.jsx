import { useState } from "react";
import Dashboard from "./Dashboard";
import './app.css'
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Dashboard');

  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const handleSelectPage = (page) => {
    setSelectedPage(page);
    setSidebarOpen(false); // close sidebar after selection
  };

  return (
    <Dashboard
      sidebarOpen={sidebarOpen}
      toggleSidebar={toggleSidebar}
      selectedPage={selectedPage}
      onSelectPage={handleSelectPage}
    />
  );
}

export default App;
