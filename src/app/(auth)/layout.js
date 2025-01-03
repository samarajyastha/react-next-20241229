import Link from "next/link";
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div>
      <nav className="flex justify-around p-5">
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/forgot-password"}>Forgot Password</Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
