import "./App.scss";
import Navigation from "./components/Shared/Navigation";
import Footer from "./components/Shared/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryContainer from "./components/Products/CategoryContainer";
import ProductDetailContainer from "./components/ProductDetail/ProductDetailContainer";
import CartView from "./components/Shared/Cart/CartView";
import { useState } from "react";
import Checkout from "./components/Checkout/Checkout";
import MobileMenu from "./components/Shared/MobileMenu";

const App = () => {
  const [viewCart, setCartView] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navigation
          viewCart={viewCart}
          setCartView={setCartView}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        {viewCart ? <CartView cartItems={cartItems} /> : <div></div>}

        {isOpen ? <MobileMenu setIsOpen={setIsOpen} /> : <div></div>}

        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/headphones" component={CategoryContainer} />
        <Route exact path="/speakers" component={CategoryContainer} />
        <Route exact path="/earphones" component={CategoryContainer} />
        <Route
          exact
          path="/headphones/:name"
          render={(props) => (
            <ProductDetailContainer {...props} setCartItems={setCartItems} />
          )}
        />
        <Route
          exact
          path="/speakers/:name"
          render={(routeProps) => (
            <ProductDetailContainer
              {...routeProps}
              setCartItems={setCartItems}
            />
          )}
        />
        <Route
          exact
          path="/earphones/:name"
          render={(routeProps) => (
            <ProductDetailContainer
              {...routeProps}
              setCartItems={setCartItems}
            />
          )}
        />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
