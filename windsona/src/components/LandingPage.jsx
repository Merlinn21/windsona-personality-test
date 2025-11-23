import React from "react";

export default function LandingPage({ onStart, onExplain }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen" role="main" aria-label="Landing Page">
      <h1 className="text-2xl font-bold mb-4" tabIndex={0}>Minimal Personality Test Website</h1>
      <p className="mb-8 text-base text-gray-700" tabIndex={0}>Welcome! Take a quick personality test and see your result.</p>
      <div className="flex gap-4" role="group" aria-label="Main actions">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={onStart}
          aria-label="Start Test"
        >
          Start Test
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded"
          onClick={onExplain}
          aria-label="Test Purpose & Privacy"
        >
          Purpose & Privacy
        </button>
      </div>
    </div>
  );
}
