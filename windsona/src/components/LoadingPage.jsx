import React from "react";
import BackgroundContainer from "./component/BackgroundContainer";

export default function LoadingPage() {
  return (
    <BackgroundContainer
      background="/images/ic_background_ground.png"
    >
      <div style={{ marginTop: '-2rem', height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/images/ic_windsona_logo.png"
          style={{ height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          alt=""
        />
      </div>

      <div style={{ marginTop: '4rem', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src="/images/ic_loading_windsona.png"
          className="shake-interval"
          style={{ height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
          alt=""
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <p
          className="font-pixelify dot-animate"
          style={{ margin: '4rem auto', fontSize: '24px' }}
        >
          YOUR WINDSONA IS
        </p>
      </div>
    </BackgroundContainer>
  );
}
