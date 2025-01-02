import React from "react";

export default function ComponentLayout({ children }) {
  return (
    <div>
      <h1 className="text-5xl text-white mb-5">This is component layout header</h1>
      {children}
    </div>
  );
}
