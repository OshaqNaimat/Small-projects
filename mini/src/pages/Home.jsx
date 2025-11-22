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
      <div className="flex justify-between p-3">
        <a
          href="https://github.com/OshaqNaimat"
          target="_blank"
          class="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          GitHub
        </a>
        <h2 className="text-center font-semibold text-2xl my-3">
          My mini Projects
        </h2>
        <a
          href="https://www.linkedin.com/in/oshaq-naimat-14347336a"
          target="_blank"
          class="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Linkedin
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        <div
          className="container flex justify-center items-center shadow-lg cursor-pointer  transform transition-transform duration-300 
            hover:-translate-y-2 rounded-md shadow-gray-500 p-10  "
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
            hover:-translate-y-2 rounded-md shadow-gray-500 p-10  "
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
            hover:-translate-y-2 rounded-md shadow-gray-500 p-10  "
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
            hover:-translate-y-2 rounded-md shadow-gray-500 p-10  "
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
