import React from 'react';
import styled from 'styled-components';
import theme from '../theme/Variable';

const AppFooter = props => (
  <Footer>
    <p>
      Powered by <a href="{ }">w3.css</a>
    </p>
  </Footer>
);

export default AppFooter;

const Footer = styled.footer`
  margin-top: 75px;
  padding: 32px 55px;
  color: ${theme.black};
  background-color: ${theme.light};

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

  p {
    float: right !important;

    a {
      color: ${theme.black};
    }
  }
`;
