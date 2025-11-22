import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaAlignLeft,
  FaPalette,
  FaTasks,
  FaBirthdayCake,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "./Sidebar.css";

export default function Sidebar() {
  const { pathname } = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Lorem", path: "/lorem-generator", icon: <FaAlignLeft /> },
    { name: "Colors", path: "/color-generator", icon: <FaPalette /> },
    { name: "To-Do", path: "/todo-list", icon: <FaTasks /> },
    { name: "Birthdays", path: "/birthday-reminder", icon: <FaBirthdayCake /> },
  ];

  return (
    <>
      {/* Desktop + Tablet Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Small Projects</h2>

        <nav>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={
                pathname === link.path ? "active nav-link" : "nav-link"
              }
            >
              <span className="icon">{link.icon}</span>
              <span className="text">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="theme-area">
          <ThemeToggle />
        </div>
      </aside>

      {/* Mobile Bottom Bar */}
      <div className="mobile-nav">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              pathname === link.path ? "active mobile-link" : "mobile-link"
            }
          >
            <span>{link.icon}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
