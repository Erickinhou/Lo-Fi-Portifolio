import React, { useState, useRef, useEffect } from "react";
import { Volume2, Volume, Play, Pause } from "react-feather";
import lofiBokuNoHero from "../../../assets/songs/bokuNoHeroLofi.mp3";
import lofiNova from "../../../assets/songs/novaLofi.mp3";
import dororoLofi from "../../../assets/songs/dororoLofi.mp3";
import flowersLofi from "../../../assets/songs/flowersLofi.mp3";
import { useAnimation } from "framer-motion";
import { volumeAnimation } from "../../../animations";

import { MusicArea, VolumeWrapper } from "./style";

export default function Music(props) {
  const musics = [lofiBokuNoHero, lofiNova, dororoLofi, flowersLofi];

  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [currentSong, setCurrentSong] = useState(1);

  const controls = useAnimation();
  const music = useRef(null);

  useEffect(() => {
    const IntegerRandomNumber = Math.floor(Math.random() * 4);
    music.current.src = musics[IntegerRandomNumber];
    music.current.volume = volume;
    setCurrentSong(IntegerRandomNumber);
  }, []);

  const handleSongEnd = async () => {
    const newIdex = (currentSong + 1) % (musics.length - 1);
    music.current.src = musics[newIdex];
    await setCurrentSong(newIdex);
    music.current.play();
  };

  const renderVideo = () => (
    <audio
      {...(muted ? { muted: true } : {})}
      onCanPlay={(e) => setIsPlaying(e.target.paused)}
      autoPlay={true}
      ref={music}
      onEnded={handleSongEnd}
      src=""
    ></audio>
  );

  const handlePlay = () => {
    isPlaying ? music.current.play() : music.current.pause();
    setIsPlaying(!isPlaying);
  };

  const handleVolume = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    setMuted(false);
    music.current.volume = newVolume;
  };

  const trackAnimation = {
    transform: `translateX(${volume * 100}%)`,
  };

  return (
    <MusicArea
      className="music"
      onMouseOver={() => {
        controls.start("show");
      }}
      onMouseLeave={(event) => {
        controls.start("hidden");
      }}
    >
      <div onClick={handlePlay}>
        {isPlaying ? <Play {...props}></Play> : <Pause {...props}></Pause>}
      </div>
      <div onClick={() => setMuted(!muted)}>
        {muted ? <Volume {...props}></Volume> : <Volume2 {...props}></Volume2>}
        {renderVideo()}
      </div>
      <VolumeWrapper
        variants={volumeAnimation}
        animate={controls}
        initial="hidden"
      >
        <div className="track">
          <input
            min={0}
            onChange={handleVolume}
            type="range"
            name="volume"
            id="volume"
            value={0}
          />
          <div style={trackAnimation} className="blank-track"></div>
        </div>
      </VolumeWrapper>
    </MusicArea>
  );
}
