import "./App.scss";
import Navigation from "./components/Shared/Navigation";
import Footer from "./components/Shared/Footer";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoryContainer from "./components/Products/CategoryContainer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/headphones" component={CategoryContainer} />
        <Route exact path="/speakers" component={CategoryContainer} />
        <Route exact path="/earphones" component={CategoryContainer} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
