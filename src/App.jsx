import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Loading from "./Loading"; // import the loading component
import './App.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState('Dashboard');
  const [loading, setLoading] = useState(true); // loading state

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  const handleSelectPage = (page) => {
    setSelectedPage(page);
    setSidebarOpen(false); // close sidebar after selection
  };

  // Hide loading after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  if (loading) {
    return <Loading />; // show loading screen first
  }

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
