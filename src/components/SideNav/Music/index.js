import React, { useState, useRef } from 'react';
import { Volume2, Volume, Play, Pause } from 'react-feather';
import lofiBokuNoHero from '../../../assets/my hero academia the day lofi.mp3';
import { MusicArea } from './style';

export default function Music(props) {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const music = useRef(null);
  const renderVideo = () => (
    <audio
      {...(muted ? { muted: true } : {})}
      onCanPlay={(e) => setIsPlaying(e.target.paused)}
      autoPlay={false}
      ref={music}
    >
      <source src={lofiBokuNoHero} type="audio/mpeg"></source>
    </audio>
  );

  const handlePlay = () => {
    isPlaying ? music.current.play() : music.current.pause();
    setIsPlaying(!isPlaying);
  };
  return (
    <MusicArea>
      <div onClick={handlePlay}>
        {isPlaying ? <Play {...props}></Play> : <Pause {...props}></Pause>}
      </div>
      <div onClick={() => setMuted(!muted)}>
        {muted ? <Volume {...props}></Volume> : <Volume2 {...props}></Volume2>}
        {renderVideo()}
      </div>
    </MusicArea>
  );
}
