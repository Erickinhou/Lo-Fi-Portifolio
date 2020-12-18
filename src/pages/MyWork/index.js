import React from 'react';
import {
  Background,
  MarginOffset,
} from './style';
import WorkData from './workData'
export default function index() {
  return (
    <Background>
      <MarginOffset>
        <WorkData>
        </WorkData>
      </MarginOffset>
    </Background>
  );
}
