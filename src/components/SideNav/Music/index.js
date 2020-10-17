import React, { useState } from 'react';
import { Volume2, Volume } from 'react-feather';
import lofiBokuNoHero from '../../../assets/my hero academia the day lofi.mp3';

export default function Music(props) {
  const [mute, setMute] = useState(false);
  const HandlePlay = (event) => {
    const audio = event.target;
    audio.volume = 0.3;
    audio.play();
    console.log('teste');
  };
  return (
    <div onClick={() => setMute(!mute)}>
      {mute ? (
        <Volume {...props} color="var(--light)"></Volume>
      ) : (
        <Volume2 {...props} color="var(--light)"></Volume2>
      )}
      <audio
        {...(mute ? { muted: 'muted' } : {})}
        onCanPlayCapture={HandlePlay}
      >
        <source src={lofiBokuNoHero} type="audio/mpeg"></source>
      </audio>
    </div>
  );
}
