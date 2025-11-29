import React from "react";

export default function ExplanationPage({ onBack, onContinue }) {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} role="main" aria-label="Landing Page">
      <button
        onClick={onBack}
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          position: 'absolute',
          zIndex: 10,
          top: '1rem',
          left: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        aria-label="Back to Landing"
      >
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="24" />
          <path d="M30 24H18M18 24L24 18M18 24L24 30" stroke="#ffffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

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

      <img
        src="/images/ic_continue.png"
        style={{
          width: '70%',
          position: 'fixed',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: '32px',
          zIndex: 3,
          cursor: 'pointer'
        }}
        onClick={onContinue}
        alt="Continue Button"
      />
      <img
          src="/images/ic_background_ground.png"
          style={{ width: '100%', position: 'fixed', left: 0,bottom: 0, zIndex: 2 }}
      />
    </div>
  );
}
