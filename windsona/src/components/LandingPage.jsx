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
          style={{ width: '80%', position: 'absolute', zIndex: 3, top : '15%', alignItems: 'center', left: '10%' }}
        />
      </div>

      <p 
        style={{
            fontFamily: "'Pixelify Sans', sans-serif",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "1.25",
            textAlign: "center",
            color: "#FFFFFF",
            textShadow: `
              -2px -2px 0 #331D0E,
              2px -2px 0 #331D0E,
              -2px  2px 0 #331D0E,
              2px  2px 0 #331D0E,
              -2px  0px 0 #331D0E,
              2px  0px 0 #331D0E,
              0px -2px 0 #331D0E,
              0px  2px 0 #331D0E
            `
          }}
      >
        CATCH YOUR VIBE, MEET YOUR WINDSONA
      </p>

      <img
        src="/images/ic_start.png"
        style={{ width: '50%', display: 'block', margin: 'auto 0 auto', zIndex: 2 }}
      />
      <img
          src="/images/ic_background_ground.png"
          style={{ width: '100%', position: 'absolute',bottom: 0, zIndex: 2 }}
      />
    </div>
  );

}
