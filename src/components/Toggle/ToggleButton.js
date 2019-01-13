import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/Variable';

const ToggleButton = props => (
  <Button onClick={props.click}>
    <Burger />
    <Burger />
    <Burger />
  </Button>
);

export default ToggleButton;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

const Burger = styled.div`
  width: 30px;
  height: 2px;
  background: ${theme.white};
`;
