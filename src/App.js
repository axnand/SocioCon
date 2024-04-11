import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import SigninPage from "./pages/signin";
<<<<<<< HEAD
import { RegisterPage } from "./pages/RegisterPage";
=======
import { GoogleOAuthProvider } from '@react-oauth/google';
>>>>>>> c98d4acc9bb614d2367f10ed57e98568b6b8338f

function App() {
  return (
    <GoogleOAuthProvider clientId="361860959019-dke2kqtfqg095g2c41q75g06raebr8ln.apps.googleusercontent.com">
    <Router>
       <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
