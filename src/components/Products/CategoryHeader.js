import "./CategoryHeader.scss";
import Container from "react-bootstrap/Container";

const CategoryHeader = ({ path }) => {
  const cleanPath = path.slice(1);

  return (
    <div id="category-header">
      <Container id="header-container">
        <h1>{cleanPath}</h1>
      </Container>
    </div>
  );
};

export default CategoryHeader;
