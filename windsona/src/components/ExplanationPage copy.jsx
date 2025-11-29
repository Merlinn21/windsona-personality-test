import React from "react";

export default function ExplanationPage({ onBack, onContinue }) {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} role="main" aria-label="Landing Page">
      <div style={{ position: 'relative', width: '100%', minHeight: '15vh' }}>
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
      </div>

      <img
        src="/images/ic_explanation_loading.png"
        alt="Landing Page Image"
        style={{ width: '80%', display: 'block', margin: '0 auto', zIndex: 2, cursor: 'pointer' }}
      />

      <div
        style={{width: '65%', marginTop: '-88px', padding: '12px', borderRadius: '8px',textAlign: 'start', borderWidth: '2px', borderColor: '#331D0E', backgroundColor: '#FFFFFF' }}>
        <h1 className="font-pixelify" style={{color: '#FFD200', fontSize: '24px'}}>ARE YOU READY?</h1>

        <p className="font-courier-prime" style={{fontSize: '14px', marginTop: '8px'}}>
          Siap ketemu Windsona kamu?
          <br/>
          <br/>
          Masuk ke 10 skenario seru dan pilih jawaban yang paling “kamu banget”. Ikuti insting aja—bayangin ini semua kejadian beneran di dunia game!
          <br/>
          <br/>
          Di akhir, kamu bakal unlock Windsona yang paling cocok sama vibe dan cara kamu ngejalanin hidup.
        </p>
      </div>

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
          src="/images/ic_continue.png"
          alt="Continue"
          style={{
            display: 'block',
            margin: '0 auto',
            pointerEvents: 'none',
            width: '180px',
          }}
        />

        {/* CLICKABLE HITBOX — placed on top */}
        <div
          onPointerDown={onContinue}
          style={{
            position: 'absolute',
            top: '40%',                      // adjust if needed
            left: '50%',                   // center horizontally
            transform: 'translateX(-50%)', // center alignment
            width: '180px',
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
