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
        My mini Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        <div
          className="container flex justify-center items-center shadow-lg cursor-pointer  transform transition-transform duration-300 
            hover:-translate-y-2 rounded-md shadow-black p-10  "
        >
          <Link to="/lorem-generator" className="project-card">
            <div className="flex justify-center">
              <FaAlignLeft size={32} />
            </div>
            <p>Lorem Generator</p>
          </Link>
        </div>
        <div
          className="container flex justify-center items-center shadow-lg cursor-pointer  transform transition-transform duration-300 
            hover:-translate-y-2 rounded-md shadow-black p-10  "
        >
          <Link to="/color-generator" className="project-card">
            <div className="flex justify-center">
              <FaPalette size={32} />
            </div>
            <p>Color Generator</p>
          </Link>
        </div>
        <div
          className="container flex justify-center items-center shadow-lg cursor-pointer  transform transition-transform duration-300 
            hover:-translate-y-2 rounded-md shadow-black p-10  "
        >
          <Link to="/todo-list" className="project-card">
            <div className="flex justify-center">
              <FaTasks size={32} />
            </div>
            <p>To-Do List</p>
          </Link>
        </div>
        <div
          className="container flex justify-center items-center shadow-lg cursor-pointer  transform transition-transform duration-300 
            hover:-translate-y-2 rounded-md shadow-black p-10  "
        >
          <Link to="/birthday-reminder" className="project-card">
            <div className="flex justify-center">
              <FaBirthdayCake size={32} />
            </div>
            <p>Birthday Reminder</p>
          </Link>
        </div>
      </div>
    </>
  );
}
