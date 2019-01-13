import React from 'react';
import styled from 'styled-components';
import media from '../theme/Media';

const AppGallery = props => (
  <Row>
    <Column>
      <img
        src="https://www.w3schools.com/w3images/kitchenconcrete.jpg"
        alt=""
      />
    </Column>
    <Column>
      <img src="https://www.w3schools.com/w3images/atrium.jpg" alt="" />
    </Column>
    <Column>
      <img src="https://www.w3schools.com/w3images/livingroom.jpg" alt="" />
    </Column>
    <Column>
      <img src="https://www.w3schools.com/w3images/bedroom.jpg" alt="" />
    </Column>
    <Column>
      <img src="https://www.w3schools.com/w3images/diningroom.jpg" alt="" />
    </Column>
    <Column>
      <img src="https://www.w3schools.com/w3images/livingroom2.jpg" alt="" />
    </Column>
  </Row>
);

export default AppGallery;

const Row = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 10px;
  padding-left: 10px;

  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;

  ${media.phone`-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;`}

  img {
    max-width: 100%;
    height: auto;
    width: 100%;
    margin-top: 16px;
    opacity: 0.8;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`;
