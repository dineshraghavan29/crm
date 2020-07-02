import React from "react";
import { connect } from "react-redux";
import { Avatar, Divider, Typography } from "antd";
import { getInitials } from "../../utils/util";

const { Title } = Typography;

function ContactInfo(props) {
  const contact = props.selectedContact;
  return (
    <div className="contact-window">
      <Avatar size={100} className="contact-info-avatar">
        {getInitials(contact.firstName, contact.lastName)}
      </Avatar>
      <Title level={2}>
        {contact.firstName} {contact.lastName}
      </Title>
      <Divider orientation="left">Full Name</Divider>
      <p className="contact-info-list">
        {contact.firstName} {contact.lastName}
      </p>
      <Divider orientation="left">Company</Divider>
      <p className="contact-info-list">{contact.company}</p>
      <Divider orientation="left">Email</Divider>
      <p className="contact-info-list">{contact.email}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { selectedContact } = state.contacts;
  return { selectedContact };
};

export default connect(mapStateToProps)(ContactInfo);
