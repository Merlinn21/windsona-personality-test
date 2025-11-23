import React from "react";

export default function ResultDetailPage({ result }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen" role="main" aria-label="Result Details Page">
      <h2 className="text-xl font-semibold mb-2" tabIndex={0}>Result Details</h2>
      <p className="text-base mb-4" tabIndex={0}>{result ? result : "No result available."}</p>
      <div className="text-sm text-gray-700" tabIndex={0}>
        {/* Minimal explanation logic */}
        {result === "You are very Agreeable!" && (
          <p>You answered "Agree" to all questions. You are highly sociable and open to new experiences.</p>
        )}
        {result === "You are very Disagreeable!" && (
          <p>You answered "Disagree" to all questions. You prefer solitude and consistency.</p>
        )}
        {result === "You lean Agreeable." && (
          <p>You tend to be sociable and open, but also value some planning and routine.</p>
        )}
        {result === "You lean Disagreeable." && (
          <p>You value routine and planning, but are open to new experiences occasionally.</p>
        )}
        {result === "You are mostly Neutral." && (
          <p>Your answers are balanced. You adapt well to different situations.</p>
        )}
      </div>
    </div>
  );
}
