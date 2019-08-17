import React from 'react';

import styled from '@emotion/styled';
import FountainHeading from '../molecules/FountainHeading';
import {
  mobileQuery,
  laptopQuery,
  desktopQuery,
  tabletQuery,
} from '../../utils/mediaqueries';

import theme from '../../utils/theme/theme';

const Wrapper = styled.section(
  {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
  },
  props => ({
    background: props.background ? props.background : theme.colors.white,
  }),
);

const Content = styled.div(
  {
    display: 'flex',
    flexWrap: 'wrap',

    [mobileQuery]: {
      margin: '0 30px',
    },

    [tabletQuery]: {
      margin: '0 120px 50px',
    },

    [laptopQuery]: {
      margin: '0 175px 50px',
    },

    [desktopQuery]: {
      margin: '0 300px 50px',
    },
  },
  props => ({
    justifyContent: props.spaceAround ? 'space-around' : 'center',
  }),
);

const Section = ({ heading, children, id, background, spaceAround }) => (
  <Wrapper id={id} background={background}>
    <FountainHeading mobileMargin="0 1px">{heading}</FountainHeading>
    <Content spaceAround={spaceAround}>{children}</Content>
  </Wrapper>
);

export default Section;
