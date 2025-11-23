import React from "react";

export default function ExplanationPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-white text-gray-800" role="main" aria-label="Explanation Page">
      <h1 className="text-2xl font-bold mb-4" tabIndex={0}>About This Test</h1>
      <p className="mb-4 max-w-xl text-center" tabIndex={0}>
        This personality test is designed for fun and self-reflection. Your answers are not stored or shared; everything runs locally in your browser. No personal data is collected, and your progress resets if you reload the page.
      </p>
      <div className="mb-4 max-w-xl text-center" tabIndex={0}>
        <strong>Purpose:</strong> To help you explore your personality type in a simple, engaging way.<br />
        <strong>Privacy:</strong> No tracking, no cookies, no data collection. 100% private.
      </div>
      <p className="text-sm text-gray-500" tabIndex={0}>For entertainment only. Not a clinical or diagnostic tool.</p>
    </div>
  );
}
