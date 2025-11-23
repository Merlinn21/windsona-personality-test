import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" role="status" aria-live="polite">
      <h2 className="text-xl font-semibold mb-2" tabIndex={0}>Loading...</h2>
      <p className="text-base" tabIndex={0}>Calculating your result...</p>
    </div>
  );
}
