import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import AppSidebar from './components/AppSidebar';
import AppMain from './components/AppMain';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import Backdrop from './components/Toggle/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <React.Fragment>
        <GlobalStyle />
        <AppHeader drawerClickHandler={this.drawerToggleClickHandler} />
        <AppSidebar show={this.state.sideDrawerOpen} />
        {backdrop}
        <AppMain />
        <AppFooter />
      </React.Fragment>
    );
  }
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }

  html {
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
  box-sizing: inherit;
  }
`;
