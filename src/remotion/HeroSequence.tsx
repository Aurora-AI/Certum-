import { AbsoluteFill, Img, useCurrentFrame, interpolate, Sequence, useVideoConfig, staticFile } from 'remotion';
import React from 'react';

const Scene = ({ src, startFrame, duration, scaleStart, scaleEnd, text }: any) => {
    const frame = useCurrentFrame();
    const opacity = interpolate(
        frame,
        [0, 20, duration - 20, duration],
        [0, 1, 1, 0]
    );
    
    const scale = interpolate(
        frame,
        [0, duration],
        [scaleStart, scaleEnd]
    );

    return (
        <AbsoluteFill style={{ opacity }}>
            <Img 
                src={src} 
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: `scale(${scale})`
                }}
            />
            {text && (
                 <div style={{
                     position: 'absolute',
                     bottom: 100,
                     left: 100,
                     color: 'white',
                     fontFamily: 'sans-serif',
                     fontSize: 40,
                     letterSpacing: 10,
                     textTransform: 'uppercase',
                     opacity: 0.8
                 }}>
                     {text}
                 </div>
            )}
        </AbsoluteFill>
    );
};

export const HeroSequence = () => {
    const { fps } = useVideoConfig();

    return (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            
            {/* Scene 1: Garage */}
            <Sequence from={0} durationInFrames={120}>
                <Scene 
                    src={staticFile("assets/generated/sovereign_garage_bright.png")} 
                    duration={120} 
                    scaleStart={1} 
                    scaleEnd={1.1}
                    text="CONSÓRCIO"
                />
            </Sequence>

            {/* Scene 2: Watch */}
            <Sequence from={100} durationInFrames={120}>
                <Scene 
                    src={staticFile("assets/generated/time_vault_bright.png")} 
                    duration={120} 
                    scaleStart={1.2} 
                    scaleEnd={1}
                    text="WEALTH"
                />
            </Sequence>

             {/* Scene 3: Math */}
             <Sequence from={200} durationInFrames={120}>
                <Scene 
                    src={staticFile("assets/generated/abstract_math_bright.png")} 
                    duration={120} 
                    scaleStart={1} 
                    scaleEnd={1.15}
                    text="ESTRATÉGIA"
                />
            </Sequence>

             {/* Scene 4: Family */}
             <Sequence from={300} durationInFrames={150}>
                 <Scene 
                    src={staticFile("assets/nano-banana/family.png")} 
                    duration={150} 
                    scaleStart={1.1} 
                    scaleEnd={1}
                    text="SEGUROS"
                />
            </Sequence>

            {/* Bright, clean overlay (White tint) */}
            <AbsoluteFill style={{ pointerEvents: 'none' }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))',
                    boxShadow: 'inset 0 0 100px rgba(255,255,255,0.1)'
                }}/>
            </AbsoluteFill>

        </AbsoluteFill>
    );
};
