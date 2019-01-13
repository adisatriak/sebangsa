import styled from 'styled-components';
import theme from '../theme/Variable';

export default styled.h1`
  color: ${theme.primary};
  font-size: 48px !important;
  margin: 10px 0;

  &::after {
    width: 50px;
    content: ' ';
    display: block;
    border: 5px solid red;
    border-radius: 4px;
    margin: 20px 0;
  }
`;
