// import logo from "./logo.svg";
import "./App.css";
import CartPage from "./components/Cartpage";
import MainPage from "./components/MainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    // {/* <MainPage /> */}
    // {/* <CartPage /> */}
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/add-to-cart" component={CartPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
