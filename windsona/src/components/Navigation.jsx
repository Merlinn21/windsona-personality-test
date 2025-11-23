import React from "react";

export default function Navigation({ currentPage, setPage }) {
  return (
    <nav style={{ position: 'absolute', top: 0, left: 0, width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '0.5rem' }}>
      {currentPage !== "landing" && (
        <button style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem', border: 'none', background: '#eee', borderRadius: '0.25rem' }} onClick={() => setPage("landing")}>
          Home
        </button>
      )}
      {/* <button className="text-sm px-2 py-1" onClick={() => setPage("explanation")}>About</button> */}
    </nav>
  );
}
