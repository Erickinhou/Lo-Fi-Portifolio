import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  GitHub,
  Linkedin,
  Instagram,
  Facebook,
  ArrowLeft
} from "react-feather";
import Music from "./Music";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  GitHubIcon,
  SideNav,
  IconBottom,
  SpaceTop,
  ArrowWrapper
} from "./style";
export default function SideNavigation() {
  const location = useLocation();
  const history = useHistory();

  const socialMedia = {
    linkedin: "https://www.linkedin.com/in/erick-willian-8553a2133/",
    facebook: "https://www.facebook.com/erick.willian.16100",
    gitHub: "https://github.com/Erickinhou",
    instagram: "https://www.instagram.com/erick_willian_/"
  };

  const IconsAttr = {
    strokeWidth: "1.2",
    width: "2.7vw",
    height: "2.7vw"
  };

  const IconsBottomAttr = {
    strokeWidth: "1.2",
    width: "2vw",
    height: "2vw",
    color: "var(--light)"
  };

  return (
    <SideNav>
      {location.pathname !== "/" && (
        <ArrowWrapper
          whileHover={{ scale: 1.2 }}
          onClick={() => history.goBack()}
        >
          <ArrowLeft {...IconsAttr} />
        </ArrowWrapper>
      )}
      <SpaceTop />
      <GitHubIcon href={socialMedia.gitHub} target="_blank">
        <GitHub {...IconsAttr}></GitHub>
      </GitHubIcon>
      <LinkedinIcon href={socialMedia.linkedin} target="_blank">
        <Linkedin {...IconsAttr}></Linkedin>
      </LinkedinIcon>
      <InstagramIcon href={socialMedia.instagram} target="_blank">
        <Instagram {...IconsAttr}></Instagram>
      </InstagramIcon>
      <FacebookIcon href={socialMedia.facebook} target="_blank">
        <Facebook {...IconsAttr}></Facebook>
      </FacebookIcon>
      <IconBottom>
        <Music {...IconsBottomAttr}></Music>
      </IconBottom>
    </SideNav>
  );
}
