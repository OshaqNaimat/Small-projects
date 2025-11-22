import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Mini Projects</h2>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/lorem-generator">Lorem Generator</Link>
        </li>
        <li>
          <Link to="/color-generator">Color Generator</Link>
        </li>
        <li>
          <Link to="/todo-list">To-Do List</Link>
        </li>
        <li>
          <Link to="/birthday-reminder">Birthday Reminder</Link>
        </li>
      </ul>
    </div>
  );
}
