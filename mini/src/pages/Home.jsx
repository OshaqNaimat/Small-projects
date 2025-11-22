import {
  FaAlignLeft,
  FaBirthdayCake,
  FaHome,
  FaPalette,
  FaTasks,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2 className="text-center font-semibold text-2xl my-3">
        My small Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        <div className="container shadow">
          <Link to="/" className="project-card">
            <FaHome size={32} />
            <p>Home</p>
          </Link>
        </div>
        <Link to="/lorem-generator" className="project-card">
          <FaAlignLeft size={32} />
          <p>Lorem Generator</p>
        </Link>
        <Link to="/color-generator" className="project-card">
          <FaPalette size={32} />
          <p>Color Generator</p>
        </Link>
        <Link to="/todo-list" className="project-card">
          <FaTasks size={32} />
          <p>To-Do List</p>
        </Link>
        <Link to="/birthday-reminder" className="project-card">
          <FaBirthdayCake size={32} />
          <p>Birthday Reminder</p>
        </Link>
      </div>
    </>
  );
}
