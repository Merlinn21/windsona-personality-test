import React from "react";
import BackgroundContainer from "./component/BackgroundContainer";
export default function LandingPage({ onStart, onExplain }) {

  return (
    <BackgroundContainer
      background="/images/ic_background_ground.png"
    >
      <div style={{ marginTop: '10rem', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/images/ic_windsona_logo.png"
          style={{ height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          alt=""
        />
      </div>

      <p 
        className="font-pixelify"
        style={{marginTop: '-4rem'}}
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

    </BackgroundContainer>
  );

}
