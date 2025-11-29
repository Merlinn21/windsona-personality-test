export default function BackgroundContainer({
  background,
  children,
  style = {}
}) {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        ...style
      }}
    >

      {/* --- BACKGROUND LAYER (fixed) --- */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      >
        <img
          src="/images/ic_background_gradient.png"
          alt=""
          style={{
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />

        <img
          src="/images/ic_background_cloud.png"
          alt=""
          style={{
            width: '70%',
            position: 'absolute',
            top: '-5%',
            left: '-25%'
          }}
        />

        <img
          src="/images/ic_background_cloud.png"
          alt=""
          style={{
            width: '60%',
            position: 'absolute',
            top: '-5%',
            right: '-20%'
          }}
        />
      </div>


      {/* --- FOREGROUND CONTENT AREA --- */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flex: 1,              // Important: allows content to grow
        }}
      >
        {children}
      </div>


      {/* --- BOTTOM IMAGE (follows content) --- */}
      <img
        src={background}
        alt=""
        style={{
            width: '100%',
            objectFit: 'cover',
            zIndex: 5,
            pointerEvents: 'none',
            display: 'block',    // eliminate whitespace below images
        }}
    />

    </div>
  );
}
