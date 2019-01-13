import React from 'react';
import styled from 'styled-components';
import theme from '../theme/Variable';
import media from '../theme/Media';

const AppMainCard = props => (
  <Row>
    <Column>
      <Card>
        <Image src="https://www.w3schools.com/w3images/team2.jpg" alt="" />
        <Content>
          <Name>John Doe</Name>
          <Title>CEO & Founder</Title>
          <Description>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </Description>
        </Content>
      </Card>
    </Column>

    <Column>
      <Card>
        <Image src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
        <Content>
          <Name>Jane Doe</Name>
          <Title>Designer</Title>
          <Description>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </Description>
        </Content>
      </Card>
    </Column>

    <Column>
      <Card>
        <Image src="https://www.w3schools.com/w3images/team3.jpg" alt="" />
        <Content>
          <Name>Mike Ross</Name>
          <Title>Architect</Title>
          <Description>
            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
            sodales pellentesque elementum.
          </Description>
        </Content>
      </Card>
    </Column>
  </Row>
);

export default AppMainCard;

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
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;

  ${media.phone`-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;`}
`;

const Card = styled.div`
  color: ${theme.black};
  background-color: ${theme.light};

  ${media.phone`margin-bottom: 1rem;`}
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`;

const Content = styled.div`
  padding: 1em;
`;

const Name = styled.h3`
  font-size: 24px;
  margin: 10px 0;
`;

const Title = styled.p`
  opacity: 0.6;
`;

const Description = styled.p``;
