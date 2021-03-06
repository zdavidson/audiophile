import "./BestGear.scss";
import Container from "react-bootstrap/Container";

const BestGear = () => {
  return (
    <Container>
      <div id="best-gear">
        <div id="best-gear-text">
          <h2>
            Bringing you the <span>best</span> audio gear
          </h2>
          <p>
            Located in the heart of New York City, Audiophile is the premiere
            destination for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom with luxury demonstration
            rooms available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <img
          id="best-gear-img"
          src="./assets/shared/image-best-gear.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default BestGear;
