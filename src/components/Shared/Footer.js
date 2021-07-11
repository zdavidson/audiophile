import "./Footer.scss";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <div id="orange-bar"></div>
        <div id="footer-container">
          <div id="footer-text">
            <NavBar.Brand id="footer-logo" href="#home">
              <NavLink to="/">
                <img src="./assets/shared/logo.svg" alt="logo" />
              </NavLink>
            </NavBar.Brand>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          <div id="footer-links">
            <NavBar>
              <Nav id="footer-nav" className="nav-links">
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
            </NavBar>
            <div id="social-links">
              <a href="/" alt="" className="social-link">
                <img
                  src="./assets/shared/icon-facebook.svg"
                  alt="facebook-link"
                />
              </a>
              <a href="/" alt="" className="social-link">
                <img
                  src="./assets/shared/icon-twitter.svg"
                  alt="twitter-link"
                />
              </a>
              <a href="/" alt="" className="social-link">
                <img
                  src="./assets/shared/icon-instagram.svg"
                  alt="instagram-link"
                />
              </a>
            </div>
          </div>
        </div>
        <p>Copyright 2021. All Rights Reserved</p>
      </Container>
    </div>
  );
};

export default Footer;
