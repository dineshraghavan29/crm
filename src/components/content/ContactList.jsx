import React, { Component } from "react";
import { connect } from "react-redux";
import GenericList from "../common/GenericList";
import { setCurrentContact, openWindow } from "../../store/reducers/contacts";
import _ from "lodash";

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(windowType, contact) {
    if (_.isEmpty(this.props.contacts.currentUser) && windowType === "chat")
      return;
    this.props.setCurrentContact(contact);
    this.props.openWindow({ windowType: windowType });
    this.props.onSelect(windowType);
  }

  filterContacts() {
    return this.props.contacts.currentUser
      ? this.props.contacts.contacts.filter(
          (contact) => contact.id !== this.props.contacts.currentUser.id
        )
      : this.props.contacts.contacts;
  }

  render() {
    const contacts = this.filterContacts();
    return (
      <GenericList
        list={contacts}
        currentUser={this.props.contacts.currentUser}
        onSelect={this.handleSelect}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const { contacts, currentUser } = state;
  return { contacts, currentUser };
};

export default connect(mapStateToProps, { setCurrentContact, openWindow })(
  ContactList
);
