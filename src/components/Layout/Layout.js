import React, { Component } from 'react';
import Toolbar from './../Toolbar/Toolbar';
import SideDrawer from './../Toolbar/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showDrawer: false,
  };

  showDrawerHandler = () => {
    this.setState((prevState) => {
      return {
        showDrawer: !prevState.showDrawer,
      };
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          clicked={this.showDrawerHandler}
          show={this.state.showDrawer}
        />
        <SideDrawer show={this.state.showDrawer} />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
