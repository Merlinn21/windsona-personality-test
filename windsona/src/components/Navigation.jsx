import React from "react";

export default function Navigation({ currentPage, setPage }) {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-end p-2">
      {currentPage !== "landing" && (
        <button className="text-sm px-2 py-1" onClick={() => setPage("landing")}>
          Home
        </button>
      )}
      <button className="text-sm px-2 py-1" onClick={() => setPage("explanation")}>About</button>
    </nav>
  );
}
