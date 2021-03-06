import React from 'react';
import FountainHeading from '../components/molecules/FountainHeading';
import Layout from '../components/organisms/Layout/Layout';
import styled from '@emotion/styled';
import { tabletQuery } from '../utils/mediaqueries';
import SEO from '../components/atoms/SEO';

const ContentWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [tabletQuery]: {
    marginBottom: '100px',
  },
});

const CardsWrapper = styled.div({
  width: '100%',
});

const AboutTemplate = ({ cards }) => {
  return (
    <Layout>
      <SEO title="O nás | MAKRONKOVO - Cukrárska manufaktúra" />
      <FountainHeading margin="0 5px 15px">O NÁS</FountainHeading>
      <ContentWrapper>
        <CardsWrapper>{cards}</CardsWrapper>
      </ContentWrapper>
    </Layout>
  );
};

export default AboutTemplate;
