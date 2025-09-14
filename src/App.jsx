import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import Loading from "./Loading"; 
import Home from "./Home";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // track login state

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  const handleSelectPage = (page) => {
    setSelectedPage(page);
    setSidebarOpen(false);
  };

  // Fake loading screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    // show Home page if user is not logged in
    return <Home onLogin={() => setIsAuthenticated(true)} />;
  }

  // once logged in → show Dashboard
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
