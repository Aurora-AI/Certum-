import { AbsoluteFill, Img, useCurrentFrame, interpolate, staticFile } from "remotion";

export const VaultHomeSequence: React.FC = () => {
  const frame = useCurrentFrame();

  // Subtle Pan/Zoom Effect (Slower, organic)
  const scale = interpolate(frame, [0, 300], [1.2, 1.1]); // Zoom OUT
  const x = interpolate(frame, [0, 300], [0, 20]); // Slight Pan Right

  return (
    <AbsoluteFill style={{ backgroundColor: "#0a1a0f" }}> {/* Deep Green Base */}
      <Img 
        src={staticFile("assets/generated/abstract_jungle_glass.png")}
        style={{
            transform: `scale(${scale}) translateX(${x}px)`,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7 // Darker to let foreground pop
        }}
      />
      {/* Rain Noise Overlay */}
      <div 
        style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            mixBlendMode: "overlay",
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </AbsoluteFill>
  );
};
