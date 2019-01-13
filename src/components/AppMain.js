import React from 'react';
import styled from 'styled-components';
import media from '../theme/Media';

import AppMainTitle from './AppMainTitle';
import AppMainImage from './AppMainImage';
import AppMainCard from './AppMainCard';
import AppMainTable from './AppMainTable';
import AppMainForm from './AppMainForm';

const AppMain = props => (
  <Main>
    <Container>
      <Row>
        <Column>
          <Header>Interior Design</Header>
          <AppMainTitle>Showcase.</AppMainTitle>
        </Column>
      </Row>

      <AppMainImage />

      <Row>
        <Column>
          <AppMainTitle>Services.</AppMainTitle>
          <p>
            We are a interior design service that focus on what's best for your
            home and what's best for you!
          </p>
          <p>
            Some text about our services - what we do and what we offer. We are
            lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Column>
      </Row>

      <Row>
        <Column>
          <AppMainTitle>Designer.</AppMainTitle>
          <p>The best team in the world.</p>
          <p>
            We are lorem ipsum consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <p>
            <b>Our designers are thoughtfully chosen:</b>
          </p>
        </Column>
      </Row>

      <AppMainCard />

      <Row>
        <Column>
          <AppMainTitle>Packages.</AppMainTitle>
          <p>
            Some text our prices. Lorem ipsum consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure
          </p>
        </Column>
      </Row>

      <AppMainTable />

      <Row>
        <Column>
          <AppMainTitle>Contact.</AppMainTitle>
          <p>
            Do you want us to style your home? Fill out the form and fill me in
            with the details :) We love meeting new people!
          </p>
        </Column>
      </Row>

      <AppMainForm />
    </Container>
  </Main>
);

export default AppMain;

const Main = styled.div`
  min-height: 100%;
  z-index: 800;
  margin-left: 340px;
  margin-right: 40px;

  ${media.desktop`margin-left: 0;margin-right: 0;`}
  ${media.phone`margin-top: 70px;`}
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

const Header = styled.h1`
  font-weight: bold;
  margin: 10px 0;
  font-size: 64px;
  color: #000;
`;

const Row = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 80px;
  ${media.phone`margin-top: 10px;`}
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;
