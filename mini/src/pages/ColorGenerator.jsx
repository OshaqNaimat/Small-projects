import { useState } from "react";

export default function ColorGenerator() {
  const [color, setColor] = useState("#3498db");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Color Generator</h1>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-16 h-16 cursor-pointer"
      />

      <div
        className="mt-4 w-48 h-48 rounded shadow"
        style={{ background: color }}
      ></div>

      <p className="mt-2 font-mono">{color}</p>
    </div>
  );
}
