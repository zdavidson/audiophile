import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Container>
        <NavBar id="nav-bar">
          <NavBar.Brand id="brand" href="#home">
            <img src="./assets/shared/logo.svg" alt="logo" />
          </NavBar.Brand>

          <Nav id="nav-links" className="nav-links">
            <NavLink className="navigation-link" to="/">
              Home
            </NavLink>
            <NavLink className="navigation-link" to="/headphones">
              Headphones
            </NavLink>
            <NavLink className="navigation-link" to="/speakers">
              Speakers
            </NavLink>
            <NavLink className="navigation-link" to="/earphones">
              Earphones
            </NavLink>
          </Nav>
          <NavLink className="navigation-link" to="/">
            <img src="./assets/shared/icon-cart.svg" alt="cart" />
          </NavLink>
          <span id="hamburger-icon"></span>
        </NavBar>
      </Container>
    </div>
  );
};

export default Navigation;
