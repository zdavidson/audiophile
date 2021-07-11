import "./App.scss";
import Navigation from "./components/Shared/Navigation";
import Footer from "./components/Shared/Footer";
import Home from "./components/Home/Home";
import Headphones from "./components/Products/Headphones";
import Speakers from "./components/Products/Speakers";
import Earphones from "./components/Products/Earphones";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/headphones" component={Headphones} />
        <Route exact path="/speakers" component={Speakers} />
        <Route exact path="/earphones" component={Earphones} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
