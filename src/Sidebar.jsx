


function Sidebar({ onClose, navItems = [], selectedPage, onSelectPage }) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Energy Monitor</h2>
        <button
          className="close-sidebar"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      <ul>
        {navItems.map((item) => (
          <li
            key={item}
            className={item === selectedPage ? 'selected' : ''}
            onClick={() => onSelectPage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Sidebar;
