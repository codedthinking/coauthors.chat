export function HeroBackground() {
  return (
    <>
      {/* Upper div - Hero section and area below background with specified colors */}
      <div 
        className="hero-background-upper"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '200vh',
          zIndex: -1,
          pointerEvents: 'none',
          background: `
            radial-gradient(38.75% 42.03% at 100% 57.94%, rgba(169, 201, 217, 0.3) 0%, rgba(169, 201, 217, 0) 100%),
            radial-gradient(23.58% 24.19% at 5.07% 58.74%, rgba(197, 173, 235, 0.3) 0%, rgba(197, 173, 235, 0) 100%),
            radial-gradient(24.71% 32.72% at 28.47% 3.6%, rgba(249, 244, 238, 0.3) 0%, rgba(249, 244, 238, 0) 100%),
            radial-gradient(37.01% 49.74% at 83.92% 39.57%, rgba(252, 166, 134, 0.3) 0%, rgba(245, 144, 117, 0) 100%),
            radial-gradient(34.72% 23.13% at -2.47% 66.92%, rgba(252, 203, 133, 0.3) 0%, rgba(252, 203, 133, 0) 100%),
            radial-gradient(61.54% 44.91% at 44.34% 0%, rgba(252, 203, 133, 0.3) 0%, rgba(252, 203, 133, 0) 100%)
          `
        }}
      />
      {/* Lower div - Second background layer */}
      <div 
        className="hero-background-lower"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '200vh',
          zIndex: -2,
          pointerEvents: 'none',
          background: `
            radial-gradient(49.52% 35% at -3.92% 52.32%, rgba(169, 201, 217, 0.2) 0%, rgba(169, 201, 217, 0) 100%),
            radial-gradient(23.58% 24.19% at 5.07% 58.74%, rgba(197, 173, 235, 0.2) 0%, rgba(197, 173, 235, 0) 100%)
          `
        }}
      />
    </>
  );
}
