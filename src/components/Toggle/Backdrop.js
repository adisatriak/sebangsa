import React from 'react';
import styled from 'styled-components';
import media from '../../theme/Media';

const backdrop = props => <Backdrop onClick={props.click} />;

export default backdrop;

const Backdrop = styled.div`
  ${media.phone`
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 100;
    top: 0;
  `}
`;
