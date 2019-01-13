import React from 'react';
import styled from 'styled-components';
import theme from '../theme/Variable';
import media from '../theme/Media';

import ToggleButton from './Toggle/ToggleButton';

const AppHeader = props => (
  <Navigation>
    <Link>
      <ToggleButton click={props.drawerClickHandler} />
    </Link>
    <Title>Company Name</Title>
  </Navigation>
);

export default AppHeader;

const Navigation = styled.header`
  display: none;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: 8px 16px;
  background: ${theme.primary};
  color: ${theme.white};
  top: 0;

  &::before {
    content: '';
    display: table;
    clear: both;
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  ${media.tablet`display: block;`}
  ${media.phone`display: block;`}
`;

const Link = styled.a`
  color: ${theme.white};
  background: ${theme.primary};
  margin-right: 16px;
  border: none;
  font-size: 24px;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
`;

const Title = styled.span`
  font-size: 24px;
  vertical-align: middle;
`;
