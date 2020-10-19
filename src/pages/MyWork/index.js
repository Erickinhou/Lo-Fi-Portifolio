import React from 'react';
import {
  Background,
  ProfessionalXp,
  Title,
  MarginOffset,
  SideNav,
  ProfessionalContent,
  SideButton,
} from './style';
export default function index() {
  return (
    <Background>
      <MarginOffset>
        <Title>Professional Experience</Title>
        <ProfessionalXp>
          <SideNav>
            <SideButton>SideButton</SideButton>
          </SideNav>
          <ProfessionalContent> teste</ProfessionalContent>
        </ProfessionalXp>
      </MarginOffset>
    </Background>
  );
}
