import React, { Component } from "react";
import { Layout } from "antd";
import ContactMenu from "./ContactMenu";

const { Header } = Layout;

class AppHeader extends Component {
  render() {
    return (
      <Header>
        <div className="logo" />
        <ContactMenu />
      </Header>
    );
  }
}

export default AppHeader;
