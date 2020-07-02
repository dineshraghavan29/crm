import React, { Component } from "react";
import { List, Skeleton, Avatar } from "antd";
import _ from "lodash";
import { getInitials } from "../../utils/util";
import { InfoCircleOutlined, MessageOutlined } from "@ant-design/icons";

class GenericList extends Component {
  render() {
    const { list, onSelect, currentUser } = this.props;
    return (
      <List
        className="list"
        itemLayout="horizontal"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="info" onClick={() => onSelect("info", item)}>
                <InfoCircleOutlined style={{ fontSize: "20px" }} />
              </a>,
              !_.isEmpty(currentUser) && (
                <a key="chat" onClick={() => onSelect("chat", item)}>
                  <MessageOutlined style={{ fontSize: "20px" }} />
                </a>
              ),
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar
                    size="large"
                    style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
                  >
                    {getInitials(item.firstName, item.lastName)}
                  </Avatar>
                }
                title={item.firstName}
                description={item.email}
              />
              <div>{item.company}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

export default GenericList;
