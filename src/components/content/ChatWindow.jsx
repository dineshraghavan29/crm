import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { addMessage, getMessages } from "../../store/reducers/messages";
import { scrollBottom } from "./../../utils/util";

class ChatWindow extends Component {
  constructor(props) {
    super(props);
    this.handleAddMessage = this.handleAddMessage.bind(this);
  }

  formRef = React.createRef();
  messageRef = React.createRef();

  componentDidMount() {
    this.messageRef.current.focus();
  }

  handleAddMessage(values, form) {
    if (values.message === null || values.message === "") return;
    const { currentUser, selectedContact } = this.props;
    this.props.addMessage({
      message: values.message,
      userId: currentUser.id,
      contactId: selectedContact.id,
    });
    this.formRef.current.resetFields();
    scrollBottom("chat-window");
    this.messageRef.current.focus();
  }

  render() {
    const {
      messages,
      currentUser: user,
      selectedContact: contact,
    } = this.props;
    return (
      <>
        <div>
          <div className="chat-header">
            {contact.firstName} {contact.lastName}
          </div>
          <div id="chat-window">
            <ul className="chat-list">
              {messages.length >= 0 &&
                messages.map((message) =>
                  message.from === user.id ? (
                    <li className="message-from" key={message.id}>
                      {message.message}
                    </li>
                  ) : (
                    <li className="message-to" key={message.id}>
                      {message.message}
                    </li>
                  )
                )}
            </ul>
          </div>
        </div>
        <div className="chat-form">
          <Form
            name="basic"
            ref={this.formRef}
            initialValues={{ remember: true }}
            onFinish={this.handleAddMessage}
          >
            <Form.Item name="message">
              <Input
                ref={this.messageRef}
                addonAfter={
                  <Button type="primary" htmlType="submit">
                    <SendOutlined />
                  </Button>
                }
              />
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser, selectedContact } = state.contacts;
  const messages = getMessages(state, currentUser.id, selectedContact.id);
  return { currentUser, selectedContact, messages };
};

export default connect(mapStateToProps, { addMessage })(ChatWindow);
