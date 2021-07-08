import "./App.scss";
import Navigation from "./components/Navigation";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
};

export default App;
