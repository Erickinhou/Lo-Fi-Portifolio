import React, { useState, useRef, useEffect } from 'react';
import { Volume2, Volume, Play, Pause } from 'react-feather';
import lofiBokuNoHero from '../../../assets/my hero academia the day lofi.mp3';
import lofiNova from '../../../assets/mell-ø - nova.mp3';
import { MusicArea } from './style';

export default function Music(props) {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const music = useRef(null);
  useEffect(() => {
    const randomNumber = Math.random() * 2;

    if (randomNumber <= 1) {
      music.current.src = lofiNova;
    }
    if (randomNumber > 1) {
      music.current.src = lofiBokuNoHero;
    }
  }, []);
  const renderVideo = () => (
    <audio
      {...(muted ? { muted: true } : {})}
      onCanPlay={(e) => setIsPlaying(e.target.paused)}
      autoPlay={false}
      ref={music}
    ></audio>
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
