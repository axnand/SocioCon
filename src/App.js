import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
import { RegisterPage } from "./pages/RegisterPage";

function App() {
  return (
    <Router>
       <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
