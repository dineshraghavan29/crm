import React, { Component } from "react";
import GenericMenu from "../common/GenericMenu";
import { connect } from "react-redux";
import { login } from "../../store/reducers/contacts";

class ContactMenu extends Component {
  constructor() {
    super();
    this.state = { loggedUser: "Login" };
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleLogIn(user) {
    this.setState({ loggedUser: user.firstName });
    this.props.login(user);
  }

  render() {
    const menus = [{ key: "1", label: this.state.loggedUser }];
    return (
      <GenericMenu
        menus={menus}
        submenus={this.props.contacts.contacts}
        submenuLabel="firstName"
        onSelect={this.handleLogIn}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { contacts, currentUser } = state;
  return { contacts, currentUser };
};

export default connect(mapStateToProps, { login })(ContactMenu);
