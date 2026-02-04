import React from 'react';
import { Composition } from 'remotion';
import { HeroSequence } from './HeroSequence';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroSequence"
        component={HeroSequence}
        durationInFrames={450} // 15 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
