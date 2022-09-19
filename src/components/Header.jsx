import { Nav } from "react-bootstrap";
export const Header = () => {
  const componentName = () => 'Header';
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">React</h1>
      <div className="menu-icon"></div>
      <ul>
        <li><a href="#"></a></li>
      </ul>
    </Nav>
  );
};
