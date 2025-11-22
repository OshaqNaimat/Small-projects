import { useState } from "react";

export default function LoremGenerator() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const generateLorem = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ";
    setText(lorem.repeat(count));
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Lorem Generator</h1>

      <input
        type="number"
        min="1"
        max="10"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        className="border px-3 py-2 w-32"
      />

      <button
        onClick={generateLorem}
        className="ml-3 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Generate
      </button>

      <p className="mt-4">{text}</p>
    </div>
  );
}
