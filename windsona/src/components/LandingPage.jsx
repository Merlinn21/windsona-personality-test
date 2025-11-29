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

      <div
        style={{
          position: 'relative',
          width: 'fit-content',
          margin: '0 auto',
          backgroundColor: 'transparent',
        }}
      >
        {/* IMAGE — large, natural size */}
        <img
          src="/images/ic_start.png"
          alt="Start"
          style={{
            display: 'block',
            margin: '0 auto',
            pointerEvents: 'none',
            width: '160px',
          }}
        />

        {/* CLICKABLE HITBOX — placed on top */}
        <div
          onPointerDown={onExplain}
          style={{
            position: 'absolute',
            top: '40%',                      // adjust if needed
            left: '50%',                   // center horizontally
            transform: 'translateX(-50%)', // center alignment
            width: '160px',
            height: '50px',
            cursor: 'pointer',
            zIndex: 10,
            backgroundColor: 'transparent', // invisible but clickable
          }}
        />
      </div>


      <img
        src="/images/ic_background_ground.png"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '200px',
          display: 'block',
          zIndex: 2,
          pointerEvents: 'none'
        }}
        alt="Background Ground"
      />
    </div>
  );

}
