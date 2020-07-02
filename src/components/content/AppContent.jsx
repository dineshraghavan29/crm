import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import { connect } from "react-redux";
import ContactList from "./ContactList";
import ChatWindow from "./ChatWindow";
import ContactInfo from "./ContactInfo";
import { v4 as uuidv4 } from "uuid";

const { Content } = Layout;

class AppContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatWindowId: "",
    };
    this.handleAction = this.handleAction.bind(this);
  }

  handleAction(action) {
    this.setState((state, props) => ({
      chatWindowId: uuidv4(),
    }));
  }

  render() {
    const innerheight = window.innerHeight;
    return (
      <Content style={{ padding: "30px 50px", height: innerheight }}>
        <Row gutter={16}>
          <Col className="gutter-row" span={12}>
            <ContactList onSelect={this.handleAction} />
          </Col>
          <Col className="gutter-row" span={12}>
            {this.props.showContactInfo && (
              <ContactInfo key={this.state.chatWindowId} />
            )}
            {this.props.showChatWindow && (
              <ChatWindow key={this.state.chatWindowId} />
            )}
          </Col>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser, showChatWindow, showContactInfo } = state.contacts;
  return { currentUser, showChatWindow, showContactInfo };
};

export default connect(mapStateToProps)(AppContent);
