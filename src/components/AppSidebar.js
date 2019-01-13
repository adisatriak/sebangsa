import React from 'react';
import styled from 'styled-components';
import media from '../theme/Media';
import theme from '../theme/Variable';

const AppSidebar = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <Wrapper>
      <nav className={drawerClasses}>
        <Title>
          Company <br /> Name
        </Title>
        <Navigation>
          <Link href={''}>Home</Link>
          <Link href={''}>Showcase</Link>
          <Link href={''}>Services</Link>
          <Link href={''}>Designers</Link>
          <Link href={''}>Packages</Link>
          <Link href={''}>Contact</Link>
        </Navigation>
      </nav>
    </Wrapper>
  );
};

export default AppSidebar;

const Wrapper = styled.div`
  nav {
    display: block;
    background: ${theme.primary};
    position: fixed;
    top: 0;
    left: 0;
    padding: 30px 20px 20px 20px;
    min-height: 100%;
    width: 300px;
    color: ${theme.white};
    z-index: 200;
    -webkit-transition: -webkit-transform 0.3s ease-in-out,
      width 0.3s ease-in-out;
    -moz-transition: -moz-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    -o-transition: -o-transform 0.3s ease-in-out, width 0.3s ease-in-out;
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
    ${media.tablet`transform: translateX(-100%);`}
    ${media.phone`transform: translateX(-100%);`}

    &.open {
      transform: translateX(0);
    }
  }
`;

const Title = styled.h3`
  padding: 64px 16px;
  font-weight: 600;
  font-size: 24px;
`;

const Navigation = styled.div``;

const Link = styled.a`
  width: 100%;
  display: block;
  padding: 8px 16px;
  text-align: left;
  border: none;
  white-space: normal;
  float: none;
  outline: 0;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  user-select: none;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${theme.white};
    color: ${theme.black};
  }
`;
