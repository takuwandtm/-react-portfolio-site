import React from "react";
import { MenuItems } from "./MenuItems";
import { Nav } from "react-bootstrap";


export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
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
      <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </Nav>
  );
}
