import React from 'react';
import { GitHub, Linkedin, Instagram, Facebook } from 'react-feather';
import Music from './Music';
import { Icon, SideNav, IconBottom, SpaceTop } from './style';
export default function SideNavigation() {
  const socialMedia = {
    linkedin: 'https://www.linkedin.com/in/erick-willian-8553a2133/',
    facebook: '/',
    gitHub: '/',
    instagram: '/',
  };

  const IconsAttr = {
    strokeWidth: '1.2',
    width: '3vw',
    height: '3vw',
  };

  return (
    <SideNav>
      <SpaceTop></SpaceTop>
      <Icon href={socialMedia.gitHub} target="_blank">
        <GitHub {...IconsAttr}></GitHub>
      </Icon>
      <Icon className="linkedin" href={socialMedia.linkedin} target="_blank">
        <Linkedin {...IconsAttr}></Linkedin>
      </Icon>
      <Icon href={socialMedia.instagram} target="_blank">
        <Instagram {...IconsAttr}></Instagram>
      </Icon>
      <Icon href={socialMedia.facebook} target="_blank">
        <Facebook {...IconsAttr}></Facebook>
      </Icon>
      <IconBottom>
        <Music {...IconsAttr}></Music>
      </IconBottom>
    </SideNav>
  );
}
