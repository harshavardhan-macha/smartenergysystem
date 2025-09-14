import React, { useState } from 'react';

const machinesData = [
  {
    id: 1,
    name: "Lathe Machine",
    logo: "public\machine.svg",
    power: 5.2, // kW
  },
  {
    id: 2,
    name: "Milling Machine",
    logo: "https://via.placeholder.com/50?text=Milling",
    power: 4.5,
  },
  {
    id: 3,
    name: "Conveyor Belt",
    logo: "https://via.placeholder.com/50?text=Conveyor",
    power: 2.1,
  },
  {
    id: 4,
    name: "Hydraulic Press",
    logo: "https://via.placeholder.com/50?text=Press",
    power: 6.8,
  },
];

function MachineCard({ machine, toggleMachine }) {
  return (
    <div className="machine-card">
      <img src="public/machine.svg" alt={machine.name} className="machine-logo" />
      <div className="machine-info">
        <h4>{machine.name}</h4>
        <p>Power: {machine.power} kW</p>
      </div>
      <button
        className={`toggle-btn ${machine.isOn ? 'on' : 'off'}`}
        onClick={() => toggleMachine(machine.id)}
      >
        {machine.isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default function Machines() {
  const [machines, setMachines] = useState(
    machinesData.map(m => ({ ...m, isOn: false }))
  );

  const toggleMachine = (id) => {
    setMachines(prev =>
      prev.map(m => m.id === id ? { ...m, isOn: !m.isOn } : m)
    );
  };

  return (
    <div className="machines-container">
      <h2>Industry Machines</h2>
      <div className="machines-grid">
        {machines.map(machine => (
          <MachineCard
            key={machine.id}
            machine={machine}
            toggleMachine={toggleMachine}
          />
        ))}
      </div>
    </div>
  );
}
