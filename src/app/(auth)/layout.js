"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function AuthLayout({ children }) {
  const [value, setValue] = useState("");

  return (
    <div>
      <nav className="flex justify-around p-5">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/forgot-password"}>Forgot Password</Link>
      </nav>

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

      <div>{children}</div>
    </div>
  );
}
