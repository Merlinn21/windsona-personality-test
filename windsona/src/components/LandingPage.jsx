import React from "react";

export default function LandingPage({ onStart, onExplain }) {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} role="main" aria-label="Landing Page">
      <div style={{ position: 'relative', width: '100%', minHeight: '50vh' }}>
        <img
          src="/images/ic_background_gradient.png"
          alt="Landing Page Image"
          style={{ width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        />

        <img
          src="/images/ic_background_cloud.png"
          alt="Landing Page Image"
          style={{ width: '60%', position: 'absolute', top: '-10%', left: '-25%', zIndex: 2 }}
        />

        <img
          src="/images/ic_background_cloud.png"
          alt="Landing Page Image"
          style={{ width: '60%', position: 'absolute', top: '-10%', right: '-20%', zIndex: 2 }}
        />

        <img
          src="/images/ic_windsona_logo.png"
          alt="Landing Page Image"
          style={{ width: '80%', position: 'absolute', zIndex: 3, top : '30%', alignItems: 'center', left: '10%' }}
        />
      </div>

      <p 
        className="font-pixelify"
      >
        CATCH YOUR VIBE, MEET YOUR WINDSONA
      </p>

      <img
        src="/images/ic_start.png"
        style={{ width: '50%', display: 'block', margin: 'auto 0 auto', zIndex: 2, cursor: 'pointer' }}
        onClick={onExplain}
        onTouchStart={e => { e.preventDefault(); onExplain(); }}
        alt="Start Button"
      />
      <img
          src="/images/ic_background_ground.png"
          style={{ width: '100%', position: 'fixed', left: 0,bottom: 0, zIndex: 2, height: '200px' }}
      />
    </div>
  );

}
