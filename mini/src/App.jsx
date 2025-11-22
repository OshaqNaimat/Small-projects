import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import LoremGenerator from "./pages/LoremGenerator";
import ColorGenerator from "./pages/ColorGenerator";
import TodoList from "./pages/TodoList";
import BirthdayReminder from "./pages/BirthdayReminder";

export default function App() {
  return (
    <>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lorem-generator" element={<LoremGenerator />} />
          <Route path="/color-generator" element={<ColorGenerator />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/birthday-reminder" element={<BirthdayReminder />} />
        </Routes>
      </div>
    </>
  );
}
