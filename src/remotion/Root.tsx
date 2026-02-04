import { Composition } from 'remotion';
import { HeroSequence } from './HeroSequence';
import { VaultBackgroundSequence } from './VaultBackgroundSequence';
import { VaultHomeSequence } from './VaultHomeSequence';

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
      <Composition
        id="VaultBackgroundSequence"
        component={VaultBackgroundSequence}
        durationInFrames={300} // 10 seconds Loop
        fps={30}
        width={1080} // Square/Portrait friendly
        height={1080}
      />
      <Composition
        id="VaultHomeSequence"
        component={VaultHomeSequence}
        durationInFrames={300} // 10 seconds Loop
        fps={30}
        width={1080} 
        height={1080}
      />
    </>
  );
};
