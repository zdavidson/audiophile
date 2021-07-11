import Headphones from "./Headphones";
import Speakers from "./Speakers";
import Earphones from "./Earphones";
import { Route } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import BestGear from "../Shared/BestGear";
import ProductCategories from "../Shared/ProductCategories";
import Container from "react-bootstrap/Container";

const CategoryContainer = (props) => {
  const path = props.match.path;

  return (
    <div>
      <CategoryHeader path={path} />
      <Container>
        <Route exact path="/headphones" component={Headphones}></Route>
        <Route exact path="/speakers" component={Speakers}></Route>
        <Route exact path="/earphones" component={Earphones}></Route>
        <ProductCategories />
      </Container>
      <BestGear />
    </div>
  );
};

export default CategoryContainer;
