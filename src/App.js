import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState } from "react";
import { CartView, Footer, MobileMenu, Navigation } from "./components/Shared";
import Home from "./components/Home/Home";
import CategoryContainer from "./components/Products/CategoryContainer";
import ProductDetailContainer from "./components/ProductDetail/ProductDetailContainer";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const [viewCart, setCartView] = useState(false);
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
        {viewCart && <CartView />}

        {isOpen && <MobileMenu />}

        <Route exact path="/" component={Home} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/headphones" component={CategoryContainer} />
        <Route exact path="/speakers" component={CategoryContainer} />
        <Route exact path="/earphones" component={CategoryContainer} />
        <Route
          exact
          path="/headphones/:name"
          render={(props) => <ProductDetailContainer {...props} />}
        />
        <Route
          exact
          path="/speakers/:name"
          render={(props) => <ProductDetailContainer {...props} />}
        />
        <Route
          exact
          path="/earphones/:name"
          render={(props) => <ProductDetailContainer {...props} />}
        />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
