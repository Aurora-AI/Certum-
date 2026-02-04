import { AbsoluteFill, Img, useCurrentFrame, interpolate, staticFile } from "remotion";

export const VaultBackgroundSequence: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle Pan/Zoom Effect
  const scale = interpolate(frame, [0, 300], [1.1, 1.2]);
  const y = interpolate(frame, [0, 300], [0, -20]);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <Img 
        src={staticFile("assets/generated/abstract_city_rain_bokeh.png")}
        style={{
            transform: `scale(${scale}) translateY(${y}px)`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.8 // Dark and Moody
        }}
      />
      {/* Noise Overlay */}
      <div 
        style={{
            position: "absolute",
            inset: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </AbsoluteFill>
  );
};
