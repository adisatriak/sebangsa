import React from 'react';
import styled from 'styled-components';
import theme from '../theme/Variable';
import media from '../theme/Media';

const AppMainTable = props => (
  <Row>
    <Column>
      <Table>
        <List>Basic</List>
        <List>Floorplaning</List>
        <List>10 hours support</List>
        <List>Photography</List>
        <List>20% furniture discount</List>
        <List>Good deals</List>
        <List>
          <Price>$ 199</Price>
          <Room>per room</Room>
        </List>
        <List>
          <Button>Sign Up</Button>
        </List>
      </Table>
    </Column>

    <Column>
      <Table>
        <List primary>Pro</List>
        <List>Floorplaning</List>
        <List>10 hours support</List>
        <List>Photography</List>
        <List>20% furniture discount</List>
        <List>Good deals</List>
        <List>
          <Price>$ 199</Price>
          <Room>per room</Room>
        </List>
        <List>
          <Button primary>Sign Up</Button>
        </List>
      </Table>
    </Column>
  </Row>
);

export default AppMainTable;

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
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;

  ${media.phone`-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;`}
`;

const Table = styled.ul`
  color: ${theme.black};
  background-color: ${theme.light};
  text-align: center !important;
  list-style-type: none;
  padding: 0;
  margin: 0;

  ${media.phone`margin-bottom: 1rem;`}
`;

const List = styled.li`
  padding: 16px;
  border-bottom: 1px solid #ddd;

  &:first-child {
    padding: 32px 16px;
    color: ${theme.white};
    font-size: 24px;
    background: ${props => (props.primary ? theme.primary : theme.dark)};
  }
`;

const Price = styled.h1``;

const Room = styled.span`
  opacity: 0.6;
`;

const Button = styled.button`
  padding: 12px 24px !important;
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => (props.primary ? theme.primary : theme.white)};
  color: ${props => (props.primary ? theme.white : theme.black)};
  font: inherit;

  &:hover {
    background: ${theme.black};
    color: ${theme.white};
  }
`;
