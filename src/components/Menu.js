import React from "react";
import { MenuItems } from "./Navbar/MenuItems";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props} className="burger-menu">
      {MenuItems.map((item) => {
        return (
          <a className="menu-item" href={item.url}>
            {item.Title}
          </a>

        );
      })}
    </Menu>
  );
};
