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
  const [currentSong, setCurrentSong] = useState(1);

  const controls = useAnimation();
  const music = useRef(null);

  useEffect(() => {
    const IntegerRandomNumber = Math.floor(Math.random() * 4);
    music.current.src = musics[IntegerRandomNumber];
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
      autoPlay={false}
      ref={music}
      onEnded={handleSongEnd}
      src=""
    ></audio>
  );

  const handlePlay = () => {
    isPlaying ? music.current.play() : music.current.pause();
    setIsPlaying(!isPlaying);
  };

  return (
    <MusicArea
      className="music"
      onMouseOver={(event) => {
        //this is the original element the event handler was assigned to
        const data = event.currentTarget;
        controls.start("show");
        // console.log("data ->", data);
      }}
      onMouseLeave={(event) => {
        console.log("event ->", event);
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
          <input min={0} type="range" name="volume" id="volume" />
          <div className="blank-track"></div>
        </div>
      </VolumeWrapper>
    </MusicArea>
  );
}
