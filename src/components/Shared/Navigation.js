import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = ({ viewCart, setCartView, isOpen, setIsOpen }) => {
  const { cartCount } = useSelector((state) => state.cartCount);
  return (
    <div className="navigation">
      <Container>
        <NavBar id="nav-bar">
          <div
            id="hamburger-icon"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          ></div>

          <NavLink id="logo" to="/">
            <img src="./assets/shared/logo.svg" alt="logo" />
          </NavLink>

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
          <button
            id="cart-icon"
            onClick={() => setCartView(!viewCart)}
            className="navigation-link"
            to="/"
          >
            <img src="./assets/shared/icon-cart.svg" alt="cart" /> ({cartCount})
          </button>
        </NavBar>
      </Container>
    </div>
  );
};

export default Navigation;
