import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import LoremGenerator from "./pages/LoremGenerator";
import ColorGenerator from "./pages/ColorGenerator";
import TodoList from "./pages/TodoList";
import BirthdayReminder from "./pages/BirthdayReminders";

export default function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-10 min-h-screen">
      {/* Sidebar */}
      <div className="lg:col-span-3 md:col-span-2  ">
        <Sidebar />
      </div>

      {/* Routes / Main Content */}
      <div className="lg:col-span-7 md:col-span-8 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lorem-generator" element={<LoremGenerator />} />
          <Route path="/color-generator" element={<ColorGenerator />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/birthday-reminder" element={<BirthdayReminder />} />
        </Routes>
      </div>
    </div>
  );
}
