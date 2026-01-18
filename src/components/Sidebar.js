import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>VaultCore</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/transfer">Send Money</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/audit">Audit Logs</Link>
      </nav>
    </aside>
  );
}
