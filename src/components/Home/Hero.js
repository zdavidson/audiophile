import "./Hero.scss";
import Button from "../Shared/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero-bg">
      <Container id="hero">
        <div id="hero-text">
          <h2>New Product</h2>
          <h1>XX99 Mark II Headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/headphones/xx99-mark-two-headphones">
            <Button />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
