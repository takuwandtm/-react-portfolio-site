import React from "react";
import { MenuItems } from "./Navbar/MenuItems";
import { Nav } from "react-bootstrap";
import Menu from "./Menu";
import { FaReact } from 'react-icons/fa'

export const Header = () => {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo" ><FaReact color="white" size="4rem" /></h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index} href={item.url}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
      <Menu width={250} />
    </Nav>

  );
}
