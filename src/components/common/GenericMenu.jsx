import React, { Component } from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

class GenericMenu extends Component {
  render() {
    const { menus, submenus, submenuLabel, onSelect } = this.props;
    return (
      <Menu theme="dark" mode="horizontal">
        {menus.map((menu) => (
          <SubMenu
            key={menu.key}
            title={menu.label}
            icon={<UserOutlined style={{ fontSize: "20px" }} />}
          >
            {submenus.map((submenu) => (
              <Menu.Item key={submenu.id} onClick={() => onSelect(submenu)}>
                {submenu[submenuLabel]}
              </Menu.Item>
            ))}
          </SubMenu>
        ))}
      </Menu>
    );
  }
}

export default GenericMenu;
