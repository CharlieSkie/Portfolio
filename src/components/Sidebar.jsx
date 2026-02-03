import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/about">📄 About</Link></li>
        <li><Link to="/contact">⚙️ Contact</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
