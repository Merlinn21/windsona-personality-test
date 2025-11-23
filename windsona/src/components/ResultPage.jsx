import React from "react";

export default function ResultPage({ result }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen" role="main" aria-label="Result Page">
      <h2 className="text-xl font-semibold mb-2" tabIndex={0}>Your Personality Result</h2>
      <p className="text-base mb-4" tabIndex={0}>{result ? result : "(Your result will appear here)"}</p>
      {/* Add navigation to details in Phase 4 */}
    </div>
  );
}
