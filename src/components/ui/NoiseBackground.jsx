function NoiseBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        pointer-events-none
        mix-blend-soft-light
        opacity-[0.025]
        z-[999]
      "
      style={{
        backgroundImage: `
          repeating-radial-gradient(
            circle at 0 0,
            transparent 0,
            rgba(255,255,255,0.15) 1px,
            transparent 2px
          )
        `,
        backgroundSize: "4px 4px",
      }}
    />
  );
}

export default NoiseBackground;