import { AbsoluteFill, Img, useCurrentFrame, interpolate, staticFile } from "remotion";

export const ConsorcioHeroSequence: React.FC = () => {
    const frame = useCurrentFrame();

    // Slow, elegant rotation/drift
    const scale = interpolate(frame, [0, 300], [1, 1.1]);
    const rotate = interpolate(frame, [0, 300], [0, 2]); // Very subtle rotation

    return (
        <AbsoluteFill style={{ backgroundColor: "black" }}>
            <Img 
                src={staticFile("assets/generated/consorcio_hero_base.png")}
                style={{
                    transform: `scale(${scale}) rotate(${rotate}deg)`,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.9
                }}
            />
            
            {/* Gold Dust Overlay (Simulated with Noise/SVG) */}
            <div 
                style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.15,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "overlay"
                }}
            />
        </AbsoluteFill>
    );
};
