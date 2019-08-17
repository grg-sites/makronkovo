import React from 'react';
import SquarePic from '../atoms/SquarePic';
import styled from '@emotion/styled';
import { laptopQuery, desktopQuery } from '../../utils/mediaqueries';
import Paragraph from '../atoms/Paragraph';

const LabeledSquarePicWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
});

const DescriptionWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  [laptopQuery]: {
    height: '95px',
  },

  [desktopQuery]: {
    height: '95px',
  },
});

const LabeledSquarePic = ({ src, href, heading, description }) => (
  <LabeledSquarePicWrapper>
    <SquarePic src={src} href={href} />
    <DescriptionWrapper>
      <Paragraph bold>{heading}</Paragraph>
      <Paragraph>{description}</Paragraph>
    </DescriptionWrapper>
  </LabeledSquarePicWrapper>
);

export default LabeledSquarePic;
