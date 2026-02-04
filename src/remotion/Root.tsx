import { Composition } from 'remotion';
import { HeroSequence } from './HeroSequence';
import { VaultBackgroundSequence } from './VaultBackgroundSequence';
import { VaultHomeSequence } from './VaultHomeSequence';
import { ConsorcioHeroSequence } from "./ConsorcioHeroSequence";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="HeroSequence"
        component={HeroSequence}
        durationInFrames={360} // 12 seconds @ 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="VaultBackgroundSequence"
        component={VaultBackgroundSequence}
        durationInFrames={300} // 10 seconds
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="VaultHomeSequence"
        component={VaultHomeSequence}
        durationInFrames={300} // 10 seconds
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ConsorcioHeroSequence"
        component={ConsorcioHeroSequence}
        durationInFrames={300} // 10 seconds
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
