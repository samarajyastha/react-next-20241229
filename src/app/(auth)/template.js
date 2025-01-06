"use client";
import { useState } from "react";

export default function AuthTemplate({ children }) {
  const [value, setValue] = useState("");

  return (
    <div className="mt-5">
      <h2 className="text-2xl p-3">Template</h2>
      <input
        type="text"
        className="text-black"
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => {
          alert(value);
        }}
      >
        Submit
      </button>
      {children}
    </div>
  );
}
