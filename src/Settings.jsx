import React, { useState } from "react";

import { FaBolt, FaBell, FaMoon, FaCog } from "react-icons/fa";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [autoShutdown, setAutoShutdown] = useState(false);
  const [energyThreshold, setEnergyThreshold] = useState(50);

  return (
    <div className="settings-container">
      <h1 className="settings-title">⚡ Smart Energy Settings</h1>
      <div className="settings-row">
        {/* Theme & Appearance */}
        <div className="settings-card">
          <div className="card-header">
            <FaMoon className="card-icon" />
            <h2>Theme</h2>
          </div>
          <div className="setting-item">
            <label>Dark Mode</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-card">
          <div className="card-header">
            <FaBell className="card-icon" />
            <h2>Notifications</h2>
          </div>
          <div className="setting-item">
            <label>Energy Alerts</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Device Automation */}
        <div className="settings-card">
          <div className="card-header">
            <FaBolt className="card-icon" />
            <h2>Device Automation</h2>
          </div>
          <div className="setting-item">
            <label>Auto Shutdown Devices</label>
            <label className="switch">
              <input
                type="checkbox"
                checked={autoShutdown}
                onChange={() => setAutoShutdown(!autoShutdown)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="setting-item range-item">
            <label>Energy Threshold</label>
            <input
              type="range"
              min="0"
              max="100"
              value={energyThreshold}
              onChange={(e) => setEnergyThreshold(e.target.value)}
            />
            <span>{energyThreshold}%</span>
          </div>
        </div>

        {/* Account Preferences */}
        <div className="settings-card">
          <div className="card-header">
            <FaCog className="card-icon" />
            <h2>Account</h2>
          </div>
          <div className="setting-item">
            <label>Language</label>
            <select>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
