import React, { useState, useRef, useEffect } from "react";
import { Volume2, Volume, Play, Pause } from "react-feather";
import lofiBokuNoHero from "../../../assets/songs/bokuNoHeroLofi.mp3";
import lofiNova from "../../../assets/songs/novaLofi.mp3";
import dororoLofi from "../../../assets/songs/dororoLofi.mp3";
import flowersLofi from "../../../assets/songs/flowersLofi.mp3";
import { MusicArea } from "./style";

export default function Music(props) {
  const [muted, setMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSong, setCurrentSong] = useState(1);
  const music = useRef(null);
  const musics = [lofiBokuNoHero, lofiNova, dororoLofi, flowersLofi];
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
