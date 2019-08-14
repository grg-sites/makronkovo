import React from 'react';

import styled from '@emotion/styled';
import { Link } from 'gatsby';
import theme from '../../utils/theme/theme';
import { mobileQuery, tabletQuery } from '../../utils/mediaqueries';

const StyledLink = styled(Link)(
  {
    textDecoration: 'none',
    color: theme.colors.mediumGold,
    fontSize: theme.fontSizes.small,

    [mobileQuery]: {
      fontSize: theme.fontSizes.medium,
      marginBottom: '17px',
    },

    [tabletQuery]: {
      fontSize: theme.fontSizes.medium,
      marginBottom: '25px',
    },
<<<<<<< HEAD

    '&:active': {
      color: theme.colors.lightPink,
    },
=======
>>>>>>> 19b88fa42acabf867b086cfe6451e74ccbe1e8d7
  },
  props => ({
    [mobileQuery]: {
      marginTop: props.marginTop,
    },

    [tabletQuery]: {
      marginTop: props.marginTop,
    },
  }),
);

const NavLink = ({ marginTop, children, to, ...rest }) => (
  <StyledLink marginTop={marginTop} to={to} {...rest}>
    {children}
  </StyledLink>
);

export default NavLink;
